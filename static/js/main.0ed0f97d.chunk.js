(this.webpackJsonpadiazx14=this.webpackJsonpadiazx14||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),s=n(4),a=n.n(s),l=n.p+"static/media/me.ee68a24a.webp",o=n.p+"static/media/MidArrow.b5d76927.svg",r=n(0),d=function(){return Object(r.jsxs)("section",{id:"AboutMe",children:[Object(r.jsx)("img",{id:"Me",src:l,alt:""}),Object(r.jsxs)("div",{id:"summary",children:[Object(r.jsx)("h1",{className:"red",children:"//About Me"}),Object(r.jsx)("p",{children:'"I am a proud member of the 46th graduating class of the Vocational Pre-University Institute of Exact Sciences \u201cVladimir Ilich Lenin\u201d in Havana, Cuba. There I received a high-quality education and met the most intellectually-keen and kind-hearted individuals; With whom I forged life-long bonds of friendship and explored my academic interests, eventually finding my passion for Technology and Programming in particular.'}),Object(r.jsx)("p",{children:"In my senior year of high school, I gained admission to the prestigious Mathematics and Computer Science Department at the University of Havana. However, in early 2021, I emigrated to the United States before enrolling. Since then, I have been taking multiple online courses in Math and Programming to cope with my impossibility of going to school as a recent immigrant. Right now, I\u2019m applying to colleges in the USA with the hope of finally having the world-class education I have craved for so much time, through which I hope to become the best engineer and person I can be."}),Object(r.jsx)("p",{children:'Lately, I have been working as a lead developer in a team of freelancers. We produce fully custom web solutions for small businesses. My responsibilities include API Development, Database Design, and Deployment Operations in the back-end; API consuming, UX interactivity, and some CSS styling in the front-end; and general Project Management. My primary goal with this activity is to apply what I learn online and accumulate the necessary experience to land a Programming-related internship next Spring. Check out some of our latest projects below."'})]}),Object(r.jsx)("img",{id:"MidArrow",src:o,alt:""})]})},j=n.p+"static/media/LongArrow.65bf7837.svg",h=n.p+"static/media/ShortArrow.249e0542.svg",m=function(){return Object(r.jsxs)("section",{className:"black",id:"Welcome",children:[Object(r.jsx)("header",{children:Object(r.jsxs)("h1",{id:"Hello",children:[Object(r.jsx)("span",{className:"red",children:"<"}),"Hello"]})}),Object(r.jsx)("main",{children:Object(r.jsxs)("div",{className:"flex-div",children:[Object(r.jsxs)("h2",{className:"red",children:["<Full-Stack Developer",Object(r.jsx)("br",{})]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{className:"red",children:"location = "}),'"Miami, Florida"']}),Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{className:"red",children:"description ="}),' "I am a self-taught full-stack web developer who works as a freelancer, mainly with Django in the back-end and Nextjs in the front-end. I love  building everything custom: having fun implementing every feature and creating the most reliable, scalable, and personalized solutions out of my customers\u2019 needs." ',Object(r.jsx)("span",{className:"red",children:"/>"})]}),Object(r.jsx)("img",{className:"ShortArrow",src:h,alt:""}),Object(r.jsx)("img",{className:"LongArrow",src:j,alt:"arrow"})]})})]})},b=n(2),u=Object(i.createContext)(),g=function(e){var t=Object(i.useState)(!1),n=Object(b.a)(t,2),c=n[0],s=n[1],a=Object(i.useState)(0),l=Object(b.a)(a,2),o=l[0],d=l[1],j=Object(i.useState)(0),h=Object(b.a)(j,2),m=(h[0],h[1],function(){window.scrollY>document.getElementById("Welcome").scrollHeight-100?d(1):d(0)});Object(i.useEffect)((function(){return window.addEventListener("scroll",m),function(){window.removeEventListener("scroll",m)}}),[]);return Object(r.jsx)(u.Provider,{value:{sideMenuActive:c,setSideMenuActive:s,selected:o,handleSelect:function(e,t,n){d(e),s(!1),document.body.style.overflow="auto",n?setTimeout((function(){document.getElementById(t).scrollIntoView()}),1e3):document.getElementById(t).scrollIntoView()}},children:e.children})},x=function(e){var t=e.mobile,n=Object(i.useContext)(u),c=n.selected,s=n.handleSelect;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("li",{className:"Navlink ".concat(1===c?"selected":""),children:[" ",Object(r.jsx)("span",{onClick:function(){return s(1,"AboutMe",t)},children:"About Me"}),"  "]}),Object(r.jsxs)("li",{className:"Navlink ".concat(2===c?"selected":""),children:[" ",Object(r.jsx)("span",{onClick:function(){return s(2,"#Welcome",t)},children:"Projects"})]}),Object(r.jsxs)("li",{className:"Navlink ".concat(3===c?"selected":""),children:[" ",Object(r.jsx)("span",{onClick:function(){return s(3,"#Welcome",t)},children:"Contact"})," "]})]})},O=function(){var e=Object(i.useContext)(u),t=e.sideMenuActive,n=e.setSideMenuActive;return Object(r.jsx)("nav",{children:Object(r.jsxs)("ul",{className:t?"nav-active":"",children:[Object(r.jsxs)("li",{onClick:function(){t?(n(!1),document.body.style.overflow="auto"):(n(!0),document.body.style.overflow="hidden")},children:[Object(r.jsx)("div",{className:"hamline ".concat(t?"ham-active":""),id:"line-1"}),Object(r.jsx)("div",{className:"hamline ".concat(t?"ham-active":""),id:"line-2"}),Object(r.jsx)("div",{className:"hamline ".concat(t?"ham-active":""),id:"line-3"})]}),Object(r.jsx)("li",{children:"Adri\xe1n Vald\xe9s D\xedaz"}),Object(r.jsx)(x,{mobile:!1})]})})},v=n.p+"static/media/LinkedIn.bef81bb7.svg",p=n.p+"static/media/Github.54b068c7.svg",f=n.p+"static/media/RigthArrow.efb0aef0.svg",w=function(){var e=Object(i.useContext)(u).sideMenuActive;return Object(r.jsxs)("div",{id:"side",className:"SideMenu ".concat(e?"active":""),children:[Object(r.jsxs)("ul",{children:[Object(r.jsx)("span",{children:"/*"}),Object(r.jsx)(x,{mobile:!0}),Object(r.jsx)("span",{children:"*/"})]}),Object(r.jsxs)("div",{className:"social",children:[Object(r.jsx)("img",{width:50,height:38,src:f,alt:""}),Object(r.jsx)("a",{href:"https://www.linkedin.com/in/adri%C3%A1n-vald%C3%A9s-d%C3%ADaz-2a10491b7/",children:Object(r.jsx)("img",{src:v,alt:""})}),Object(r.jsx)("a",{href:"https://github.com/adiazx14",children:Object(r.jsx)("img",{src:p,alt:""})})]})]})};n(10),n(11),n(12);var y=function(){return Object(r.jsx)("div",{id:"App",children:Object(r.jsxs)(g,{children:[Object(r.jsx)(O,{}),Object(r.jsx)(w,{}),Object(r.jsx)(m,{}),Object(r.jsx)(d,{})]})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),i(e),c(e),s(e),a(e)}))};a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(y,{})}),document.getElementById("root")),I()}],[[13,1,2]]]);
//# sourceMappingURL=main.0ed0f97d.chunk.js.map