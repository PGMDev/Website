"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3302],{3905:(e,t,l)=>{l.d(t,{Zo:()=>i,kt:()=>k});var n=l(7294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function u(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function s(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):u(u({},t),e)),l},i=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=d(l),p=r,k=m["".concat(o,".").concat(p)]||m[p]||c[p]||a;return l?n.createElement(k,u(u({ref:t},i),{},{components:l})):n.createElement(k,u({ref:t},i))}));function k(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,u=new Array(a);u[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:r,u[1]=s;for(var d=2;d<a;d++)u[d]=l[d];return n.createElement.apply(null,u)}return n.createElement.apply(null,l)}p.displayName="MDXCreateElement"},6554:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>u,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=l(7462),r=(l(7294),l(3905));const a={id:"gamerules",title:"Gamerules"},u=void 0,s={unversionedId:"modules/mechanics/gamerules",id:"modules/mechanics/gamerules",title:"Gamerules",description:"Minecraft's built in game rules can be set via the `` module. Not all gamerules are supported, the table below lists which are supported.",source:"@site/docs/modules/mechanics/gamerules.mdx",sourceDirName:"modules/mechanics",slug:"/modules/mechanics/gamerules",permalink:"/docs/modules/mechanics/gamerules",draft:!1,editUrl:"https://github.com/PGMDev/Website/tree/master/src/docs/modules/mechanics/gamerules.mdx",tags:[],version:"current",frontMatter:{id:"gamerules",title:"Gamerules"},sidebar:"docs",previous:{title:"Damage",permalink:"/docs/modules/mechanics/damage"},next:{title:"Spawners",permalink:"/docs/modules/mechanics/spawners"}},o={},d=[{value:"Supported Gamerule Sub-elements",id:"supported-gamerule-sub-elements",level:5},{value:"Unsupported Gamerules",id:"unsupported-gamerules",level:5}],i={toc:d},m="wrapper";function c(e){let{components:t,...l}=e;return(0,r.kt)(m,(0,n.Z)({},i,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Minecraft's built in game rules can be set via the ",(0,r.kt)("inlineCode",{parentName:"p"},"<gamerules>")," module. Not all gamerules are supported, the table below lists which are supported."),(0,r.kt)("p",null,"When stopping the daylight cycle, you should either use the ",(0,r.kt)("inlineCode",{parentName:"p"},"<doDaylightCycle>")," gamerule or the ",(0,r.kt)("inlineCode",{parentName:"p"},"<timelock>")," module."),(0,r.kt)("div",{className:"table-container"},(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Element"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"<gamerules> </gamerules>")),(0,r.kt)("td",null,"Node containing the defined game rules."))))),(0,r.kt)("h5",{id:"supported-gamerule-sub-elements"},"Supported Gamerule Sub-elements"),(0,r.kt)("div",{className:"table-container"},(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Element"),(0,r.kt)("th",null,"Description"),(0,r.kt)("th",{style:{minWidth:"110px"}},"Values"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"<doFireTick>")),(0,r.kt)("td",null,"Toggles whether firespread occurs."),(0,r.kt)("td",null,(0,r.kt)("span",{className:"badge badge--primary"},"true / false"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"<doTileDrops>")),(0,r.kt)("td",null,"Toggles whether tile entities drop."),(0,r.kt)("td",null,(0,r.kt)("span",{className:"badge badge--primary"},"true / false"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"<doMobLoot>")),(0,r.kt)("td",null,"Toggles whether mobs drop loot on death."),(0,r.kt)("td",null,(0,r.kt)("span",{className:"badge badge--primary"},"true / false"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"<mobGriefing>")),(0,r.kt)("td",null,"Toggles whether mobs such as Creepers and Endermen cause enviromental damage."),(0,r.kt)("td",null,(0,r.kt)("span",{className:"badge badge--primary"},"true / false"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"<naturalRegeneration>")),(0,r.kt)("td",null,"Toggles whether or not players naturally regain heath."),(0,r.kt)("td",null,(0,r.kt)("span",{className:"badge badge--primary"},"true / false"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"<doDaylightCycle>")),(0,r.kt)("td",null,"Toggles whether or not time tick occurs."),(0,r.kt)("td",null,(0,r.kt)("span",{className:"badge badge--primary"},"true / false")))))),"Example",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<gamerules>\n    <doDaylightCycle>false</doDaylightCycle>\n    <naturalRegeneration>false</naturalRegeneration>\n</gamerules>\n")),(0,r.kt)("h5",{id:"unsupported-gamerules"},"Unsupported Gamerules"),(0,r.kt)("div",{className:"table-container"},(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Rule"),(0,r.kt)("th",null,"Reason"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"doMobSpawning")),(0,r.kt)("td",null,"Not supported in favor of the"," ",(0,r.kt)("a",{href:"/docs/modules/environment/mobs"},"mobs")," module.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"keepInventory")),(0,r.kt)("td",null,"Not supported since PGM already solves this with kits.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"commandBlockOutput")),(0,r.kt)("td",null,"Command blocks are disabled in PGM.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"logAdminCommands")),(0,r.kt)("td",null,"Not useful in custom maps.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"randomTickSpeed")),(0,r.kt)("td",null,"Not useful in custom maps.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"reducedDebugInfo")),(0,r.kt)("td",null,"Not useful in custom maps.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"sendCommandFeedback")),(0,r.kt)("td",null,"Not useful in custom maps.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"showDeathMessages")),(0,r.kt)("td",null,"Not useful in custom maps."))))))}c.isMDXComponent=!0}}]);