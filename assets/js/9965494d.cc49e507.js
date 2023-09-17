"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3776],{3905:(t,e,l)=>{l.d(e,{Zo:()=>d,kt:()=>b});var n=l(7294);function a(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function o(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function i(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?o(Object(l),!0).forEach((function(e){a(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function r(t,e){if(null==t)return{};var l,n,a=function(t,e){if(null==t)return{};var l,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)l=o[n],e.indexOf(l)>=0||(a[l]=t[l]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)l=o[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(a[l]=t[l])}return a}var u=n.createContext({}),s=function(t){var e=n.useContext(u),l=e;return t&&(l="function"==typeof t?t(e):i(i({},e),t)),l},d=function(t){var e=s(t.components);return n.createElement(u.Provider,{value:e},t.children)},c="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var l=t.components,a=t.mdxType,o=t.originalType,u=t.parentName,d=r(t,["components","mdxType","originalType","parentName"]),c=s(l),m=a,b=c["".concat(u,".").concat(m)]||c[m]||k[m]||o;return l?n.createElement(b,i(i({ref:e},d),{},{components:l})):n.createElement(b,i({ref:e},d))}));function b(t,e){var l=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=l.length,i=new Array(o);i[0]=m;var r={};for(var u in e)hasOwnProperty.call(e,u)&&(r[u]=e[u]);r.originalType=t,r[c]="string"==typeof t?t:a,i[1]=r;for(var s=2;s<o;s++)i[s]=l[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}m.displayName="MDXCreateElement"},7185:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var n=l(7462),a=(l(7294),l(3905));const o={id:"lootables",title:"Lootables"},i=void 0,r={unversionedId:"modules/gear/lootables",id:"modules/gear/lootables",title:"Lootables",description:"Lootables are chests or other containers that generate their contents based on custom rules and probabilities.",source:"@site/docs/modules/gear/lootables.mdx",sourceDirName:"modules/gear",slug:"/modules/gear/lootables",permalink:"/docs/modules/gear/lootables",draft:!1,editUrl:"https://github.com/PGMDev/Website/tree/master/src/docs/modules/gear/lootables.mdx",tags:[],version:"current",frontMatter:{id:"lootables",title:"Lootables"},sidebar:"docs",previous:{title:"Kill Rewards",permalink:"/docs/modules/gear/kill-rewards"},next:{title:"Block Drops",permalink:"/docs/modules/blocks/blockdrops"}},u={},s=[{value:"Loot",id:"loot",level:3},{value:"Random Selection",id:"random-selection",level:4},{value:"Conditional Inclusion",id:"conditional-inclusion",level:4},{value:"Fill",id:"fill",level:3}],d={toc:s},c="wrapper";function k(t){let{components:e,...l}=t;return(0,a.kt)(c,(0,n.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Lootables are chests or other containers that generate their contents based on custom rules and probabilities.\nThey can optionally refill themselves on a schedule, or in response to dynamic filters."),(0,a.kt)("div",{className:"table-container"},(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Lootables Element"),(0,a.kt)("th",null,"Description"),(0,a.kt)("th",null,"Value/Children"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<lootables> </lootables>")),(0,a.kt)("td",null),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Sub-elements"),(0,a.kt)("th",null),(0,a.kt)("th",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<loot>")),(0,a.kt)("td",null,"A generated set of items"),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--secondary"},"Loot Sub-elements"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<fill>")),(0,a.kt)("td",null,"Configuration for filling containers with loot"),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--secondary"},"Fill Sub-elements")))))),(0,a.kt)("h3",{id:"loot"},"Loot"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<loot>")," element defines a generated set of items, using literal ",(0,a.kt)("inlineCode",{parentName:"p"},"<item>")," elements,\nand operations for choosing them."),(0,a.kt)("div",{className:"table-container",style:{marginBottom:"30px"}},(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Loot Element"),(0,a.kt)("th",null,"Description"),(0,a.kt)("th",null,"Value/Children"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<loot>")),(0,a.kt)("td",null,"A generated set of items"),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--secondary"},"Loot Sub-elements")))))),(0,a.kt)("div",{className:"table-container",style:{marginBottom:"30px"}},(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Loot Attributes"),(0,a.kt)("th",null,"Description"),(0,a.kt)("th",null,"Value"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"id")),(0,a.kt)("td",null,"Unique identifier used to reference this loot elsewhere"),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"String")))))),(0,a.kt)("div",{className:"table-container"},(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{minWidth:"200px"}},"Loot Sub-elements"),(0,a.kt)("th",null,"Description"),(0,a.kt)("th",null,"Type"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<item>")),(0,a.kt)("td",null,"An item to include in the loot. This can be any type of item element, and can have any item attributes."),(0,a.kt)("td",null,(0,a.kt)("a",{href:"/docs/modules/gear/items"},"Item"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<any>")),(0,a.kt)("td",null,(0,a.kt)("a",{className:"left-ref-link",href:"#any"},(0,a.kt)("i",{className:"fa fa-chevron-down"})),"Random selection of children"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<maybe>")),(0,a.kt)("td",null,"Include child conditionally based on a filter"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<all>")),(0,a.kt)("td",null,"Include all children"),(0,a.kt)("td",null))))),(0,a.kt)("h4",{id:"random-selection"},"Random Selection"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<any>")," element makes a random selection from any number of child elements.\nIts children can be ",(0,a.kt)("inlineCode",{parentName:"p"},"<option>")," elements, or any other ",(0,a.kt)("inlineCode",{parentName:"p"},"<loot>")," sub-element."),(0,a.kt)("div",{className:"table-container",style:{marginBottom:"30px"}},(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{minWidth:"150px"}},"Any Attributes"),(0,a.kt)("th",null,"Description"),(0,a.kt)("th",null,"Value"),(0,a.kt)("th",null,"Default"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"count")),(0,a.kt)("td",null,"Number of child elements to choose"),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"Numeric Range")),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"unique")),(0,a.kt)("td",null,(0,a.kt)("label",null,"true")," if each child can only be chosen once.",(0,a.kt)("br",null),(0,a.kt)("label",null,"false")," to allow a child to be chosen multiple times."),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"true/false")),(0,a.kt)("td",null,"true"))))),(0,a.kt)("div",{className:"table-container",style:{marginBottom:"30px"}},(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Any Sub-elements"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<option>")),(0,a.kt)("td",null,"A single option for the random selection"))))),(0,a.kt)("div",{className:"table-container"},(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{minWidth:"150px"}},"Option Attributes"),(0,a.kt)("th",null,"Description"),(0,a.kt)("th",null,"Value"),(0,a.kt)("th",null,"Default"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"weight")),(0,a.kt)("td",null,"Weight of this option relative to all others"),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"Number")),(0,a.kt)("td",null,"1")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"filter")),(0,a.kt)("td",null,"Filter used to decide the eligibility of this option"),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"Filter")),(0,a.kt)("td",null,(0,a.kt)("label",null,"always")))))),(0,a.kt)("h4",{id:"conditional-inclusion"},"Conditional Inclusion"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<maybe>")," element includes its child elements only if the specified filter matches.\nThe filter is matched against the first player to access the loot."),(0,a.kt)("div",{className:"table-container"},(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{minWidth:"150px"}},"Maybe Attributes"),(0,a.kt)("th",null,"Description"),(0,a.kt)("th",null,"Value"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"filter")),(0,a.kt)("td",null,"Filter used to decide inclusion of children"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"/docs/modules/mechanics/filters"},"Filter")))))),(0,a.kt)("h3",{id:"fill"},"Fill"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<fill>")," element fills containers with generated loot.\nIt will fill ",(0,a.kt)("strong",{parentName:"p"},"anything")," that has an inventory, and matches its ",(0,a.kt)("inlineCode",{parentName:"p"},"filter")," property.\nThis can include chests, dispensers, storage minecarts, or any other container block or entity.\nIt will fill containers regardless of where they came from, so if you don't want player-placed\nchests to be filled, then you will have to prevent that somehow."),(0,a.kt)("div",{className:"table-container",style:{marginBottom:"30px"}},(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Fill Element"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<fill>")),(0,a.kt)("td",null,"Automatically fills containers with loot"))))),(0,a.kt)("div",{className:"table-container"},(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Fill Attributes"),(0,a.kt)("th",null,"Description"),(0,a.kt)("th",null,"Value"),(0,a.kt)("th",null,"Default"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"loot")),(0,a.kt)("td",null,"Loot to fill containers with"),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"Loot")),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"filter")),(0,a.kt)("td",null,"Selects which blocks/entities to fill"),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"Filter")),(0,a.kt)("td",null,(0,a.kt)("label",null,"always"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"refill-trigger")),(0,a.kt)("td",null,"Optional dynamic filter that causes containers to be refilled"),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"Dynamic Filter")),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"refill-interval")),(0,a.kt)("td",null,"Time to refill containers after they are first accessed"),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"Time Period")),(0,a.kt)("td",null,"oo (never)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"refill-clear")),(0,a.kt)("td",null,"Whether to clear containers before refilling them"),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"true/false")),(0,a.kt)("td",null,"true"))))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<lootables>\n    \x3c!-- Define a procedural list of loot --\x3e\n    \x3c!-- Can be different every time it is used --\x3e\n    \x3c!-- All operators can be composed within each other --\x3e\n    <loot id="stuff">\n        \x3c!-- Always include these items --\x3e\n        <item material="stone sword"/>\n        <item material="bow"/>\n        \x3c!-- Include if filter matches opener of the container --\x3e\n        <maybe filter="red-team">\n            <item material="stained clay" damage="14" amount="64"/>\n            <item material="leather helmet" color="#f00"/>\n        </maybe>\n\n        \x3c!-- Choose one element at random --\x3e\n        <any>\n            <item material="stone" damage="1"/>\n            <item material="stone" damage="2"/>\n            <item material="stone" damage="3"/>\n        </any>\n\n        \x3c!-- Weighted choice --\x3e\n        <any>\n            <option weight="5">\n                <item material="cookie"/>\n            </option>\n            <option weight="3">\n                <item material="bread"/>\n            </option>\n            <option weight="1">\n                <item material="golden apple"/>\n            </option>\n        </any>\n\n        \x3c!-- Choose any two unique elements (unique="false" to allow duplicates) --\x3e\n        <any count="2">\n            ...\n        </any>\n\n        \x3c!-- Choose between 3 and 5 unique elements --\x3e\n        <any count="3..5">\n            ...\n        </any>\n    </loot>\n\n    \x3c!-- Define inventories to refill --\x3e\n    \x3c!-- Filling always happens when a player opens the inventory --\x3e\n    \x3c!-- Any block or entity that has an inventory (and matches the filter) will be filled --\x3e\n    <fill loot="stuff"          \x3c!-- Loot to fill inventory with --\x3e\n          filter="chests"       \x3c!-- Inventories to fill (blocks or entities) --\x3e\n          refill-interval="3s"  \x3c!-- Minimum interval between refills (default +inf) --\x3e\n          refill-trigger="..."  \x3c!-- Dynamic filter to trigger refill (default none) --\x3e\n          refill-clear="true"   \x3c!-- Clear inventory before refilling (default true) --\x3e\n    />\n</lootables>\n')))}k.isMDXComponent=!0}}]);