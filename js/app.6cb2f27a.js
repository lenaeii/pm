(function(){"use strict";var e={5796:function(e,t,n){var r=n(9242),o=n(3396),i=n(7139);function a(e,t,n,r,a,u){const c=(0,o.up)("SideBar"),l=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(c),(0,o._)("div",{style:(0,i.j5)({"margin-left":r.sidebarWidth})},[(0,o.Wm)(l)],4)],64)}var u=n.p+"img/im_logo.d09203df.png";const c=e=>((0,o.dD)("data-v-688371bc"),e=e(),(0,o.Cn)(),e),l={key:0},s=c((()=>(0,o._)("img",{class:"ImLogo",src:u},null,-1))),d=[s],p={key:1},f=c((()=>(0,o._)("img",{class:"ImLogo",src:u},null,-1))),v=c((()=>(0,o._)("i",{class:"fas fa-angle-double-left"},null,-1))),h=[v];function m(e,t,n,r,a,u){const c=(0,o.up)("SidebarLink");return(0,o.wg)(),(0,o.iD)("div",{class:"SideBar",style:(0,i.j5)({width:r.sidebarWidth})},[(0,o._)("h1",null,[r.collapsed?((0,o.wg)(),(0,o.iD)("span",l,d)):((0,o.wg)(),(0,o.iD)("span",p,[(0,o.Uk)("Inductive Miner "),f]))]),(0,o.Wm)(c,{to:"/",icon:"fas fa-home"},{default:(0,o.w5)((()=>[(0,o.Uk)("Home")])),_:1}),(0,o.Wm)(c,{to:"/studenteducation",icon:"fas fa-chalkboard-user"},{default:(0,o.w5)((()=>[(0,o.Uk)("Education")])),_:1}),(0,o.Wm)(c,{to:"/projectdoc",icon:"fas fa-book"},{default:(0,o.w5)((()=>[(0,o.Uk)("Documentation")])),_:1}),(0,o._)("span",{class:(0,i.C_)(["collapse-icon",{"rotate-180":r.collapsed}]),onClick:t[0]||(t[0]=(...e)=>r.toggleSidebar&&r.toggleSidebar(...e))},h,2)],4)}const g={key:0};function b(e,t,n,a,u,c){const l=(0,o.up)("router-link");return(0,o.wg)(),(0,o.j4)(l,{to:n.to,class:(0,i.C_)(["link",{active:a.isActive}])},{default:(0,o.w5)((()=>[(0,o._)("i",{class:(0,i.C_)(["icon",n.icon])},null,2),(0,o.Wm)(r.uT,{name:"fade"},{default:(0,o.w5)((()=>[a.collapsed?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("span",g,[(0,o.WI)(e.$slots,"default",{},void 0,!0)]))])),_:3})])),_:3},8,["to","class"])}var k=n(2483),_=n(4870);const w=(0,_.iH)(!1),y=()=>w.value=!w.value,S=180,C=40,x=(0,o.Fl)((()=>`${w.value?C:S}px`));var j={props:{to:{type:String,required:!0},icon:{type:String,required:!0}},setup(e){const t=(0,k.yj)(),n=(0,o.Fl)((()=>t.path===e.to));return{isActive:n,collapsed:w}}},O=n(89);const P=(0,O.Z)(j,[["render",b],["__scopeId","data-v-4ba0996f"]]);var T=P,W={props:{},components:{SidebarLink:T},setup(){return{collapsed:w,toggleSidebar:y,sidebarWidth:x}}};const I=(0,O.Z)(W,[["render",m],["__scopeId","data-v-688371bc"]]);var D=I,A={components:{SideBar:D},setup(){return{sidebarWidth:x}}};const E=(0,O.Z)(A,[["render",a]]);var N=E;function B(e,t,n,r,i,a){const u=(0,o.up)("InductiveMiner");return(0,o.wg)(),(0,o.j4)(u)}var L=n.p+"img/uni_mannheim.5eeb776f.png";const F=(0,o._)("header",{class:"header1"},"Inductive Miner",-1),Z=(0,o._)("div",{class:"background"},null,-1),H=(0,o._)("div",{class:"background-description"},null,-1),U=(0,o._)("div",{class:"background-dfg"},null,-1),M={class:"background-process-tree"},q=["disabled"],$=(0,o._)("img",{class:"uni-mannheim",src:L},null,-1),z={key:0,class:"popup-frame"},Y={class:"popup-input"},K=(0,o._)("h2",null,"Legende",-1),R=(0,o._)("p",null,"....",-1);function V(e,t,n,r,i,a){const u=(0,o.up)("ProcessTree");return(0,o.wg)(),(0,o.iD)(o.HY,null,[F,Z,H,U,(0,o._)("div",M,[(0,o.Wm)(u)]),(0,o._)("div",null,[(0,o._)("button",{class:"back",onClick:t[0]||(t[0]=(...e)=>a.stepBackward&&a.stepBackward(...e))},"Back")]),(0,o._)("div",null,[(0,o._)("button",{class:"next",onClick:t[1]||(t[1]=(...e)=>a.stepForward&&a.stepForward(...e)),disabled:e.currentStep>=e.maxSteps},"Next",8,q)]),(0,o._)("div",null,[(0,o._)("button",{class:"file-upload",onClick:t[2]||(t[2]=(...e)=>a.handleClick&&a.handleClick(...e))},"Select File"),(0,o._)("input",{type:"file",ref:"fileInput",onChange:t[3]||(t[3]=(...e)=>a.handleChange&&a.handleChange(...e)),style:{display:"none"}},null,544)]),$,(0,o._)("div",null,[(0,o._)("button",{class:"popup-button",onClick:t[4]||(t[4]=e=>i.showPopup=!0)},"Legende"),i.showPopup?((0,o.wg)(),(0,o.iD)("div",z,[(0,o._)("div",Y,[K,R,(0,o._)("button",{onClick:t[5]||(t[5]=e=>i.showPopup=!1)},"Close")])])):(0,o.kq)("",!0)])],64)}const X={class:"container"},G=["src"],J={style:{padding:"4px 0","font-weight":"bold"}},Q={style:{display:"flex"}};function ee(e,t,n,r,a,u){const c=(0,o.up)("vue-tree"),l=(0,o.up)("v-btn");return(0,o.wg)(),(0,o.iD)("div",X,[(0,o.Wm)(c,{style:{width:"700px",height:"721px"},dataset:a.PTNode,config:a.treeConfig},{node:(0,o.w5)((({node:e,collapsed:t})=>[(0,o._)("div",{class:"PTNode",style:(0,i.j5)({border:t?"2px solid grey":""})},[(0,o._)("img",{src:e.avatar,style:{"border-radius":"4px",height:"55px",width:"55px"}},null,8,G),(0,o._)("span",J,(0,i.zw)(e.value),1)],4)])),_:1},8,["dataset","config"]),(0,o._)("div",Q,[(0,o.Wm)(l,{onClick:t[0]||(t[0]=e=>u.controlScale("ZoomIn"))},{default:(0,o.w5)((()=>[(0,o.Uk)("+")])),_:1}),(0,o.Wm)(l,{onClick:t[1]||(t[1]=e=>u.controlScale("ZoomOut"))},{default:(0,o.w5)((()=>[(0,o.Uk)("-")])),_:1}),(0,o.Wm)(l,{onClick:t[2]||(t[2]=e=>u.controlScale("restoreScale"))},{default:(0,o.w5)((()=>[(0,o.Uk)("1:1")])),_:1})])])}var te=n(893),ne=n.n(te),re={name:"ProcessTree",components:{VueTree:ne()},methods:{controlScale(e){switch(e){case"ZoomIn":this.$refs.tree.zoomIn();break;case"ZoomOut":this.$refs.tree.zoomOut();break;case"restoreScale":this.$refs.tree.restoreScale();break}}},data(){return{PTNode:{value:800,children:[{avatar:n(9417),value:"A",children:[{value:100,avatar:n(633)},{value:300},{value:200}]},{value:200,children:[{value:230}]},{value:300}]},treeConfig:{nodeWidth:120,nodeHeight:80,levelHeight:200}}}};const oe=(0,O.Z)(re,[["render",ee],["__scopeId","data-v-d2651854"]]);var ie=oe,ae={components:{ProcessTree:ie},methods:{handleClick(){this.$refs.fileInput.click()},handleChange(e){const t=e.target.files[0];console.log(t)},stepForward(){this.currentStep<this.maxSteps&&this.currentStep++},stepBackward(){this.currentStep>1&&this.currentStep--},data(){return{currentStep:1,maxSteps:4}}},data(){return{showPopup:!1,title:"description",message:"Sample Text"}}};const ue=(0,O.Z)(ae,[["render",V]]);var ce=ue,le={name:"HomeScreen",components:{InductiveMiner:ce}};const se=(0,O.Z)(le,[["render",B]]);var de=se;const pe=[{path:"/",name:"HomeScreen",component:de},{path:"/studenteducation",name:"StudentEducation",component:()=>n.e(920).then(n.bind(n,7920))},{path:"/projectdoc",name:"ProjectDoc",component:()=>n.e(273).then(n.bind(n,1273))}],fe=(0,k.p7)({history:(0,k.PO)("/"),routes:pe});var ve=fe;n(1129);(0,r.ri)(N).use(ve).mount("#app")},633:function(e,t,n){e.exports=n.p+"img/AND.56429948.png"},9417:function(e,t,n){e.exports=n.p+"img/XOR.82e7bfc0.png"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],i=e[s][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(s--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{273:"4f3a9680",920:"d2744d4a"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".7342461e.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="im-app:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var d=l[s];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){u=d;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=r),e[r]=[o];var p=function(t,n){u.onerror=u.onload=null,clearTimeout(f);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=p.bind(null,u.onerror),u.onload=p.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var a=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,i.parentNode.removeChild(i),o(c)}};return i.onerror=i.onload=a,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),u=n.p+a;if(t(a,u))return o();e(r,u,null,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={920:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),u=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],u=r[1],c=r[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var s=c(n)}for(t&&t(r);l<a.length;l++)i=a[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(s)},r=self["webpackChunkim_app"]=self["webpackChunkim_app"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(5796)}));r=n.O(r)})();
//# sourceMappingURL=app.6cb2f27a.js.map