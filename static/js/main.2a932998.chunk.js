(this.webpackJsonpdashy=this.webpackJsonpdashy||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/migracode-logo.e87ea0c3.png"},function(e,t,a){e.exports=a.p+"static/media/login.3a05bb07.png"},function(e,t,a){e.exports=a.p+"static/media/Screenshot.216f7c0d.png"},function(e,t,a){e.exports=a.p+"static/media/syllabus.dcf38b1f.png"},,,,,function(e,t,a){e.exports=a(25)},,,,,function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(3),l=a.n(r),i=(a(19),a(2)),o=a(6),s=a.n(o),m=a(7),u=a.n(m);var d=function(e){var t=e.onHeaderClick,a=e.logIn,r=["Thiago","Jose","Kamel","Ion"];function l(e){for(;e.toString().length<2;)e="0"+e;return e}var o=Object(n.useState)(new Date),m=Object(i.a)(o,2),d=(m[0],m[1]),v=new Date,E=l(v.getHours())+":"+l(v.getMinutes())+":"+l(v.getSeconds()),f=l(v.getHours());return Object(n.useEffect)((function(){var e=setInterval((function(){d(new Date)}),1e3);return function(){clearInterval(e)}})),c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"greeting"},"Hello ",f<7?r[1]:f>22?r[2]:r[0],", it is ",E," and you have no appointments in your calendar today!"),1===a?c.a.createElement("img",{src:s.a,alt:"logo",onClick:t}):c.a.createElement("img",{src:u.a,alt:"logo",onClick:t}))};function v(e){var t=e.onTabsClick,a=e.logIn,n=e.index;return console.log(n),c.a.createElement("div",{className:"menu",style:{justifyContent:"flex-start"}},c.a.createElement("div",{className:0===n?"tabnameactive":"tabname",onClick:function(){return t(0)}},c.a.createElement("div",null,"Syllabus")),c.a.createElement("div",{className:1===n?"tabnameactive":"tabname"},c.a.createElement("div",{onClick:function(){return t(1)}},"SLACK")),1===a&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:2===n?"tabnameactive":"tabname"},c.a.createElement("div",{onClick:function(){return t(2)}},"Homeworks")),c.a.createElement("div",{className:3===n?"tabnameactive":"tabname"},c.a.createElement("div",{onClick:function(){return t(3)}},"Recordings")),c.a.createElement("div",{className:4===n?"tabnameactive":"tabname"},c.a.createElement("div",{onClick:function(){return t(4)}},"Calendar")),c.a.createElement("div",{className:5===n?"tabnameactive":"tabname"},c.a.createElement("div",{onClick:function(){return t(5)}},"CHAT one2one")),c.a.createElement("div",{className:6===n?"tabnameactive":"tabname"},c.a.createElement("div",{onClick:function(){return t(6)}},"Personal links"))))}var E=a(8),f=a.n(E);var b=function(e){return c.a.createElement("div",{className:"tabcontent"},c.a.createElement("img",{src:f.a,alt:"slack"}))};var g=function(e){return c.a.createElement("div",{className:"tabcontent"},"CHAT")},k=a(9),C=a.n(k);var N=function(){return c.a.createElement("div",{className:"book"}," ",c.a.createElement("img",{src:C.a,alt:"chat"}))};var h=function(e){return c.a.createElement("div",{className:"tabcontent"},"HOMEWORKS")};var p=function(e){return c.a.createElement("div",{className:"tabcontent"},"RECORDINGS (here the links)")},S=a(10),w=a(4),y=a(11),I=a(12),x=a(13);var O=function(e){return c.a.createElement("div",{className:"tabcontent"},c.a.createElement(S.a,{plugins:[w.b,y.a,I.a,x.a],initialView:"dayGridMonth",events:[{title:"MEETING",date:"2020-08-17"},{title:"CLASS",date:"2020-08-19"},{title:"CLASS",date:"2020-08-22"}],dateClick:function(e){alert(e.dateStr)}}))};var H=function(e){return c.a.createElement("div",{className:"tabcontent"},"LINKS")};function j(e){var t=e.index;return c.a.createElement("div",{className:"maincontainer"},{0:c.a.createElement(N,null),1:c.a.createElement(b,null),2:c.a.createElement(h,null),3:c.a.createElement(p,null),4:c.a.createElement(O,null),5:c.a.createElement(g,null),6:c.a.createElement(H,null)}[t])}a(24);var T=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(0),o=Object(i.a)(l,2),s=o[0],m=o[1];return c.a.createElement("div",{className:"all"},c.a.createElement(d,{onHeaderClick:function(){m(0===s?1:0),1===s&&r(0)},logIn:s}),c.a.createElement(v,{onTabsClick:function(e){r(e)},logIn:s,index:a}),c.a.createElement(j,{index:a}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.2a932998.chunk.js.map