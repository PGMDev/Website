"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3951],{3905:(t,e,l)=>{l.d(e,{Zo:()=>o,kt:()=>m});var n=l(7294);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function a(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function u(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?a(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function i(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var s=n.createContext({}),c=function(t){var e=n.useContext(s),l=e;return t&&(l="function"==typeof t?t(e):u(u({},e),t)),l},o=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var l=t.components,r=t.mdxType,a=t.originalType,s=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),k=c(l),m=r,b=k["".concat(s,".").concat(m)]||k[m]||d[m]||a;return l?n.createElement(b,u(u({ref:e},o),{},{components:l})):n.createElement(b,u({ref:e},o))}));function m(t,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=l.length,u=new Array(a);u[0]=k;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,u[1]=i;for(var c=2;c<a;c++)u[c]=l[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,l)}k.displayName="MDXCreateElement"},4713:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>s,contentTitle:()=>u,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=l(7462),r=(l(7294),l(3905));const a={id:"structures",title:"Structures"},u=void 0,i={unversionedId:"modules/blocks/structures",id:"modules/blocks/structures",title:"Structures",description:"Structures are sets of blocks that can be dynamically copied into the world in response to match events.",source:"@site/docs/modules/blocks/structures.mdx",sourceDirName:"modules/blocks",slug:"/modules/blocks/structures",permalink:"/docs/modules/blocks/structures",draft:!1,editUrl:"https://github.com/PGMDev/Website/tree/master/src/docs/modules/blocks/structures.mdx",tags:[],version:"current",frontMatter:{id:"structures",title:"Structures"},sidebar:"docs",previous:{title:"Renewables",permalink:"/docs/modules/blocks/renewables"}},s={},c=[{value:"Structures Element",id:"structures-element",level:4},{value:"Structure Attributes",id:"structure-attributes",level:3},{value:"Dynamic Attributes",id:"dynamic-attributes",level:3},{value:"Examples",id:"examples",level:3}],o={toc:c};function d(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},o,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Structures are sets of blocks that can be dynamically copied into the world in response to match events.\nThe original structure is built into the map by the mapmaker and defined in XML with regions.\nWhen the match loads, the original structures will be saved and cleared from the world."),(0,r.kt)("p",null,"Structures are brought to life by the ",(0,r.kt)("inlineCode",{parentName:"p"},"<dynamic>")," element.\nThis is an XML construct that causes a structure to appear at a specified location in reaction to a given filter.\nWhenever the filter is in a passing state (when it has a value of ALLOW or ABSTAIN), the structure will appear.\nWhen the filter is not passing, (when its value is DENY), the structure will disappear."),(0,r.kt)("p",null,"Structures are a very powerful feature that can be used to implement an endless variety of custom game mechanics."),(0,r.kt)("h4",{id:"structures-element"},"Structures Element"),(0,r.kt)("div",{className:"table-container"},(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Element"),(0,r.kt)("th",null,"Description"),(0,r.kt)("th",null,"Value/Children"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"<structures> </structures>")),(0,r.kt)("td",null,"Element containing all structures and dynamics."),(0,r.kt)("td",null,(0,r.kt)("span",{className:"badge badge--secondary"},"Structure and Dynamic Elements"))),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Sub-elements"),(0,r.kt)("th",null),(0,r.kt)("th",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"<structure>")),(0,r.kt)("td",null,"Defines a block structure that is part of the map."),(0,r.kt)("td",null,(0,r.kt)("span",{className:"badge badge--secondary"},"Structure Attributes"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"<dynamic>")),(0,r.kt)("td",null,"Causes a structure to be placed/removed at some location in reaction to a filter."),(0,r.kt)("td",null,(0,r.kt)("span",{className:"badge badge--secondary"},"Dynamic Attributes")))))),(0,r.kt)("h3",{id:"structure-attributes"},"Structure Attributes"),(0,r.kt)("div",{className:"table-container"},(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Element"),(0,r.kt)("th",null,"Description"),(0,r.kt)("th",null,"Value/Children"),(0,r.kt)("th",null,"Default"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"id")),(0,r.kt)("td",null,(0,r.kt)("span",{className:"badge badge--danger"},"Required"),"Unique identifier used to reference the structure from other places in the XML."),(0,r.kt)("td",null,(0,r.kt)("span",{className:"badge badge--primary"},"String")),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"region")),(0,r.kt)("td",null,(0,r.kt)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),(0,r.kt)("span",{className:"badge badge--danger"},"Required"),"Unique identifier used to reference the structure from other places in the XML."),(0,r.kt)("td",null,(0,r.kt)("a",{href:"/docs/modules/mechanics/regions#block-bounded-regions"},"Cuboid Region")),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"origin")),(0,r.kt)("td",null," ","A location used as the reference point when specifying destination points for the structure."),(0,r.kt)("td",null,(0,r.kt)("span",{className:"badge badge--primary"},"X,Y,Z")),(0,r.kt)("td",null,"Low corner of ",(0,r.kt)("label",null,"region")," bounding box.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"air")),(0,r.kt)("td",null,"Whether air blocks should be considered part of the structure. If true, empty blocks in the structure's region will be copied along with it, clearing any blocks at the destination. If false, air blocks are not copied and the structure is mixed in with blocks at the destination."),(0,r.kt)("td",null,(0,r.kt)("span",{className:"badge badge--primary"},"true/false")),(0,r.kt)("td",null,(0,r.kt)("label",null,"false"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"clear")),(0,r.kt)("td",null,"Whether to clear the original structure when the match loads. If true, the structure's region will be filled with air, and players will never see it. If false, the original structure is not modified."),(0,r.kt)("td",null,(0,r.kt)("span",{className:"badge badge--primary"},"true/false")),(0,r.kt)("td",null,(0,r.kt)("label",null,"true")))))),(0,r.kt)("h3",{id:"dynamic-attributes"},"Dynamic Attributes"),(0,r.kt)("div",{className:"table-container"},(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Element"),(0,r.kt)("th",null,"Description"),(0,r.kt)("th",null,"Value/Children"),(0,r.kt)("th",null,"Default"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"id")),(0,r.kt)("td",null,"Unique identifier used to reference the dynamic from other places in the XML."),(0,r.kt)("td",null,(0,r.kt)("span",{className:"badge badge--primary"},"String")),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"structure")),(0,r.kt)("td",null,"The ",(0,r.kt)("label",null,"id")," of the structure to place."),(0,r.kt)("td",null,(0,r.kt)("a",{href:"#structure-attributes"},"Structure ID")),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"filter")),(0,r.kt)("td",null,(0,r.kt)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),"Filter used to determine when a structure is ",(0,r.kt)("em",null,"placed")," when ",(0,r.kt)("label",null,"trigger")," allows."),(0,r.kt)("td",null,(0,r.kt)("a",{href:"/docs/modules/mechanics/filters"},"Filter")),(0,r.kt)("td",null,(0,r.kt)("label",null,"always")," ",(0,r.kt)("em",null,"(structure is permanently placed)"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"trigger")),(0,r.kt)("td",null,(0,r.kt)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),"Dynamic filter which triggers placement and clearing of structures."),(0,r.kt)("td",null,(0,r.kt)("a",{href:"/docs/modules/mechanics/filters#dynamic-filters"},"Dynamic Filter")),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"location")),(0,r.kt)("td",null,"Location to place the structure at. The structure's"," ",(0,r.kt)("label",null,"origin")," will be at this point."," ",(0,r.kt)("em",null,"Mutually exclusive with ",(0,r.kt)("label",null,"offset"),".")),(0,r.kt)("td",null,(0,r.kt)("span",{className:"badge badge--primary"},"X,Y,Z")),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"offset")),(0,r.kt)("td",null,"Relative position to place the structure at. The structure will be translated by this amount from it's original location."," ",(0,r.kt)("em",null,"Mutually exclusive with ",(0,r.kt)("label",null,"location"),".")),(0,r.kt)("td",null,(0,r.kt)("span",{className:"badge badge--primary"},"X,Y,Z")),(0,r.kt)("td",null,(0,r.kt)("label",null,"0,0,0")," ",(0,r.kt)("em",null,"(structure placed at its original location)")))))),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<structures>\n    \x3c!-- Define a 25x2x7 cuboid structure called blue-bridge --\x3e\n    \x3c!-- The original structure is high in the sky around 0,0 --\x3e\n    <structure id="blue-bridge" air="false">\n        <region>\n            <cuboid min="0,192,0" size="25,2,7"/>\n        </region>\n    </structure>\n\n    \x3c!-- Define a cylindrical structure called tower, using a close fitting cuboid --\x3e\n    \x3c!-- The original structure is built in an area outside the map, around 400,400 --\x3e\n    <structure id="tower" origin="400,64,400">\n        <region>\n            <cuboid min="397,64,397" size="6,12,6"/>\n        </region>\n    </structure>\n\n    \x3c!-- Make blue-bridge appear whenever Blue Team owns the control-point called "hill" --\x3e\n    \x3c!-- The bridge will appear 128 blocks directly below it\'s original location --\x3e\n    <dynamic structure="blue-bridge" offset="0,-128,0">\n        <filter>\n            <objective team="blue-team">hill</objective>\n        </filter>\n    </dynamic>\n\n    \x3c!-- Start the match with a tower at 36,64,0 --\x3e\n    \x3c!-- After 5 minutes, move the tower to -36,64,0 --\x3e\n    \x3c!-- After 10 minutes, remove the tower --\x3e\n    <dynamic structure="tower" location="36,64,0">\n        <filter>\n            <not>\n                <time>5m</time>\n            </not>\n        </filter>\n    </dynamic>\n\n    <dynamic structure="tower" location="-36,64,0">\n        <filter>\n            <all>\n                <time>5m</time>\n                <not>\n                    <time>10m</time>\n                </not>\n            </all>\n        </filter>\n    </dynamic>\n</structures>\n')))}d.isMDXComponent=!0}}]);