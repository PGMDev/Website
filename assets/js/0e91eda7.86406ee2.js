"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3827],{3905:(e,t,l)=>{l.d(t,{Zo:()=>u,kt:()=>h});var a=l(7294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function s(e,t){if(null==e)return{};var l,a,r=function(e,t){if(null==e)return{};var l,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},u=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var l=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=m(l),p=r,h=d["".concat(o,".").concat(p)]||d[p]||c[p]||n;return l?a.createElement(h,i(i({ref:t},u),{},{components:l})):a.createElement(h,i({ref:t},u))}));function h(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=l.length,i=new Array(n);i[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var m=2;m<n;m++)i[m]=l[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,l)}p.displayName="MDXCreateElement"},3694:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>m});var a=l(7462),r=(l(7294),l(3905));const n={id:"proximity-alarms",title:"Proximity Alarms"},i=void 0,s={unversionedId:"modules/mechanics/proximity-alarms",id:"modules/mechanics/proximity-alarms",title:"Proximity Alarms",description:"Proximity alarms can be used to alert players when an enemy enters a specified area. Flares will go off around the protected area, with the color of the detected player's team, and all allied players will receive an alert message with sound.",source:"@site/docs/modules/mechanics/proximity-alarms.mdx",sourceDirName:"modules/mechanics",slug:"/modules/mechanics/proximity-alarms",permalink:"/docs/modules/mechanics/proximity-alarms",draft:!1,editUrl:"https://github.com/PGMDev/Website/tree/master/src/docs/modules/mechanics/proximity-alarms.mdx",tags:[],version:"current",frontMatter:{id:"proximity-alarms",title:"Proximity Alarms"},sidebar:"docs",previous:{title:"Portals",permalink:"/docs/modules/mechanics/portals"},next:{title:"Lanes",permalink:"/docs/modules/mechanics/lanes"}},o={},m=[{value:"Proximity-alarm Attributes",id:"proximity-alarm-attributes",level:5},{value:"Proximity-alarm Sub-elements",id:"proximity-alarm-sub-elements",level:5}],u={toc:m},d="wrapper";function c(e){let{components:t,...l}=e;return(0,r.kt)(d,(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Proximity alarms can be used to alert players when an enemy enters a specified area. Flares will go off around the protected area, with the color of the detected player's team, and all allied players will receive an alert message with sound."),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"<notify>")," subelement is not defined, the proximity-alarm message is sent only to players who ",(0,r.kt)("em",{parentName:"p"},"cannot")," be detected, i.e. those who do not match the detection filter. If the ",(0,r.kt)("inlineCode",{parentName:"p"},"<detect>")," attribute is missing no message will be sent, which means that only players who can see or hear the flares will know when the alarm is tripped."),(0,r.kt)("p",null,"Flares will only be set off if a ",(0,r.kt)("inlineCode",{parentName:"p"},'flare-radius=""'),' is defined. If this attribute is missing a message must be specified to alert players. This is how the alarm can be made "silent", so that enemies may not realize that they have been detected.'),(0,r.kt)("div",{className:"table-container"},(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Element"),(0,r.kt)("th",null,"Description"),(0,r.kt)("th",null,"Value/Children"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"<proximity-alarms> </proximity-alarms>")),(0,r.kt)("td",{colspan:"2"},"Node containing this maps proximity-alarms.")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Sub-elements"),(0,r.kt)("th",null),(0,r.kt)("th",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"<proximity-alarm>")),(0,r.kt)("td",null,"An individual proximity-alarm node."),(0,r.kt)("td",null,(0,r.kt)("span",{className:"badge badge--secondary"},"Proximity-alarm Sub-elements")))))),(0,r.kt)("h5",{id:"proximity-alarm-attributes"},"Proximity-alarm Attributes"),(0,r.kt)("div",{className:"table-container"},(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Attribute"),(0,r.kt)("th",null,"Description"),(0,r.kt)("th",null,"Value"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"region")),(0,r.kt)("td",null,(0,r.kt)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),(0,r.kt)("span",{className:"badge badge--danger"},"Required"),"The region this alarm applies to."),(0,r.kt)("td",null,(0,r.kt)("a",{href:"/docs/modules/mechanics/regions"},"Region"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"message")),(0,r.kt)("td",null,"Message to show in chat when a player is detected."),(0,r.kt)("td",null,(0,r.kt)("span",{className:"badge badge--primary"},"String"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"flare-radius")),(0,r.kt)("td",null,"Radius of the circular area to show flares in, centered on the proximity-alarm region."),(0,r.kt)("td",null,(0,r.kt)("span",{className:"badge badge--primary"},"Number")))))),(0,r.kt)("h5",{id:"proximity-alarm-sub-elements"},"Proximity-alarm Sub-elements"),(0,r.kt)("div",{className:"table-container"},(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Element"),(0,r.kt)("th",null,"Description"),(0,r.kt)("th",null,"Value/Children"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"<region>")),(0,r.kt)("td",null,(0,r.kt)("span",{className:"badge badge--secondary",title:"Can be either this sub-element or an attribute."},"Property"),(0,r.kt)("span",{className:"badge badge--danger"},"Required"),"The region this alarm applies to, treated as a region union."),(0,r.kt)("td",null,(0,r.kt)("a",{href:"/docs/modules/mechanics/regions"},"Regions"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"<detect>")),(0,r.kt)("td",null,"Filter who gets detected by the proximity alarm."),(0,r.kt)("td",null,(0,r.kt)("a",{href:"/docs/modules/mechanics/filters"},"Filter"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"<notify>")),(0,r.kt)("td",null,"Filter who gets notified by the proximity alarm."),(0,r.kt)("td",null,(0,r.kt)("a",{href:"/docs/modules/mechanics/filters"},"Filter"))))))," ",(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<proximity-alarms>\n    <proximity-alarm message="Enemy detected at Blue monument!" flare-radius="4">\n        <region>\n            <cylinder base="27.5,119,-26.5" radius="7.5" height="15"/>\n        </region>\n        <detect>\n            <team>red</team>\n        </detect>\n    </proximity-alarm>\n</proximity-alarms>\n')))}c.isMDXComponent=!0}}]);