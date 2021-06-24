(this["webpackJsonpMatt-Lemke-Portfolio"]=this["webpackJsonpMatt-Lemke-Portfolio"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){},,function(e,t,a){var c={"./Nerd-Words/0.jpg":14,"./Rate-Your-Bootcamp/0.jpg":15,"./Tech-Blog/0.jpg":16};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}n.keys=function(){return Object.keys(c)},n.resolve=r,e.exports=n,n.id=13},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/0.2dc3a1c8.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/0.c7e82f7b.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/0.28a20936.jpg"},function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(6),o=a.n(r),s=(a(11),a(2)),i=a.p+"static/media/profile.fe29c41b.jpeg",l=a(0);var j=function(){return Object(l.jsxs)("section",{className:"my-5",children:[Object(l.jsx)("h1",{id:"about",children:"About Matthew Lemke:"}),Object(l.jsxs)("div",{className:"aboutMe",children:[Object(l.jsx)("img",{id:"profile-pic",src:i,className:"my-2",style:{width:"60%"},alt:"cover"}),Object(l.jsx)("div",{className:"my-2",children:Object(l.jsx)("p",{style:{lineheight:"1.6"},children:"I am 32 years old and currently living in Tulsa OK. I am a Junior Full-Stack Developer who excels in executing team goals with little supervision. Though I am just starting in the industy, I believe I have the self awareness around what I know, and do not know, and the humility and dedication to find the right answers."})})]})]})};var d=function(e){var t=e.projects,a=e.setCurrentProject,c=e.currentProject;return Object(l.jsxs)("header",{className:"flex-row",children:[Object(l.jsx)("h2",{className:"name",href:"/",children:"Matt Lemke"}),Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{className:"flex-row navItems",children:[Object(l.jsx)("li",{className:"mx-2",children:Object(l.jsx)("a",{href:"#about",children:"About Me"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#contact",children:"Contact Me"})}),t.map((function(e){return Object(l.jsx)("li",{className:"mx-1 ".concat(c.name===e.name&&"navActive"),children:Object(l.jsx)("span",{onClick:function(){a(e)},children:e.name})},e.name)}))]})})]})},u=function(e){var t=e.category,n=Object(c.useState)([{name:"Nerd-Words",category:"Nerd-Words",description:"Nerd Words Homepage"},{name:"Tech-Blog",category:"Tech-Blog",description:"Tech Blog Homepage"},{name:"Rate-Your-Bootcamp",category:"Rate-Your-Bootcamp",description:"Rate Your Bootcamp Homepage"}]),r=Object(s.a)(n,1)[0].filter((function(e){return e.category===t}));return Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"flex-row",children:r.map((function(e,c){return Object(l.jsx)("a",{href:"https://github.com/mlemke24",children:Object(l.jsx)("img",{src:a(13)("./".concat(t,"/").concat(c,".jpg")).default,alt:e.name,className:"img-thumbnail mx-1"},e.name)})}))})})};var m=function(e){var t=e.currentProject,a=t.name,c=t.description;return Object(l.jsxs)("section",{children:[Object(l.jsx)("h1",{children:a}),Object(l.jsx)("p",{children:c}),Object(l.jsx)(u,{category:t.name})]})},h=a(3),b=a(5);var p=function(){var e=Object(c.useState)({name:"",email:"",message:""}),t=Object(s.a)(e,2),a=t[0],n=t[1],r=a.name,o=a.email,i=a.message;function j(e){n(Object(b.a)(Object(b.a)({},a),{},Object(h.a)({},e.target.name,e.target.value)))}return Object(l.jsxs)("section",{children:[Object(l.jsx)("h1",{id:"contact","data-testid":"h1tag",children:"Contact me"}),Object(l.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),console.log(a)},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(l.jsx)("input",{type:"text",name:"name",defaultValue:r,onChange:j})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(l.jsx)("input",{type:"email",name:"email",defaultValue:o,onChange:j})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(l.jsx)("textarea",{name:"message",rows:"5",defaultValue:i,onChange:j})]}),Object(l.jsx)("button",{className:"submit","data-testid":"button",type:"submit",children:"Submit"})]})]})};var O=function(){var e=Object(c.useState)([{name:"Nerd-Words",description:"Nerd Words is a game that tests your memory and vocabulary at the same time! See a word for one second, then try to spell that word you just saw. Win or lose, you get the word definition to add more words to your vocabulary."},{name:"Tech-Blog",description:"Tech Blog is a place where you can sign up and talk all things tech!"},{name:"Rate-Your-Bootcamp",description:"With bootcamps popping up everywhere, Rate Your Bootcamp allows you to leave a review for prospective students to get the real 411 behind what they are paying for."}]),t=Object(s.a)(e,1)[0],a=Object(c.useState)(t[0]),n=Object(s.a)(a,2),r=n[0],o=n[1];return Object(l.jsxs)("main",{children:[Object(l.jsx)(d,{projects:t,setCurrentProject:o,currentProject:r}),Object(l.jsx)(j,{}),Object(l.jsx)(m,{currentProject:r}),Object(l.jsx)(p,{})]})},g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),c(e),n(e),r(e),o(e)}))};o.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),g()}],[[17,1,2]]]);
//# sourceMappingURL=main.84908440.chunk.js.map