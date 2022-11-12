"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5005],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=s(r),d=i,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3534:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const o={id:"time-periods",title:"Time Periods"},l=void 0,a={unversionedId:"reference/misc/time-periods",id:"reference/misc/time-periods",title:"Time Periods",description:"Time periods are numbers suffixed with a time unit. Periods with no formatter suffix default to seconds.",source:"@site/docs/reference/misc/time-periods.mdx",sourceDirName:"reference/misc",slug:"/reference/misc/time-periods",permalink:"/docs/reference/misc/time-periods",draft:!1,editUrl:"https://github.com/PGMDev/Website/tree/master/src/docs/reference/misc/time-periods.mdx",tags:[],version:"current",frontMatter:{id:"time-periods",title:"Time Periods"},sidebar:"Reference",previous:{title:"Dye Colors",permalink:"/docs/reference/misc/colors"}},c={},s=[],u={toc:s};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Time periods are numbers suffixed with a time unit. Periods with no formatter suffix default to seconds."),(0,i.kt)("p",null,"In some contexts, ",(0,i.kt)("inlineCode",{parentName:"p"},"oo")," can be used to indicate an infinite time period."),(0,i.kt)("div",{className:"table-container"},(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Suffix"),(0,i.kt)("th",null,"Duration"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("label",null,"d")),(0,i.kt)("td",null,"Day")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("label",null,"h")),(0,i.kt)("td",null,"Hour")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("label",null,"m")),(0,i.kt)("td",null,"Minute")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("label",null,"s")),(0,i.kt)("td",null,"Seconds"))))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Examples")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- 5 minutes --\x3e\n<time>5m</time>\n")))}p.isMDXComponent=!0}}]);