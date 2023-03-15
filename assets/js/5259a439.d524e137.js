"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2225],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=m(n),u=r,h=p["".concat(s,".").concat(u)]||p[u]||d[u]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3872:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const o={id:"warlock",title:"Warlock (DTM)"},l=void 0,i={unversionedId:"examples/warlock",id:"examples/warlock",title:"Warlock (DTM)",description:"Warlock is a Destroy the Monument map. Players must destroy a single obsidian monument.",source:"@site/docs/examples/warlock.mdx",sourceDirName:"examples",slug:"/examples/warlock",permalink:"/docs/examples/warlock",draft:!1,editUrl:"https://github.com/PGMDev/Website/tree/master/src/docs/examples/warlock.mdx",tags:[],version:"current",frontMatter:{id:"warlock",title:"Warlock (DTM)"},sidebar:"Examples",previous:{title:"The Fenland (DTM)",permalink:"/docs/examples/the-fenland"}},s={},m=[],c={toc:m},p="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Warlock is a Destroy the Monument map. Players must destroy a single obsidian monument."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Source: ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/MCResourcePile/overcast-maps/tree/master/maps/warlock"},"Warlock")," by ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/McSpider"},"McSpider"),".\n",(0,r.kt)("img",{src:n(2764).Z,width:"2060",height:"1005"}),"_","Players can build and jump their way to the other side of the map. The cobwebs define\nthe out of bounds region. Underground hallways lead to the monument.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5288).Z,width:"2060",height:"1005"}),"\n",(0,r.kt)("em",{parentName:"p"},"The monument is obsidian protected by stone bricks and a wooden pressure plate on top of it.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/modules/general/main"},(0,r.kt)("i",{className:"icon-right"},"\u27a1\ufe0f")),"\nEvery map XML file starts with the XML header and then the base ",(0,r.kt)("inlineCode",{parentName:"p"},"<map>")," module."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0"?>\n<map proto="1.4.2">\n\x3c!-- Specifies what the map is called --\x3e\n<name>Warlock</name>\n\x3c!-- States what version the map is --\x3e\n<version>1.3.10</version>\n\x3c!-- Tells the teams what the objective is in order to win the game --\x3e\n<objective>Break the obsidian from the enemy team\'s monument.</objective>\n\x3c!-- States who made the map --\x3e\n<authors>\n    <author uuid="e5953ddf-c1fc-4405-9ac9-6939631cd185"/> \x3c!-- McSpider --\x3e\n</authors>\n\x3c!-- States who made contributions to the map --\x3e\n<contributors>\n    <contributor uuid="ef4ea031-998f-4ec9-b7b6-1bdd428bcef8" contribution="Map Feedback and XML Coding"/> \x3c!-- Plastix --\x3e\n</contributors>\n\x3c!-- Shows any map specific rules that are not in normal server rules --\x3e\n<rules>\n    <rule>Don\'t spawn kill!</rule>\n    <rule>Don\'t block the spawns!</rule>\n</rules>\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/modules/format/teams"},(0,r.kt)("i",{className:"icon-right"},"\u27a1\ufe0f")),"\nDefines the team's ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/misc/formatting#chatColors"},"colors"),", names and how many people can be on the teams."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<teams>\n    <team color="dark red" max="13">Red</team>\n    <team color="blue" max="13">Blue</team>\n</teams>\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/modules/gear/kits"},(0,r.kt)("i",{className:"icon-right"},"\u27a1\ufe0f")),"\nDefines the kits all players get."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<kits>\n    <kit id="spawn">\n        <item slot="1" enchantment="arrow infinite:1" unbreakable="true">bow</item>\n        <item slot="28">arrow</item>\n        <item slot="2" unbreakable="true">diamond pickaxe</item>\n        <item slot="3" unbreakable="true">iron axe</item>\n        <item slot="30" unbreakable="true">iron spade</item>\n        <item slot="5" amount="64">glass</item>\n        <item slot="6" amount="64" damage="2">wood</item>\n        <item slot="17" amount="2">gold nugget</item>\n        <item slot="8" amount="64">cooked beef</item>\n        <item slot="27" amount="64">apple</item>\n        <potion duration="2" amplifier="1">heal</potion>\n        <potion duration="4">damage resistance</potion>\n    </kit>\n    <kit id="red-spawn" parents="spawn">\n        <item lore="Red spawn sword" slot="0" unbreakable="true">iron sword</item>\n        <helmet color="cd0000" unbreakable="true">leather helmet</helmet>\n        <chestplate color="cd0000" enchantment="protection projectile:2" unbreakable="true">leather chestplate</chestplate>\n        <leggings color="cd0000" unbreakable="true">leather leggings</leggings>\n        <boots color="cd0000" unbreakable="true">leather boots</boots>\n    </kit>\n    <kit id="blue-spawn" parents="spawn">\n        <item lore="Blue spawn sword" slot="0" unbreakable="true">iron sword</item>\n        <helmet color="0066cc" unbreakable="true">leather helmet</helmet>\n        <chestplate color="0066cc" enchantment="protection projectile:2" unbreakable="true">leather chestplate</chestplate>\n        <leggings color="0066cc" unbreakable="true">leather leggings</leggings>\n        <boots color="0066cc" unbreakable="true">leather boots</boots>\n    </kit>\n</kits>\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/modules/mechanics/spawns"},(0,r.kt)("i",{className:"icon-right"},"\u27a1\ufe0f")),"\nDefines the spawn areas and the kit each team gets."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<spawns>\n    <spawn kit="red-spawn" team="red" yaw="0">\n        <region>\n            <cuboid min="40,6,-30" max="44,6,-34"/>\n        </region>\n    </spawn>\n    <spawn kit="blue-spawn" team="blue" yaw="180">\n        <region>\n            <cuboid min="40,6,31" max="44,6,35"/>\n        </region>\n    </spawn>\n    <default yaw="90">\n        <region>\n            <point>133.5,22,0.5</point>\n        </region>\n    </default>\n</spawns>\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/modules/objectives/dtm"},(0,r.kt)("i",{className:"icon-right"},"\u27a1\ufe0f")),"\nThis specifies what material the monuments are made of, and where each monument belongs to."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<destroyables name="Monument" materials="obsidian" mode-changes="true">\n    <destroyable owner="red">\n        <cuboid min="77,1,-36" max="78,3,-37"/>\n    </destroyable>\n    <destroyable owner="blue">\n        <cuboid min="77,1,37" max="78,3,38"/>\n    </destroyable>\n</destroyables>\n<modes>\n    <mode material="beacon" after="20m"/>\n</modes>\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/modules/gear/kill-rewards"},(0,r.kt)("i",{className:"icon-right"},"\u27a1\ufe0f")),"\nWe can make special kill rewards for players that fit certain criteria."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<kill-rewards>\n    \x3c!-- All players get a golden apple and a gold nugget after killing a player --\x3e\n    <kill-reward>\n        <item>gold nugget</item>\n        <item>golden apple</item>\n    </kill-reward>\n    \x3c!-- Players that kill 2 enemies in a row will get 4 ink sacks,  --\x3e\n    <kill-reward>\n        <filter>\n            <kill-streak count="2" repeat="true"/>\n        </filter>\n        <item damage="4" material="ink sack"/>\n    </kill-reward>\n</kill-rewards>\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/modules/gear/repair-remove-keep"},(0,r.kt)("i",{className:"icon-right"},"\u27a1\ufe0f")),"\nWe don't want an excessive amount of items dropped on the map, so this allows us to manage\nhow to deal with dropped items more easily."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- These items will drop, players that already have these items can pick it up and will be merged --\x3e\n<toolrepair>\n    <tool>iron sword</tool>\n    <tool>diamond pickaxe</tool>\n    <tool>iron axe</tool>\n    <tool>iron spade</tool>\n    <tool>bow</tool>\n</toolrepair>\n\x3c!-- All of these items will be automatically removed when dropped --\x3e\n<itemremove>\n    <item>arrow</item>\n    <item>leather helmet</item>\n    <item>leather chestplate</item>\n    <item>leather leggings</item>\n    <item>leather boots</item>\n    <item>wood</item>\n    <item>glass</item>\n    <item>apple</item>\n    <item>cooked beef</item>\n    <item>obsidian</item>\n    <item>beacon</item>\n    <item>ink sack</item>\n    <item>golden apple</item>\n</itemremove>\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/modules/mechanics/filters"},(0,r.kt)("i",{className:"icon-right"},"\u27a1\ufe0f")),"\nDefines the filters on the map and determines which events are allowed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<filters>\n    <all id="base-filter">\n        <material>glass</material>\n    </all>\n    <not id="no-beacon">\n        <material>beacon</material>\n    </not>\n</filters>\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/modules/mechanics/regions"},(0,r.kt)("i",{className:"icon-right"},"\u27a1\ufe0f")),"\nDefines regions that can be later used to apply spawns, filters, etc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<regions>\n    \x3c!-- You can only place glass in spawn --\x3e\n    <apply block="base-filter">\n        <union id="red-base">\n            <cuboid min="36,5,-38" max="55,11,-25"/>\n            <cuboid min="54,5,-31" max="61,11,-38"/>\n        </union>\n    </apply>\n    <apply block="base-filter">\n        <union id="blue-base">\n            <cuboid min="36,5,39" max="55,11,26"/>\n            <cuboid min="54,5,32" max="61,11,39"/>\n        </union>\n    </apply>\n    <apply block="never" message="You may not build outside of the map!">\n        \x3c!-- This is the inverse of the rectangle region (everything outside of the rectangle) --\x3e\n        <negative>\n            <rectangle min="26,-49" max="120,50"/>\n        </negative>\n    </apply>\n    \x3c!-- Can\'t use (right click) beacon blocks anywhere on the map --\x3e\n    <apply use="no-beacon" region="everywhere"/>\n</regions>\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/modules/environment/world/#build-height"},(0,r.kt)("i",{className:"icon-right"},"\u27a1\ufe0f"))),(0,r.kt)("p",null,"This specifies how high players can build however it doesn't stop them from going over this limit."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<maxbuildheight>25</maxbuildheight>\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/modules/gear/tnt"},(0,r.kt)("i",{className:"icon-right"},"\u27a1\ufe0f")),"\nConfigures how TNT behaves on a map."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- TNT will automatically ignite when placed --\x3e\n\x3c!-- TNT will not break any blocks but still cause damage to players --\x3e\n\x3c!-- Players can't defuse a teammate's TNT --\x3e\n<tnt>\n    <instantignite>on</instantignite>\n    <licensing>off</licensing>\n    <friendly-defuse>off</friendly-defuse>\n</tnt>\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/modules/general/main"},(0,r.kt)("i",{className:"icon-right"},"\u27a1\ufe0f")),"\nClose the main ",(0,r.kt)("inlineCode",{parentName:"p"},"<map>")," module."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"</map>\n")))}d.isMDXComponent=!0},2764:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/warlock1-17a1df5d4d70cc796369fe8832321fa0.png"},5288:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/warlock2-d5f89d401b9eb572b084bcbd4c7055b5.png"}}]);