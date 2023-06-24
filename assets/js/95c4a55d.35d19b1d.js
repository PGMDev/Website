"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9751],{3905:(t,e,l)=>{l.d(e,{Zo:()=>d,kt:()=>b});var n=l(7294);function a(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function r(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function u(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?r(Object(l),!0).forEach((function(e){a(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function i(t,e){if(null==t)return{};var l,n,a=function(t,e){if(null==t)return{};var l,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)l=r[n],e.indexOf(l)>=0||(a[l]=t[l]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)l=r[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(a[l]=t[l])}return a}var o=n.createContext({}),s=function(t){var e=n.useContext(o),l=e;return t&&(l="function"==typeof t?t(e):u(u({},e),t)),l},d=function(t){var e=s(t.components);return n.createElement(o.Provider,{value:e},t.children)},m="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var l=t.components,a=t.mdxType,r=t.originalType,o=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),m=s(l),c=a,b=m["".concat(o,".").concat(c)]||m[c]||k[c]||r;return l?n.createElement(b,u(u({ref:e},d),{},{components:l})):n.createElement(b,u({ref:e},d))}));function b(t,e){var l=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=l.length,u=new Array(r);u[0]=c;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[m]="string"==typeof t?t:a,u[1]=i;for(var s=2;s<r;s++)u[s]=l[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,l)}c.displayName="MDXCreateElement"},6998:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>o,contentTitle:()=>u,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=l(7462),a=(l(7294),l(3905));const r={id:"item-mods",title:"Item Mods"},u=void 0,i={unversionedId:"modules/gear/item-mods",id:"modules/gear/item-mods",title:"Item Mods",description:"The item mods module allows modification of all items present on a map or created during the match. This can be used, for example, to make all gold swords unbreakable or give all items of a specific type a custom name.",source:"@site/docs/modules/gear/item-mods.mdx",sourceDirName:"modules/gear",slug:"/modules/gear/item-mods",permalink:"/docs/modules/gear/item-mods",draft:!1,editUrl:"https://github.com/PGMDev/Website/tree/master/src/docs/modules/gear/item-mods.mdx",tags:[],version:"current",frontMatter:{id:"item-mods",title:"Item Mods"},sidebar:"docs",previous:{title:"Shops",permalink:"/docs/modules/gear/shops"},next:{title:"Crafting Recipes",permalink:"/docs/modules/gear/crafting"}},o={},s=[{value:"Item-Mod Element",id:"item-mod-element",level:4},{value:"Rule Sub-Elements",id:"rule-sub-elements",level:3},{value:"Match Sub-Elements",id:"match-sub-elements",level:3},{value:"Item Meta",id:"item-meta",level:2},{value:"Modify Sub-Elements",id:"modify-sub-elements",level:3},{value:"Modify Attributes",id:"modify-attributes",level:3}],d={toc:s},m="wrapper";function k(t){let{components:e,...l}=t;return(0,a.kt)(m,(0,n.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The item mods module allows modification of all items present on a map or created during the match. This can be used, for example, to make all gold swords unbreakable or give all items of a specific type a custom name."),(0,a.kt)("h4",{id:"item-mod-element"},"Item-Mod Element"),(0,a.kt)("div",{className:"table-container"},(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Element"),(0,a.kt)("th",null,"Description"),(0,a.kt)("th",null,"Value/Children"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<item-mods> </item-mods>")),(0,a.kt)("td",null,"The item mods node, containing all the individual modification rules."),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Sub-elements"),(0,a.kt)("th",null),(0,a.kt)("th",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<rule> </rule>")),(0,a.kt)("td",null,"A single item modification rule."),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--secondary"},"Rule Sub-Elements")))))),(0,a.kt)("h3",{id:"rule-sub-elements"},"Rule Sub-Elements"),(0,a.kt)("div",{className:"table-container"},(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Element"),(0,a.kt)("th",null,"Description"),(0,a.kt)("th",null,"Value/Children"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<match> </match>")),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--danger"},"Required"),(0,a.kt)("span",{className:"badge badge--warning",title:"Only one of this child permitted per parent"},"Unique"),"The material or materials to modify."),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--secondary"},"Match Sub-Elements"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<modify> </modify>")),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--danger"},"Required"),(0,a.kt)("span",{className:"badge badge--warning",title:"Only one of this child permitted per parent"},"Unique"),"The attributes to modify on the specified material(s)."),(0,a.kt)("td",null,(0,a.kt)("a",{href:"#itemmeta"},"Item Meta")))))),(0,a.kt)("h3",{id:"match-sub-elements"},"Match Sub-Elements"),(0,a.kt)("div",{className:"table-container"},(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Element"),(0,a.kt)("th",null,"Description"),(0,a.kt)("th",null,"Value/Children"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<material> </material>")),(0,a.kt)("td",null,"An individual material to match."),(0,a.kt)("td",null,(0,a.kt)("a",{href:"/docs/reference/items/inventory#material_matchers"},"Single Material Pattern"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<all-materials/>")),(0,a.kt)("td",null,"Match all materials."),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<all-blocks/>")),(0,a.kt)("td",null,"Match all block type materials."),(0,a.kt)("td",null))))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<item-mods>\n    <rule>\n        <match>\n            <material>Iron Sword</material>\n        </match>\n        <modify unbreakable="true">\n            <enchantment level="1">Knockback</enchantment>\n        </modify>\n    </rule>\n</item-mods>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<item-mods>\n    <rule>\n        <match>\n            <material>Bow</material>\n        </match>\n        <modify show-enchantments="false" unbreakable="true">\n            <enchantment level="2">Infinity</enchantment>\n        </modify>\n    </rule>\n</item-mods>\n')),(0,a.kt)("h2",{id:"item-meta"},"Item Meta"),(0,a.kt)("p",null,"The following attributes and sub-elements can be used with the ",(0,a.kt)("inlineCode",{parentName:"p"},"<modify>")," element to modify an item or block.\nWhile these are the same attributes as used in item kits\nthe modify element does not currently support the projectile or grenade attributes."),(0,a.kt)("h3",{id:"modify-sub-elements"},"Modify Sub-Elements"),(0,a.kt)("div",{className:"table-container"},(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Element"),(0,a.kt)("th",null,"Description"),(0,a.kt)("th",null,"Value"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<enchantment> </enchantment>")),(0,a.kt)("td",null,"This item's enchantments."),(0,a.kt)("td",null,(0,a.kt)("a",{href:"/docs/modules/gear/items#enchantments"},"Enchantments"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<effect> </effect>")),(0,a.kt)("td",null,"A custom potion effect, only applies for potion items."),(0,a.kt)("td",null,(0,a.kt)("a",{href:"/docs/modules/gear/potions"},"Potion Effect"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<attribute> </attribute>")),(0,a.kt)("td",null,"Custom attributes for this item."),(0,a.kt)("td",null,(0,a.kt)("a",{href:"/docs/modules/gear/items#attributes"},"Attribute Modifiers"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<can-destroy> </can-destroy>")),(0,a.kt)("td",null,"The materials that can be mined with the item."),(0,a.kt)("td",null,(0,a.kt)("a",{href:"/docs/modules/gear/items#can-destroy"},"Can Destroy"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<can-place-on> </can-place-on>")),(0,a.kt)("td",null,"Materials that the item can be placed on."),(0,a.kt)("td",null,(0,a.kt)("a",{href:"/docs/modules/gear/items#can-destroy"},"Can Place On")))))),(0,a.kt)("h3",{id:"modify-attributes"},"Modify Attributes"),(0,a.kt)("div",{className:"table-container"},(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Attribute"),(0,a.kt)("th",null,"Description"),(0,a.kt)("th",null,"Value"),(0,a.kt)("th",null,"Default"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"name")),(0,a.kt)("td",null,"The item's display name that appears when it is selected."),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"String")),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"lore")),(0,a.kt)("td",null,"Custom text that appears when a player hovers over the item in the inventory."),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"String")),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"unbreakable")),(0,a.kt)("td",null,"Specify if this item is unbreakable and hides the durability bar in Minecraft."),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"true/false")),(0,a.kt)("td",null,"false")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"color")),(0,a.kt)("td",null,"Leather armor color as a hexadecimal color. ",(0,a.kt)("label",null,"RRGGBB"),(0,a.kt)("br",null),(0,a.kt)("em",null,"Only applies to leather armor items.")),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"Hex Color")),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"potion")),(0,a.kt)("td",null,"Potion type",(0,a.kt)("br",null),(0,a.kt)("em",null,"Only applies to potion items.")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://minecraft.fandom.com/wiki/Potion#Data_values"},"Potion ID")),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"show-enchantments")),(0,a.kt)("td",null,"Show enchantments in the item tooltip."),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"true/false")),(0,a.kt)("td",null,"true")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"show-attributes")),(0,a.kt)("td",null,"Show attribute modifiers in the item tooltip."),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"true/false")),(0,a.kt)("td",null,"true")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"show-unbreakable")),(0,a.kt)("td",null,"Show the unbreakable property in the item tooltip."),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"true/false")),(0,a.kt)("td",null,"true")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"show-can-destroy")),(0,a.kt)("td",null,"Show the breakable block list in the item tooltip."),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"true/false")),(0,a.kt)("td",null,"true")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"show-can-place-on")),(0,a.kt)("td",null,"Show the blocks the item can be placed on in the item tooltip."),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"true/false")),(0,a.kt)("td",null,"true")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"show-other")),(0,a.kt)("td",null,"Show various other things in the item tooltip."),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"true/false")),(0,a.kt)("td",null,"true"))))))}k.isMDXComponent=!0}}]);