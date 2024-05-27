"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2260],{6713:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var a=o(5893),t=o(1151);const r={id:"race-for-victory",title:"Race for Victory (CTW)",image:"/img/examples/rfv1.png",keywords:["ctw"]},i=void 0,l={id:"examples/race-for-victory",title:"Race for Victory (CTW)",description:"Race for Victory is a Capture The Wool map where you need to retrive the wool from the enemy side.",source:"@site/docs/examples/race-for-victory.mdx",sourceDirName:"examples",slug:"/examples/race-for-victory",permalink:"/docs/examples/race-for-victory",draft:!1,unlisted:!1,editUrl:"https://github.com/PGMDev/Website/tree/master/docs/examples/race-for-victory.mdx",tags:[],version:"current",lastUpdatedAt:1716777506e3,frontMatter:{id:"race-for-victory",title:"Race for Victory (CTW)",image:"/img/examples/rfv1.png",keywords:["ctw"]},sidebar:"Examples",previous:{title:"Ozone FFA",permalink:"/docs/examples/ozone"},next:{title:"The Fenland (DTM)",permalink:"/docs/examples/the-fenland"}},s={},m=[];function c(e){const n={a:"a",code:"code",em:"em",img:"img",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Race for Victory is a Capture The Wool map where you need to retrive the wool from the enemy side.\nPlayers can build, bridge and tunnel their way through enemy lines and other obstacles.\nAfter retrieving the wool, they must make their way back without getting killed by enemies still guarding the\nwools."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsxs)(n.em,{children:["Source: ",(0,a.jsx)(n.a,{href:"https://github.com/MCResourcePile/overcast-maps/tree/master/maps/race_for_victory",children:"Race for Victory"})," by ",(0,a.jsx)(n.a,{href:"https://github.com/Plastix",children:"Plastix"}),",\n",(0,a.jsx)(n.a,{href:"https://github.com/tonybruess",children:"MonsieurApple"}),", and ",(0,a.jsx)(n.a,{href:"https://github.com/steveanton",children:"Anxuiz"}),"."]}),"\n",(0,a.jsx)(n.img,{src:o(1097).Z+"",width:"2060",height:"1005"}),"\n",(0,a.jsx)(n.em,{children:"Floating lava blocks let you fire flaming arrows if you shoot through them, which can burn enemies."})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.img,{src:o(9991).Z+"",width:"2060",height:"1005"}),"\n",(0,a.jsx)(n.em,{children:"Cacti and lava await enemies that might get into the woolrooms."})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.img,{src:o(9758).Z+"",width:"2060",height:"1005"}),"\n",(0,a.jsx)(n.em,{children:'Boundaries are marked with redstone, which tells players if they are "safe".\nIn this picture, the red team cannot stand or build past the redstone line. They must stop\nthe Blue team from entering!'})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.img,{src:o(7564).Z+"",width:"2060",height:"1005"}),"\n",(0,a.jsx)(n.em,{children:"The wool room features useful tools like speed potions, better armour (along with the wool incased in glass)\nto help their way back to base!"})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/modules/general/main",children:(0,a.jsx)("i",{className:"icon-right",children:"\u27a1\ufe0f"})}),"\nEvery map XML file starts with the XML header and then the base ",(0,a.jsx)(n.code,{children:"<map>"})," module."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:'<map proto="1.4.2">\n\x3c!-- Specifies what the map is called --\x3e\n<name>Race for Victory</name>\n\x3c!-- States what version the map is --\x3e\n<version>1.2.4</version>\n\x3c!-- Tells the teams what the objective is in order to win the game --\x3e\n<objective>Take the enemy\'s wool located to either side of the enemy\'s base and place it in your victory monument.</objective>\n\x3c!-- States who made the map --\x3e\n<authors>\n    <author uuid="ef4ea031-998f-4ec9-b7b6-1bdd428bcef8" contribution="Map design"/> \x3c!-- Plastix --\x3e\n    <author uuid="3c7db14d-ac4b-4e35-b2c6-3b2237f382be" contribution="Map design and gameplay management"/> \x3c!-- MonsieurApple --\x3e\n    <author uuid="25961a08-c90c-4abd-b136-dad90e89c2eb" contribution="Item management"/> \x3c!-- Anxuiz --\x3e\n</authors>\n\x3c!-- Shows any map rules or details that are not in normal server rules which appears when running /map --\x3e\n<rules>\n    <rule>Players may not obstruct the wool rooms with lava or obsidian.</rule>\n    <rule>Players may not obstruct the majority of the lane with lava or obsidian.</rule>\n    <rule>Players may not use lava or obsidian to block a team\'s spawn.</rule>\n    <rule>Players may not venture below the bottom bedrock layer of the map.</rule>\n</rules>\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/modules/format/teams",children:(0,a.jsx)("i",{className:"icon-right",children:"\u27a1\ufe0f"})}),"\nDefine the teams' ",(0,a.jsx)(n.a,{href:"/docs/reference/misc/formatting#chat-colors",children:"colors"}),", names, and how many people can be on each team."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:'<teams>\n    <team id="blue-team" color="blue" max="12" max-overfill="18">Blue</team>\n    <team id="red-team" color="dark red" max="12" max-overfill="18">Red</team>\n</teams>\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/modules/gear/kits",children:(0,a.jsx)("i",{className:"icon-right",children:"\u27a1\ufe0f"})}),"\nDefine the kit that players will receive."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:'<kits>\n    <kit id="spawn-kit">\n        <item slot="0" material="iron sword"/>\n        <item slot="1" material="bow"/>\n        <item slot="28" amount="64" material="arrow"/>\n        <item slot="2" material="iron pickaxe"/>\n        <item slot="3" material="iron axe"/>\n        <item slot="4" amount="64" damage="1" material="wood"/>\n        <item slot="5" amount="64" material="ladder"/>\n        <item slot="8" amount="64" material="bread"/>\n        \x3c!-- The armor set will be automatically colored based on the player\'s team --\x3e\n        <helmet team-color="true" material="leather helmet"/>\n        <chestplate team-color="true" material="leather chestplate"/>\n        <leggings team-color="true" material="leather leggings"/>\n        <boots team-color="true" material="leather boots"/>\n    </kit>\n</kits>\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/modules/mechanics/spawns",children:(0,a.jsx)("i",{className:"icon-right",children:"\u27a1\ufe0f"})}),"\nSpecify where the previously defined teams will spawn, the kit they will spawn with, and what direction they face."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:'<spawns>\n    <spawn team="blue-team" kit="spawn-kit" yaw="180">\n        <region>\n            <cuboid min="-1.5,68,108.5" max="1.5,68,110.5"/>\n        </region>\n    </spawn>\n    <spawn team="red-team" kit="spawn-kit">\n        <region>\n            <cuboid min="-1.5,68,-111.5" max="1.5,68,-108.5"/>\n        </region>\n    </spawn>\n    <default yaw="90">\n        <region>\n            <cylinder base="-80,70,0" radius="3" height="0"/>\n        </region>\n    </default>\n</spawns>\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/modules/mechanics/filters",children:(0,a.jsx)("i",{className:"icon-right",children:"\u27a1\ufe0f"})}),"\nDefine the filters on the map and determine which events are allowed."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:'<filters>\n    \x3c!-- Query if a player is a member of either team using the previously defined team ID --\x3e\n    <team id="only-blue">blue-team</team>\n    <team id="only-red">red-team</team>\n</filters>\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/modules/mechanics/regions",children:(0,a.jsx)("i",{className:"icon-right",children:"\u27a1\ufe0f"})}),"\nDefine regions that can be later used to apply spawns, filters, etc."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:'<regions>\n    \x3c!-- Define where the teams\' base are located --\x3e\n    <union id="spawn-protections">\n        <rectangle id="red-base" min="-13,-oo" max="13,-97"/>\n        <rectangle id="blue-base" min="-13,97" max="13,oo"/>\n    </union>\n    \x3c!-- Define the exact location where teams must place any captured wools --\x3e\n    <union id="wool-monuments">\n        <block id="blue-team-purple-wool">-1,75,97</block>\n        <block id="blue-team-yellow-wool">0,75,97</block>\n        <block id="red-team-lime-wool">0,75,-98</block>\n        <block id="red-team-orange-wool">-1,75,-98</block>\n    </union>\n    <union id="wool-rooms">\n        \x3c!-- Red wool room protection (these are the wools Blue has to get) --\x3e\n        <union id="red-wool-rooms">\n            <rectangle id="purple-room" min="-25,-80" max="-oo,-oo"/>\n            <rectangle id="yellow-room" min="25,-80" max="oo,-oo"/>\n        </union>\n        \x3c!-- Blue wool room protection (these are the wools Red has to get) --\x3e\n        <union id="blue-wool-rooms">\n            <rectangle id="lime-room" min="25,80" max="oo,oo"/>\n            <rectangle id="orange-room" min="-25,80" max="-oo,oo"/>\n        </union>\n    </union>\n    \x3c!-- This is the inverse of the rectangle region (everything outside of the rectangle) --\x3e\n    <union id="map-protection">\n        <negative id="not-map">\n            <rectangle id="map" min="-57,-123" max="57,123"/>\n        </negative>\n        <cylinder base="0,67,-110" height="4" radius="3"/>\n        <cylinder base="0,67,110" height="4" radius="3"/>\n    </union>\n    <union id="void-area">\n        <complement>\n            <union>\n                <rectangle min="-13,-90" max="-oo,90"/>\n                <rectangle min="13,-90" max="oo,90"/>\n            </union>\n            <rectangle min="-oo,15" max="oo,-15"/>\n        </complement>\n        \x3c!-- Behind Red\'s wool rooms --\x3e\n        <rectangle min="42,-101" max="13,-112"/>\n        <rectangle min="-42,-101" max="-13,-112"/>\n        \x3c!-- Behind Blue\'s wool rooms --\x3e\n        <rectangle min="13,111" max="42,101"/>\n        <rectangle min="-13,111" max="-42,101"/>\n    </union>\n    \x3c!-- applicators --\x3e\n    <apply region="blue-wool-rooms" block="only-red" use="only-red"/>\n    <apply region="blue-wool-rooms" enter="only-red" message="You may not enter your own wool room!"/>\n    <apply region="red-wool-rooms" block="only-blue" use="only-red"/>\n    <apply region="red-wool-rooms" enter="only-blue" message="You may not enter your own wool room!"/>\n    <apply region="red-base" enter="only-red" message="You may not enter the enemy spawn!"/>\n    <apply region="red-base" block="only-red"/>\n    <apply region="blue-base" enter="only-blue" message="You may not enter the enemy spawn!"/>\n    <apply region="blue-base" block="only-blue"/>\n    <apply region="void-area" block="never" message="You may not build over the void!"/> \x3c!-- Prevent void bridging (building out of bounds) --\x3e\n    <apply region="map-protection" block="never" message="You may not edit blocks in this area!"/>\n</regions>\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/modules/objectives/ctw",children:(0,a.jsx)("i",{className:"icon-right",children:"\u27a1\ufe0f"})}),"\nSpecify the wools and its color each team needs to get, where it can be placed, and where exactly it is located to determine proximity."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:'<wools craftable="false">\n    \x3c!-- Blue team must retrieve and place the purple and yellow wools to win --\x3e\n    <wool team="blue-team" color="purple" monument="blue-team-purple-wool" location="-49,69,-96"/>\n    <wool team="blue-team" color="yellow" monument="blue-team-yellow-wool" location="48,69,-96"/>\n    \x3c!-- Red team must retrieve and place the lime and orange wools to win --\x3e\n    <wool team="red-team" color="lime" monument="red-team-lime-wool" location="48,69,95"/>\n    <wool team="red-team" color="orange" monument="red-team-orange-wool" location="-49,69,95"/>\n</wools>\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/modules/gear/kill-rewards",children:(0,a.jsx)("i",{className:"icon-right",children:"\u27a1\ufe0f"})}),"\n\ufe0fReward players by giving a golden apple, sixteen arrows, and eight oak wood planks for killing an enemy."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:'<kill-rewards>\n    <kill-reward>\n        <item material="golden apple"/>\n        <item amount="16" material="arrow"/>\n        <item damage="1" amount="8" material="wood"/>\n    </kill-reward>\n</kill-rewards>\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/modules/gear/repair-remove-keep",children:(0,a.jsx)("i",{className:"icon-right",children:"\u27a1\ufe0f"})}),"\nWe do not want an excessive amount of items dropped on the map, so this allows us to manage\nhow to deal with dropped items more easily."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"\x3c!-- These items will drop, players that already have these items can pick it up and will be merged --\x3e\n<toolrepair>\n    <tool>iron sword</tool>\n    <tool>bow</tool>\n    <tool>iron pickaxe</tool>\n    <tool>iron axe</tool>\n</toolrepair>\n\x3c!-- All of these items will be automatically removed when dropped --\x3e\n<itemremove>\n    <item>leather helmet</item>\n    <item>leather chestplate</item>\n    <item>leather leggings</item>\n    <item>leather boots</item>\n    <item>arrow</item>\n    <item>wood</item>\n    <item>log</item>\n    <item>ladder</item>\n    <item>bread</item>\n    <item>golden apple</item>\n</itemremove>\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"/docs/modules/environment/world#build-height",children:(0,a.jsx)("i",{className:"icon-right",children:"\u27a1\ufe0f"})})}),"\n",(0,a.jsx)(n.p,{children:"This specifies how high players can build, however, it does not stop them from walking or breaking blocks above this limit."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"<maxbuildheight>100</maxbuildheight>\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/modules/general/main",children:(0,a.jsx)("i",{className:"icon-right",children:"\u27a1\ufe0f"})}),"\nClose the main ",(0,a.jsx)(n.code,{children:"<map>"})," module."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"</map>\n"})})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},1097:(e,n,o)=>{o.d(n,{Z:()=>a});const a=o.p+"assets/images/rfv1-f97eb90a416d3ec282d8793a1d450377.png"},9991:(e,n,o)=>{o.d(n,{Z:()=>a});const a=o.p+"assets/images/rfv2-9d516b4040232c86b4a11639e03007c1.png"},9758:(e,n,o)=>{o.d(n,{Z:()=>a});const a=o.p+"assets/images/rfv3-3422d2df4ca5250a750ad95098ef8ffc.png"},7564:(e,n,o)=>{o.d(n,{Z:()=>a});const a=o.p+"assets/images/rfv4-ef0de42fff55b35aacaca0ae858cfde2.png"},1151:(e,n,o)=>{o.d(n,{Z:()=>l,a:()=>i});var a=o(7294);const t={},r=a.createContext(t);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);