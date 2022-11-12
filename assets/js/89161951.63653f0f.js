"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3365],{3905:(e,t,l)=>{l.d(t,{Zo:()=>u,kt:()=>m});var r=l(7294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function s(e,t){if(null==e)return{};var l,r,n=function(e,t){if(null==e)return{};var l,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var o=r.createContext({}),d=function(e){var t=r.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},u=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var l=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(l),m=n,p=c["".concat(o,".").concat(m)]||c[m]||k[m]||a;return l?r.createElement(p,i(i({ref:t},u),{},{components:l})):r.createElement(p,i({ref:t},u))}));function m(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=l.length,i=new Array(a);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<a;d++)i[d]=l[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,l)}c.displayName="MDXCreateElement"},9983:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=l(7462),n=(l(7294),l(3905));const a={id:"kill-rewards",title:"Kill Rewards"},i=void 0,s={unversionedId:"modules/gear/kill-rewards",id:"modules/gear/kill-rewards",title:"Kill Rewards",description:"The `` module allows players to get items or a kit when they kill a player.",source:"@site/docs/modules/gear/kill-rewards.mdx",sourceDirName:"modules/gear",slug:"/modules/gear/kill-rewards",permalink:"/docs/modules/gear/kill-rewards",draft:!1,editUrl:"https://github.com/PGMDev/Website/tree/master/src/docs/modules/gear/kill-rewards.mdx",tags:[],version:"current",frontMatter:{id:"kill-rewards",title:"Kill Rewards"},sidebar:"docs",previous:{title:"TNT",permalink:"/docs/modules/gear/tnt"},next:{title:"Block Drops",permalink:"/docs/modules/blocks/blockdrops"}},o={},d=[{value:"Kill Rewards Element",id:"kill-rewards-element",level:4}],u={toc:d};function k(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"<kill-rewards>")," module allows players to get items or a kit when they kill a player.\nA kill reward can contain either individual items, kits or references to kits.\nThe reward can optionally filter which players are eligible to receive the reward, or when/where the reward is active."),(0,n.kt)("p",null,"This module can, for example, be used to give upgrades to players by giving them gold ingots.\nThen once they have collected enough ingots they can craft armor, etc."),(0,n.kt)("h4",{id:"kill-rewards-element"},"Kill Rewards Element"),(0,n.kt)("div",{className:"table-container"},(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Element"),(0,n.kt)("th",null,"Description"),(0,n.kt)("th",null,"Value/Children"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"<kill-rewards> </kill-rewards>")),(0,n.kt)("td",null,"Node containing all kill reward definitions."),(0,n.kt)("td",null,(0,n.kt)("span",{className:"badge badge--secondary"},"Kill Reward elements"))),(0,n.kt)("tr",null,(0,n.kt)("th",null,"Kill Rewards Sub-element"),(0,n.kt)("th",null),(0,n.kt)("th",null)),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"<kill-reward> </kill-reward>")),(0,n.kt)("td",null,"A single kill reward."),(0,n.kt)("td",null,(0,n.kt)("span",{className:"badge badge--secondary"},"Kill Reward Sub-elements"))),(0,n.kt)("tr",null,(0,n.kt)("th",null,"Kill Reward Attributes"),(0,n.kt)("th",null),(0,n.kt)("th",null)),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"filter")),(0,n.kt)("td",null,(0,n.kt)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property")," ","Filter who can claim this reward and when."),(0,n.kt)("td",null,(0,n.kt)("a",{href:"/docs/modules/mechanics/filters"},"Filter"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"kit")),(0,n.kt)("td",null,(0,n.kt)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property")," ","The kit to give players as the kill reward."),(0,n.kt)("td",null,(0,n.kt)("a",{href:"/docs/modules/gear/kits"},"Kit ID"))),(0,n.kt)("tr",null,(0,n.kt)("th",null,"Kill Reward Sub-elements"),(0,n.kt)("th",null),(0,n.kt)("th",null)),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"<item>")),(0,n.kt)("td",null,"Individual items given as a kill reward."),(0,n.kt)("td",null,(0,n.kt)("a",{href:"/docs/modules/gear/items"},"Item"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"<filter>")),(0,n.kt)("td",null,(0,n.kt)("span",{className:"badge badge--secondary",title:"Can be either this sub-element or an attribute."},"Property")," ","Filter who can claim this reward and when."),(0,n.kt)("td",null,(0,n.kt)("a",{href:"/docs/modules/mechanics/filters"},"Filters"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"<kit>")),(0,n.kt)("td",null,(0,n.kt)("span",{className:"badge badge--secondary",title:"Can be either this sub-element or an attribute."},"Property"),"The kit to give as the reward."),(0,n.kt)("td",null,(0,n.kt)("a",{href:"/docs/modules/gear/kits"},"Kits")))))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Examples")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<kill-rewards>\n    \x3c!-- Give two emeralds for all kills --\x3e\n    <kill-reward>\n        <item amount="2" material="emerald"/>\n    </kill-reward>\n\n    \x3c!-- Give a cactus to players on the red team for every third kill --\x3e\n    <kill-reward>\n        <filter>\n            <all>\n                <team>red</team>\n                <kill-streak count="3"/>\n            </all>\n        </filter>\n        <item material="cactus"/>\n    </kill-reward>\n</kill-rewards>\n')),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Kill rewards with kits")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<kill-rewards>\n    <kill-reward>\n        <kit>\n            <item slot="0" material="iron sword"/>\n            <helmet material="iron helmet"/>\n            <potion amplifier="2">speed</potion>\n        </kit>\n    </kill-reward>\n\n    \x3c!-- Give the "reward-kit" to the player for every 8th kill --\x3e\n    <kill-reward>\n        <filter>\n            <kill-streak count="8" repeat="true"/>\n        </filter>\n        <kit id="reward-kit"/>\n    </kill-reward>\n</kill-rewards>\n')))}k.isMDXComponent=!0}}]);