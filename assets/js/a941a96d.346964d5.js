"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7344],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>p});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var i=n.createContext({}),u=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},d=function(t){var e=u(t.components);return n.createElement(i.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,i=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=u(a),p=l,k=m["".concat(i,".").concat(p)]||m[p]||c[p]||r;return a?n.createElement(k,s(s({ref:e},d),{},{components:a})):n.createElement(k,s({ref:e},d))}));function p(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,s=new Array(r);s[0]=m;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:l,s[1]=o;for(var u=2;u<r;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5371:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=a(7462),l=(a(7294),a(3905));const r={id:"broadcasts",title:"Broadcasts"},s=void 0,o={unversionedId:"modules/information/broadcasts",id:"modules/information/broadcasts",title:"Broadcasts",description:"The broadcast module allows you to broadcast a message to all players at any given point in the match.",source:"@site/docs/modules/information/broadcasts.mdx",sourceDirName:"modules/information",slug:"/modules/information/broadcasts",permalink:"/docs/modules/information/broadcasts",draft:!1,editUrl:"https://github.com/PGMDev/Website/tree/master/src/docs/modules/information/broadcasts.mdx",tags:[],version:"current",frontMatter:{id:"broadcasts",title:"Broadcasts"},sidebar:"docs",previous:{title:"Protocol Versions",permalink:"/docs/modules/general/proto"},next:{title:"Rules",permalink:"/docs/modules/information/rules"}},i={},u=[{value:"Message Tag Attributes",id:"message-tag-attributes",level:5},{value:"Message Tag Sub-elements",id:"message-tag-sub-elements",level:5}],d={toc:u};function c(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The broadcast module allows you to broadcast a message to all players at any given point in the match.\nInside the broadcast tag you may specify either a ",(0,l.kt)("inlineCode",{parentName:"p"},"<alert>")," or a ",(0,l.kt)("inlineCode",{parentName:"p"},"<tip>")," message tag with an ",(0,l.kt)("inlineCode",{parentName:"p"},'after=""')," attribute.\nThis attribute is required and specifies how long after the match is started the broadcast is shown. ",(0,l.kt)("br",null),"\nThe text in broadcasts can be formatted by using ",(0,l.kt)("a",{parentName:"p",href:"/docs/reference/misc/formatting"},"formatting codes"),"."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"This module should ",(0,l.kt)("strong",null," only ")," be used to show important\ninformation that is ",(0,l.kt)("strong",null,"specific")," and ",(0,l.kt)("strong",null,"unique")," to the map.\nIt should not be used for generic server related messages.")),(0,l.kt)("div",{className:"table-container"},(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Broadcasts Element"),(0,l.kt)("th",null,"Description"),(0,l.kt)("th",null,"Value/Children"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("label",null,"<broadcasts> </broadcasts>")),(0,l.kt)("td",null,"An element containing all the defined broadcast messages."),(0,l.kt)("td",null)),(0,l.kt)("tr",null,(0,l.kt)("th",null,"Sub-Elements"),(0,l.kt)("th",null),(0,l.kt)("th",null)),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("label",null,"<tip> </tip>")),(0,l.kt)("td",null,"This will display a [Tip] message"),(0,l.kt)("td",null,(0,l.kt)("span",{className:"badge badge--primary"},"Formatted Text"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("label",null,"<alert> </alert>")),(0,l.kt)("td",null,"This will display an [Alert] message"),(0,l.kt)("td",null,(0,l.kt)("span",{className:"badge badge--primary"},"Formatted Text")))))),(0,l.kt)("h5",{id:"message-tag-attributes"},"Message Tag Attributes"),(0,l.kt)("div",{className:"table-container"},(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Attribute"),(0,l.kt)("th",null,"Description"),(0,l.kt)("th",null,"Value"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("label",null,"after")),(0,l.kt)("td",null,(0,l.kt)("span",{className:"badge badge--danger"},"Required"),"Duration to wait after the match starts to show the message."),(0,l.kt)("td",null,(0,l.kt)("a",{href:"/docs/reference/misc/time-periods"},"Time Period"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("label",null,"every")),(0,l.kt)("td",null,"After the message is shown repeat it with this duration between messages."),(0,l.kt)("td",null,(0,l.kt)("a",{href:"/docs/reference/misc/time-periods"},"Time Period"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("label",null,"count")),(0,l.kt)("td",null,"Amount of times the message is repeated.",(0,l.kt)("br",null),(0,l.kt)("i",null,"Infinite repetition can be specified by using ",(0,l.kt)("label",null,"oo")," as the duration.")),(0,l.kt)("td",null,(0,l.kt)("span",{className:"badge badge--primary"},"Number"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("label",null,"filter")),(0,l.kt)("td",null,(0,l.kt)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),"Filter if the broadcast message is sent after the duration has passed, or if it's skipped."),(0,l.kt)("td",null,(0,l.kt)("a",{href:"/docs/modules/mechanics/filters"},"Filter")))))),(0,l.kt)("h5",{id:"message-tag-sub-elements"},"Message Tag Sub-elements"),(0,l.kt)("div",{className:"table-container"},(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Element"),(0,l.kt)("th",null,"Description"),(0,l.kt)("th",null,"Value"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("label",null,"<filter>")),(0,l.kt)("td",null,(0,l.kt)("span",{className:"badge badge--secondary",title:"Can be this sub-element or an attribute."},"Property"),"Filter if the broadcast message is sent after the duration has passed, or if it's skipped."),(0,l.kt)("td",null,(0,l.kt)("a",{href:"/docs/modules/mechanics/filters"},"Filters")))))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Examples")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<broadcasts>\n    <tip after="30s">A [Tip] displayed 30 seconds into the match</tip>\n    <alert after="5m">An [Alert] displayed after 5 minutes</alert>\n    <tip after="10m" count="3">Repeated [Tip] at 10m, 20m, and 30m</tip>\n    <tip after="99s" count="oo">Repeated every 99 seconds, forever</tip>\n    <tip after="20m" every="1m">Displayed at 20m and every minute after that</tip>\n    <tip after="30m" every="10m" count="3">At 30m, 40m, and 50m</tip>\n</broadcasts>\n')))}c.isMDXComponent=!0}}]);