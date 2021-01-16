(this["webpackJsonplanddox-react-code-challenge"]=this["webpackJsonplanddox-react-code-challenge"]||[]).push([[0],{23:function(e,n,t){},36:function(e,n,t){e.exports=t(55)},41:function(e,n,t){},43:function(e,n,t){},55:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(25),i=t.n(l),c=(t(41),t(58)),o=t(59),u=t(27),d=t(60),m=t(62),s=(t(42),t(43),t(32)),p=t(64),v=t(63),E=t(57),f=t(26),h=t(9),b=t(10);h.b.add(b.a,b.b,b.c,b.d);var w=function(e){var n=function(e){switch(e){case"add":return{icon:"plus"};case"indent":return{icon:"level-up-alt",rotation:90};case"remove":return{icon:"minus-circle"};case"smile":return{icon:"smile"}}}(e.icon);return r.a.createElement(f.a,n)},g=(t(23),t(61)),I=t(34),N=t(56);var O=function(e){var n=e.children,t=Object(I.a)(e,["children"]);return r.a.createElement(N.a,null,r.a.createElement(g.a.Control,t),r.a.createElement(N.a.Append,null,r.a.createElement(N.a.Text,null,n)))},y=function(e){var n=e.value,t=e.onUpdate,a=void 0===t?function(){return function(){}}:t,l=e.onRemove,i=void 0===l?function(){}:l,c=Object(p.a)().t;return r.a.createElement("tr",null,r.a.createElement("td",{className:"readable-cell"},r.a.createElement(g.a.Control,{type:"text",placeholder:c("Owner"),defaultValue:n.owner,onChange:a("owner")})),r.a.createElement("td",{className:"readable-cell"},r.a.createElement(O,{type:"number",step:"0.01",placeholder:c("Interest"),defaultValue:n.interest,onChange:a("interest")},"%")),r.a.createElement("td",null),r.a.createElement("td",{className:"readable-cell"},r.a.createElement(g.a.Control,{type:"text",placeholder:c("Lease"),defaultValue:n.lease,onChange:a("lease")})),r.a.createElement("td",null,r.a.createElement(v.a,{variant:"light",onClick:i},w({icon:"remove"}))))},C=function(e){var n=e.value,t=e.onUpdate,a=void 0===t?function(){return function(){}}:t,l=e.onRemove,i=void 0===l?function(){}:l,c=Object(p.a)().t;return r.a.createElement("tr",null,r.a.createElement("td",{className:"readable-cell"},r.a.createElement(N.a,null,r.a.createElement(N.a.Prepend,null,r.a.createElement(N.a.Text,{className:"bg-transparent border-0"},r.a.createElement(w,{icon:"indent"}))),r.a.createElement(g.a.Control,{type:"text",placeholder:c("Owner"),defaultValue:n.owner,onChange:a("owner")}))),r.a.createElement("td",null),r.a.createElement("td",{className:"readable-cell"},r.a.createElement(O,{type:"number",step:"0.01",placeholder:c("Interest"),defaultValue:n.interest,onChange:a("interest")},"%")),r.a.createElement("td",null),r.a.createElement("td",null,r.a.createElement(v.a,{variant:"light",onClick:i},r.a.createElement(w,{icon:"remove"}))))},x=function(e){var n=e.value,t=void 0===n?[]:n,a=e.onChange,l=Object(p.a)().t,i=[{text:l("Owner")},{text:l("Mineral Interest")},{text:l("NPRI")},{text:l("Lease"),colSpan:2}].map((function(e){var n=e.text,t=e.colSpan;return r.a.createElement("th",{key:n,colSpan:t},n)}));return r.a.createElement(E.a,{responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,i)),r.a.createElement("tbody",null,t.flatMap((function(e){return[r.a.createElement(y,{key:e.id,value:e,onUpdate:function(n){return function(t){return a.updateMineral({mineralId:e.id,propertyName:n,newValue:t.currentTarget.value})}},onRemove:function(){return a.removeMineral({mineralId:e.id})}})].concat(Object(s.a)(e.npris.map((function(n){return r.a.createElement(C,{key:n.id,value:n,onUpdate:function(t){return function(r){return a.updateNpri({mineralId:e.id,npriId:n.id,propertyName:t,newValue:r.currentTarget.value})}},onRemove:function(){return a.removeNpri({mineralId:e.id,npriId:n.id})}})}))),[r.a.createElement("tr",null,r.a.createElement("td",{className:"text-right"},r.a.createElement(v.a,{variant:"light",onClick:function(){return a.addNpri({mineralId:e.id})}},r.a.createElement(w,{icon:"add"})," Add NPRI")),r.a.createElement("td",{colSpan:5}))])})),r.a.createElement("tr",null,r.a.createElement("td",{className:"text-right"},r.a.createElement(v.a,{variant:"light",onClick:a.addMineral},r.a.createElement(w,{icon:"add"})," Add Mineral Interest")),r.a.createElement("td",{colSpan:5}))))},k=t(21),j=t(31),M=t(33);function V(){return{id:Object(m.a)(),interest:0,owner:""}}var S=function(e){return{is:function(n){return function(t){return t[e]===n}},isNot:function(n){return function(t){return t[e]!==n}}}};var L=function(e){var n=Object(a.useState)(e),t=Object(M.a)(n,2),r=Object(j.a)(t[0]).slice(0),l=t[1],i=function(e){return r.find(S("id").is(e))},c={addMineral:function(){r.push(Object(k.a)(Object(k.a)({},V()),{},{npris:[],lease:""})),l(r)},removeMineral:function(e){var n=e.mineralId;l(r.filter(S("id").isNot(n)))},updateMineral:function(e){var n=e.mineralId,t=e.propertyName,a=e.newValue,c=i(n);c&&("interest"===t?c.interest=parseFloat(a):c[t]=a,l(r))},addNpri:function(e){var n=e.mineralId,t=i(n);null===t||void 0===t||t.npris.push(V()),l(r)},removeNpri:function(e){var n=e.mineralId,t=e.npriId,a=i(n);a&&(a.npris=null===a||void 0===a?void 0:a.npris.filter(S("id").isNot(t))),l(r)},updateNpri:function(e){var n=e.mineralId,t=e.npriId,a=e.propertyName,c=e.newValue,o=i(n),u=null===o||void 0===o?void 0:o.npris.find(S("id").is(t));u&&("interest"===a?u.interest=parseFloat(c):u[a]=c,l(r))}};return{state:r,handlers:c}},R=[{id:Object(m.a)(),owner:"Luke Skywalker",interest:.5,lease:"Tatooine Lease",npris:[{id:Object(m.a)(),owner:"Leia Organa",interest:.45},{id:Object(m.a)(),owner:"Han Solo",interest:.15}]}];var P=function(){var e=L(R),n=e.state,t=e.handlers;return r.a.createElement(c.a,null,r.a.createElement(o.a,null,r.a.createElement(u.a,null,r.a.createElement(d.a,null,r.a.createElement("h1",null,"Landdox Code Challenge ",r.a.createElement(w,{icon:"smile"}))))),r.a.createElement(o.a,null,r.a.createElement(u.a,null,r.a.createElement(x,{value:n,onChange:t}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=t(20),U=t(11);T.a.use(U.e).init({resources:{en:{translation:{Owner:"Owner","Mineral Interest":"Mineral Interest",NPRI:"NPRI",Lease:"Lease"}}},lng:"en",keySeparator:!1,interpolation:{escapeValue:!1}});T.a;i.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.ca5732ef.chunk.js.map