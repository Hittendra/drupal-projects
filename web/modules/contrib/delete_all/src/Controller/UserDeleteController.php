<?php

namespace Drupal\delete_all\Controller;

/**
 * Returns responses for devel module routes.
 */
class UserDeleteController extends DeleteControllerBase {

  /**
   * Get uids of the users to delete.
   *
   * @param array $roles
   *   Array of roles.
   *
   * @return array
   *   Array of uids of users to delete.
   */
  public function getUserToDelete(array $roles = NULL) {
    $users_to_delete = [];

    // Get the uids of users to delete by role.
    if ($roles !== NULL) {
      foreach ($roles as $role) {
        if (isset($role) && !empty($role)) {
          $uids = $this->connection->select('user__roles', 'ur')
            ->fields('ur', ['entity_id'])
            ->condition('roles_target_id', $role)
            ->execute()
            ->fetchCol('uid');

          $users_to_delete = array_merge($users_to_delete, $uids);

          // Exclude anonymous users and root.
          $users_to_delete = array_diff($users_to_delete, [0, 1]);
        }
      }
    }
    // Delete all users if roles are not provided.
    else {
      $users_to_delete = NULL;
    }

    return $users_to_delete;
  }

  /**
   * Returns the batch definition.
   *
   * @param array $users_to_delete
   *   Users to delete.
   *
   * @return array
   *   Batch definition.
   */
  public function getUserDeleteBatch(array $users_to_delete = NULL) {
    // Define batch.
    $batch = [
      'operations' => [
        ['delete_all_users_batch_delete', [$users_to_delete]],
      ],
      'finished' => 'delete_all_users_batch_delete_finished',
      'title' => $this->t('Deleting users'),
      'init_message' => $this->t('User deletion is starting.'),
      'progress_message' => $this->t('Deleting users...'),
      'error_message' => $this->t('User deletion has encountered an error.'),
    ];

    return $batch;
  }

}
