!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);(()=>{const e=document.querySelector(".pnamefield"),t=document.querySelector(".pdesfield"),n=document.querySelector(".submitbtnproject"),o=document.querySelector(".cancelbtnproject")})();const o=(()=>{const e=document.querySelector(".editdiv"),t=document.querySelector("#nameDescEdit.addblock"),n=document.querySelector("#editProjectForm.addblock");document.querySelector(".pnameform"),document.querySelector(".pdescform");return{editBtn:e,submitBtn:document.querySelector(".formsubmit"),cancelBtn:document.querySelector(".formcancel"),show:function(){t.style.display="none",n.style.display="block"},hide:function(){t.style.display="block",n.style.display="none",console.log("editProject HIDE TEST")},submit:function(){}}})(),c=(()=>{const e=document.querySelector("#addTaskDiv.addblock"),t=document.querySelector("#addTaskFormDiv"),n=document.querySelector(".taskfield"),o=document.querySelector(".datefield"),c=document.querySelector(".submittaskbtn"),l=document.querySelector(".canceltaskbtn");function d(){t.style.display="none",e.style.display="block",r()}function r(){n.value="",o.value=""}return{addBtn:e,submitBtn:c,cancelBtn:l,show:function(){t.style.display="block",e.style.display="none"},hide:d,submit:function(){r(),d()}}})(),l=(()=>{const e=document.querySelector("#allTasks > div > div.rightdiv > img.editimg"),t=document.querySelector("#allTasks > div > div.rightdiv > img.exampletrash"),n=document.querySelector("#editAllTasks.addblock"),o=document.querySelector("#allTasks.addblock");return{editBtn:e,deleteBtn:t,cancelBtn:document.querySelector(".edittaskcancelbtn"),submitBtn:document.querySelector(".edittasksubmitbtn"),show:function(){o.style.display="none",n.style.display="block"},hide:function(){o.style.display="block",n.style.display="none"},deleteTask:function(){o.style.display="none"},submit:function(){}}})();console.log("MASSIVE TEST! "),console.log("DOM LOAD!"),o.hide(),c.hide(),l.hide(),o.editBtn.addEventListener("click",o.show),o.cancelBtn.addEventListener("click",o.hide),o.submitBtn.addEventListener("click",()=>{o.submit(),console.log("HELLO NATHAN!"),o.hide()}),c.addBtn.addEventListener("click",c.show),c.cancelBtn.addEventListener("click",c.hide),l.deleteBtn.addEventListener("click",l.deleteTask),l.editBtn.addEventListener("click",l.show),l.cancelBtn.addEventListener("click",l.hide),console.log("Event listener module!"),console.log("EVENT LISTENER 3!")}]);