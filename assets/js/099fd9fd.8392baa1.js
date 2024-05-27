"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1861],{9443:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=a(5893),s=a(1151);const i={id:"harb",title:"Harb (TDM)",image:"/img/examples/harb1.png",keywords:["tdm"]},r=void 0,l={id:"examples/harb",title:"Harb (TDM)",description:"Harb is a team deathmatch map where you help your team in getting the most kills in 10 minutes.",source:"@site/docs/examples/harb.mdx",sourceDirName:"examples",slug:"/examples/harb",permalink:"/docs/examples/harb",draft:!1,unlisted:!1,editUrl:"https://github.com/PGMDev/Website/tree/master/docs/examples/harb.mdx",tags:[],version:"current",lastUpdatedAt:1716777506e3,frontMatter:{id:"harb",title:"Harb (TDM)",image:"/img/examples/harb1.png",keywords:["tdm"]},sidebar:"Examples",previous:{title:"Airship Battle (DTC)",permalink:"/docs/examples/airship-battle"},next:{title:"Ozone FFA",permalink:"/docs/examples/ozone"}},o={},c=[];function m(e){const n={a:"a",code:"code",em:"em",img:"img",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Harb is a team deathmatch map where you help your team in getting the most kills in 10 minutes.\nPlayers spawn with a permanent speed effect and TNT that instantly ignites when placed in\nthe world, making it frantic and fast paced."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsxs)(n.em,{children:["Source: ",(0,t.jsx)(n.a,{href:"https://github.com/MCResourcePile/overcast-maps/tree/master/maps/harb",children:"Harb"})," by SH4D0W_HAWK and ",(0,t.jsx)(n.a,{href:"https://github.com/Plastix",children:"Plastix"})]}),"\n",(0,t.jsx)(n.img,{src:a(370).Z+"",width:"2060",height:"1005"}),"\n",(0,t.jsx)(n.em,{children:"Players spawn on opposite ends of the map and can run around with infinite speed."})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:a(6408).Z+"",width:"2060",height:"1005"}),"\n",(0,t.jsx)(n.em,{children:"The large spawn island for harb, where players initially spawn at when the map is loaded."})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/modules/general/main",children:(0,t.jsx)("i",{className:"icon-right",children:"\u27a1\ufe0f"})}),"\nEvery map XML file starts with the XML header and then the base ",(0,t.jsx)(n.code,{children:"<map>"})," module."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<map proto="1.4.2">\n\x3c!-- Specifies what the map is called --\x3e\n<name>Harb</name>\n\x3c!-- Shows the map creation date when a user runs /map in game --\x3e\n<created>2012-03-02</created>\n\x3c!-- States what version the map is --\x3e\n<version>1.3.14</version>\n\x3c!-- Tells the teams what the objective is in order to win the game --\x3e\n<objective>Be the team with the least amount of deaths after 10 minutes.</objective>\n\x3c!-- States who made the map --\x3e\n<authors>\n    <author uuid="1379cb6e-f291-4498-9807-e636f9674ac0"/> \x3c!-- SH4D0W_HAWK --\x3e\n    <author uuid="ef4ea031-998f-4ec9-b7b6-1bdd428bcef8"/> \x3c!-- Plastix --\x3e\n</authors>\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/modules/format/teams",children:(0,t.jsx)("i",{className:"icon-right",children:"\u27a1\ufe0f"})}),"\nDefine the teams' ",(0,t.jsx)(n.a,{href:"/docs/reference/misc/formatting#chat-colors",children:"colors"}),", names, and how many people can be on each team."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<teams>\n    <team id="blue-team" color="blue" max="32">Blue</team>\n    <team id="red-team" color="dark red" max="32">Red</team>\n</teams>\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/modules/gear/kits",children:(0,t.jsx)("i",{className:"icon-right",children:"\u27a1\ufe0f"})}),"\nDefine the kit that players will receive."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<kits>\n    <kit id="spawn-kit">\n        <clear/>\n        <item slot="0" unbreakable="true" material="stone sword"/>\n        <item slot="1" unbreakable="true" material="bow">\n            <enchantment>infinity</enchantment>\n        </item>\n        <item slot="28" material="arrow"/>\n        <item slot="2" material="golden apple"/>\n        <item slot="3" amount="32" material="ladder"/>\n        <item slot="4" amount="2" material="tnt"/>\n        <helmet unbreakable="true" team-color="true" material="leather helmet"/>\n        <chestplate unbreakable="true" team-color="true" material="leather chestplate">\n            <enchantment level="3">protection explosions</enchantment>\n        </chestplate>\n        <leggings unbreakable="true" material="chainmail leggings">\n            <enchantment level="3">protection projectile</enchantment>\n        </leggings>\n        <boots unbreakable="true" material="iron boots"/>\n        <effect duration="6s">heal</effect>\n        <effect duration="6s">damage resistance</effect>\n        <effect>speed</effect>\n    </kit>\n</kits>\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/modules/mechanics/spawns",children:(0,t.jsx)("i",{className:"icon-right",children:"\u27a1\ufe0f"})}),"\nSpecify where the previously defined teams will spawn, the kit they will spawn with, and what direction they face."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<spawns>\n    <spawns safe="true" sequential="true" kit="spawn-kit">\n        <spawn team="blue-team">\n            <regions>\n                <cuboid min="-15,32,-57" max="16,42,-32"/>\n                <point>0.5,33,-47.5</point>\n            </regions>\n        </spawn>\n        <spawn team="red-team" yaw="180">\n            <regions>\n                <cuboid min="-15,32,33" max="16,42,58"/>\n                <point>0.5,33,48.5</point>\n            </regions>\n        </spawn>\n    </spawns>\n    <default yaw="90">\n        <region>\n            <cuboid min="-75.5,42.5,-0.5" max="-73.5,42.5,1.5"/>\n        </region>\n    </default>\n</spawns>\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/modules/mechanics/filters",children:(0,t.jsx)("i",{className:"icon-right",children:"\u27a1\ufe0f"})}),"\nDefine the filters on the map and determine which events are allowed."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<filters>\n    \x3c!-- Always deny if the queried material is TNT --\x3e\n    <deny id="no-tnt">\n        <material>tnt</material>\n    </deny>\n</filters>\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/modules/mechanics/regions",children:(0,t.jsx)("i",{className:"icon-right",children:"\u27a1\ufe0f"})}),"\nThese regions reference the filters defined above and states where they will work."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<regions>\n    <union id="playable">\n        <rectangle id="main-area" min="-50,-32" max="51,33"/>\n        <union id="bases">\n            <rectangle id="blue-base" min="-20,-62" max="21,-32"/>\n            <rectangle id="red-base" min="-20,33" max="21,63"/>\n        </union>\n        <complement id="portals-area">\n            <rectangle min="-56,-2" max="57,3"/>\n            <region id="main-area"/>\n        </complement>\n    </union>\n    \x3c!-- applicators --\x3e\n    <apply region="portals-area" block="never"/> \x3c!-- Nothing can destroy blocks inside portals-area --\x3e\n    <apply region="bases" block="no-tnt" message="You may not place TNT in the bases."/>\n    <apply region="playable" leave="never" message="You can\'t leave the map!"/>\n</regions>\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/modules/mechanics/portals",children:(0,t.jsx)("i",{className:"icon-right",children:"\u27a1\ufe0f"})}),"\nDefine the portals that players can walk through."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<portals>\n    \x3c!-- Moves the player +110 blocks in the X axis, coordinates are relative --\x3e\n    <portal x="110">\n        <region>\n            <cuboid min="-56,33,-1" max="-55,35,2"/>\n        </region>\n    </portal>\n    <portal x="-110">\n        <region>\n            <cuboid min="56,33,-1" max="57,35,2"/>\n        </region>\n    </portal>\n</portals>\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/modules/objectives/scoring#time-limit",children:(0,t.jsx)("i",{className:"icon-right",children:"\u27a1\ufe0f"})}),"\nSet a 10 minute time limit for the map. The team with the most points after time is up wins."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"\x3c!-- Gain 1 point for killing a player, team with most points after 10 minutes wins --\x3e\n<score>\n    <kills>1</kills>\n</score>\n<time>10m</time>\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/modules/gear/repair-remove-keep",children:(0,t.jsx)("i",{className:"icon-right",children:"\u27a1\ufe0f"})}),"\nWe do not want an excessive amount of items dropped on the map, so this allows us to manage\nhow to deal with dropped items more easily."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"\x3c!-- These items will drop, players that already have these items can pick it up and will be merged --\x3e\n<toolrepair>\n    <tool>stone sword</tool>\n    <tool>bow</tool>\n</toolrepair>\n\x3c!-- If the player has these item, it will be saved in their inventory --\x3e\n<itemkeep>\n    <item>arrow</item>\n    <item>golden apple</item>\n</itemkeep>\n\x3c!-- All of these items will be automatically removed when dropped --\x3e\n<itemremove>\n    <item>leather helmet</item>\n    <item>leather chestplate</item>\n    <item>chainmail leggings</item>\n    <item>iron boots</item>\n    <item>ladder</item>\n    <item>glowstone dust</item>\n    <item>string</item>\n</itemremove>\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/modules/gear/kill-rewards",children:(0,t.jsx)("i",{className:"icon-right",children:"\u27a1\ufe0f"})}),"\nReward players by giving a golden apple for killing an enemy."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'\x3c!-- Player gets a golden apple after killing a player --\x3e\n<kill-rewards>\n    <kill-reward>\n        <item material="golden apple"/>\n    </kill-reward>\n</kill-rewards>\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/modules/gear/tnt",children:(0,t.jsx)("i",{className:"icon-right",children:"\u27a1\ufe0f"})}),"\nThis makes TNT instantly ignite when placed and prevent it from damaging any blocks."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<tnt>\n    \x3c!-- TNT will automatically ignite when placed --\x3e\n    <instantignite>on</instantignite>\n    \x3c!-- Do not require a license so TNT usage is not restricted --\x3e\n    <licensing>off</licensing>\n    \x3c!-- Players can't defuse a teammate's TNT --\x3e\n    <friendly-defuse>off</friendly-defuse>\n    \x3c!-- TNT will not break any blocks but still cause damage to players --\x3e\n    <blockdamage>off</blockdamage>\n</tnt>\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/modules/mechanics/damage#block-explosion-attributes",children:(0,t.jsx)("i",{className:"icon-right",children:"\u27a1\ufe0f"})}),"\nUse the disable damage module to configure who gets damage from TNT explosions."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'\x3c!-- TNT damages enemies and self, but not teammates --\x3e\n<disabledamage>\n    <damage ally="true" self="false" enemy="false" other="false">block explosion</damage>\n</disabledamage>\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/modules/mechanics/damage#hunger",children:(0,t.jsx)("i",{className:"icon-right",children:"\u27a1\ufe0f"})}),"\nPlayers do not need to worry about hunger in this map, so hunger is disabled."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"\x3c!-- Prevent hunger from depleting --\x3e\n<hunger>\n    <depletion>off</depletion>\n</hunger>\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/modules/general/main",children:(0,t.jsx)("i",{className:"icon-right",children:"\u27a1\ufe0f"})}),"\nClose the main ",(0,t.jsx)(n.code,{children:"<map>"})," module."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"</map>\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},370:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/harb1-4c6c854e40472eaaae60f55174843d1f.png"},6408:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/harb2-6b9f60a74a1949a65e26ac944f0fe7f4.png"},1151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>r});var t=a(7294);const s={},i=t.createContext(s);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);