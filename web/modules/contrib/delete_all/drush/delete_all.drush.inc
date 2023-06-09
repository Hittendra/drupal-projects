<?php

/**
 * @file
 * Delete all Drush command.
 */

use Drupal\delete_all\Controller\UserDeleteController;
use Drupal\delete_all\Controller\ContentDeleteController;
use Drupal\delete_all\Controller\EntityDeleteController;

/**
 * Implements hook_drush_command().
 *
 * Delete-all-delete-user (dadu)
 *   - Command to delete users.
 *   - "--roles" is an optional parameter here and provides the option to delete
 *       all users of a role specified in the command.
 *   - Following are the possible ways to use the command:
 *     1. `drush dadu`
 *          - Deletes all users.
 *     2. `drush dadu --role`
 *          - User can choose one of the roles from the options given. All users
 *            with that role will be deleted.
 *     3. `drush dadu --role role_1,role_2,role_3`
 *          - All users with either of the given roles will be deleted.
 *            Please note that Role names can have black spaces between them,
 *            but two roles should be separed only by a 'comma' without any
 *            space before or after the comma.
 *
 * delete-all-delete-content (dadc)
 *   - Command to delete content. *
 *   - "--type" is an optional parameter here and provides the option to delete
 *       all contents of a type specified in the command. *
 *   - Following are the possible ways to use the command: *
 *     1. `drush dadc`
 *          - Deletes all content of all types.
 *     2. `drush dadc --type`
 *          - User can choose one of the content type from the options given.
 *            All content of that type will be deleted.
 *     3. `drush dadc --type type_1,type_2,type_3`
 *          - All content with either of the given types will be deleted.
 *            Please note that machine name of the content type must be
 *            provided. Two content types should be separed only by a 'comma'
 *            without any space before or after the comma.
 *
 * delete-all-delete-entities (dade)
 *   - Command to delete entities. *
 *   - "--type" is an optional parameter here and provides the option to delete
 *       all entities of a type specified in the command. *
 *   - Following are the possible ways to use the command: *
 *     1. `drush dade`
 *          - User can choose one of the entity types from the options given.
 *            After selecting an entity type, a bundle select option will appear
 *            Options to delete all or cancel also exists. All entities of that
 *            type and bundle will be deleted after confirmation
 *
 *     2. `drush dade --type type_1
 *          - All entities with the given type will be deleted.
 *            Please note that machine name of the entity type must be
 *            provided. Unlike the delete users and delete content options, this
 *            does not work with multiple entity types in the same command. *
 *
 *     2. `drush dade --type entity_type --bundle bundle_type
 *          - All entities with the given type will be deleted.
 *            Please note that machine name of the entity type must be
 *            provided. Unlike the delete users and delete content options, this
 *            does not work with multiple entity types in the same command.
 */
function delete_all_drush_command() {
  $items = [];

  $items['delete-all-delete-users'] = [
    'description' => 'Delete users.',
    'options' => [
  // List of roles should be comma separated.
      'role' => 'pick roles',
    ],
    'examples' => [
      'drush delete-all-delete-users' => 'Delete all users.',
    ],
    'aliases' => ['dadu'],
  ];

  $items['delete-all-delete-content'] = [
    'description' => 'Delete content.',
    'options' => [
      'type' => 'pick content type',
    ],
    'examples' => [
      'drush delete-all-delete-content' => 'Delete content.',
    ],
    'aliases' => ['dadc'],
  ];

  $items['delete-all-delete-entities'] = [
    'description' => 'Delete entities.',
    'options' => [
      'type' => 'pick entity type',
      'bundle' => 'pick entity bundle',
    ],
    'examples' => [
      'drush delete-all-delete-entities ' => 'Delete entities.',
    ],
    'aliases' => ['dade'],
  ];
  return $items;
}

/**
 * Drush callback to delete users.
 */
function drush_delete_all_delete_users() {
  // Initialize $roles as NULL to specify that all users should be deleted.
  // This will be overriden if user provides/choses a role.
  $input_roles = NULL;

  $deleteUser = new UserDeleteController();

  // Check for presence of '--roles' in drush command.
  if (drush_get_option('role')) {
    // func_get_args collects all keywords separated by space in an array.
    // To get the roles, we join all the keywords in a string and then use
    // 'comma' to separate them.
    $types = func_get_args();
    if ($types) {
      $input_roles = implode(' ', $types);
      if (strpos($input_roles, ',')) {
        $input_roles = explode(',', $input_roles);
      }
      else {
        $input_roles = [$input_roles];
      }
    }
    else {
      $choices = [];
      // Output all roles on screen and ask user to choose one.
      $roles = user_roles();
      foreach ($roles as $key => $value) {
        $choices[$key] = $value->label();
      }
      $role = drush_choice($choices, dt("Choose a role to delete."));

      // Return if no role is chosen.
      if ($role === 0 || $role === FALSE) {
        drush_user_abort();
        return;
      }
      $input_roles = [$role];
    }
  }

  if (drush_confirm('Are you sure you want to delete the users?')) {
    // Get users to delete.
    $users_to_delete = $deleteUser->getUserToDelete($input_roles);

    // Get batch array.
    $batch = $deleteUser->getUserDeleteBatch($users_to_delete);

    // Initialize the batch.
    batch_set($batch);

    // Start the batch process.
    drush_backend_batch_process();
  }
  else {
    drush_user_abort();
  }
}

