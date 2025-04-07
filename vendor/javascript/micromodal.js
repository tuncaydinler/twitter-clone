// micromodal@0.6.1 downloaded from https://ga.jspm.io/npm:micromodal@0.6.1/dist/micromodal.es.js

function e(n,i){for(var a=0;a<i.length;a++){var r=i[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function t(n){return function(n){if(Array.isArray(n))return o(n)}(n)||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||function(n,i){if(n){if("string"==typeof n)return o(n,i);var a=Object.prototype.toString.call(n).slice(8,-1);"Object"===a&&n.constructor&&(a=n.constructor.name);return"Map"===a||"Set"===a?Array.from(n):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?o(n,i):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(n,i){(null==i||i>n.length)&&(i=n.length);for(var a=0,r=new Array(i);a<i;a++)r[a]=n[a];return r}var n,i,a,r,s,l=(n=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],i=function(){function o(n){var i=n.targetModal,a=n.triggers,r=void 0===a?[]:a,s=n.onShow,l=void 0===s?function(){}:s,c=n.onClose,d=void 0===c?function(){}:c,u=n.openTrigger,f=void 0===u?"data-micromodal-trigger":u,h=n.closeTrigger,v=void 0===h?"data-micromodal-close":h,g=n.openClass,m=void 0===g?"is-open":g,b=n.disableScroll,y=void 0!==b&&b,p=n.disableFocus,w=void 0!==p&&p,E=n.awaitCloseAnimation,k=void 0!==E&&E,M=n.awaitOpenAnimation,A=void 0!==M&&M,C=n.debugMode,L=void 0!==C&&C;!function(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}(this,o),this.modal="string"==typeof i?document.getElementById(i):i,this.config={debugMode:L,disableScroll:y,openTrigger:f,closeTrigger:v,openClass:m,onShow:l,onClose:d,awaitCloseAnimation:k,awaitOpenAnimation:A,disableFocus:w},r.length>0&&this.registerTriggers.apply(this,t(r)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}var i,a,r;return i=o,(a=[{key:"registerTriggers",value:function(){for(var n=this,i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];a.filter(Boolean).forEach((function(i){i.addEventListener("click",(function(i){return n.showModal(i)}))}))}},{key:"showModal",value:function(){var n=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add(this.config.openClass),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.awaitOpenAnimation){var a=function t(){n.modal.removeEventListener("animationend",t,!1),n.setFocusToFirstNode()};this.modal.addEventListener("animationend",a,!1)}else this.setFocusToFirstNode();this.config.onShow(this.modal,this.activeElement,i)}},{key:"closeModal",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=this.modal;if(this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement&&this.activeElement.focus&&this.activeElement.focus(),this.config.onClose(this.modal,this.activeElement,n),this.config.awaitCloseAnimation){var a=this.config.openClass;this.modal.addEventListener("animationend",(function e(){i.classList.remove(a),i.removeEventListener("animationend",e,!1)}),!1)}else i.classList.remove(this.config.openClass)}},{key:"closeModalByIdOrElement",value:function(n){this.modal="string"==typeof n?document.getElementById(n):n,this.modal&&this.closeModal()}},{key:"scrollBehaviour",value:function(n){if(this.config.disableScroll){var i=document.querySelector("body");switch(n){case"enable":Object.assign(i.style,{overflow:""});break;case"disable":Object.assign(i.style,{overflow:"hidden"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(n){(n.target.hasAttribute(this.config.closeTrigger)||n.target.parentNode.hasAttribute(this.config.closeTrigger))&&(n.preventDefault(),n.stopPropagation(),this.closeModal(n))}},{key:"onKeydown",value:function(n){27===n.keyCode&&this.closeModal(n),9===n.keyCode&&this.retainFocus(n)}},{key:"getFocusableNodes",value:function(){var i=this.modal.querySelectorAll(n);return Array.apply(void 0,t(i))}},{key:"setFocusToFirstNode",value:function(){var n=this;if(!this.config.disableFocus){var i=this.getFocusableNodes();if(0!==i.length){var a=i.filter((function(i){return!i.hasAttribute(n.config.closeTrigger)}));a.length>0&&a[0].focus(),0===a.length&&i[0].focus()}}}},{key:"retainFocus",value:function(n){var i=this.getFocusableNodes();if(0!==i.length)if(i=i.filter((function(n){return null!==n.offsetParent})),this.modal.contains(document.activeElement)){var a=i.indexOf(document.activeElement);n.shiftKey&&0===a&&(i[i.length-1].focus(),n.preventDefault()),!n.shiftKey&&i.length>0&&a===i.length-1&&(i[0].focus(),n.preventDefault())}else i[0].focus()}}])&&e(i.prototype,a),r&&e(i,r),o}(),a=null,r=function(n){if("string"==typeof id?!document.getElementById(n):!n)return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(n,"'"),"background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'.concat(n,'"></div>')),!1},s=function(n,i){if(function(n){n.length<=0&&(console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>'))}(n),!i)return!0;for(var a in i)r(a);return!0},{init:function(n){var r=Object.assign({},{openTrigger:"data-micromodal-trigger"},n),l=t(document.querySelectorAll("[".concat(r.openTrigger,"]"))),c=function(n,i){var a=[];return n.forEach((function(n){var r=n.attributes[i].value;void 0===a[r]&&(a[r]=[]),a[r].push(n)})),a}(l,r.openTrigger);if(!0!==r.debugMode||!1!==s(l,c))for(var d in c){var u=c[d];r.targetModal=d,r.triggers=t(u),a=new i(r)}},show:function(n,s){var l=s||{};l.targetModal=n,!0===l.debugMode&&!1===r(n)||(a&&a.removeEventListeners(),(a=new i(l)).showModal())},close:function(n){n?a.closeModalByIdOrElement(n):a.closeModal()}});"undefined"!=typeof window&&(window.MicroModal=l);export{l as default};

