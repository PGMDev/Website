"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8717],{3905:(e,t,l)=>{l.d(t,{Zo:()=>p,kt:()=>k});var n=l(7294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function s(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(l),m=a,k=c["".concat(i,".").concat(m)]||c[m]||d[m]||r;return l?n.createElement(k,o(o({ref:t},p),{},{components:l})):n.createElement(k,o({ref:t},p))}));function k(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,o=new Array(r);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<r;u++)o[u]=l[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}m.displayName="MDXCreateElement"},6778:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var n=l(7462),a=(l(7294),l(3905));const r={id:"shops",title:"Shops"},o=void 0,s={unversionedId:"modules/gear/shops",id:"modules/gear/shops",title:"Shops",description:"The Shops module is an easy way to add shop functionality to a map with a GUI interface.",source:"@site/docs/modules/gear/shops.mdx",sourceDirName:"modules/gear",slug:"/modules/gear/shops",permalink:"/docs/modules/gear/shops",draft:!1,editUrl:"https://github.com/PGMDev/Website/tree/master/src/docs/modules/gear/shops.mdx",tags:[],version:"current",frontMatter:{id:"shops",title:"Shops"},sidebar:"docs",previous:{title:"Pickups",permalink:"/docs/modules/gear/pickups"},next:{title:"Item Mods",permalink:"/docs/modules/gear/item-mods"}},i={},u=[{value:"Shop Element",id:"shop-element",level:4},{value:"Shop Elements",id:"shop-elements",level:3},{value:"Shop Attributes",id:"shop-attributes",level:3},{value:"Category Attributes",id:"category-attributes",level:3},{value:"Item Attributes",id:"item-attributes",level:3},{value:"Shopkeepers",id:"shopkeepers",level:2},{value:"Shopkeeper Element",id:"shopkeeper-element",level:3},{value:"Shopkeeper Attributes",id:"shopkeeper-attributes",level:3},{value:"Examples",id:"examples",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...l}=e;return(0,a.kt)(c,(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Shops module is an easy way to add shop functionality to a map with a GUI interface.\nPlayers interact with mobs (like Villagers) which are shopkeepers which they can buy items using currencies.\nShops have categories of items, and each category can store up to 28 unique items.\nPlayers can also buy a kit instead of individual items, or use muiltiple currencies to purchase items."),(0,a.kt)("h4",{id:"shop-element"},"Shop Element"),(0,a.kt)("div",{className:"table-container"},(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Element"),(0,a.kt)("th",null,"Description"),(0,a.kt)("th",null,"Children"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<shops> </shops>")),(0,a.kt)("td",null,"A node containing the shops for this map."),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--secondary"},"Shop Elements"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Sub-elements"),(0,a.kt)("th",null),(0,a.kt)("th",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<shop> </shop>")),(0,a.kt)("td",null,"An individual shop."),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--secondary"},"Category Elements")))))),(0,a.kt)("h3",{id:"shop-elements"},"Shop Elements"),(0,a.kt)("div",{className:"table-container"},(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Element"),(0,a.kt)("th",null,"Description"),(0,a.kt)("th",null,"Value/Children"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<category> </category>")),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--danger"},"Required"),"A category that can hold up to 28 items."),(0,a.kt)("td",null,(0,a.kt)("a",{href:"/docs/modules/gear/items"},"Items"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<shop> </shop>")),(0,a.kt)("td",null,"An individual shop."),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--secondary"},"Shop Elements")))))),(0,a.kt)("h3",{id:"shop-attributes"},"Shop Attributes"),(0,a.kt)("div",{className:"table-container"},(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Element"),(0,a.kt)("th",null,"Description"),(0,a.kt)("th",null,"Value"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"id")),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--danger"},"Required"),"The ID for the shop."),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"String"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"name")),(0,a.kt)("td",null,"The name for the in-game shop."),(0,a.kt)("td",null,(0,a.kt)("a",{href:"/docs/reference/misc/formatting#chatColors"},"Chat Color Name")))))),(0,a.kt)("h3",{id:"category-attributes"},"Category Attributes"),(0,a.kt)("div",{className:"table-container"},(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Element"),(0,a.kt)("th",null,"Description"),(0,a.kt)("th",null,"Value"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"id")),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--danger"},"Required"),"The ID for the category."),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"String"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"name")),(0,a.kt)("td",null,"The name for the in-game category."),(0,a.kt)("td",null,(0,a.kt)("a",{href:"/docs/reference/misc/formatting#chatColors"},"Chat Color Name"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"material")),(0,a.kt)("td",null,"The item to display for the category"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"/docs/reference/items/inventory#material_matchers"},"Material Name")))))),(0,a.kt)("h3",{id:"item-attributes"},"Item Attributes"),(0,a.kt)("p",null,"Items have unique attributes when used in a shop, usually for currency purchases.\nItems can be purchased with multiple currencies using the ",(0,a.kt)("inlineCode",{parentName:"p"},"<payment>")," tag."),(0,a.kt)("div",{className:"table-container"},(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Element"),(0,a.kt)("th",null,"Description"),(0,a.kt)("th",null,"Value"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"currency")),(0,a.kt)("td",null,"The currency needed to purchase."),(0,a.kt)("td",null,(0,a.kt)("a",{href:"/docs/reference/items/inventory#material_matchers"},"Material Name"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"price")),(0,a.kt)("td",null,"The amount of a currency needed to purchase."),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"Number"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"kit")),(0,a.kt)("td",null,"The kit to give to the player"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"/docs/modules/gear/kits"},"Kit"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"color")),(0,a.kt)("td",null,"Changes the currency text color."),(0,a.kt)("td",null,(0,a.kt)("a",{href:"/docs/reference/misc/formatting#chatColors"},"Chat Color Name")))))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- Item where a kit is defined. --\x3e\n\x3c!-- Icon will be a stick but kit can give anything --\x3e\n<item name="Magic Wand" material="stick" price="100" currency="blaze powder" kit="magic-kit">\n\n\x3c!-- Multiple Payment requirements--\x3e\n<item material="diamond sword" amount="1">\n    <enchantment level="2">sharpness</enchantment>\n    <payment price="10" currency="diamond"/>\n    <payment price="20" currency="stick"/>\n</item>\n\n\x3c!-- Custom currency uses a child <item> under <payment> --\x3e\n<item material="diamond sword" amount="1">\n  <payment price="1">\n      \x3c!-- Item name is shown under the cost lore instead of the raw material name --\x3e\n      <item name="`bEnchanted Diamond" material="diamond">\n          <enchantment level="2">sharpness</enchantment>\n      </item>\n  </payment>\n</item>\n')),(0,a.kt)("h2",{id:"shopkeepers"},"Shopkeepers"),(0,a.kt)("p",null,"Shopkeepers are invulnerable, unmovable entities that hold a single shop type and are spawned at match load.\nEach shop type can have an unlimited number of shopkeepers, however. There's no limitations to how many players\ncan have a shop open at the same time."),(0,a.kt)("p",null,"Shopkeepers must use a single location provider, multiple inner points/regions are not allowed."),(0,a.kt)("h3",{id:"shopkeeper-element"},"Shopkeeper Element"),(0,a.kt)("div",{className:"table-container"},(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Element"),(0,a.kt)("th",null,"Description"),(0,a.kt)("th",null,"Children"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<shopkeepers> </shopkeepers>")),(0,a.kt)("td",null,"A node containing a set of shopkeepers for this map."),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--secondary"},"Shopkeeper Elements"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Sub-elements"),(0,a.kt)("th",null),(0,a.kt)("th",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<shopkeeper> </shopkeeper>")),(0,a.kt)("td",null,"An individual shopkeeper."),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--secondary"},"Shopkeeper Attributes")))))),(0,a.kt)("h3",{id:"shopkeeper-attributes"},"Shopkeeper Attributes"),(0,a.kt)("div",{className:"table-container"},(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Element"),(0,a.kt)("th",null,"Description"),(0,a.kt)("th",null,"Value"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"name")),(0,a.kt)("td",null,"Name for the shopkeeper."),(0,a.kt)("td",null,(0,a.kt)("a",{href:"/docs/reference/misc/formatting#chatColors"},"Chat Color Name"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"mob")),(0,a.kt)("td",null,"Mob type for shopkeeper ",(0,a.kt)("i",null,"(defaults to Villager)")),(0,a.kt)("td",null,(0,a.kt)("a",{href:"/docs/reference/entities/entity-types"},"Creature Type"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"shop")),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--danger"},"Required"),"The shop to use."),(0,a.kt)("td",null,"Shop ID"))))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- There\'s no limit to how many shopkeepers can be in a --\x3e\n\x3c!-- match, as long as each <shop> has at least 1 keeper. --\x3e\n<shopkeepers>\n    \x3c!-- A shop keeper for the "Items" shop (defaults to villager) --\x3e\n    <shopkeeper name="`5Purple `7Item Shop" shop="purple-item-shop">\n        <point yaw="0" pitch="10">-88.5,13,-103.5</point>\n    </shopkeeper>\n\n    \x3c!-- You can define a mob attribute to set the entity type --\x3e\n    <shopkeeper name="`4Red `dMagic Shop" mob="Witch" shop="magic-shop" />\n        <point>-90.5,54,-100.5</point>\n    </shopkeeper>\n</shopkeepers>\n')),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<shops>\n    <shop id="item-shop" name="`bItems">\n        \x3c!-- You can have an multiple categories, each category will hold up to 28 items --\x3e\n        <category id="weapons" name="`cWeapons" material="stone sword">\n            \x3c!-- Free item --\x3e\n            <item material="wooden sword" amount="1" price="0"/>\n\n            \x3c!-- Currency & Price in same line --\x3e\n            <item material="stone sword" amount="1" price="3" currency="emerald" />\n\n            \x3c!-- Payment as sub-element but only using a single currency --\x3e\n            <item name="Cool TNT" material="tnt" amount="5">\n                <payment price="5" currency="gunpowder"/>\n            </item>\n          </category>\n          \x3c!-- Seperate "food" page in shop --\x3e\n          <category id="food" name="`aFood" material="apple">\n              <item material="apple" name="Tasty Apple" amount="100" price="10" currency="gold ingot"/>\n              <item material="carrot" name="Crunchy Carrot" amount="50" price="4" currency="gold ingot"/>\n          </category>\n    </shop>\n    \x3c!-- You can define as many <shops> as needed --\x3e\n</shops>\n')))}d.isMDXComponent=!0}}]);