!function(e){var t={};function n(c){if(t[c])return t[c].exports;var d=t[c]={i:c,l:!1,exports:{}};return e[c].call(d.exports,d,d.exports,n),d.l=!0,d.exports}n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)n.d(c,d,function(t){return e[t]}.bind(null,d));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"allProjects",(function(){return p}));function c(){p.length>0&&p.forEach(e=>{e.active=!1})}const d=(()=>{const e=document.querySelector(".pnamefield"),t=document.querySelector(".pdesfield"),n=document.querySelector("#email-form-4 > div > input"),d=document.querySelector(".cancelbtnproject");return{name:e,description:t,submitBtn:n,cancelBtn:d,submit:function(){((e,t)=>{c(),p.push({name:e,description:t,toDoListItems:[],active:!0}),console.log("createProject ran successfully!"),console.log(p)})(e.value,t.value),s()}}})(),l=(()=>{const e=document.querySelector(".editdiv"),t=document.querySelector("#nameDescEdit.addblock"),n=document.querySelector("#editProjectForm.addblock"),c=document.querySelector(".pnameform"),d=document.querySelector(".pdescform");return{editBtn:e,submitBtn:document.querySelector(".formsubmit"),cancelBtn:document.querySelector(".formcancel"),show:function(){t.style.display="none",n.style.display="block"},hide:function(){t.style.display="block",n.style.display="none"},submit:function(){!function(e,t){let n=p.filter(e=>!0===e.active);n[0].name=e,n[0].description=t}(c.value,d.value),s()}}})(),o=(()=>{const e=document.querySelector("#addTaskDiv.addblock"),t=document.querySelector("#addTaskFormDiv"),n=document.querySelector(".taskfield"),c=document.querySelector(".datefield"),d=document.querySelector("#email-form > div.submittaskdiv > a"),l=document.querySelector(".canceltaskbtn");function o(){t.style.display="none",e.style.display="block",a()}function a(){n.value="",c.value=""}return{addBtn:e,submitBtn:d,cancelBtn:l,show:function(){t.style.display="block",e.style.display="none"},hide:o,submit:function(){console.log("NEWTASK.SUBMIT RUNS!"),((e,t)=>{p.filter(e=>!0===e.active)[0].toDoListItems.push({name:e,date:t,active:!1,complete:!1})})(n.value,c.value),u(),a(),o()}}})(),a=(()=>{const e=document.querySelector("#allTasks > div > div.rightdiv > img.editimg"),t=document.querySelector("#allTasks > div > div.rightdiv > img.exampletrash"),n=document.querySelector("#editAllTasks.addblock"),c=document.querySelector("#allTasks.addblock");return{editBtn:e,deleteBtn:t,cancelBtn:document.querySelector(".edittaskcancelbtn"),submitBtn:document.querySelector(".edittasksubmitbtn"),show:function(){c.style.display="none",n.style.display="block"},hide:function(){c.style.display="block",n.style.display="none"},deleteTask:function(){c.style.display="none"},submit:function(){}}})();function i(){document.querySelectorAll("#exampleProject").forEach(e=>{e.addEventListener("click",e=>{if("exampletrash"!=e.target.className){let n=e.target.dataset.value;t=n,c(),p[t].active=!0,m()}var t})}),document.querySelectorAll(".exampletrash").forEach(e=>{e.addEventListener("click",e=>{let t=e.target.parentElement.firstElementChild.dataset.value;var n;console.log(e),console.log("The datasetValue (index) is "+t),n=t,p.splice(n,1),p.length>=1&&(p[p.length-1].active=!0),m()})})}function r(){document.querySelectorAll("#tasktrash.exampletrash").forEach(e=>{e.addEventListener("click",e=>{var t;datasetValue=e.target.parentNode.parentNode.dataset.value,t=datasetValue,p.filter(e=>!0===e.active)[0].toDoListItems.splice(t,1),u()})})}function s(){document.querySelector(".projectlist").innerHTML="",p.forEach((e,t)=>{const n=document.querySelector(".projectlist"),c=document.createElement("div");c.id="exampleProject",c.classList.add("projectexample");const d=document.createElement("div");d.classList.add("exampletextBlock"),d.textContent=e.name,d.dataset.value=t,!0===e.active&&d.classList.add("active");const l=document.createElement("img");l.src="images/trash-icon.png",l.width="20",l.classList.add("exampletrash"),c.appendChild(d),c.appendChild(l),n.appendChild(c)}),function(){let e=p.filter(e=>!0===e.active),t=e[0].name,n=e[0].description;const c=document.querySelector(".projectname"),d=document.querySelector(".projectdescription"),l=document.querySelector(".pnameform"),o=document.querySelector(".pdescform");c.textContent=t,d.textContent=n,l.value=t,o.value=n}(),i()}function u(){document.querySelector("#allTasks").innerHTML="",p.forEach(e=>{e.toDoListItems.forEach((t,n)=>{!0===e.active&&function(e,t){const n=document.querySelector("#allTasks"),c=document.createElement("div");c.classList.add("alllistedtasks"),c.dataset.value=t;const d=document.createElement("div");d.classList.add("leftdiv");const l=document.createElement("div");l.classList.add("checkbox");const o=document.createElement("div");o.classList.add("tasktext"),o.textContent=e.name;const a=document.createElement("div");a.classList.add("rightdiv");const i=document.createElement("div");i.classList.add("rightrightdiv");const r=document.createElement("div");r.classList.add("duedatetext"),r.textContent=e.date;const s=document.createElement("img");s.src="images/edit-icon.png",s.width="17",s.classList.add("editimg");const u=document.createElement("img");u.src="images/trash-icon.png",u.width="20",u.classList.add("exampletrash"),u.id="tasktrash",d.appendChild(l),d.appendChild(o),i.appendChild(r),a.appendChild(i),a.appendChild(s),a.appendChild(u),c.appendChild(d),c.appendChild(a),n.appendChild(c)}(t,n)})}),r()}function m(){s(),u()}a.deleteBtn.addEventListener("click",a.deleteTask),a.editBtn.addEventListener("click",a.show),a.cancelBtn.addEventListener("click",a.hide);let p=[];l.hide(),o.hide(),a.hide(),d.submitBtn.addEventListener("click",d.submit),l.editBtn.addEventListener("click",l.show),l.cancelBtn.addEventListener("click",l.hide),l.submitBtn.addEventListener("click",()=>{l.submit(),l.hide()}),o.addBtn.addEventListener("click",o.show),o.cancelBtn.addEventListener("click",o.hide),o.submitBtn.addEventListener("click",o.submit),i(),r()}]);