/**
 * Drush callback to delete content.
 */
function drush_delete_all_delete_content() {
  // Initialize $content_type_options as FALSE to specify that all
  // content of all types should be deleted.
  // This will be overriden if user provides/choses a content type.
  $content_type_options = FALSE;

  $deleteContent = new ContentDeleteController();

  // Check for presence of '--type' in drush command.
  if (drush_get_option('type')) {
    // func_get_args() collects all keywords separated by space in an array.
    // To get the content types, we join all the keywords in a string and then
    // use 'comma' to separate them.
    $types = func_get_args();
    if ($types) {
      $content_types = implode(' ', $types);
      if (strpos($content_types, ',')) {
        $content_type_options = explode(',', $content_types);
      }
      else {
        $content_type_options = [$content_types];
      }
    }
    // Output all content types on screen and ask user to choose one.
    else {
      $content_type_options = [];
      $content_types = \Drupal::entityTypeManager()->getStorage('node_type')->loadMultiple();

      foreach ($content_types as $content_type_machine_name => $content_type) {
        $choices[$content_type_machine_name] = $content_type->label();
      }

      $content_type_options = drush_choice($choices, dt("Choose a content type to delete. All contents of this"));

      // Return if no role is chosen.
      if ($content_type_options === 0 || $content_type_options === FALSE) {
        drush_user_abort();
        return;
      }
      $content_type_options = [$content_type_options];
    }
  }

  if (drush_confirm('Are you sure you want to delete the nodes?')) {
    // Get nodes to delete.
    $nodes_to_delete = $deleteContent->getContentToDelete($content_type_options);

    // Get batch array.
    $batch = $deleteContent->getContentDeleteBatch($nodes_to_delete);

    // Initialize the batch.
    batch_set($batch);

    // Start the batch process.
    drush_backend_batch_process();
  }
  else {
    drush_user_abort();
  }
}

/**
 * Drush callback to delete entities.
 */
function drush_delete_all_delete_entities() {
  // Get complete list of content entity types.
  $entities_info = [];
  $entities_info_extended = [];

  $entity_type_options = FALSE;
  $bundle_type_options = FALSE;

  foreach (\Drupal::entityTypeManager()->getDefinitions() as $id => $definition) {

    if (is_a($definition, 'Drupal\Core\Entity\ContentEntityType')) {
      $entities_info[$id] = $definition->getLabel();

      $entities_info_extended[$id] = [
        'label' => $definition->getLabel(),
        'entity_key_id' => $definition->getKeys()['id'],
        'entity_bundle' => $definition->getKeys()['bundle'],
      ];
    }
  }

  $deleteEntity = new EntityDeleteController();

  // Get variables.
  $vars = func_get_args();

  // Check for presence of '--type' in drush command.
  if (drush_get_option('type')) {

    if ($vars && isset($vars[0])) {
      $entity_type_options = $vars[0];

      if (!in_array($entity_type_options, array_keys($entities_info))) {
        drush_set_error('Please select a valid entity type');
        return;
      }
    }
  }

  if (!$entity_type_options) {

    $entity_type_options = drush_choice($entities_info, dt("Choose an entity type to delete. All items of this"));

    // Return if no entity is chosen or entity invalid.
    if (!in_array($entity_type_options, array_keys($entities_info))) {
      return;
    }
  }

  $bundles_info = ['all' => 'All'];
  $bundle_definitions = \Drupal::service('entity_type.bundle.info')->getAllBundleInfo($entity_type_options);

  if ($bundle_definitions) {
    foreach ($bundle_definitions as $id => $definition) {
      $bundles_info[$id] = $definition['label'];
    }

    // Check for presence of '--bundle' in drush command.
    if (drush_get_option('bundle')) {

      if ($vars && isset($vars[1])) {

        $bundle_type_options = $vars[1];

        if (!in_array($bundle_type_options, array_keys($bundles_info))) {
          drush_set_error('Please select a valid bundle type');
          return;
        }

      }
    }

    if (!$bundle_type_options) {

      $bundle_type_options = drush_choice($bundles_info, dt("Choose bundle type to delete. All items of this"));

      if (!$bundle_type_options) {
        return;
      }
      // Delete all if bundle is All.
      if ($bundle_type_options == 'all') {
        $bundle_type_options = FALSE;
      }
    }
  }

  if (drush_confirm('Are you sure you want to delete the entities?')) {

    // Get entities to delete.
    $entities_to_delete = $deleteEntity->getEntitiesToDelete($entity_type_options, $bundle_type_options, $entities_info_extended);

    if ($entity_type_options == 'user') {
      $entities_to_delete = array_diff($entities_to_delete, [0, 1]);
    }

    // Get batch array.
    $batch = $deleteEntity->getEntitiesDeleteBatch($entities_to_delete, $entity_type_options);

    // Initialize the batch.
    batch_set($batch);

    // Start the batch process.
    drush_backend_batch_process();

  }
  else {
    drush_user_abort();
  }

}
