(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var a=c(6),s=c.n(a),n=c(2),l=c(1),r=(c(11),c(12),c(0)),i=function(e){var t=e.todos,c=e.handleOpenTodo,a=e.selectedTodo;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){var t=e.id,s=e.title,n=e.completed;return Object(r.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(r.jsx)("td",{className:"is-vcentered",children:t}),Object(r.jsx)("td",{className:"is-vcentered",children:n&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:n?"has-text-success":"has-text-danger",children:s})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas ".concat((null===a||void 0===a?void 0:a.id)===t?"fa-eye-slash":"fa-eye")})})})})]},t)}))})]})},o=function(e){var t=e.query,c=e.setQuery,a=e.setTodosCategory;return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){return a(e.target.value)},defaultValue:"all",children:[Object(r.jsx)("option",{value:"all",children:"All"}),Object(r.jsx)("option",{value:"active",children:"Active"}),Object(r.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(r.jsxs)("div",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return c(e.target.value)}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})},d=(c(14),function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})}),j=c(5),u=c(3),b=c.n(u),h="https://mate-academy.github.io/react_dynamic-list-of-todos/api";function O(e){return new Promise((function(t){setTimeout(t,e)}))}function m(){return(m=Object(j.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(1e3);case 2:return e.next=4,fetch("".concat(h,"/todos.json"));case 4:return t=e.sent,c=t.json(),e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return(x=Object(j.a)(b.a.mark((function e(t){var c,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(1e3);case 2:return e.next=4,fetch("".concat(h,"/users/").concat(t,".json"));case 4:return c=e.sent,a=c.json(),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f=function(e){var t=e.todo,c=e.handleCloseTodo,a=Object(l.useState)(),s=Object(n.a)(a,2),i=s[0],o=s[1],j=Object(l.useState)(!0),u=Object(n.a)(j,2),b=u[0],h=u[1],O=t.title,m=t.id,f=t.userId,p=t.completed;return Object(l.useEffect)((function(){h(!0),function(e){return x.apply(this,arguments)}(f).then(o).catch((function(e){return e.message})).finally((function(){return h(!1)}))}),[]),Object(r.jsxs)("div",{className:"modal ".concat(t&&"is-active"),"data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),b?Object(r.jsx)(d,{}):Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(m)}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:O}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(r.jsx)("strong",{className:p?"has-text-success":"has-text-danger",children:p?"Done":"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:".concat(null===i||void 0===i?void 0:i.email),children:null===i||void 0===i?void 0:i.name})]})]})]})]})},p=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],a=t[1],s=Object(l.useState)(c),j=Object(n.a)(s,2),u=j[0],b=j[1],h=Object(l.useState)(!0),O=Object(n.a)(h,2),x=O[0],p=O[1],v=Object(l.useState)(null),N=Object(n.a)(v,2),y=N[0],g=N[1],k=Object(l.useState)(""),w=Object(n.a)(k,2),C=w[0],T=w[1],S=Object(l.useState)("all"),E=Object(n.a)(S,2),_=E[0],L=E[1];Object(l.useEffect)((function(){p(!0),function(){return m.apply(this,arguments)}().then((function(e){a(e),b(e)})).catch((function(e){return e.message})).finally((function(){return p(!1)}))}),[]),Object(l.useEffect)((function(){var e=c;switch(_){case"completed":e=c.filter((function(e){return e.completed}));break;case"active":e=c.filter((function(e){return!e.completed}))}if(C){var t=C.toLowerCase();e=e.filter((function(e){return e.title.toLowerCase().includes(t)}))}b(e)}),[C,_,c]);var B=function(e){g(y?null:e)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(o,{query:C,setQuery:T,setTodosCategory:L})}),Object(r.jsx)("div",{className:"block",children:x?Object(r.jsx)(d,{}):Object(r.jsx)(i,{todos:u,handleOpenTodo:B,selectedTodo:y})})]})})}),y&&Object(r.jsx)(f,{todo:y,handleCloseTodo:B})]})};s.a.render(Object(r.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.0380fda5.chunk.js.map