if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,o)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let r={};const u=e=>i(e,t),c={module:{uri:t},exports:r,require:u};s[t]=Promise.all(n.map((e=>c[e]||u(e)))).then((e=>(o(...e),r)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"pwa-test"}),self.skipWaiting(),e.precacheAndRoute([{url:"/EnjoySGameVueUI/dist/css/app.9b39ebe9.css",revision:null},{url:"/EnjoySGameVueUI/dist/index.html",revision:"b23e84ba00ea2e53aed86bcc35c9d8f9"},{url:"/EnjoySGameVueUI/dist/js/app.5f3593e6.js",revision:null},{url:"/EnjoySGameVueUI/dist/js/chunk-vendors.40e373d2.js",revision:null},{url:"/EnjoySGameVueUI/dist/manifest.json",revision:"e3e3f3ef2eee9cfa7c48e1ca7572e37b"},{url:"/EnjoySGameVueUI/dist/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
