"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7525],{3905:(e,t,l)=>{l.d(t,{Zo:()=>u,kt:()=>y});var a=l(7294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var l=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(l),m=n,y=p["".concat(s,".").concat(m)]||p[m]||c[m]||r;return l?a.createElement(y,o(o({ref:t},u),{},{components:l})):a.createElement(y,o({ref:t},u))}));function y(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=l.length,o=new Array(r);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var d=2;d<r;d++)o[d]=l[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,l)}m.displayName="MDXCreateElement"},521:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=l(7462),n=(l(7294),l(3905));const r={id:"payload",title:"Payload (Experimental)"},o=void 0,i={unversionedId:"modules/objectives/payload",id:"modules/objectives/payload",title:"Payload (Experimental)",description:"This gamemode is experimental and must be enabled for playtesting. In its",source:"@site/docs/modules/objectives/payload.mdx",sourceDirName:"modules/objectives",slug:"/modules/objectives/payload",permalink:"/docs/modules/objectives/payload",draft:!1,editUrl:"https://github.com/PGMDev/Website/tree/master/src/docs/modules/objectives/payload.mdx",tags:[],version:"current",frontMatter:{id:"payload",title:"Payload (Experimental)"},sidebar:"docs",previous:{title:"Other Gamemodes",permalink:"/docs/modules/objectives/other"},next:{title:"Filters",permalink:"/docs/modules/mechanics/filters"}},s={},d=[{value:"Payload Element",id:"payload-element",level:4},{value:"Payload Attributes",id:"payload-attributes",level:3},{value:"Examples",id:"examples",level:2},{value:"Video Example",id:"video-example",level:3}],u={toc:d},p="wrapper";function c(e){let{components:t,...l}=e;return(0,n.kt)(p,(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This gamemode is experimental and must be enabled for playtesting. In its\ncurrent state, Payload only properly supports Attack/Defend type payload.\nAll documentation here is subject to rapid change.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="/server/plugins/PGM/config.yml"',title:'"/server/plugins/PGM/config.yml"'},"experiments:\n  payload: true\n")),(0,n.kt)("p",null,"Payload has an attacking team and defending team. The attacking team's objective is to push\na minecart (the payload) to the end of the track, usually towards the defending team's base.\nThe defending team can prevent this by killing enemies and pushing the minecart back."),(0,n.kt)("p",null,"The payload is portrayed in-game as a minecart holding a colored block which changes depending on which team is\npushing it. The track must be built with rails.\nThe start of the track will display as 0% completion, and 100% completion is where ever the track ends."),(0,n.kt)("p",null,"This gamemode is entirely based off of ",(0,n.kt)("a",{parentName:"p",href:"/docs/modules/objectives/control-points"},"Control Points"),",\nso it currently supports everything that a control point supports."),(0,n.kt)("h4",{id:"payload-element"},"Payload Element"),(0,n.kt)("div",{className:"table-container"},(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Element"),(0,n.kt)("th",null,"Description"),(0,n.kt)("th",null,"Value/Children"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"<payloads> </payloads>")),(0,n.kt)("td",null,"A node containing the payloads for this map."),(0,n.kt)("td",null,(0,n.kt)("span",{className:"badge badge--secondary"},"Payloads"))),(0,n.kt)("tr",null,(0,n.kt)("th",null,"Sub-elements"),(0,n.kt)("th",null),(0,n.kt)("th",null)),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"<payload/>")),(0,n.kt)("td",null,"An individual payload."),(0,n.kt)("td",null,(0,n.kt)("span",{className:"badge badge--secondary"},"Payload Attributes")))))),(0,n.kt)("h3",{id:"payload-attributes"},"Payload Attributes"),(0,n.kt)("div",{className:"table-container"},(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Element"),(0,n.kt)("th",null,"Description"),(0,n.kt)("th",null,"Value/Children"),(0,n.kt)("th",null,"Default"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"location")),(0,n.kt)("td",null,(0,n.kt)("span",{className:"badge badge--danger"},"Required"),"The starting position of the payload."),(0,n.kt)("td",null,(0,n.kt)("span",{className:"badge badge--primary"},"X,Y,Z")),(0,n.kt)("td",null)),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"radius")),(0,n.kt)("td",null,(0,n.kt)("span",{className:"badge badge--danger"},"Required"),"The distance at which a player can affect the payload."),(0,n.kt)("td",null,(0,n.kt)("span",{className:"badge badge--primary"},"Number")),(0,n.kt)("td",null)),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"display-filter")),(0,n.kt)("td",null,"Filter for when particles are shown"),(0,n.kt)("td",null,(0,n.kt)("a",{href:"/docs/modules/mechanics/filters"},"Filter")),(0,n.kt)("td",null,(0,n.kt)("label",null,"always"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"capture-time")),(0,n.kt)("td",null,"Time for the payload to reach the end of the track."),(0,n.kt)("td",null,(0,n.kt)("a",{href:"/docs/reference/misc/time-periods"},"Time Period")),(0,n.kt)("td",{colspan:"2"},"30 sec")),(0,n.kt)("tr",null,(0,n.kt)("th",{colspan:"4"},(0,n.kt)("a",{href:"/docs/modules/objectives/control-points#control-point-attributes"},"Supports every other feature of control points.")))))),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<payloads>\n    <payload location="x,y,z" radius="3" display-filter="filter" capture-time="1m" decay-rate="0.25" .../>\n</payloads>\n')),(0,n.kt)("h3",{id:"video-example"},"Video Example"),(0,n.kt)("video",{controls:!0,loop:!0},(0,n.kt)("source",{src:"/video/payload-demo.mp4",type:"video/mp4"}),"Please update your browser as it does not support the video tag."))}c.isMDXComponent=!0}}]);