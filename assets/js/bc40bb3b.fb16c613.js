"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7940],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(a),h=i,u=c["".concat(l,".").concat(h)]||c[h]||d[h]||r;return a?n.createElement(u,o(o({ref:t},p),{},{components:a})):n.createElement(u,o({ref:t},p))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var m=2;m<r;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9226:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var n=a(7462),i=(a(7294),a(3905));const r={id:"airship-battle",title:"Airship Battle (DTC)",image:"/img/examples/airship1.png",keywords:["dtc"]},o=void 0,s={unversionedId:"examples/airship-battle",id:"examples/airship-battle",title:"Airship Battle (DTC)",description:"Airship Battle is the first ever map made for PGM.",source:"@site/docs/examples/airship-battle.mdx",sourceDirName:"examples",slug:"/examples/airship-battle",permalink:"/docs/examples/airship-battle",draft:!1,editUrl:"https://github.com/PGMDev/Website/tree/master/src/docs/examples/airship-battle.mdx",tags:[],version:"current",frontMatter:{id:"airship-battle",title:"Airship Battle (DTC)",image:"/img/examples/airship1.png",keywords:["dtc"]},sidebar:"Examples",next:{title:"Harb (TDM)",permalink:"/docs/examples/harb"}},l={},m=[],p={toc:m},c="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Airship Battle is the first ever map made for PGM.\nIt features two wooden airships with building materials, tools, and weapons inside chests.\nThe objective of the map is to leak the lava contained inside an obsidian sphere by destroying it.\nWhoever leaks the other team's core first wins the game."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Source: ",(0,i.kt)("a",{parentName:"em",href:"https://github.com/MCResourcePile/overcast-maps/tree/master/maps/airship_battle"},"Airship Battle")," by ",(0,i.kt)("a",{parentName:"em",href:"https://twitter.com/dewtroid"},"Dewtroid"),"."),"\n",(0,i.kt)("img",{src:a(4830).Z,width:"2060",height:"1005"}),"\n",(0,i.kt)("em",{parentName:"p"},"Players build across to the other ship, either at ground level or bridging ontop of the propellers.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(9521).Z,width:"2060",height:"1005"}),"\n",(0,i.kt)("em",{parentName:"p"},"The large spawn area where observers spawn at, players spawn inside the safe bedrock\ntunnels and run into the ship.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(4374).Z,width:"2060",height:"1005"}),"\n",(0,i.kt)("em",{parentName:"p"},"This is the obsidian core that you must leak the lava out of!\nMake the lava leak by destroying the obsidian blocks containing it and other obstacles that might get in the way.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/modules/general/main"},(0,i.kt)("i",{className:"icon-right"},"\u27a1\ufe0f")),"\nEvery map XML file starts with the XML header and then the base ",(0,i.kt)("inlineCode",{parentName:"p"},"<map>")," module."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<map proto="1.4.2">\n\x3c!-- Specifies what the map is called --\x3e\n<name>Airship Battle</name>\n\x3c!-- Shows the map creation date when a user runs /map in game --\x3e\n<created>2011-12-05</created>\n\x3c!-- States what version the map is --\x3e\n<version>1.2.6</version>\n\x3c!-- Tells the teams what the objective is in order to win the game --\x3e\n<objective>Leak lava from the enemy\'s obsidian core into the void.</objective>\n\x3c!-- States who made the map --\x3e\n<authors>\n    <author uuid="30e27366-0b14-4076-8f55-0819ece49ce3"/> \x3c!-- Dewtroid --\x3e\n</authors>\n\x3c!-- Shows any map rules or details that are not in normal server rules which appears when running /map --\x3e\n<rules>\n    <rule>Dispensers and chests are disabled</rule>\n    <rule>Players have resistance and reduced knockback in spawn!</rule>\n</rules>\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/modules/format/teams"},(0,i.kt)("i",{className:"icon-right"},"\u27a1\ufe0f")),"\nDefine the teams' ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/misc/formatting#chatColors"},"colors"),", names, and how many people can be on each team."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<teams>\n    <team id="blue-team" color="blue" max="24">Blue</team>\n    <team id="red-team" color="dark red" max="24">Red</team>\n</teams>\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/modules/gear/kits"},(0,i.kt)("i",{className:"icon-right"},"\u27a1\ufe0f")),"\nDefine the kit that players will receive."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<kits>\n    <kit id="spawn-protection">\n        <potion amplifier="10" duration="oo">damage resistance</potion>\n        <knockback-reduction>1</knockback-reduction>\n    </kit>\n    <kit id="spawn">\n        <item slot="0" material="diamond sword"/>\n        <item slot="1" material="bow"/>\n        <item slot="28" amount="64" material="arrow"/>\n        <item slot="2" material="diamond pickaxe"/>\n        <item slot="3" material="diamond axe"/>\n        <item slot="4" damage="1" amount="64" material="wood"/> \x3c!-- To get spruce planks, damage must be "1" --\x3e\n        <item slot="5" amount="64" material="ladder"/>\n        <item slot="6" material="water bucket"/>\n        <item slot="8" amount="64" material="cooked fish"/>\n        <helmet enchantment="protection explosions:2" material="gold helmet"/>\n        <chestplate enchantment="protection explosions:4" material="chainmail chestplate"/>\n        \x3c!-- Leggings and boots will be automatically colored based on the player\'s team --\x3e\n        <leggings team-color="true" material="leather leggings"/>\n        <boots team-color="true" material="leather boots"/>\n    </kit>\n</kits>\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/modules/mechanics/spawns"},(0,i.kt)("i",{className:"icon-right"},"\u27a1\ufe0f")),"\nSpecify where the previously defined teams will spawn, the kit they will spawn with, and what direction they face."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<spawns>\n    <spawn team="blue-team" kit="spawn" yaw="270">\n        <region>\n            <cuboid min="4.5,91,-34" max="7.5,91,-31"/>\n        </region>\n    </spawn>\n    <spawn team="red-team" kit="spawn" yaw="90">\n        <region>\n            <cuboid min="-30.5,91,-34" max="-27.5,91,-31"/>\n        </region>\n    </spawn>\n    <default yaw="180">\n        <region>\n            <cylinder base="-11.5,90,-33" radius="3" height="0"/>\n        </region>\n    </default>\n</spawns>\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/modules/mechanics/filters"},(0,i.kt)("i",{className:"icon-right"},"\u27a1\ufe0f")),"\nDefine the filters on the map and determine which events are allowed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<filters>\n    \x3c!-- Query if a player is a member of either team using the previously defined team ID --\x3e\n    <team id="only-blue">blue-team</team>\n    <team id="only-red">red-team</team>\n    \x3c!-- Always deny dispenser placement, destruction, or interaction --\x3e\n    <deny id="deny-dispenser">\n        <material>dispenser</material>\n    </deny>\n    \x3c!-- Always deny obsidian placement or destruction --\x3e\n    <deny id="deny-obsidian">\n        <material>obsidian</material>\n    </deny>\n</filters>\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/modules/mechanics/regions"},(0,i.kt)("i",{className:"icon-right"},"\u27a1\ufe0f")),"\nThese regions reference the filters defined above and states where they will work, as well as ",(0,i.kt)("a",{parentName:"p",href:"/docs/modules/mechanics/regions#apply-effects"},"lending a kit")," to players inside their respective team's spawn."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<regions>\n    <cuboid id="red-spawn-protect" min="-42,87,3" max="-35,90,-36"/>\n    <cuboid id="blue-spawn-protect" min="12,87,3" max="19,90,-36"/>\n    \x3c!-- applicators --\x3e\n    <apply region="blue-spawn-protect" lend-kit="spawn-protection" filter="only-blue"/>\n    <apply region="red-spawn-protect" lend-kit="spawn-protection" filter="only-red"/>\n    <apply leave="never" message="Don\'t exit the playing field!">\n        <region>\n            <union>\n                <rectangle min="-102,-4" max="102,125"/> \x3c!-- Main area --\x3e\n                <rectangle min="-36,-16" max="13,-2"/> \x3c!-- Area between spawn tunnels --\x3e\n            </union>\n        </region>\n    </apply>\n    <apply block="never" message="Don\'t edit blocks outside the playing field!">\n        <region>\n            <negative>\n                <union id="map">\n                    <rectangle min="-100,-2" max="100,123"/> \x3c!-- Main area --\x3e\n                    <rectangle min="-36,-14" max="13,-2"/> \x3c!-- Area between spawn tunnels --\x3e\n                </union>\n            </negative>\n        </region>\n    </apply>\n    \x3c!-- Do not let players place or destroy dispenser blocks anywhere on the map --\x3e\n    <apply block="deny-dispenser" message="Dispensers are disabled on this map!"/>\n    \x3c!-- Only the obsidian that makes up the core can be broken --\x3e\n    <apply block-break="deny-obsidian" message="You may not break obsidian outside the core area!">\n        <region>\n            <complement>\n                <region id="map"/>\n                <cuboid min="13,85,23" max="18,92,30"/>\n                <cuboid min="-41,85,23" max="-36,92,30"/>\n            </complement>\n        </region>\n    </apply>\n</regions>\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/modules/objectives/dtc"},(0,i.kt)("i",{className:"icon-right"},"\u27a1\ufe0f")),"\nThis specifies what material the core is made of, who each core belongs to, and how far the lava needs to leak."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<cores material="obsidian" leak="10">\n    <core team="blue-team">\n        <region>\n            <cuboid min="13,85,23" max="18,92,30"/>\n        </region>\n    </core>\n    <core team="red-team">\n        <region>\n            <cuboid min="-41,85,23" max="-36,92,30"/>\n        </region>\n    </core>\n</cores>\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/modules/gear/repair-remove-keep"},(0,i.kt)("i",{className:"icon-right"},"\u27a1\ufe0f")),"\nWe do not want an excessive amount of items dropped on the map, so this allows us to manage how to deal with dropped items more easily."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- These items will drop, players that already have these items can pick it up and will be merged --\x3e\n<toolrepair>\n    <tool>diamond sword</tool>\n    <tool>bow</tool>\n    <tool>diamond pickaxe</tool>\n    <tool>diamond axe</tool>\n</toolrepair>\n\x3c!-- All of these items will be automatically removed when dropped --\x3e\n<itemremove>\n    <item>gold helmet</item>\n    <item>chainmail chestplate</item>\n    <item>leather leggings</item>\n    <item>leather boots</item>\n    <item>obsidian</item>\n    <item>arrow</item>\n    <item>wood</item>\n    <item>cooked fish</item>\n    <item>ladder</item>\n    <item>gold block</item>\n    <item>bucket</item>\n    <item>water bucket</item>\n    <item>golden apple</item>\n</itemremove>\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/modules/gear/kill-rewards"},(0,i.kt)("i",{className:"icon-right"},"\u27a1\ufe0f")),"\nReward players by giving various items for killing an enemy."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<kill-rewards>\n    <kill-reward>\n        <item amount="16" material="arrow"/>\n        <item damage="1" amount="32" material="wood"/>\n        <item material="golden apple"/>\n    </kill-reward>\n</kill-rewards>\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/modules/gear/crafting"},(0,i.kt)("i",{className:"icon-right"},"\u27a1\ufe0f")),"\nStop players from being able to craft specific blocks or items."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<crafting>\n    <disable>chest</disable>\n    <disable>boat</disable>\n</crafting>\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/modules/environment/world/#build-height"},(0,i.kt)("i",{className:"icon-right"},"\u27a1\ufe0f"))),(0,i.kt)("p",null,"This specifies how high players can build, however, it does not stop them from walking or breaking blocks above this limit."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<maxbuildheight>125</maxbuildheight>\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/modules/general/main"},(0,i.kt)("i",{className:"icon-right"},"\u27a1\ufe0f")),"\nClose the main ",(0,i.kt)("inlineCode",{parentName:"p"},"<map>")," module."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"</map>\n")))}d.isMDXComponent=!0},4830:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/airship1-a24a478f6896f5180037c7c38464d13d.png"},9521:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/airship2-56ae49b4a835f145f81cd2ad1fc498e1.png"},4374:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/airship3-1baf814dcbdc5e00968033f190d2bf8d.png"}}]);