!function(e){var t={};function n(c){if(t[c])return t[c].exports;var d=t[c]={i:c,l:!1,exports:{}};return e[c].call(d.exports,d,d.exports,n),d.l=!0,d.exports}n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)n.d(c,d,function(t){return e[t]}.bind(null,d));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"allProjects",(function(){return p}));function c(){p.length>0&&p.forEach(e=>{e.active=!1})}const d=(()=>{const e=document.querySelector(".pnamefield"),t=document.querySelector(".pdesfield"),n=document.querySelector("#email-form-4 > div > input"),d=document.querySelector(".cancelbtnproject");return{name:e,description:t,submitBtn:n,cancelBtn:d,submit:function(){((e,t)=>{c(),p.push({name:e,description:t,toDoListItems:[],active:!0}),console.log("createProject ran successfully!"),console.log(p)})(e.value,t.value),r(),m()},hide:function(){document.querySelector(".modalwrap").style.display="none",console.log("newProject.hide() runs!")}}})(),l=(()=>{const e=document.querySelector(".editdiv"),t=document.querySelector("#nameDescEdit.addblock"),n=document.querySelector("#editProjectForm.addblock"),c=document.querySelector(".pnameform"),d=document.querySelector(".pdescform");return{editBtn:e,submitBtn:document.querySelector(".formsubmit"),cancelBtn:document.querySelector(".formcancel"),show:function(){t.style.display="none",n.style.display="block"},hide:function(){t.style.display="block",n.style.display="none"},submit:function(){!function(e,t){let n=p.filter(e=>!0===e.active);n[0].name=e,n[0].description=t}(c.value,d.value),r()}}})(),a=(()=>{const e=document.querySelector("#addTaskDiv.addblock"),t=document.querySelector("#addTaskFormDiv"),n=document.querySelector(".taskfield"),c=document.querySelector(".datefield"),d=document.querySelector("#email-form > div.submittaskdiv > a"),l=document.querySelector(".canceltaskbtn");function a(){t.style.display="none",e.style.display="block",i()}function i(){n.value="",c.value=""}return{addBtn:e,submitBtn:d,cancelBtn:l,show:function(){t.style.display="block",e.style.display="none"},hide:a,submit:function(){console.log("NEWTASK.SUBMIT RUNS!"),((e,t)=>{p.filter(e=>!0===e.active)[0].toDoListItems.push({name:e,date:t,active:!1,complete:!1})})(n.value,c.value),u(),i(),a()}}})(),i=(()=>{const e=document.querySelector("#allTasks > div > div.rightdiv > img.editimg"),t=document.querySelector("#allTasks > div > div.rightdiv > img.exampletrash"),n=document.querySelector("#editAllTasks.addblock"),c=document.querySelector("#allTasks.addblock");return{editBtn:e,deleteBtn:t,cancelBtn:document.querySelector(".edittaskcancelbtn"),submitBtn:document.querySelector(".edittasksubmitbtn"),show:function(e){let t=document.querySelectorAll("#editAllTasks.addblock");document.querySelectorAll("#taskContainer.alllistedtasks")[e].style.display="none",t[e].style.display="block"},hide:function(e){let t=document.querySelectorAll("#editAllTasks.addblock");document.querySelectorAll("#taskContainer.alllistedtasks")[e].style.display="block",t[e].style.display="none",console.log("editTask.hide runs")},disappear:function(){c.style.display="block",n.style.display="none"},deleteTask:function(){c.style.display="none"},submit:function(e){let t=document.querySelectorAll(".edittaskname"),n=document.querySelectorAll(".edittaskdate");!function(e,t,n){let c=p.filter(e=>!0===e.active)[0].toDoListItems[e];c.name=t,c.date=n}(e,t[e].value,n[e].value)},checkbox:function(e){e.classList.toggle("complete")}}})();function o(){document.querySelectorAll("#exampleProject").forEach(e=>{e.addEventListener("click",e=>{if("exampletrash"!=e.target.className){let n=e.target.dataset.value;t=n,c(),p[t].active=!0,m()}var t})}),document.querySelectorAll(".exampletrash").forEach(e=>{e.addEventListener("click",e=>{let t=e.target.parentElement.firstElementChild.dataset.value;var n;console.log(e),console.log("The datasetValue (index) is "+t),n=t,p.splice(n,1),p.length>=1&&(p[p.length-1].active=!0),m()})})}function s(){document.querySelectorAll(".checkbox").forEach(e=>{e.addEventListener("click",t=>{let n=t.target.parentNode.parentNode.dataset.value;console.log(n),function(e){let t=p.filter(e=>!0===e.active)[0].toDoListItems[e];0==t.complete?t.complete=!0:t.complete=!1}(n),i.checkbox(e)})}),document.querySelectorAll("#tasktrash.exampletrash").forEach(e=>{e.addEventListener("click",e=>{let t=e.target.parentNode.parentNode.dataset.value;var n;n=t,p.filter(e=>!0===e.active)[0].toDoListItems.splice(n,1),u()})}),document.querySelectorAll("#editTask.editimg").forEach(e=>{e.addEventListener("click",e=>{let t=e.target.parentNode.parentNode.dataset.value;var n;console.log("datasetValue is "+t),i.show(t),n=t,document.querySelectorAll(".edittaskcancelbtn")[n].addEventListener("click",()=>i.hide(n)),document.querySelectorAll(".edittasksubmitbtn")[n].addEventListener("click",()=>{i.submit(n),i.hide(n),u()})})})}function r(){document.querySelector(".projectlist").innerHTML="",p.forEach((e,t)=>{const n=document.querySelector(".projectlist"),c=document.createElement("div");c.id="exampleProject",c.classList.add("projectexample"),!0===e.active&&c.classList.add("active");const d=document.createElement("div");d.classList.add("exampletextBlock"),d.textContent=e.name,d.dataset.value=t,!0===e.active&&d.classList.add("active");const l=document.createElement("img");l.src="images/trash-icon.png",l.width="20",l.classList.add("exampletrash"),c.appendChild(d),c.appendChild(l),n.appendChild(c)}),function(){let e=p.filter(e=>!0===e.active),t=e[0].name,n=e[0].description;const c=document.querySelector(".projectname"),d=document.querySelector(".projectdescription"),l=document.querySelector(".pnameform"),a=document.querySelector(".pdescform");c.textContent=t,d.textContent=n,l.value=t,a.value=n}(),o()}function u(){document.querySelector("#allTasks").innerHTML="",p.forEach(e=>{e.toDoListItems.forEach((t,n)=>{!0===e.active&&function(e,t){const n=document.querySelector("#allTasks"),c=document.createElement("div");c.classList.add("alllistedtasks"),c.dataset.value=t,c.id="taskContainer";const d=document.createElement("div");d.classList.add("leftdiv");const l=document.createElement("div");l.classList.add("checkbox"),1==e.complete&&l.classList.add("complete");const a=document.createElement("div");a.classList.add("tasktext"),a.textContent=e.name;const i=document.createElement("div");i.classList.add("rightdiv");const o=document.createElement("div");o.classList.add("rightrightdiv");const s=document.createElement("div");s.classList.add("duedatetext"),s.textContent=e.date;const r=document.createElement("img");r.src="images/edit-icon.png",r.width="17",r.classList.add("editimg"),r.id="editTask";const u=document.createElement("img");u.src="images/trash-icon.png",u.width="20",u.classList.add("exampletrash"),u.id="tasktrash",d.appendChild(l),d.appendChild(a),o.appendChild(s),i.appendChild(o),i.appendChild(r),i.appendChild(u),c.appendChild(d),c.appendChild(i),n.appendChild(c);const m=document.createElement("div");m.classList.add("addblock"),m.style.display="none",m.id="editAllTasks",m.dataset.value=t;const p=document.createElement("div");p.classList.add("alllistedtasks"),p.id="editAllListedTasks";const v=document.createElement("div");v.classList.add("div-block-11");const y=document.createElement("div");y.classList.add("editalltasks");const f=document.createElement("div");f.classList.add("edittasksform"),f.classList.add("w-form");const h=document.createElement("form");h.classList.add("edittasksdivform"),h.id="email-form-2";const k=document.createElement("input");k.classList.add("edittaskname"),k.classList.add("w-input"),k.id="field-3",k.setAttribute("type","text"),k.value=e.name;const b=document.createElement("input");b.classList.add("edittaskdate"),b.classList.add("w-input"),b.id="field-4",b.setAttribute("type","text"),b.value=e.date;const S=document.createElement("input");S.classList.add("edittasksubmitbtn"),S.classList.add("w-button"),S.setAttribute("type","submit"),S.value="Submit";const L=document.createElement("div");L.classList.add("edittaskcancelbtn"),L.textContent="Cancel",h.appendChild(k),h.appendChild(b),h.appendChild(S),h.appendChild(L),f.appendChild(h),y.appendChild(f),v.appendChild(y),p.appendChild(v),m.appendChild(p),n.appendChild(m)}(t,n)})}),s()}function m(){r(),u()}let p=[];l.hide(),a.hide(),i.disappear(),d.submitBtn.addEventListener("click",()=>{d.submit(),d.hide()}),l.editBtn.addEventListener("click",l.show),l.cancelBtn.addEventListener("click",l.hide),l.submitBtn.addEventListener("click",()=>{l.submit(),l.hide()}),a.addBtn.addEventListener("click",a.show),a.cancelBtn.addEventListener("click",a.hide),a.submitBtn.addEventListener("click",a.submit),o(),s()}]);