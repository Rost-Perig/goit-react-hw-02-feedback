(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(t,e,a){},17:function(t,e,a){},19:function(t,e,a){"use strict";a.r(e);var n=a(1),c=a.n(n),s=a(5),i=a.n(s),r=(a(15),a(16),a(3)),l=a(6),o=a(7),d=a(10),j=a(9),b=(a(17),a(0)),u=function(t){var e=t.title,a=t.children;return Object(b.jsx)("section",{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h2",{children:e}),a]})})},h=a(2),O=a.n(h),m=function(t){var e=t.state,a=e.good,n=e.neutral,c=e.bad,s=e.total,i=e.posFeedback;return e.isActivated?Object(b.jsxs)("ul",{className:O.a.list,children:[Object(b.jsxs)("li",{className:O.a.listItem,children:["Good: ",a]}),Object(b.jsxs)("li",{className:O.a.listItem,children:["Neutral: ",n]}),Object(b.jsxs)("li",{className:O.a.listItem,children:["Bad: ",c]}),Object(b.jsxs)("li",{className:O.a.listItem,children:["Total: ",s]}),Object(b.jsxs)("li",{className:O.a.listItem,children:["Positive feedback: ",i,"%"]})]}):Object(b.jsx)("p",{className:O.a.noGiven,children:"No feedback given"})},p=a(8),v=a.n(p),f=function(t){var e=t.keysArr,a=t.incrementFoo;return Object(b.jsx)("div",{children:e.map((function(t){return Object(b.jsx)("button",{type:"button",className:v.a.btn,"data-type":t,onClick:a,children:function(t){var e=t.split("");return e.splice(0,1,e[0].toUpperCase()),e.join("")}(t)},t)}))})},x=function(t){Object(d.a)(a,t);var e=Object(j.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.originalKeys=Object.keys(t.state),t.valueIncrement=function(e){var a=e.target.dataset.type;t.setState((function(t){var e;return e={},Object(r.a)(e,a,t[a]+1),Object(r.a)(e,"total",t.good+t.neutral+t.bad+1),Object(r.a)(e,"posFeedback",Math.round((t.good+("good"===a&&1))/((t.total||0)+1)*100)),Object(r.a)(e,"isActivated",!0),e}))},t}return Object(o.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(u,{title:"Please leave feedback",children:Object(b.jsx)(f,{keysArr:this.originalKeys,incrementFoo:this.valueIncrement})}),Object(b.jsx)(u,{title:"Statistics",children:Object(b.jsx)(m,{state:this.state})})]})}}]),a}(n.Component),k=x;i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root")),console.log("\u041f\u0440\u0438\u0432\u0456\u0442, \u0441\u0432\u0456\u0442! \u0416\u0438\u0442\u0442\u044f \u0445\u0438\u043c\u0435\u0440\u043d\u0435!")},2:function(t,e,a){t.exports={list:"Statistics_list__3L6Ul",listItem:"Statistics_listItem__6GLrW",noGiven:"Statistics_noGiven__1-h1D"}},8:function(t,e,a){t.exports={btn:"FeedbackOptions_btn__1B0VC"}}},[[19,1,2]]]);
//# sourceMappingURL=main.843061a0.chunk.js.map