(function(){"use strict";var e={6465:function(e,n,t){var r=t(9242),o=t(3396),i=t(4870);const a=["src","width","height"],l={name:"GodotGame",props:{server:{type:String,required:!0}}};var c=Object.assign(l,{setup(e){let n=window.innerHeight;const t=(0,i.iH)(n);let r=window.innerWidth;const l=(0,i.iH)(r);let c="https://solityforfree.github.io/EnjoySGamePages/";return(n,r)=>((0,o.wg)(),(0,o.iD)("iframe",{src:(0,i.SU)(c)+"?networkGame=true&networkGameId="+e.server,width:l.value,height:t.value,frameborder:"0"},null,8,a))}});const s=c;var u=s,f=t(3012);const d={key:0,class:"h-100"},v=(0,o._)("h1",null," Welcome to bottanica erotica! ",-1),g={key:1},p={key:2},h=(0,o._)("h1",null,"The QR Code scanner.",-1),b={name:"App",components:{GodotGame:u,QrcodeStream:f.vG}};var w=Object.assign(b,{setup(e){const n=(0,i.iH)(!1),t=(0,i.iH)(!1),r=(0,i.iH)(!0);let a="";function l(e){a=e[0].rawValue,n.value=!0,console.log(e[0].rawValue)}function c(){a=(Math.random()+1).toString(36).substring(3),n.value=!0,r.value=!1}function s(){r.value=!1,t.value=!0}return(e,b)=>r.value?((0,o.wg)(),(0,o.iD)("div",d,[(0,o._)("div",{class:"container-fluid h-100"},[v,(0,o._)("div",{class:"h-100 d-flex align-items-center justify-content-center"},[(0,o._)("div",{class:"d-grid gap-3 flex-fill"},[(0,o._)("button",{onClick:c,class:"btn btn-primary btn-lg"},"Create Server"),(0,o._)("button",{onClick:s,class:"btn btn-primary btn-lg"},"Join Game")])])])])):n.value?((0,o.wg)(),(0,o.iD)("div",g,[(0,o.Wm)(u,{server:(0,i.SU)(a)},null,8,["server"])])):t.value?((0,o.wg)(),(0,o.iD)("div",p,[h,(0,o.Wm)((0,i.SU)(f.vG),{onDetect:l})])):(0,o.kq)("",!0)}});const m=w;var y=m,k=t(5431);(0,k.z)("/EnjoySGameVueUI/dist/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh."),window.location.reload(!0)},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});t(8052);(0,r.ri)(y).mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return e[r].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,i){if(!r){var a=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],i=e[u][2];for(var l=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(l=!1,i<a&&(a=i));if(l){e.splice(u--,1);var s=o();void 0!==s&&(n=s)}}return n}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,a=r[0],l=r[1],c=r[2],s=0;if(a.some((function(n){return 0!==e[n]}))){for(o in l)t.o(l,o)&&(t.m[o]=l[o]);if(c)var u=c(t)}for(n&&n(r);s<a.length;s++)i=a[s],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(u)},r=self["webpackChunkpwa_test"]=self["webpackChunkpwa_test"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(6465)}));r=t.O(r)})();
//# sourceMappingURL=app.585704d4.js.map