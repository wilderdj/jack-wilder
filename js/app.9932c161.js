(function(){"use strict";var e={1117:function(e,t,n){var a=n(5130),o=n(6768);const r={id:"app"},i=(0,o.Lk)("footer",null,[(0,o.Lk)("p",null,"© 2024 Jack Wilder. All rights reserved.")],-1);function s(e,t,n,a,s,c){const l=(0,o.g2)("router-link"),u=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",r,[(0,o.Lk)("header",null,[(0,o.Lk)("nav",null,[(0,o.bF)(l,{to:"/",class:"nav-link"},{default:(0,o.k6)((()=>[(0,o.eW)("Home")])),_:1}),(0,o.bF)(l,{to:"/about",class:"nav-link"},{default:(0,o.k6)((()=>[(0,o.eW)("About Me")])),_:1}),(0,o.bF)(l,{to:"/contact",class:"nav-link"},{default:(0,o.k6)((()=>[(0,o.eW)("Contact")])),_:1})])]),(0,o.Lk)("main",null,[(0,o.bF)(u)]),i])}var c={name:"App"},l=n(1241);const u=(0,l.A)(c,[["render",s]]);var d=u,v=n(1387);const p={class:"home"},f=(0,o.Fv)('<div class="linkedin-badge" data-v-3ce02e16><div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="jack-wilder" data-version="v1" data-v-3ce02e16><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/jack-wilder?trk=profile-badge" data-v-3ce02e16>Jack Wilder</a></div></div><h1 data-v-3ce02e16>Hi, and Welcome to My Portfolio</h1><section class="intro" data-v-3ce02e16><p data-v-3ce02e16>My name is Jack Wilder. I am an IT Solution Analyst at Sevan Multi-Site Solutions. I have a wide range of experience in creating solutions for stakeholders that ranges from the complete analysis and visualization of client data, to the automation of vital business processes.</p></section><section class="browse" data-v-3ce02e16><p data-v-3ce02e16>Feel free to browse my portfolio and learn more about me.</p></section><section class="github" data-v-3ce02e16><p data-v-3ce02e16>I built this webpage using Vue.js, a progressive JavaScript framework. Vue.js simplifies the development of interactive user interfaces by providing a component-based programming model, building on top of HTML, CSS, and Javascript. This allows for more efficient and maintainable code compared to writing everything from scratch. If you&#39;d like to view the code and see how everything works, please visit my GitHub repository:</p><a href="https://github.com/wilderdj/jack-wilder" target="_blank" class="github-link" data-v-3ce02e16>View my GitHub</a></section>',5),m=[f];function k(e,t,n,a,r,i){return(0,o.uX)(),(0,o.CE)("div",p,m)}var h={name:"HomePage"};const b=(0,l.A)(h,[["render",k],["__scopeId","data-v-3ce02e16"]]);var g=b;const w=e=>((0,o.Qi)("data-v-4ac48706"),e=e(),(0,o.jt)(),e),j={class:"about"},y=w((()=>(0,o.Lk)("h1",null,"About Me",-1))),_=w((()=>(0,o.Lk)("p",null,"I have been working as an IT Solution Analyst/Data Analyst for the last 3 years. Prior to that, I graduated from the University of University of Cincinnati with a degree in Information Systems, supplemented by a major in Marketing and a minor in Business Analytics.",-1))),L=w((()=>(0,o.Lk)("h2",null,"My Resume",-1))),C=w((()=>(0,o.Lk)("div",{class:"resume-container"},[(0,o.Lk)("iframe",{src:"resume-jw.pdf",width:"100%",height:"600px",frameborder:"0"}),(0,o.Lk)("a",{href:"resume-jw.pdf",download:"",class:"download-link"},"Download Resume")],-1))),I=[y,_,L,C];function A(e,t,n,a,r,i){return(0,o.uX)(),(0,o.CE)("div",j,I)}var S={name:"AboutPage"};const P=(0,l.A)(S,[["render",A],["__scopeId","data-v-4ac48706"]]);var E=P,M=n(4232);const O=e=>((0,o.Qi)("data-v-f8d94fc4"),e=e(),(0,o.jt)(),e),X={class:"projects"},F=O((()=>(0,o.Lk)("h1",null,"My Projects",-1))),T=["href"];function H(e,t,n,a,r,i){return(0,o.uX)(),(0,o.CE)("div",X,[F,((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.projects,(e=>((0,o.uX)(),(0,o.CE)("div",{class:"project",key:e.id},[(0,o.Lk)("h2",null,(0,M.v_)(e.title),1),(0,o.Lk)("p",null,(0,M.v_)(e.description),1),(0,o.Lk)("a",{href:e.link,target:"_blank",class:"project-link"},"View Project",8,T)])))),128))])}var W={name:"ProjectsPage",data(){return{projects:[{id:1,title:"Project One",description:"Description of project one.",link:"#"},{id:2,title:"Project Two",description:"Description of project two.",link:"#"}]}}};const x=(0,l.A)(W,[["render",H],["__scopeId","data-v-f8d94fc4"]]);var J=x;const V=e=>((0,o.Qi)("data-v-109909e3"),e=e(),(0,o.jt)(),e),D={class:"skills"},Q=V((()=>(0,o.Lk)("h1",null,"My Skills",-1)));function R(e,t,n,a,r,i){return(0,o.uX)(),(0,o.CE)("div",D,[Q,(0,o.Lk)("ul",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.skills,(e=>((0,o.uX)(),(0,o.CE)("li",{key:e},(0,M.v_)(e),1)))),128))])])}var U={name:"SkillsPage",data(){return{skills:["JavaScript","Vue.js","HTML","CSS"]}}};const z=(0,l.A)(U,[["render",R],["__scopeId","data-v-109909e3"]]);var G=z;const K=e=>((0,o.Qi)("data-v-43250473"),e=e(),(0,o.jt)(),e),B={class:"contact"},Y=K((()=>(0,o.Lk)("h1",null,"Contact Me",-1))),q=K((()=>(0,o.Lk)("p",null,[(0,o.eW)("You can reach me at: "),(0,o.Lk)("a",{href:"mailto:wilderjack99@gmail.com"},"wilderjack99@gmail.com")],-1))),N=[Y,q];function Z(e,t,n,a,r,i){return(0,o.uX)(),(0,o.CE)("div",B,N)}var $={name:"ContactPage"};const ee=(0,l.A)($,[["render",Z],["__scopeId","data-v-43250473"]]);var te=ee;const ne=[{path:"/",name:"Home",component:g},{path:"/about",name:"About",component:E},{path:"/projects",name:"Projects",component:J},{path:"/skills",name:"Skills",component:G},{path:"/contact",name:"Contact",component:te}],ae=(0,v.aE)({history:(0,v.LA)("/jack-wilder/"),routes:ne});var oe=ae;const re=(0,a.Ef)(d);re.use(oe),re.mount("#app")}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={exports:{}};return e[a].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,r){if(!a){var i=1/0;for(u=0;u<e.length;u++){a=e[u][0],o=e[u][1],r=e[u][2];for(var s=!0,c=0;c<a.length;c++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](a[c])}))?a.splice(c--,1):(s=!1,r<i&&(i=r));if(s){e.splice(u--,1);var l=o();void 0!==l&&(t=l)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[a,o,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,r,i=a[0],s=a[1],c=a[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(c)var u=c(n)}for(t&&t(a);l<i.length;l++)r=i[l],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(u)},a=self["webpackChunkmy_vue_project"]=self["webpackChunkmy_vue_project"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[504],(function(){return n(1117)}));a=n.O(a)})();
//# sourceMappingURL=app.9932c161.js.map