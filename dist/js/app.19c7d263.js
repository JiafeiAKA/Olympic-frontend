(function(){"use strict";var e={970:function(e,t,n){var o=n(5130),r=n(6768),i=(0,r.pM)({__name:"App",setup(e){return(e,t)=>{const n=(0,r.g2)("router-link"),o=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("nav",null,[(0,r.bF)(n,{to:"/"},{default:(0,r.k6)((()=>t[0]||(t[0]=[(0,r.eW)("Home")]))),_:1}),t[2]||(t[2]=(0,r.eW)(" | ")),(0,r.bF)(n,{to:"/about"},{default:(0,r.k6)((()=>t[1]||(t[1]=[(0,r.eW)("About")]))),_:1})]),t[3]||(t[3]=(0,r.Lk)("div",{class:"bg-blue-500 text-white p-4"}," Tailwind CSS is working! ",-1)),(0,r.bF)(o)],64)}}});const a=i;var u=a,c=n(4458);(0,c.k)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var l=n(1387),s=n(4373);const d="http://localhost:8080/api/althletes";var f={getOlympic(){return s.A.get(d)}},p=n(144),v=n(4232);const m={class:"flex items-center border-b py-2 mx-10 justify-around"},g={class:"w-4 text-sm font-medium text-gray-900"},b={class:"w-20 px-2 text-base font-medium text-left"},h={class:"w-8 px-2 text-md"},y={class:"w-8 px-2 text-md"},k={class:"w-8 px-2 text-md"},w={class:"w-8 px-2 text-md md:font-bold"};var x=(0,r.pM)({__name:"CardComponent",props:{olympicsdetail:{},index:{}},setup(e){const t=e;return(e,n)=>((0,r.uX)(),(0,r.CE)("div",m,[(0,r.Lk)("div",g,(0,v.v_)(t.index+1),1),n[0]||(n[0]=(0,r.Lk)("div",{class:"w-8 px-2"},[(0,r.Lk)("p",null,"Flag")],-1)),(0,r.Lk)("div",b,(0,v.v_)(t.olympicsdetail.NOC),1),(0,r.Lk)("div",h,(0,v.v_)(t.olympicsdetail.Gold),1),(0,r.Lk)("div",y,(0,v.v_)(t.olympicsdetail.Silver),1),(0,r.Lk)("div",k,(0,v.v_)(t.olympicsdetail.Bronze),1),(0,r.Lk)("div",w,(0,v.v_)(t.olympicsdetail.Total),1),n[1]||(n[1]=(0,r.Lk)("div",{class:"w-8 px-2 text-md cursor-pointer"},[(0,r.Lk)("i",{class:"bi bi-plus-circle-fill icon-plus"})],-1))]))}});const _=x;var O=_,L=(0,r.pM)({__name:"OylmpicMainPage",setup(e){const t=(0,p.KR)(null);async function n(){try{const e=await f.getOlympic();t.value=e.data}catch(e){console.log("Error fetch data main page ",e)}t.value?.sort(((e,t)=>{const n=e.Total,o=t.Total;return o-n}))}return n(),(e,n)=>((0,r.uX)(),(0,r.CE)(r.FK,null,[n[0]||(n[0]=(0,r.Lk)("div",{class:"container mx-auto px-4 py-8"},[(0,r.Lk)("div",{class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"})],-1)),((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(t.value,((e,t)=>((0,r.uX)(),(0,r.Wv)(O,{key:e.NOC,olympicsdetail:e,index:t},null,8,["olympicsdetail","index"])))),128))],64))}});const C=L;var j=C;const E=[{path:"/",name:"home",component:j},{path:"/about",name:"about",component:()=>n.e(594).then(n.bind(n,5609))}],A=(0,l.aE)({history:(0,l.LA)("/"),routes:E});var F=A,T=n(782),S=(0,T.y$)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,o.Ef)(u).use(S).use(F).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(s=0;s<e.length;s++){o=e[s][0],r=e[s][1],i=e[s][2];for(var u=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(s--,1);var l=r();void 0!==l&&(t=l)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.5caace72.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-frontend-product:";n.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var u,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var d=l[s];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+i){u=d;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=o),e[o]=[r];var f=function(t,n){u.onerror=u.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={524:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(t),u=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,r[1](u)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],u=o[1],c=o[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(c)var s=c(n)}for(t&&t(o);l<a.length;l++)i=a[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(s)},o=self["webpackChunkvue_frontend_product"]=self["webpackChunkvue_frontend_product"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(970)}));o=n.O(o)})();
//# sourceMappingURL=app.19c7d263.js.map