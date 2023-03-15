"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[670],{3905:(t,e,l)=>{l.d(e,{Zo:()=>i,kt:()=>b});var n=l(7294);function a(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function r(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function u(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?r(Object(l),!0).forEach((function(e){a(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function o(t,e){if(null==t)return{};var l,n,a=function(t,e){if(null==t)return{};var l,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)l=r[n],e.indexOf(l)>=0||(a[l]=t[l]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)l=r[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(a[l]=t[l])}return a}var d=n.createContext({}),s=function(t){var e=n.useContext(d),l=e;return t&&(l="function"==typeof t?t(e):u(u({},e),t)),l},i=function(t){var e=s(t.components);return n.createElement(d.Provider,{value:e},t.children)},k="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var l=t.components,a=t.mdxType,r=t.originalType,d=t.parentName,i=o(t,["components","mdxType","originalType","parentName"]),k=s(l),c=a,b=k["".concat(d,".").concat(c)]||k[c]||m[c]||r;return l?n.createElement(b,u(u({ref:e},i),{},{components:l})):n.createElement(b,u({ref:e},i))}));function b(t,e){var l=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=l.length,u=new Array(r);u[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[k]="string"==typeof t?t:a,u[1]=o;for(var s=2;s<r;s++)u[s]=l[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,l)}c.displayName="MDXCreateElement"},6770:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=l(7462),a=(l(7294),l(3905));const r={id:"xml",title:"XML"},u=void 0,o={unversionedId:"events/xml",id:"events/xml",title:"XML",description:"Format",source:"@site/docs/events/xml.mdx",sourceDirName:"events",slug:"/events/xml",permalink:"/docs/events/xml",draft:!1,editUrl:"https://github.com/PGMDev/Website/tree/master/src/docs/events/xml.mdx",tags:[],version:"current",frontMatter:{id:"xml",title:"XML"},sidebar:"Events",previous:{title:"Introduction",permalink:"/docs/events/main"},next:{title:"Examples",permalink:"/docs/events/examples"}},d={},s=[{value:"Format",id:"format",level:3},{value:"Format Attributes",id:"format-attributes",level:5},{value:"Format Sub-elements",id:"format-sub-elements",level:5},{value:"Veto",id:"veto",level:3},{value:"Veto Sub-elements",id:"veto-sub-elements",level:5},{value:"<code>&lt;decider&gt;</code>",id:"decider",level:4},{value:"Decider Sub-elements",id:"decider-sub-elements",level:6},{value:"<code>&lt;order&gt;</code>",id:"order",level:4},{value:"Order Attributes",id:"order-attributes",level:5},{value:"Order Sub-elements",id:"order-sub-elements",level:5}],i={toc:s},k="wrapper";function m(t){let{components:e,...l}=t;return(0,a.kt)(k,(0,n.Z)({},i,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"format"},"Format"),(0,a.kt)("p",null,'Formats are XML files that instruct the plugin to do a specific tournament format, i.e. having a Bo3 of CTW maps, or having several "rounds" of different maps and gamemodes.'),(0,a.kt)("p",null,"Every format XML file must contain the base ",(0,a.kt)("inlineCode",{parentName:"p"},"<format>")," module. The format module can also be a round and therefore can be used to create a nested rounds."),(0,a.kt)("div",{className:"table-container"},(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Format Element"),(0,a.kt)("th",null,"Description"),(0,a.kt)("th",null,"Value/Children"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<format> </format>")),(0,a.kt)("td",null,"The main format node containing all the modules used in this format. It can also represent a round and be nested inside other elements."),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--secondary"},"XML Modules")))))),(0,a.kt)("h5",{id:"format-attributes"},"Format Attributes"),(0,a.kt)("div",{className:"table-container"},(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Attribute"),(0,a.kt)("th",null,"Description"),(0,a.kt)("th",null,"Value"),(0,a.kt)("th",null,"Default"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"best-of")),(0,a.kt)("td",null,"What the match should be out of"),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"Number")),(0,a.kt)("td",null,"1")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"name")),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--danger"},"Only if nested in ","<options>"),"The name of the round. Useful for vetoing"),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"String")),(0,a.kt)("td",null))))),(0,a.kt)("h5",{id:"format-sub-elements"},"Format Sub-elements"),(0,a.kt)("div",{className:"table-container"},(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Element"),(0,a.kt)("th",null,"Description"),(0,a.kt)("th",null,"Attributes"),(0,a.kt)("th",null,"Value/Children"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<match>")),(0,a.kt)("td",null,"The name of the map."),(0,a.kt)("td",null,(0,a.kt)("label",null,'id=""')," (defaults to map name)"),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"String"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<veto>")),(0,a.kt)("td",null,"Represents a round with a veto mechanism to choose play order."),(0,a.kt)("td",null,(0,a.kt)("label",null,'id=""')),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--secondary"},"Veto Modules")))))),(0,a.kt)("h3",{id:"veto"},"Veto"),(0,a.kt)("p",null,"Every format can have a veto element to choose play order between rounds, and each round can have a veto mechanism to choose play order between maps."),(0,a.kt)("h5",{id:"veto-sub-elements"},"Veto Sub-elements"),(0,a.kt)("div",{className:"table-container"},(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Element"),(0,a.kt)("th",null,"Description"),(0,a.kt)("th",null,"Children"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<decider>")),(0,a.kt)("td",null,"A veto decider. Decides which team vetoes first."),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--secondary"},"Match"),(0,a.kt)("span",{className:"badge badge--secondary"},"<result-from />"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<options>")),(0,a.kt)("td",null,"Map options for that round."),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--secondary"},"Match"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<order>")),(0,a.kt)("td",null,"The veto order (ban, pick, etc.). The last element is enacted by the system."),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--secondary"},"Match")))))),(0,a.kt)("h4",{id:"decider"},(0,a.kt)("inlineCode",{parentName:"h4"},"<decider>")),(0,a.kt)("h6",{id:"decider-sub-elements"},"Decider Sub-elements"),(0,a.kt)("div",{className:"table-container"},(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Element"),(0,a.kt)("th",null,"Description"),(0,a.kt)("th",null,"Attribute"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<result-from />")),(0,a.kt)("td",null,"Uses the result from a round with a matching id, let it be a veto decider, match or round. Useful to stop repeating veto deciders."),(0,a.kt)("td",null,(0,a.kt)("label",null,'id="map-name"')))))),(0,a.kt)("h4",{id:"order"},(0,a.kt)("inlineCode",{parentName:"h4"},"<order>")),(0,a.kt)("h5",{id:"order-attributes"},"Order Attributes"),(0,a.kt)("div",{className:"table-container"},(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Attribute"),(0,a.kt)("th",null,"Description"),(0,a.kt)("th",null,"Value"),(0,a.kt)("th",null,"Default"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"ban-until")),(0,a.kt)("td",null,"The number of maps that will remain after banning maps."),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"Number")),(0,a.kt)("td",null,"1")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"starting-team")),(0,a.kt)("td",null,"Which team starts choosing/banning first."),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"Number")),(0,a.kt)("td",null,"1")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"time")),(0,a.kt)("td",null,"The time in seconds that each team has to veto."),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"Number")),(0,a.kt)("td",null,"30"))))),(0,a.kt)("h5",{id:"order-sub-elements"},"Order Sub-elements"),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"<order>")," has no attributes present, it will look for these sub-elements."),(0,a.kt)("div",{className:"table-container"},(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Element"),(0,a.kt)("th",null,"Description"),(0,a.kt)("th",null,"Attributes"),(0,a.kt)("th",null,"Attribute Type"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<pick>")),(0,a.kt)("td",null,"A pick in the veto process."),(0,a.kt)("td",null,(0,a.kt)("p",{style:{marginBottom:"10px"}},(0,a.kt)("label",null,'team=""')," The team that gets to pick the map"),(0,a.kt)("label",null,'insert="back"')," Whether the map should be added to the front or back of the maps to be played"),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"Number"),(0,a.kt)("span",{className:"badge badge--primary"},"String"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<ban>")),(0,a.kt)("td",null,"A ban in the veto process."),(0,a.kt)("td",null,(0,a.kt)("p",{style:{marginBottom:"10px"}},(0,a.kt)("label",null,'team=""')," The team that gets to pick the map"),(0,a.kt)("label",null,'insert="back"')," Whether the map should be added to the front or back of the maps to be played"),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"Number"),(0,a.kt)("span",{className:"badge badge--primary"},"String")))))))}m.isMDXComponent=!0}}]);