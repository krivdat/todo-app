(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),i=n.n(s),a=n(6),r=n.n(a),l=(n(13),n(7)),d=n(4);function o(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),n=t[0],i=t[1],a=Object(s.useState)(""),r=Object(d.a)(a,2),o=r[0],j=r[1],b=Object(s.useState)(""),u=Object(d.a)(b,2),m=u[0],O=u[1];return Object(c.jsxs)("div",{className:"todo-list",children:[Object(c.jsx)("div",{className:"insert-form",children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o?(i([].concat(Object(l.a)(n),[{id:new Date,desc:o}])),j(""),O("")):O("Task description cannot be empty!")},children:[Object(c.jsx)("label",{className:"input-label",htmlFor:"task-desc",children:"Task description:"}),Object(c.jsx)("input",{className:"input-text",type:"text",id:"task-desc",name:"task-desc",value:o,onChange:function(e){return function(e){j(e.target.value),O("")}(e)}}),Object(c.jsxs)("div",{className:"form-footer",children:[Object(c.jsx)("button",{className:"btn btn-submit",type:"submit",children:"Insert task"}),Object(c.jsx)("div",{className:"form-validation",children:m})]})]})}),Object(c.jsx)("div",{className:"filter-form hidden",children:"filter-form"}),Object(c.jsx)("div",{className:"list-items",children:Object(c.jsx)("ul",{children:n.map((function(e){return Object(c.jsxs)("li",{children:[Object(c.jsx)("span",{className:"item-description",children:e.desc}),Object(c.jsx)("span",{className:"icon icon-delete",onClick:function(){return t=e.id,void i(n.filter((function(e){return e.id!==t})));var t},alt:"delete task"})]},"item.id")}))})})]})}function j(){return Object(c.jsx)("div",{className:"navbar",children:Object(c.jsx)("h1",{children:"Personal TODO List App"})})}var b=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(j,{}),Object(c.jsx)(o,{})]})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(b,{})}),document.getElementById("root")),u()}},[[14,1,2]]]);
//# sourceMappingURL=main.d37734ec.chunk.js.map