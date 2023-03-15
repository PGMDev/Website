"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5950],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=r.createContext({}),c=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(m.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,f=d["".concat(m,".").concat(p)]||d[p]||u[p]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={id:"time",title:"Time & Dimension"},a=void 0,l={unversionedId:"modules/environment/time",id:"modules/environment/time",title:"Time & Dimension",description:"Time",source:"@site/docs/modules/environment/time.mdx",sourceDirName:"modules/environment",slug:"/modules/environment/time",permalink:"/docs/modules/environment/time",draft:!1,editUrl:"https://github.com/PGMDev/Website/tree/master/src/docs/modules/environment/time.mdx",tags:[],version:"current",frontMatter:{id:"time",title:"Time & Dimension"},sidebar:"docs",previous:{title:"World & Terrain",permalink:"/docs/modules/environment/world"},next:{title:"World Border",permalink:"/docs/modules/environment/border"}},m={},c=[{value:"Time",id:"time",level:3},{value:"Time Set",id:"time-set",level:4},{value:"Random Time",id:"random-time",level:4},{value:"Time Lock",id:"time-lock",level:4}],s={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"time"},"Time"),(0,o.kt)("h4",{id:"time-set"},"Time Set"),(0,o.kt)("p",null,"Sets the map to use a certain time on match load, measured in ticks."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<world>\n    \x3c!-- Sets map to midnight --\x3e\n    <timeset>18000</timeset>\n</world>\n")),(0,o.kt)("h4",{id:"random-time"},"Random Time"),(0,o.kt)("p",null,"World time can be set from one of six possible times at random when a match loads."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<world>\n    <randomtime/>\n    \x3c!-- 1000, 6000, 12610, 13000, 14000, 18000 --\x3e\n    \x3c!-- day   noon  dusk   night         midnight --\x3e\n</world>\n")),(0,o.kt)("h4",{id:"time-lock"},"Time Lock"),(0,o.kt)("p",null,"Locks the time to a certain time, either from ",(0,o.kt)("inlineCode",{parentName:"p"},"<timeset>")," or from the world data.\nTime lock must be specifically turned off if one wishes to have the time cycle.\nThis can also be accomplished with the ",(0,o.kt)("inlineCode",{parentName:"p"},"doDaylightCycle")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/modules/mechanics/gamerules"},"gamerule"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<world>\n    <timelock>off</timelock> \x3c!-- Defaults to on --\x3e\n</world>\n")))}u.isMDXComponent=!0}}]);