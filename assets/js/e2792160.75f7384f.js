"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2089],{3905:(e,t,l)=>{l.d(t,{Zo:()=>m,kt:()=>p});var r=l(7294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function s(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,r,n=function(e,t){if(null==e)return{};var l,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var u=r.createContext({}),i=function(e){var t=r.useContext(u),l=t;return e&&(l="function"==typeof e?e(t):s(s({},t),e)),l},m=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var l=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=i(l),p=n,k=d["".concat(u,".").concat(p)]||d[p]||c[p]||a;return l?r.createElement(k,s(s({ref:t},m),{},{components:l})):r.createElement(k,s({ref:t},m))}));function p(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=l.length,s=new Array(a);s[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var i=2;i<a;i++)s[i]=l[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,l)}d.displayName="MDXCreateElement"},2903:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>i});var r=l(7462),n=(l(7294),l(3905));const a={id:"players",title:"Players (free-for-all)"},s=void 0,o={unversionedId:"modules/format/players",id:"modules/format/players",title:"Players (free-for-all)",description:"The players module is the basis for all team-less gamemodes, such as FFA, UHC, or hunger games style matches.",source:"@site/docs/modules/format/players.mdx",sourceDirName:"modules/format",slug:"/modules/format/players",permalink:"/docs/modules/format/players",draft:!1,editUrl:"https://github.com/PGMDev/Website/tree/master/src/docs/modules/format/players.mdx",tags:[],version:"current",frontMatter:{id:"players",title:"Players (free-for-all)"},sidebar:"docs",previous:{title:"Mob Spawning",permalink:"/docs/modules/environment/mobs"},next:{title:"Teams",permalink:"/docs/modules/format/teams"}},u={},i=[{value:"Players Attributes",id:"players-attributes",level:5}],m={toc:i};function c(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The players module is the basis for all team-less gamemodes, such as FFA, UHC, or hunger games style matches.\nThis module is not limited to matches focused on combat,\nit can also be used in combat-less game modes where players have to collect specific items, etc.\nWin conditions are set by using the score and time limit modules."),(0,n.kt)("span",{className:"badge badge--danger"},"NOTE")," This gamemode is not compatible with the teams module!",(0,n.kt)("div",{className:"table-container"},(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Element"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"<players />")),(0,n.kt)("td",null,"The players node, containing player settings."))))),(0,n.kt)("h5",{id:"players-attributes"},"Players Attributes"),(0,n.kt)("div",{className:"table-container"},(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",{style:{minWidth:"130px"}},"Attribute"),(0,n.kt)("th",null,"Description"),(0,n.kt)("th",null,"Value"),(0,n.kt)("th",null,"Default"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"min")),(0,n.kt)("td",null,"Minimum amount of players required."),(0,n.kt)("td",null,(0,n.kt)("span",{className:"badge badge--primary"},"Number")),(0,n.kt)("td",null)),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"max")),(0,n.kt)("td",null,"Player limit -- normal players cannot join the match once it reaches this size.",(0,n.kt)("br",null),(0,n.kt)("i",null,"Premium players may join over this limit until"," ",(0,n.kt)("label",null,"max-overfill")," is reached.")),(0,n.kt)("td",null,(0,n.kt)("span",{className:"badge badge--primary"},"Number")),(0,n.kt)("td",null)),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"max-overfill")),(0,n.kt)("td",null,"Player overfill -- premium players cannot join the match once it reaches this size.",(0,n.kt)("br",null),(0,n.kt)("i",null,"Must be greater than the defined ",(0,n.kt)("label",null,"max"),".")),(0,n.kt)("td",null,(0,n.kt)("span",{className:"badge badge--primary"},"Number")),(0,n.kt)("td",null)),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"show-name-tags")),(0,n.kt)("td",null,"Specify who can see the name tags of players.",(0,n.kt)("br",null),"Accepts:",(0,n.kt)("label",null,"true"),", ",(0,n.kt)("label",null,"false"),", ",(0,n.kt)("label",null,"allies")," or ",(0,n.kt)("label",null,"enemies")),(0,n.kt)("td",null,(0,n.kt)("span",{className:"badge badge--primary"},"Enum")),(0,n.kt)("td",null,"true")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"colors")),(0,n.kt)("td",null,"Auto assign a unique color to each player, works for up to 10 players and then colors repeat."),(0,n.kt)("td",null,(0,n.kt)("span",{className:"badge badge--primary"},"true/false")),(0,n.kt)("td",null,"false"))))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Example")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<players max="16" max-overfill="20"/>\n<time>8m</time>\n\n<score>\n    <kills>1</kills>\n    <deaths>1</deaths>\n</score>\n')))}c.isMDXComponent=!0}}]);