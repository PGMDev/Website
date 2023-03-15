"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[143],{3905:(e,t,l)=>{l.d(t,{Zo:()=>o,kt:()=>p});var n=l(7294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function s(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?s(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):s(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)l=s[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)l=s[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),l=t;return e&&(l="function"==typeof e?e(t):r(r({},t),e)),l},o=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),d=c(l),m=a,p=d["".concat(i,".").concat(m)]||d[m]||k[m]||s;return l?n.createElement(p,r(r({ref:t},o),{},{components:l})):n.createElement(p,r({ref:t},o))}));function p(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=l.length,r=new Array(s);r[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[d]="string"==typeof e?e:a,r[1]=u;for(var c=2;c<s;c++)r[c]=l[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,l)}m.displayName="MDXCreateElement"},8568:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>k,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var n=l(7462),a=(l(7294),l(3905));const s={id:"classes",title:"Classes"},r=void 0,u={unversionedId:"modules/gear/classes",id:"modules/gear/classes",title:"Classes",description:"Classes allow the player to pick a specific class at the beginning of the game which gives them special abilities. Classes can be used on any map type, however care must be taken to balance them properly. Players can then change their class ingame with the /class command.",source:"@site/docs/modules/gear/classes.mdx",sourceDirName:"modules/gear",slug:"/modules/gear/classes",permalink:"/docs/modules/gear/classes",draft:!1,editUrl:"https://github.com/PGMDev/Website/tree/master/src/docs/modules/gear/classes.mdx",tags:[],version:"current",frontMatter:{id:"classes",title:"Classes"},sidebar:"docs",previous:{title:"Kits",permalink:"/docs/modules/gear/kits"},next:{title:"Pickups",permalink:"/docs/modules/gear/pickups"}},i={},c=[{value:"Class Attributes",id:"class-attributes",level:5},{value:"Class Sub-elements",id:"class-sub-elements",level:5}],o={toc:c},d="wrapper";function k(e){let{components:t,...l}=e;return(0,a.kt)(d,(0,n.Z)({},o,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Classes allow the player to pick a specific class at the beginning of the game which gives them special abilities. Classes can be used on any map type, however care must be taken to balance them properly. Players can then change their class ingame with the ",(0,a.kt)("inlineCode",{parentName:"p"},"/class")," command."),(0,a.kt)("div",{className:"table-container"},(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{minWidth:"300px"}},"Classes Element"),(0,a.kt)("th",null,"Description"),(0,a.kt)("th",null,"Value/Children"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<classes> </classes>")),(0,a.kt)("td",null,"A node containing a single class or a group of classes."),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Sub-elements"),(0,a.kt)("th",null),(0,a.kt)("th",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<class> </class>")),(0,a.kt)("td",null,"A single player class."),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--secondary"},"Class Sub-elements")))))),(0,a.kt)("h5",{id:"class-attributes"},"Class Attributes"),(0,a.kt)("div",{className:"table-container"},(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Attribute"),(0,a.kt)("th",null,"Description"),(0,a.kt)("th",null,"Value"),(0,a.kt)("th",null,"Default"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"name")),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--danger"},"Required"),"The class's name, must be unique."),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"String")),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"description")),(0,a.kt)("td",null,"Description shown in the ",(0,a.kt)("label",null,"/classes")," command."),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"String")),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"longdescription")),(0,a.kt)("td",null,"Description shown in class picker menu."),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"String")),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"icon")),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--danger"},"Required"),"Icon shown in the class picker menu."),(0,a.kt)("td",null,(0,a.kt)("a",{href:"/docs/reference/items/inventory#material_matchers"},"Single Material Pattern")),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"family")),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--danger"},"Required"),'The "group" of classes.'),(0,a.kt)("td",null,(0,a.kt)("a",{href:"/docs/modules/gear/classes"},"Class Family Name")),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"sticky")),(0,a.kt)("td",null,"If set to ",(0,a.kt)("label",null,"true"),", players can't change the class mid-match, instead they must rejoin."),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"true/false")),(0,a.kt)("td",null,"false")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"default")),(0,a.kt)("td",null,"Specify if the class is the default class for new players.",(0,a.kt)("br",null),(0,a.kt)("em",null,"One class must be set as the default.")),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"true/false")),(0,a.kt)("td",null,"false")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"restrict")),(0,a.kt)("td",null,"If set to ",(0,a.kt)("label",null,"true"),", only operators can use this class."),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"true/false")),(0,a.kt)("td",null,"false"))))),(0,a.kt)("h5",{id:"class-sub-elements"},"Class Sub-elements"),(0,a.kt)("div",{className:"table-container"},(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Element"),(0,a.kt)("th",null,"Description"),(0,a.kt)("th",null,"Type"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<kit>")),(0,a.kt)("td",null,"The kit given to players using this class."),(0,a.kt)("td",null,(0,a.kt)("a",{href:"/docs/modules/gear/kits"},"Kits")))))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<classes family="ghost" sticky="true">\n    <class name="Demon" default="true" description="Smoke and Fire!" icon="fireball">\n        <kit>\n            <potion duration="oo" amplifier="2" ambient="true">damage resistance</potion>\n            <potion duration="oo" amplifier="1" ambient="true">speed</potion>\n            <item slot="8" amount="16" material="cooked beef"/>\n            <item slot="1" amount="5" name="`3Grenade" grenade="true" material="ender pearl"/>\n        </kit>\n    </class>\n</classes>\n')))}k.isMDXComponent=!0}}]);