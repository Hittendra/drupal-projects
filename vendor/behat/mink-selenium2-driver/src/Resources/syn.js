/**
 * Syn - 0.0.3
 *
 * @copyright 2014 Bitovi
 * Mon, 30 Jun 2014 22:44:59 GMT
 * @license MIT
 */
!function(window){var __m2=function(){var a,b,c,d,e=window.Syn?window.Syn:{},f=function(a,b){var c;for(c in b)a[c]=b[c];return a},g={msie:!(!window.attachEvent||window.opera),opera:!!window.opera,webkit:navigator.userAgent.indexOf("AppleWebKit/")>-1,safari:navigator.userAgent.indexOf("AppleWebKit/")>-1&&-1===navigator.userAgent.indexOf("Chrome/"),gecko:navigator.userAgent.indexOf("Gecko")>-1,mobilesafari:!!navigator.userAgent.match(/Apple.*Mobile.*Safari/),rhino:navigator.userAgent.match(/Rhino/)&&!0},h=function(a,b,c){var d=c.ownerDocument.createEventObject();return f(d,b)},i={},j=1,k="_synthetic"+(new Date).getTime(),l=/keypress|keyup|keydown/,m=/load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll/,n=function(a,b,c,d){return new n.init(a,b,c,d)};n.config=e,n.__tryFocus=function(a){try{a.focus()}catch(b){}},a=function(a,b,c){return a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)},b=function(a,b,c){return a.addEventListener?a.removeEventListener(b,c,!1):a.detachEvent("on"+b,c)},c=n.config.schedule||function(a,b){setTimeout(a,b)},f(n,{init:function(a,b,c,d){var e=n.args(b,c,d),f=this;this.queue=[],this.element=e.element,"function"==typeof this[a]?this[a](e.options,e.element,function(){e.callback&&e.callback.apply(f,arguments),f.done.apply(f,arguments)}):(this.result=n.trigger(a,e.options,e.element),e.callback&&e.callback.call(this,e.element,this.result))},jquery:function(a){return window.FuncUnit&&window.FuncUnit.jQuery?window.FuncUnit.jQuery:a?n.helpers.getWindow(a).jQuery||window.jQuery:window.jQuery},args:function(){for(var a={},b=0;b<arguments.length;b++)"function"==typeof arguments[b]?a.callback=arguments[b]:arguments[b]&&arguments[b].jquery?a.element=arguments[b][0]:arguments[b]&&arguments[b].nodeName?a.element=arguments[b]:a.options&&"string"==typeof arguments[b]?a.element=document.getElementById(arguments[b]):arguments[b]&&(a.options=arguments[b]);return a},click:function(a,b,c){n("click!",a,b,c)},defaults:{focus:function r(){if(!n.support.focusChanges){var c=this,d=c.nodeName.toLowerCase();n.data(c,"syntheticvalue",c.value),("input"===d||"textarea"===d)&&a(c,"blur",function(){n.data(c,"syntheticvalue")!==c.value&&n.trigger("change",{},c),b(c,"blur",r)})}},submit:function(){n.onParents(this,function(a){return"form"===a.nodeName.toLowerCase()?(a.submit(),!1):void 0})}},changeOnBlur:function(c,d,e){a(c,"blur",function f(){e!==c[d]&&n.trigger("change",{},c),b(c,"blur",f)})},closest:function(a,b){for(;a&&a.nodeName.toLowerCase()!==b.toLowerCase();)a=a.parentNode;return a},data:function(a,b,c){var d;return a[k]||(a[k]=j++),i[a[k]]||(i[a[k]]={}),d=i[a[k]],c?void(i[a[k]][b]=c):i[a[k]][b]},onParents:function(a,b){for(var c;a&&c!==!1;)c=b(a),a=a.parentNode;return a},focusable:/^(a|area|frame|iframe|label|input|select|textarea|button|html|object)$/i,isFocusable:function(a){var b;return a.getAttributeNode&&(b=a.getAttributeNode("tabIndex")),this.focusable.test(a.nodeName)||b&&b.specified&&n.isVisible(a)},isVisible:function(a){return a.offsetWidth&&a.offsetHeight||a.clientWidth&&a.clientHeight},tabIndex:function(a){var b=a.getAttributeNode("tabIndex");return b&&b.specified&&(parseInt(a.getAttribute("tabIndex"))||0)},bind:a,unbind:b,schedule:c,browser:g,helpers:{createEventObject:h,createBasicStandardEvent:function(a,b,c){var d;try{d=c.createEvent("Events")}catch(e){d=c.createEvent("UIEvents")}finally{d.initEvent(a,!0,!0),f(d,b)}return d},inArray:function(a,b){for(var c=0;c<b.length;c++)if(b[c]===a)return c;return-1},getWindow:function(a){return a.ownerDocument?a.ownerDocument.defaultView||a.ownerDocument.parentWindow:void 0},extend:f,scrollOffset:function(a,b){var c=a.document.documentElement,d=a.document.body;return b?void window.scrollTo(b.left,b.top):{left:(c&&c.scrollLeft||d&&d.scrollLeft||0)+(c.clientLeft||0),top:(c&&c.scrollTop||d&&d.scrollTop||0)+(c.clientTop||0)}},scrollDimensions:function(a){var b=a.document.documentElement,c=a.document.body,d=b.clientWidth,e=b.clientHeight,f="CSS1Compat"===a.document.compatMode;return{height:f&&e||c.clientHeight||e,width:f&&d||c.clientWidth||d}},addOffset:function(a,b){var c,d=n.jquery(b);"object"==typeof a&&void 0===a.clientX&&void 0===a.clientY&&void 0===a.pageX&&void 0===a.pageY&&d&&(b=d(b),c=b.offset(),a.pageX=c.left+b.width()/2,a.pageY=c.top+b.height()/2)}},key:{ctrlKey:null,altKey:null,shiftKey:null,metaKey:null},dispatch:function(c,d,e,f){if(d.dispatchEvent&&c){var g=c.preventDefault,h=f?-1:0;return f&&a(d,e,function j(a){a.preventDefault(),b(this,e,j)}),c.preventDefault=function(){h++,++h>0&&g.apply(this,[])},d.dispatchEvent(c),0>=h}try{window.event=c}catch(i){}return d.sourceIndex<=0||d.fireEvent&&d.fireEvent("on"+e,c)},create:{page:{event:function(a,b,c){var d,e=n.helpers.getWindow(c).document||document;if(e.createEvent)return d=e.createEvent("Events"),d.initEvent(a,!0,!0),d;try{d=h(a,b,c)}catch(f){}return d}},focus:{event:function(a,b,c){return n.onParents(c,function(a){if(n.isFocusable(a)){if("html"!==a.nodeName.toLowerCase())n.__tryFocus(a),d=a;else if(d){var b=n.helpers.getWindow(c).document;if(b!==window.document)return!1;b.activeElement?(b.activeElement.blur(),d=null):(d.blur(),d=null)}return!1}}),!0}}},support:{clickChanges:!1,clickSubmits:!1,keypressSubmits:!1,mouseupSubmits:!1,radioClickChanges:!1,focusChanges:!1,linkHrefJS:!1,keyCharacters:!1,backspaceWorks:!1,mouseDownUpClicks:!1,tabKeyTabs:!1,keypressOnAnchorClicks:!1,optionClickBubbles:!1,ready:0},trigger:function(a,b,c){b||(b={});var d,e,f,g=n.create,h=g[a]&&g[a].setup,i=l.test(a)?"key":m.test(a)?"page":"mouse",j=g[a]||{},k=g[i],o=c;return 2===n.support.ready&&h&&h(a,b,c),f=b._autoPrevent,delete b._autoPrevent,j.event?e=j.event(a,b,c):(b=k.options?k.options(a,b,c):b,!n.support.changeBubbles&&/option/i.test(c.nodeName)&&(o=c.parentNode),d=k.event(a,b,o),e=n.dispatch(d,o,a,f)),e&&2===n.support.ready&&n.defaults[a]&&n.defaults[a].call(c,b,f),e},eventSupported:function(a){var b=document.createElement("div");a="on"+a;var c=a in b;return c||(b.setAttribute(a,"return;"),c="function"==typeof b[a]),b=null,c}}),f(n.init.prototype,{then:function(a,b,c,d){n.autoDelay&&this.delay();var e=n.args(b,c,d),f=this;return this.queue.unshift(function(b){return"function"!=typeof this[a]?(this.result=n.trigger(a,e.options,e.element),e.callback&&e.callback.call(this,e.element,this.result),this):(this.element=e.element||b,void this[a](e.options,this.element,function(){e.callback&&e.callback.apply(f,arguments),f.done.apply(f,arguments)}))}),this},delay:function(a,b){"function"==typeof a&&(b=a,a=null),a=a||600;var d=this;return this.queue.unshift(function(){c(function(){b&&b.apply(d,[]),d.done.apply(d,arguments)},a)}),this},done:function(a,b){b&&(this.element=b),this.queue.length&&this.queue.pop().call(this,this.element,a)},_click:function(a,b,d,e){n.helpers.addOffset(a,b),n.trigger("mousedown",a,b),c(function(){n.trigger("mouseup",a,b),!n.support.mouseDownUpClicks||e?(n.trigger("click",a,b),d(!0)):(n.create.click.setup("click",a,b),n.defaults.click.call(b),c(function(){d(!0)},1))},1)},_rightClick:function(a,b,d){n.helpers.addOffset(a,b);var e=f(f({},n.mouse.browser.right.mouseup),a);n.trigger("mousedown",e,b),c(function(){n.trigger("mouseup",e,b),n.mouse.browser.right.contextmenu&&n.trigger("contextmenu",f(f({},n.mouse.browser.right.contextmenu),a),b),d(!0)},1)},_dblclick:function(a,b,d){n.helpers.addOffset(a,b);var e=this;this._click(a,b,function(){c(function(){e._click(a,b,function(){n.trigger("dblclick",a,b),d(!0)},!0)},2)})}});for(var o=["click","dblclick","move","drag","key","type","rightClick"],p=function(a){n[a]=function(b,c,d){return n("_"+a,b,c,d)},n.init.prototype[a]=function(b,c,d){return this.then("_"+a,b,c,d)}},q=0;q<o.length;q++)p(o[q]);return n}(),__m3=function(Syn){var h=Syn.helpers,getWin=h.getWindow;return Syn.mouse={},h.extend(Syn.defaults,{mousedown:function(){Syn.trigger("focus",{},this)},click:function(){var element=this,href,type,createChange,radioChanged,nodeName,scope;try{href=element.href,type=element.type,createChange=Syn.data(element,"createChange"),radioChanged=Syn.data(element,"radioChanged"),scope=getWin(element),nodeName=element.nodeName.toLowerCase()}catch(e){return}if(!Syn.support.linkHrefJS&&/^\s*javascript:/.test(href)){var code=href.replace(/^\s*javascript:/,"");"//"!==code&&-1===code.indexOf("void(0)")&&eval(window.selenium?"with(selenium.browserbot.getCurrentWindow()){"+code+"}":"with(scope){"+code+"}")}if(!Syn.support.clickSubmits&&"input"===nodeName&&"submit"===type||"button"===nodeName){var form=Syn.closest(element,"form");form&&Syn.trigger("submit",{},form)}"a"===nodeName&&element.href&&!/^\s*javascript:/.test(href)&&(scope.location.href=href),"input"===nodeName&&"checkbox"===type&&(Syn.support.clickChanges||Syn.trigger("change",{},element)),"input"===nodeName&&"radio"===type&&radioChanged&&!Syn.support.radioClickChanges&&Syn.trigger("change",{},element),"option"===nodeName&&createChange&&(Syn.trigger("change",{},element.parentNode),Syn.data(element,"createChange",!1))}}),h.extend(Syn.create,{mouse:{options:function(a,b){var c=document.documentElement,d=document.body,e=[b.pageX||0,b.pageY||0],f=Syn.mouse.browser&&Syn.mouse.browser.left[a],g=Syn.mouse.browser&&Syn.mouse.browser.right[a];return h.extend({bubbles:!0,cancelable:!0,view:window,detail:1,screenX:1,screenY:1,clientX:b.clientX||e[0]-(c&&c.scrollLeft||d&&d.scrollLeft||0)-(c.clientLeft||0),clientY:b.clientY||e[1]-(c&&c.scrollTop||d&&d.scrollTop||0)-(c.clientTop||0),ctrlKey:!!Syn.key.ctrlKey,altKey:!!Syn.key.altKey,shiftKey:!!Syn.key.shiftKey,metaKey:!!Syn.key.metaKey,button:f&&null!==f.button?f.button:g&&g.button||("contextmenu"===a?2:0),relatedTarget:document.documentElement},b)},event:function(a,b,c){var d,e=getWin(c).document||document;if(e.createEvent){try{d=e.createEvent("MouseEvents"),d.initMouseEvent(a,b.bubbles,b.cancelable,b.view,b.detail,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,b.relatedTarget)}catch(f){d=h.createBasicStandardEvent(a,b,e)}return d.synthetic=!0,d}try{d=h.createEventObject(a,b,c)}catch(f){}return d}},click:{setup:function(a,b,c){var d=c.nodeName.toLowerCase();if(!Syn.support.clickChecks&&!Syn.support.changeChecks&&"input"===d&&(a=c.type.toLowerCase(),"checkbox"===a&&(c.checked=!c.checked),"radio"===a&&!c.checked)){try{Syn.data(c,"radioChanged",!0)}catch(e){}c.checked=!0}if("a"===d&&c.href&&!/^\s*javascript:/.test(c.href)&&Syn.data(c,"href",c.href),/option/i.test(c.nodeName)){for(var f=c.parentNode.firstChild,g=-1;f&&(1!==f.nodeType||(g++,f!==c));)f=f.nextSibling;g!==c.parentNode.selectedIndex&&(c.parentNode.selectedIndex=g,Syn.data(c,"createChange",!0))}}},mousedown:{setup:function(a,b,c){var d=c.nodeName.toLowerCase();!Syn.browser.safari||"select"!==d&&"option"!==d||(b._autoPrevent=!0)}}}),Syn}(__m2),__m4=function(a){return a.key.browsers={webkit:{prevent:{keyup:[],keydown:["char","keypress"],keypress:["char"]},character:{keydown:[0,"key"],keypress:["char","char"],keyup:[0,"key"]},specialChars:{keydown:[0,"char"],keyup:[0,"char"]},navigation:{keydown:[0,"key"],keyup:[0,"key"]},special:{keydown:[0,"key"],keyup:[0,"key"]},tab:{keydown:[0,"char"],keyup:[0,"char"]},"pause-break":{keydown:[0,"key"],keyup:[0,"key"]},caps:{keydown:[0,"key"],keyup:[0,"key"]},escape:{keydown:[0,"key"],keyup:[0,"key"]},"num-lock":{keydown:[0,"key"],keyup:[0,"key"]},"scroll-lock":{keydown:[0,"key"],keyup:[0,"key"]},print:{keyup:[0,"key"]},"function":{keydown:[0,"key"],keyup:[0,"key"]},"\r":{keydown:[0,"key"],keypress:["char","key"],keyup:[0,"key"]}},gecko:{prevent:{keyup:[],keydown:["char"],keypress:["char"]},character:{keydown:[0,"key"],keypress:["char",0],keyup:[0,"key"]},specialChars:{keydown:[0,"key"],keypress:[0,"key"],keyup:[0,"key"]},navigation:{keydown:[0,"key"],keypress:[0,"key"],keyup:[0,"key"]},special:{keydown:[0,"key"],keyup:[0,"key"]},"	":{keydown:[0,"key"],keypress:[0,"key"],keyup:[0,"key"]},"pause-break":{keydown:[0,"key"],keypress:[0,"key"],keyup:[0,"key"]},caps:{keydown:[0,"key"],keyup:[0,"key"]},escape:{keydown:[0,"key"],keypress:[0,"key"],keyup:[0,"key"]},"num-lock":{keydown:[0,"key"],keyup:[0,"key"]},"scroll-lock":{keydown:[0,"key"],keyup:[0,"key"]},print:{keyup:[0,"key"]},"function":{keydown:[0,"key"],keyup:[0,"key"]},"\r":{keydown:[0,"key"],keypress:[0,"key"],keyup:[0,"key"]}},msie:{prevent:{keyup:[],keydown:["char","keypress"],keypress:["char"]},character:{keydown:[null,"key"],keypress:[null,"char"],keyup:[null,"key"]},specialChars:{keydown:[null,"char"],keyup:[null,"char"]},navigation:{keydown:[null,"key"],keyup:[null,"key"]},special:{keydown:[null,"key"],keyup:[null,"key"]},tab:{keydown:[null,"char"],keyup:[null,"char"]},"pause-break":{keydown:[null,"key"],keyup:[null,"key"]},caps:{keydown:[null,"key"],keyup:[null,"key"]},escape:{keydown:[null,"key"],keypress:[null,"key"],keyup:[null,"key"]},"num-lock":{keydown:[null,"key"],keyup:[null,"key"]},"scroll-lock":{keydown:[null,"key"],keyup:[null,"key"]},print:{keyup:[null,"key"]},"function":{keydown:[null,"key"],keyup:[null,"key"]},"\r":{keydown:[null,"key"],keypress:[null,"key"],keyup:[null,"key"]}},opera:{prevent:{keyup:[],keydown:[],keypress:["char"]},character:{keydown:[null,"key"],keypress:[null,"char"],keyup:[null,"key"]},specialChars:{keydown:[null,"char"],keypress:[null,"char"],keyup:[null,"char"]},navigation:{keydown:[null,"key"],keypress:[null,"key"]},special:{keydown:[null,"key"],keypress:[null,"key"],keyup:[null,"key"]},tab:{keydown:[null,"char"],keypress:[null,"char"],keyup:[null,"char"]},"pause-break":{keydown:[null,"key"],keypress:[null,"key"],keyup:[null,"key"]},caps:{keydown:[null,"key"],keyup:[null,"key"]},escape:{keydown:[null,"key"],keypress:[null,"key"]},"num-lock":{keyup:[null,"key"],keydown:[null,"key"],keypress:[null,"key"]},"scroll-lock":{keydown:[null,"key"],keypress:[null,"key"],keyup:[null,"key"]},print:{},"function":{keydown:[null,"key"],keypress:[null,"key"],keyup:[null,"key"]},"\r":{keydown:[null,"key"],keypress:[null,"key"],keyup:[null,"key"]}}},a.mouse.browsers={webkit:{right:{mousedown:{button:2,which:3},mouseup:{button:2,which:3},contextmenu:{button:2,which:3}},left:{mousedown:{button:0,which:1},mouseup:{button:0,which:1},click:{button:0,which:1}}},opera:{right:{mousedown:{button:2,which:3},mouseup:{button:2,which:3}},left:{mousedown:{button:0,which:1},mouseup:{button:0,which:1},click:{button:0,which:1}}},msie:{right:{mousedown:{button:2},mouseup:{button:2},contextmenu:{button:0}},left:{mousedown:{button:1},mouseup:{button:1},click:{button:0}}},chrome:{right:{mousedown:{button:2,which:3},mouseup:{button:2,which:3},contextmenu:{button:2,which:3}},left:{mousedown:{button:0,which:1},mouseup:{button:0,which:1},click:{button:0,which:1}}},gecko:{left:{mousedown:{button:0,which:1},mouseup:{button:0,which:1},click:{button:0,which:1}},right:{mousedown:{button:2,which:3},mouseup:{button:2,which:3},contextmenu:{button:2,which:3}}}},a.key.browser=function(){if(a.key.browsers[window.navigator.userAgent])return a.key.browsers[window.navigator.userAgent];for(var b in a.browser)if(a.browser[b]&&a.key.browsers[b])return a.key.browsers[b];return a.key.browsers.gecko}(),a.mouse.browser=function(){if(a.mouse.browsers[window.navigator.userAgent])return a.mouse.browsers[window.navigator.userAgent];for(var b in a.browser)if(a.browser[b]&&a.mouse.browsers[b])return a.mouse.browsers[b];return a.mouse.browsers.gecko}(),a}(__m2,__m3),__m6=function(a){var b=[],c=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};a.typeable=function(a){-1===c.call(b,a)&&b.push(a)},a.typeable.test=function(a){for(var c=0,d=b.length;d>c;c++)if(b[c](a))return!0;return!1};var d=a.typeable,e=/input|textarea/i;return d(function(a){return e.test(a.nodeName)}),d(function(a){return-1!==c.call(["","true"],a.getAttribute("contenteditable"))}),a}(__m2),__m5=function(a){var b=a.helpers,c=function(a){var c,d,f;if(void 0!==a.selectionStart)return document.activeElement&&document.activeElement!==a&&a.selectionStart===a.selectionEnd&&0===a.selectionStart?{start:a.value.length,end:a.value.length}:{start:a.selectionStart,end:a.selectionEnd};try{if("input"===a.nodeName.toLowerCase())return c=b.getWindow(a).document.selection.createRange(),d=a.createTextRange(),d.setEndPoint("EndToStart",c),f=d.text.length,{start:f,end:f+c.text.length};c=b.getWindow(a).document.selection.createRange(),d=c.duplicate();var g=c.duplicate(),h=c.duplicate();g.collapse(),h.collapse(!1),g.moveStart("character",-1),h.moveStart("character",-1),d.moveToElementText(a),d.setEndPoint("EndToEnd",c),f=d.text.length-c.text.length;var i=d.text.length;return 0!==f&&""===g.text&&(f+=2),0!==i&&""===h.text&&(i+=2),{start:f,end:i}}catch(j){var k=e.test(a.nodeName)?"value":"textContent";return{start:a[k].length,end:a[k].length}}},d=function(c){for(var d=b.getWindow(c).document,e=[],f=d.getElementsByTagName("*"),g=f.length,h=0;g>h;h++)a.isFocusable(f[h])&&f[h]!==d.documentElement&&e.push(f[h]);return e},e=/input|textarea/i,f=function(){var a=document.createElement("span");return null!=a.textContent?"textContent":"innerText"}(),g=function(a){return e.test(a.nodeName)?a.value:a[f]},h=function(a,b){e.test(a.nodeName)?a.value=b:a[f]=b};b.extend(a,{keycodes:{"\b":8,"	":9,"\r":13,shift:16,ctrl:17,alt:18,"pause-break":19,caps:20,escape:27,"num-lock":144,"scroll-lock":145,print:44,"page-up":33,"page-down":34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,"delete":46," ":32,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,a:65,b:66,c:67,d:68,e:69,f:70,g:71,h:72,i:73,j:74,k:75,l:76,m:77,n:78,o:79,p:80,q:81,r:82,s:83,t:84,u:85,v:86,w:87,x:88,y:89,z:90,num0:96,num1:97,num2:98,num3:99,num4:100,num5:101,num6:102,num7:103,num8:104,num9:105,"*":106,"+":107,subtract:109,decimal:110,divide:111,";":186,"=":187,",":188,dash:189,"-":189,period:190,".":190,"forward-slash":191,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222,"left window key":91,"right window key":92,"select key":93,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123},selectText:function(b,c,d){if(b.setSelectionRange)d?(b.selectionStart=c,b.selectionEnd=d):(a.__tryFocus(b),b.setSelectionRange(c,c));else if(b.createTextRange){var e=b.createTextRange();e.moveStart("character",c),d=d||c,e.moveEnd("character",d-b.value.length),e.select()}},getText:function(b){if(a.typeable.test(b)){var d=c(b);return b.value.substring(d.start,d.end)}var e=a.helpers.getWindow(b);return e.getSelection?e.getSelection().toString():e.document.getSelection?e.document.getSelection().toString():e.document.selection.createRange().text},getSelection:c}),b.extend(a.key,{data:function(c){if(a.key.browser[c])return a.key.browser[c];for(var d in a.key.kinds)if(b.inArray(c,a.key.kinds[d])>-1)return a.key.browser[d];return a.key.browser.character},isSpecial:function(b){for(var c=a.key.kinds.special,d=0;d<c.length;d++)if(a.keycodes[c[d]]===b)return c[d]},options:function(b,c){var d=a.key.data(b);if(!d[c])return null;var e=d[c][0],f=d[c][1],g={};return g.keyCode="key"===f?a.keycodes[b]:"char"===f?b.charCodeAt(0):f,"char"===e?g.charCode=b.charCodeAt(0):null!==e&&(g.charCode=e),g.which=g.keyCode?g.keyCode:g.charCode,g},kinds:{special:["shift","ctrl","alt","caps"],specialChars:["\b"],navigation:["page-up","page-down","end","home","left","up","right","down","insert","delete"],"function":["f1","f2","f3","f4","f5","f6","f7","f8","f9","f10","f11","f12"]},getDefault:function(c){if(a.key.defaults[c])return a.key.defaults[c];for(var d in a.key.kinds)if(b.inArray(c,a.key.kinds[d])>-1&&a.key.defaults[d])return a.key.defaults[d];return a.key.defaults.character},defaults:{character:function(b,c,d,e,f){if(/num\d+/.test(d)&&(d=d.match(/\d+/)[0]),e||!a.support.keyCharacters&&a.typeable.test(this)){var i=g(this),j=i.substr(0,f.start),k=i.substr(f.end),l=d;h(this,j+l+k);var m="\n"===l&&a.support.textareaCarriage?2:l.length;a.selectText(this,j.length+m)}},c:function(){a.key.ctrlKey?a.key.clipboard=a.getText(this):a.key.defaults.character.apply(this,arguments)},v:function(b,c,d,e,f){a.key.ctrlKey?a.key.defaults.character.call(this,b,c,a.key.clipboard,!0,f):a.key.defaults.character.apply(this,arguments)},a:function(){a.key.ctrlKey?a.selectText(this,0,g(this).length):a.key.defaults.character.apply(this,arguments)},home:function(){a.onParents(this,function(a){return a.scrollHeight!==a.clientHeight?(a.scrollTop=0,!1):void 0})},end:function(){a.onParents(this,function(a){return a.scrollHeight!==a.clientHeight?(a.scrollTop=a.scrollHeight,!1):void 0})},"page-down":function(){a.onParents(this,function(a){if(a.scrollHeight!==a.clientHeight){var b=a.clientHeight;return a.scrollTop+=b,!1}})},"page-up":function(){a.onParents(this,function(a){if(a.scrollHeight!==a.clientHeight){var b=a.clientHeight;return a.scrollTop-=b,!1}})},"\b":function(b,c,d,e,f){if(!a.support.backspaceWorks&&a.typeable.test(this)){var i=g(this),j=i.substr(0,f.start),k=i.substr(f.end);f.start===f.end&&f.start>0?(h(this,j.substring(0,j.length-1)+k),a.selectText(this,f.start-1)):(h(this,j+k),a.selectText(this,f.start))}},"delete":function(b,c,d,e,f){if(!a.support.backspaceWorks&&a.typeable.test(this)){var i=g(this),j=i.substr(0,f.start),k=i.substr(f.end);f.start===f.end&&f.start<=g(this).length-1?h(this,j+k.substring(1)):h(this,j+k),a.selectText(this,f.start)}},"\r":function(b,c,d,e,f){var g=this.nodeName.toLowerCase();if("input"===g&&a.trigger("change",{},this),!a.support.keypressSubmits&&"input"===g){var h=a.closest(this,"form");h&&a.trigger("submit",{},h)}a.support.keyCharacters||"textarea"!==g||a.key.defaults.character.call(this,b,c,"\n",void 0,f),a.support.keypressOnAnchorClicks||"a"!==g||a.trigger("click",{},this)},"	":function(){for(var b,c,e=d(this),f=null,g=0,h=[];g<e.length;g++)h.push([e[g],g]);var i=function(b,c){var d=b[0],e=c[0],f=a.tabIndex(d)||0,g=a.tabIndex(e)||0;return f===g?b[1]-c[1]:0===f?1:0===g?-1:f-g};for(h.sort(i),g=0;g<h.length;g++)b=h[g][0],this===b&&(a.key.shiftKey?(f=h[g-1][0],f||(f=h[e.length-1][0])):(f=h[g+1][0],f||(f=h[0][0])));return f?a.__tryFocus(f):f=c,f},left:function(b,c,d,e,f){a.typeable.test(this)&&(a.key.shiftKey?a.selectText(this,0===f.start?0:f.start-1,f.end):a.selectText(this,0===f.start?0:f.start-1))},right:function(b,c,d,e,f){a.typeable.test(this)&&(a.key.shiftKey?a.selectText(this,f.start,f.end+1>g(this).length?g(this).length:f.end+1):a.selectText(this,f.end+1>g(this).length?g(this).length:f.end+1))},up:function(){/select/i.test(this.nodeName)&&(this.selectedIndex=this.selectedIndex?this.selectedIndex-1:0)},down:function(){/select/i.test(this.nodeName)&&(a.changeOnBlur(this,"selectedIndex",this.selectedIndex),this.selectedIndex=this.selectedIndex+1)},shift:function(){return null},ctrl:function(){return null}}}),b.extend(a.create,{keydown:{setup:function(c,d,e){-1!==b.inArray(d,a.key.kinds.special)&&(a.key[d+"Key"]=e)}},keypress:{setup:function(b,c,d){a.support.keyCharacters&&!a.support.keysOnNotFocused&&a.__tryFocus(d)}},keyup:{setup:function(c,d){-1!==b.inArray(d,a.key.kinds.special)&&(a.key[d+"Key"]=null)}},key:{options:function(c,d){return d="object"!=typeof d?{character:d}:d,d=b.extend({},d),d.character&&(b.extend(d,a.key.options(d.character,c)),delete d.character),d=b.extend({ctrlKey:!!a.key.ctrlKey,altKey:!!a.key.altKey,shiftKey:!!a.key.shiftKey,metaKey:!!a.key.metaKey},d)},event:function(a,c,d){var e,f=b.getWindow(d).document||document;if(f.createEvent){try{e=f.createEvent("KeyEvents"),e.initKeyEvent(a,!0,!0,window,c.ctrlKey,c.altKey,c.shiftKey,c.metaKey,c.keyCode,c.charCode)}catch(g){e=b.createBasicStandardEvent(a,c,f)}return e.synthetic=!0,e}try{e=b.createEventObject.apply(this,arguments),b.extend(e,c)}catch(g){}return e}}});var i={enter:"\r",backspace:"\b",tab:"	",space:" "};return b.extend(a.init.prototype,{_key:function(d,e,f){if(/-up$/.test(d)&&-1!==b.inArray(d.replace("-up",""),a.key.kinds.special))return a.trigger("keyup",d.replace("-up",""),e),f(!0,e);var g,h=b.getWindow(e).document.activeElement,j=a.typeable.test(e)&&c(e),k=i[d]||d,l=a.trigger("keydown",k,e),m=a.key.getDefault,n=a.key.browser.prevent,o=a.key.options(k,"keypress");return l?o?(h!==b.getWindow(e).document.activeElement&&(e=b.getWindow(e).document.activeElement),l=a.trigger("keypress",o,e),l&&(g=m(k).call(e,o,b.getWindow(e),k,void 0,j))):g=m(k).call(e,o,b.getWindow(e),k,void 0,j):o&&-1===b.inArray("keypress",n.keydown)&&(h!==b.getWindow(e).document.activeElement&&(e=b.getWindow(e).document.activeElement),a.trigger("keypress",o,e)),g&&g.nodeName&&(e=g),null!==g?a.schedule(function(){a.support.oninput&&a.trigger("input",a.key.options(k,"input"),e),a.trigger("keyup",a.key.options(k,"keyup"),e),f(l,e)},1):f(l,e),e},_type:function(a,b,c){var d=(a+"").match(/(\[[^\]]+\])|([^\[])/g),e=this,f=function(a,g){var h=d.shift();return h?(g=g||b,h.length>1&&(h=h.substr(1,h.length-2)),void e._key(h,g,f)):void c(a,g)};f()}}),a}(__m2,__m6,__m4),__m7=function(a){!function j(){if(!document.body)return void a.schedule(j,1);var b=document.createElement("div");if(document.body.appendChild(b),a.helpers.extend(b.style,{width:"100px",height:"10000px",backgroundColor:"blue",position:"absolute",top:"10px",left:"0px",zIndex:19999}),document.body.scrollTop=11,document.elementFromPoint){var c=document.elementFromPoint(3,1);c===b?a.support.elementFromClient=!0:a.support.elementFromPage=!0,document.body.removeChild(b),document.body.scrollTop=0}}();var b=function(b,c){var d,e=b.clientX,f=b.clientY,g=a.helpers.getWindow(c);if(a.support.elementFromPage){var h=a.helpers.scrollOffset(g);e+=h.left,f+=h.top}return d=g.document.elementFromPoint?g.document.elementFromPoint(e,f):c,d===g.document.documentElement&&(b.clientY<0||b.clientX<0)?c:d},c=function(c,d,e){var f=b(d,e);return a.trigger(c,d,f||e),f},d=function(c,d,e){var f=b(c,d);if(e!==f&&f&&e){var g=a.helpers.extend({},c);g.relatedTarget=f,a.trigger("mouseout",g,e),g.relatedTarget=e,a.trigger("mouseover",g,f)}return a.trigger("mousemove",c,f||d),f},e=function(c,e,f,g,h){var i,j=new Date,k=e.clientX-c.clientX,l=e.clientY-c.clientY,m=a.helpers.getWindow(g),n=b(c,g),o=m.document.createElement("div"),p=0;i=function q(){var b=new Date,i=a.helpers.scrollOffset(m),r=(0===p?0:b-j)/f,s={clientX:k*r+c.clientX,clientY:l*r+c.clientY};p++,1>r?(a.helpers.extend(o.style,{left:s.clientX+i.left+2+"px",top:s.clientY+i.top+2+"px"}),n=d(s,g,n),a.schedule(q,15)):(n=d(e,g,n),m.document.body.removeChild(o),h())},a.helpers.extend(o.style,{height:"5px",width:"5px",backgroundColor:"red",position:"absolute",zIndex:19999,fontSize:"1px"}),m.document.body.appendChild(o),i()},f=function(a,b,d,f,g){c("mousedown",a,f),e(a,b,d,f,function(){c("mouseup",b,f),g()})},g=function(b){var c=a.jquery()(b),d=c.offset();return{pageX:d.left+c.outerWidth()/2,pageY:d.top+c.outerHeight()/2}},h=function(b,c,d){var e,f=/(\d+)[x ](\d+)/,h=/(\d+)X(\d+)/,i=/([+-]\d+)[xX ]([+-]\d+)/;if("string"==typeof b&&i.test(b)&&d){var j=g(d);e=b.match(i),b={pageX:j.pageX+parseInt(e[1]),pageY:j.pageY+parseInt(e[2])}}if("string"==typeof b&&f.test(b)&&(e=b.match(f),b={pageX:parseInt(e[1]),pageY:parseInt(e[2])}),"string"==typeof b&&h.test(b)&&(e=b.match(h),b={clientX:parseInt(e[1]),clientY:parseInt(e[2])}),"string"==typeof b&&(b=a.jquery()(b,c.document)[0]),b.nodeName&&(b=g(b)),b.pageX){var k=a.helpers.scrollOffset(c);b={clientX:b.pageX-k.left,clientY:b.pageY-k.top}}return b},i=function(b,c,d){if(b.clientY<0){var e=a.helpers.scrollOffset(d),f=e.top+b.clientY-100,g=f-e.top;f>0||(f=0,g=-e.top),b.clientY=b.clientY-g,c.clientY=c.clientY-g,a.helpers.scrollOffset(d,{top:f,left:e.left})}};return a.helpers.extend(a.init.prototype,{_move:function(b,c,d){var f=a.helpers.getWindow(c),g=h(b.from||c,f,c),j=h(b.to||b,f,c);b.adjust!==!1&&i(g,j,f),e(g,j,b.duration||500,c,d)},_drag:function(b,c,d){var e=a.helpers.getWindow(c),g=h(b.from||c,e,c),j=h(b.to||b,e,c);b.adjust!==!1&&i(g,j,e),f(g,j,b.duration||500,c,d)}}),a}(__m2),__m1=function(a){return window.Syn=a,a}(__m2,__m3,__m4,__m5,__m7)}(window);