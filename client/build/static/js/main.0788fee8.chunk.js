(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(e,t,a){e.exports=a(267)},150:function(e,t,a){},151:function(e,t,a){},152:function(e,t,a){},154:function(e,t,a){},155:function(e,t,a){},156:function(e,t,a){},157:function(e,t,a){},158:function(e,t,a){},262:function(e,t,a){},267:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(89),o=a.n(c),l=(a(150),a(151),function(){return r.a.createElement("div",{className:"container"},r.a.createElement("nav",null,r.a.createElement("p",{className:"title"},"Behavior Tracker",r.a.createElement("span",null," \u2611")),r.a.createElement("a",{className:"link-item",href:"/charts"},"Table"),r.a.createElement("p",{className:"line"}," | "),r.a.createElement("a",{className:"link-item",href:"/graphs"},"Graph")))}),u=(a(152),function(e){return r.a.createElement("div",{className:"wrapper"},e.children)}),s=a(44),i=a.n(s),d=a(64),m=a(130),h=a(144),f=a(47),E=(a(154),function(e){return r.a.createElement("form",{className:"taskForm"},r.a.createElement("label",null,"Task Entry"),r.a.createElement("input",{type:"text",placeholder:"Add a new task",name:"taskName",value:e.value,onChange:e.onChange,required:!0}),r.a.createElement("button",{type:"submit",onClick:e.submit},"+"))}),y=function(e){return r.a.createElement("div",null,r.a.createElement("input",{name:e.day,defaultChecked:e.dbChecked,onChange:e.onChange,type:"checkbox",checked:e.checked}))},p=function(e){return r.a.createElement("div",null,r.a.createElement("button",e,"\u2717"))},k=(a(155),function(e){return r.a.createElement("div",{className:"hoursForm"},r.a.createElement("input",{type:"text",placeholder:"Approximate hours this week",name:e.taskName+e.id,onChange:function(t){return e.hoursChange(t,e.taskName+e.id)},value:e.hours,size:"28",required:!0}),r.a.createElement("button",{type:"submit",onClick:function(){return e.submit(e.id)}},"Add hours"))}),b=(a(156),function(){var e=Object(n.useState)(""),t=Object(f.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),l=Object(f.a)(o,2),u=l[0],s=l[1],b=Object(n.useState)(""),N=Object(f.a)(b,2),g=N[0],v=N[1],C=function(e,t){var a=e.target,n=a.name,r=a.value;switch(n){case t:v(r)}},w=function(e){var t={hours:g},a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};fetch("/api/data/".concat(e),a).then(function(e){return e.json().then(x(u)).then(function(e){return console.log(e)})}).catch(function(e){return console.log(e)})},j=function(e,t,a){var n=Object(m.a)({},t,a),r={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)};fetch("/api/data/".concat(e),r).then(function(e){return e.json().then(x(u)).then(function(e){return console.log(e)})}).catch(function(e){console.log("request failed"+e)})},x=function(){var e=Object(d.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/data");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,s(a);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){x(u)},[]),r.a.createElement("div",{className:"behvChart"},r.a.createElement(E,{onChange:function(e){var t=e.target.value;c(t)},submit:function(e){e.preventDefault();var t={taskName:a},n={headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(t)};fetch("/api/data",n).then(function(e){return e.json().then(function(e){return s([].concat(Object(h.a)(u),[e]))}).then(function(e){return console.log(e)})}).catch(function(e){console.log("request failed"+e)}),c("")},value:a}),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"Monday"),r.a.createElement("th",null,"Tuesday"),r.a.createElement("th",null,"Wednesday"),r.a.createElement("th",null,"Thursday"),r.a.createElement("th",null,"Friday"),r.a.createElement("th",null,"Saturday"),r.a.createElement("th",null,"Sunday"),r.a.createElement("th",null,"Hours"))),u.map(function(e){return r.a.createElement("tbody",{key:e._id},r.a.createElement("tr",null,r.a.createElement("th",null,e.taskName),r.a.createElement("td",{className:"monday"},r.a.createElement(y,{onChange:function(){return j(e._id,"monday",!e.monday)},dbChecked:e.monday,day:"monday",taskName:e.taskName,id:e._id,submit:w})),r.a.createElement("td",{className:"tuesday"},r.a.createElement(y,{dbChecked:e.tuesday,onChange:function(){return j(e._id,"tuesday",!e.tuesday)},taskName:e.taskName,id:e._id,day:"tuesday"})),r.a.createElement("td",{className:"wednesday"},r.a.createElement(y,{dbChecked:e.wednesday,onChange:function(){return j(e._id,"wednesday",!e.wednesday)},taskName:e.taskName,id:e._id,day:"wednesday"})),r.a.createElement("td",{className:"thursday"},r.a.createElement(y,{dbChecked:e.thursday,onChange:function(){return j(e._id,"thursday",!e.thursday)},taskName:e.taskName,id:e._id,day:"thursday"})),r.a.createElement("td",{className:"friday"},r.a.createElement(y,{dbChecked:e.friday,onChange:function(){return j(e._id,"friday",!e.friday)},taskName:e.taskName,id:e._id,day:"friday"})),r.a.createElement("td",{className:"saturday"},r.a.createElement(y,{dbChecked:e.saturday,onChange:function(){return j(e._id,"saturday",!e.saturday)},taskName:e.taskName,id:e._id,day:"saturday"})),r.a.createElement("td",{className:"sunday"},r.a.createElement(y,{dbChecked:e.sunday,onChange:function(){return j(e._id,"sunday",!e.sunday)},taskName:e.taskName,id:e._id,day:"sunday"})),r.a.createElement(p,{onClick:function(){return t=e._id,void fetch("/api/data/"+t,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json().then(x(u)).then(function(e){return console.log(e)})}).catch(function(e){console.log("request failed"+e)});var t}}),void 0===e.hours?r.a.createElement(k,{hoursChange:C,submit:w,id:e._id,taskName:e.taskName}):r.a.createElement("p",null,e.hours.hours," hours logged this week")))})))}),N=(a(157),function(){return r.a.createElement("div",{className:"main"},r.a.createElement("h4",null,"Welcome to Behavior Tracker!"))}),g=(a(158),a(274)),v=a(277),C=a(272),w=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],c=t[1],o=function(){var e=Object(d.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/data");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c(a);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)(function(){o(a)},[]);return r.a.createElement("div",{className:"chart"},r.a.createElement("h3",null,"This is a static chart, dynamic charts coming soon..."),r.a.createElement(g.a,{domainPadding:50,style:{parent:{maxWidth:"50%",maxHeight:"50%"}}},r.a.createElement(v.a,{tickValues:["Practice React","Clean Litterbox"]}),r.a.createElement(v.a,{dependentAxis:!0,tickValues:[2,4],tickFormat:function(e){return"".concat(Math.round(e)," days")}}),r.a.createElement(C.a,{data:[{task:"Practice React",timesCompleted:2},{task:"Clean Litterbox",timesCompleted:4}],x:"task",y:"timesCompleted"})))},j=(a(262),function(){return r.a.createElement("footer",null,r.a.createElement("p",null,r.a.createElement("span",null,"\u262e"),"gregory rutherford"))}),x=a(141),O=a(35);var _=function(){return r.a.createElement(x.a,null,r.a.createElement("div",{className:"page"},r.a.createElement(l,null),r.a.createElement(u,null,r.a.createElement(O.a,{exact:!0,path:"/",component:N}),r.a.createElement(O.a,{exact:!0,path:"/charts",component:b}),r.a.createElement(O.a,{exact:!0,path:"/graphs",component:w}),r.a.createElement(j,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[145,1,2]]]);
//# sourceMappingURL=main.0788fee8.chunk.js.map