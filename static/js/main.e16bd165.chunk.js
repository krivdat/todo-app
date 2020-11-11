(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),i=n.n(s),a=n(6),l=n.n(a),o=(n(13),n(7)),r=n(3);function d(e){return Object(c.jsx)("div",{className:"insert-form",children:Object(c.jsxs)("form",{onSubmit:e.onInsertSubmit,children:[Object(c.jsx)("label",{className:"input-label",htmlFor:"task-desc",children:"Task description:"}),Object(c.jsx)("input",{className:"input-text",type:"text",id:"task-desc",name:"task-desc",value:e.inputDesc,onChange:e.onInputChange}),Object(c.jsx)("div",{className:"form-validation",children:e.validation}),Object(c.jsxs)("div",{className:"form-footer",children:[Object(c.jsx)("label",{classname:"input-label",htmlFor:"cat-sel",children:"Select list:"}),Object(c.jsxs)("select",{id:"cat-sel",className:"category-selector",onChange:e.onCategoryChange,children:[Object(c.jsx)("option",{value:"main",children:"default"}),Object(c.jsx)("option",{value:"shopping",children:"shopping"}),Object(c.jsx)("option",{value:"coding",children:"coding"})]}),Object(c.jsx)("button",{className:"btn btn-submit",type:"submit",children:"Insert task"})]})]})})}function j(e){return e.todoItems.length>0?Object(c.jsxs)("div",{className:"list-items",children:[Object(c.jsx)("ul",{children:e.todoItems.filter((function(t){return t.category===e.selectedCategory})).map((function(t){return Object(c.jsxs)("li",{children:[Object(c.jsx)("span",{className:"item-description",children:t.desc}),Object(c.jsx)("span",{className:"icon icon-delete",onClick:function(){return e.onDeleteTask(t.id)},alt:"delete task"})]},t.id)}))}),Object(c.jsx)("div",{className:"list-footer",children:Object(c.jsx)("button",{className:"btn btn-danger",onClick:e.onDeleteAll,children:"delete all tasks"})})]}):null}function u(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),n=t[0],i=t[1],a=Object(s.useState)(""),l=Object(r.a)(a,2),u=l[0],b=l[1],O=Object(s.useState)("default"),m=Object(r.a)(O,2),f=m[0],h=m[1],p=Object(s.useState)(!0),g=Object(r.a)(p,2),x=g[0],v=g[1];return Object(s.useEffect)((function(){i(JSON.parse(localStorage.getItem("todoList"))||[])}),[]),Object(s.useEffect)((function(){localStorage.setItem("todoList",JSON.stringify(n))}),[n]),Object(c.jsxs)("div",{className:"todo-list",children:[Object(c.jsx)(d,{inputDesc:u,validation:x,onInsertSubmit:function(e){if(e.preventDefault(),u){var t=[].concat(Object(o.a)(n),[{id:Date.now(),desc:u,category:f}]);i(t),b(""),v("")}else v("Task description cannot be empty!")},onInputChange:function(e){b(e.target.value),v("")},onCategoryChange:function(e){h(e.target.value)}}),Object(c.jsx)("div",{className:"filter-form hidden",children:"filter-form"}),Object(c.jsx)(j,{todoItems:n,selectedCategory:f,onDeleteTask:function(e){var t=n.filter((function(t){return t.id!==e}));i(t)},onDeleteAll:function(){i([])}})]})}function b(){return Object(c.jsx)("div",{className:"navbar",children:Object(c.jsx)("h1",{children:"Personal TODO List App"})})}var O=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(b,{}),Object(c.jsx)(u,{})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};l.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),m()}},[[14,1,2]]]);
//# sourceMappingURL=main.e16bd165.chunk.js.map