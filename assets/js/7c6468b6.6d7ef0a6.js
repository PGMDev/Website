"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3859],{1147:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var t=a(5893),i=a(1151);const s={id:"the-fenland",title:"The Fenland (DTM)",image:"/img/examples/fenland1.png",keywords:["dtm"]},o=void 0,l={id:"examples/the-fenland",title:"The Fenland (DTM)",description:"The Fenland is a Destroy the Monument map where you have to destroy the other team's obsidian monument to win the game.",source:"@site/docs/examples/the-fenland.mdx",sourceDirName:"examples",slug:"/examples/the-fenland",permalink:"/docs/examples/the-fenland",draft:!1,unlisted:!1,editUrl:"https://github.com/PGMDev/Website/tree/master/docs/examples/the-fenland.mdx",tags:[],version:"current",frontMatter:{id:"the-fenland",title:"The Fenland (DTM)",image:"/img/examples/fenland1.png",keywords:["dtm"]},sidebar:"Examples",previous:{title:"Race for Victory (CTW)",permalink:"/docs/examples/race-for-victory"},next:{title:"Warlock (DTM)",permalink:"/docs/examples/warlock"}},r={},d=[];function m(e){const n={a:"a",code:"code",em:"em",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"The Fenland is a Destroy the Monument map where you have to destroy the other team's obsidian monument to win the game.\nPlayers fight with diamond axes and spawn with their own building materials."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsxs)(n.em,{children:["Source: ",(0,t.jsx)(n.a,{href:"https://github.com/OvercastCommunity/PublicMaps/blob/main/dtcm/standard/the_fenland",children:"The Fenland"})," by ",(0,t.jsx)(n.a,{href:"https://github.com/McSpider",children:"McSpider"}),"."]}),"\n",(0,t.jsx)(n.img,{src:a(2896).Z+"",width:"2060",height:"1005"}),"\n",(0,t.jsx)(n.em,{children:"Because of the lakes in the middle, a lot of the action takes place on the edges of the map, and on\nsky bridges built over the centre of the map."})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:a(6146).Z+"",width:"2060",height:"1005"}),"\n",(0,t.jsx)(n.em,{children:"The monument is made of two obsidian blocks that are protected by cobblestone slabs and wooden fences.\nAll players spawn with diamond pickaxes necessary to break them."})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/modules/general/main",children:(0,t.jsx)("i",{className:"icon-right",children:"\u27a1\ufe0f"})}),"\nEvery map XML file starts with the XML header and then the base ",(0,t.jsx)(n.code,{children:"<map>"})," module."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<map proto="1.4.2">\n\x3c!-- Specifies what the map is called --\x3e\n<name>The Fenland</name>\n\x3c!-- States what version the map is --\x3e\n<version>1.2.11</version>\n\x3c!-- Tells the teams what the objective is in order to win the game --\x3e\n<objective>Break the obsidian from the enemy team\'s monument.</objective>\n\x3c!-- States who made the map --\x3e\n<authors>\n    <author uuid="e5953ddf-c1fc-4405-9ac9-6939631cd185"/> \x3c!-- McSpider --\x3e\n</authors>\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/modules/format/teams",children:(0,t.jsx)("i",{className:"icon-right",children:"\u27a1\ufe0f"})}),"\nDefine the teams' ",(0,t.jsx)(n.a,{href:"/docs/reference/misc/formatting#chatColors",children:"colors"}),", names, and how many people can be on each team."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<teams>\n    <team id="red-team" color="dark red" max="14">Red</team>\n    <team id="blue-team" color="blue" max="14">Blue</team>\n</teams>\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/modules/gear/kits",children:(0,t.jsx)("i",{className:"icon-right",children:"\u27a1\ufe0f"})}),"\nDefine the kit that players will receive."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<kits>\n    <kit id="spawn-kit">\n        <item slot="0" unbreakable="true" material="diamond axe">\n            <enchantment>durability</enchantment>\n        </item>\n        <item slot="1" unbreakable="true" material="bow">\n            <enchantment>infinity</enchantment>\n        </item>\n        <item slot="2" unbreakable="true" material="diamond pickaxe"/>\n        <item slot="3" unbreakable="true" material="iron spade"/>\n        <item slot="4" amount="64" material="log"/>\n        <item slot="5" amount="32" material="glass"/>\n        <item slot="7" amount="4" material="gold nugget"/>\n        <item slot="8" amount="32" material="cooked fish"/>\n        <item slot="28" material="arrow"/>\n        <chestplate unbreakable="true" material="iron chestplate">\n            <enchantment level="2">protection projectile</enchantment>\n        </chestplate>\n        <boots unbreakable="true" material="iron boots"/>\n    </kit>\n</kits>\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/modules/mechanics/spawns",children:(0,t.jsx)("i",{className:"icon-right",children:"\u27a1\ufe0f"})}),"\nSpecify where the previously defined teams will spawn, the kit they will spawn with, and what direction they face."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<spawns>\n    <spawns kit="spawn-kit" safe="true">\n        <spawn team="red-team" yaw="-90">\n            <region>\n                <cuboid min="-43,11,-2" max="-46,11,3"/>\n            </region>\n        </spawn>\n        <spawn team="blue-team" yaw="90">\n            <region>\n                <cuboid min="44,11,3" max="47,11,-2"/>\n            </region>\n        </spawn>\n    </spawns>\n    <default yaw="180">\n        <region>\n            <cuboid min="-3,25,-44" max="3,25,-50"/>\n        </region>\n    </default>\n</spawns>\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/modules/mechanics/filters",children:(0,t.jsx)("i",{className:"icon-right",children:"\u27a1\ufe0f"})}),"\nDefine the filters on the map and determines which events are allowed."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<filters>\n    \x3c!-- Query if a player is a member of either team using the previously defined team ID --\x3e\n    <team id="only-blue">blue-team</team>\n    <team id="only-red">red-team</team>\n    \x3c!-- Always deny beacon placement, destruction, or interaction --\x3e\n    <deny id="no-beacon">\n        <material>beacon</material>\n    </deny>\n</filters>\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/modules/mechanics/regions",children:(0,t.jsx)("i",{className:"icon-right",children:"\u27a1\ufe0f"})}),"\nDefine regions that can be later used to apply spawns, filters, etc."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<regions>\n    \x3c!-- Define where the teams\' base are located --\x3e\n    <union id="spawn-protections">\n        <cuboid id="red-base" min="-49,7,5" max="-36,16,-4"/>\n        <cuboid id="blue-base" min="50,7,-4" max="37,16,5"/>\n    </union>\n    \x3c!-- Define the playable area and also define the inverse of it as well --\x3e\n    <negative id="playable-inverse">\n        <cuboid id="playable" min="64,0,-38" max="-63,31,39"/>\n    </negative>\n    \x3c!-- Define the location of the observers\' platform --\x3e\n    <cylinder id="observers-platform" base="0.5,19,-46.5" radius="6" height="oo"/>\n    \x3c!-- applicators --\x3e\n    <apply region="red-base" enter="only-red" message="You may not enter the enemy team\'s base!"/>\n    <apply region="red-base" block="never" message="You may not modify the base!"/>\n    <apply region="blue-base" enter="only-blue" message="You may not enter the enemy team\'s base!"/>\n    <apply region="blue-base" block="never" message="You may not modify the base!"/>\n    <apply region="playable-inverse" block="never" message="You may not build outside the playing area!"/>\n    <apply region="observers-platform" enter="never" message="Don\'t enter the observers spawn area!"/>\n    <apply use="no-beacon"/> \x3c!-- Players can\'t interact with beacon blocks --\x3e\n</regions>\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/modules/objectives/dtm",children:(0,t.jsx)("i",{className:"icon-right",children:"\u27a1\ufe0f"})}),"\nThis specifies what material the monuments are made of and where each monument belongs to."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<destroyables name="Monument" materials="obsidian" repairable="false" mode-changes="true">\n    <destroyable owner="blue-team">\n        <region>\n            <cuboid min="46,16,26" max="45,14,25"/>\n        </region>\n    </destroyable>\n    <destroyable owner="red-team">\n        <region>\n            <cuboid min="-44,16,-24" max="-45,14,-25"/>\n        </region>\n    </destroyable>\n</destroyables>\n\x3c!-- The monuments which are made of obsidian will turn into beacon blocks in 20 minutes --\x3e\n<modes>\n    <mode material="beacon" after="20m"/>\n</modes>\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/modules/gear/repair-remove-keep",children:(0,t.jsx)("i",{className:"icon-right",children:"\u27a1\ufe0f"})}),"\nWe do not want an excessive amount of items dropped on the map, so this allows us to manage\nhow to deal with dropped items more easily."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"\x3c!-- These items will drop, players that already have these items can pick it up and will be merged --\x3e\n<toolrepair>\n    <tool>diamond axe</tool>\n    <tool>diamond pickaxe</tool>\n    <tool>iron spade</tool>\n    <tool>bow</tool>\n</toolrepair>\n\x3c!-- All of these items will be automatically removed when dropped --\x3e\n<itemremove>\n    <item>arrow</item>\n    <item>iron chestplate</item>\n    <item>iron boots</item>\n    <item>glass</item>\n    <item>wood</item>\n    <item>log</item>\n    <item>cooked fish</item>\n    <item>obsidian</item>\n    <item>beacon</item>\n    <item>redstone block</item>\n    <item>golden apple</item>\n</itemremove>\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/modules/gear/kill-rewards",children:(0,t.jsx)("i",{className:"icon-right",children:"\u27a1\ufe0f"})}),"\nReward players by giving a golden apple for killing an enemy."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<kill-rewards>\n    <kill-reward>\n        <item material="golden apple"/>\n    </kill-reward>\n</kill-rewards>\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/modules/gear/tnt",children:(0,t.jsx)("i",{className:"icon-right",children:"\u27a1\ufe0f"})}),"\nTNT will instantly ignite when placed, players will not need a license, and teammates cannot defuse their own team's TNT."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<tnt>\n    \x3c!-- TNT will automatically ignite when placed --\x3e\n    <instantignite>on</instantignite>\n    \x3c!-- Do not require a license so TNT usage is not restricted --\x3e\n    <licensing>off</licensing>\n    \x3c!-- Players can't defuse a teammate's TNT --\x3e\n    <friendly-defuse>off</friendly-defuse>\n</tnt>\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/modules/environment/world/#build-height",children:(0,t.jsx)("i",{className:"icon-right",children:"\u27a1\ufe0f"})}),"\nThis specifies how high players can build, however, it does not stop them from walking or breaking blocks above this limit."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<maxbuildheight>25</maxbuildheight>\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/modules/general/main",children:(0,t.jsx)("i",{className:"icon-right",children:"\u27a1\ufe0f"})}),"\nClose the main ",(0,t.jsx)(n.code,{children:"<map>"})," module."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"</map>\n"})})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},2896:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/fenland1-8bb2ae96feb0e656f0d2085b03eea7b3.png"},6146:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/fenland2-31db198720987b9ff693319c6a8faffe.png"},1151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>o});var t=a(7294);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);