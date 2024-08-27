"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[104],{9714:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>o,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var t=n(5893),a=n(1151);const r={id:"spawns",title:"Spawns"},d=void 0,i={id:"modules/mechanics/spawns",title:"Spawns",description:"The spawns module is required in a complete map XML because it specifies where players and observers can spawn.",source:"@site/docs/modules/mechanics/spawns.mdx",sourceDirName:"modules/mechanics",slug:"/modules/mechanics/spawns",permalink:"/docs/modules/mechanics/spawns",draft:!1,unlisted:!1,editUrl:"https://github.com/PGMDev/Website/tree/master/docs/modules/mechanics/spawns.mdx",tags:[],version:"current",lastUpdatedAt:1724740491e3,frontMatter:{id:"spawns",title:"Spawns"},sidebar:"docs",previous:{title:"Variables",permalink:"/docs/modules/mechanics/variables"},next:{title:"Portals",permalink:"/docs/modules/mechanics/portals"}},l={},c=[{value:"Spawn &amp; Default Element Attributes",id:"spawn--default-element-attributes",level:4},{value:"Spawn &amp; Default Element Sub-elements",id:"spawn--default-element-sub-elements",level:4},{value:"Regions Element Attributes",id:"regions-element-attributes",level:4},{value:"Respawn Module",id:"respawn-module",level:2},{value:"Respawn Attributes",id:"respawn-attributes",level:5},{value:"Respawn Sub-elements",id:"respawn-sub-elements",level:5}];function h(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h4:"h4",h5:"h5",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["The spawns module is required in a complete map XML because it specifies where players and observers can spawn.\nDefault and observer spawns are defined with the ",(0,t.jsx)(s.code,{children:"<default>"})," element and all other spawns in ",(0,t.jsx)(s.code,{children:"<spawn>"})," elements.\nOnly one default spawn element may be defined per map."]}),"\n",(0,t.jsxs)(s.p,{children:["Multiple spawns from the same team can be grouped inside of a single ",(0,t.jsx)(s.code,{children:"<regions>"})," element inside ",(0,t.jsx)(s.code,{children:'<spawns team="team-id">'}),".\nSpawn positions are picked randomly inside of the defined regions.\nSince PGM will not validate the spawn position by default, regions should be checked to make sure that they don't intersect with solid objects or are mid-air.\nSpawns can also be defined with the ",(0,t.jsx)(s.code,{children:'safe="true"'})," attribute, PGM will then check that the player spawns on a solid object and not midair."]}),"\n",(0,t.jsxs)(s.p,{children:["The regions element accepts more than one region or region area.\nIf they are not inside a ",(0,t.jsx)(s.code,{children:"<union>"})," element one region will be picked at random for each spawn event."]}),"\n",(0,t.jsxs)(s.p,{children:["Respawn behavior such as delays, etc. can be customized with the ",(0,t.jsx)(s.a,{href:"#respawn-module",children:"respawn"})," module."]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Element"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"<spawns> </spawns>"})}),(0,t.jsx)(s.td,{children:"Node containing the spawns for this map."})]})})]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Sub-elements"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Value/Children"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"<spawn>"})}),(0,t.jsx)(s.td,{children:"An individual spawn where a team will spawn."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"<regions>"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"<default>"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)("span",{className:"badge badge--warning",title:"Only one of this child permitted per parent",children:"Unique"}),"The spawn for observers and teams without a spawn.",(0,t.jsx)("br",{}),(0,t.jsx)(s.em,{children:"Only one default spawn element is allowed per map."})]}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"<regions>"})})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"spawn--default-element-attributes",children:"Spawn & Default Element Attributes"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Attribute"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Value"}),(0,t.jsx)(s.th,{children:"Default"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"team"})}),(0,t.jsxs)(s.td,{children:["The team this spawn applies to.",(0,t.jsx)("br",{}),(0,t.jsx)(s.em,{children:"Not needed for team-less gamemodes."})]}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/modules/format/teams",children:"Team ID"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"safe"})}),(0,t.jsx)(s.td,{children:"Validate that the player spawns in a safe location."}),(0,t.jsx)(s.td,{children:(0,t.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,t.jsx)(s.td,{children:"false"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"sequential"})}),(0,t.jsxs)(s.td,{children:["Spawns players at the next region in a list if the one prior to it is not safe.",(0,t.jsx)("br",{}),(0,t.jsxs)(s.em,{children:["Requires the ",(0,t.jsx)(s.code,{children:"safe"})," attribute set to true."]})]}),(0,t.jsx)(s.td,{children:(0,t.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,t.jsx)(s.td,{children:"false"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"spread"})}),(0,t.jsx)(s.td,{children:"Spawn players as far away as possible from enemy players."}),(0,t.jsx)(s.td,{children:(0,t.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,t.jsx)(s.td,{children:"false"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"spread-teammates"})}),(0,t.jsx)(s.td,{children:"Spawn teammates as far away as possible from each other."}),(0,t.jsx)(s.td,{children:(0,t.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,t.jsx)(s.td,{children:"false"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"exclusive"})}),(0,t.jsx)(s.td,{children:"Spawn regions are assigned exclusively to one player or team and only they will spawn there."}),(0,t.jsx)(s.td,{children:(0,t.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,t.jsx)(s.td,{children:"false"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"persistent"})}),(0,t.jsx)(s.td,{children:"Once a player has been assigned a spawn, they will spawn there even if they leave and rejoin the game."}),(0,t.jsx)(s.td,{children:(0,t.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,t.jsx)(s.td,{children:"false"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"kit"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element.",children:"Property"}),"The kit to apply to players when they are spawned in this spawn."]}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/modules/gear/kits",children:"Kit ID"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"filter"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element.",children:"Property"}),"Filter when this spawn is used."]}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/modules/mechanics/filters",children:"Filter"})}),(0,t.jsx)(s.td,{})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"spawn--default-element-sub-elements",children:"Spawn & Default Element Sub-elements"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Element"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Value/Children"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"<regions>"})}),(0,t.jsx)(s.td,{children:"The region or regions where players will spawn."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/modules/mechanics/regions",children:"Regions"})})]})})]}),"\n",(0,t.jsx)(s.h4,{id:"regions-element-attributes",children:"Regions Element Attributes"}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsxs)(s.p,{children:["Copy the yaw and pitch from the ",(0,t.jsxs)(s.a,{href:"https://minecraft.wiki/w/Debug_screen",children:["Debug screen (",(0,t.jsx)(s.code,{children:"F3"}),")"]})," in Minecraft (the ",(0,t.jsx)(s.code,{children:"Facing: Direction (Axis) (Yaw/Pitch)"})," line)."]})}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Attribute"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Value"}),(0,t.jsx)(s.th,{children:"Default"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"angle"})}),(0,t.jsxs)(s.td,{children:["The exact block coordinates that the player looks at when spawned.",(0,t.jsx)("br",{}),(0,t.jsxs)(s.em,{children:["This attribute will negate any angles set by the ",(0,t.jsx)(s.code,{children:"yaw"})," and ",(0,t.jsx)(s.code,{children:"pitch"})," attributes."]})]}),(0,t.jsx)(s.td,{children:(0,t.jsx)("span",{className:"badge badge--primary",children:"X,Y,Z"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"yaw"})}),(0,t.jsxs)(s.td,{children:["The horizontal angle the player looks to when spawned.",(0,t.jsx)("br",{}),(0,t.jsx)(s.em,{children:"South 0\xb0, East -90\xb0, North 180\xb0, and West 90\xb0."})]}),(0,t.jsx)(s.td,{children:(0,t.jsx)("span",{className:"badge badge--primary",children:"-180 to 180"})}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"pitch"})}),(0,t.jsxs)(s.td,{children:["The vertical angle the player looks to when spawned.",(0,t.jsx)("br",{}),(0,t.jsx)(s.em,{children:"-90\xb0 is straight up, 90\xb0 is straight down."})]}),(0,t.jsx)(s.td,{children:(0,t.jsx)("span",{className:"badge badge--primary",children:"-90 to 90"})}),(0,t.jsx)(s.td,{children:"0"})]})]})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.em,{children:"Examples"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-xml",children:'<spawns>\n    <spawn team="red" kit="red">\n        <regions yaw="90">\n            <cuboid min="-2,13,71" max="-9,13,78"/>\n        </regions>\n    </spawn>\n    <spawn team="blue" kit="blue">\n        <regions yaw="-90">\n            <cuboid min="2,13,-71" max="9,13,-78"/>\n        </regions>\n    </spawn>\n    <default>\n        <regions>\n            <cuboid min="-1,16,-1" max="2,20,2"/>\n        </regions>\n    </default>\n</spawns>\n'})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-xml",children:'\x3c!-- Example spawns from Assualt --\x3e\n<spawns>\n    <spawn team="blue" kit="blue" region="blue-spawn" yaw="-90"/>\n    <spawn team="red" kit="red" region="red-spawn" yaw="90"/>\n    <default kit="obs" region="obs-spawn" yaw="-135"/>\n</spawns>\n\n<spawns safe="true" sequential="true">\n    <spawn team="blue" kit="blue" yaw="180">\n        <regions>\n            <cuboid min="-10,71,5" max="12,126,27"/> \x3c!-- Players will spawn here first --\x3e\n            <cuboid min="-10,6,5" max="12,6,27"/> \x3c!-- Secondary spawn if the first isn\'t available --\x3e\n            <point>1.5,8,0.5</point> \x3c!-- Tertiary spawn if all other team spawns aren\'t safe --\x3e\n        </regions>\n    </spawn>\n    <spawn team="red" kit="red">\n        <regions>\n            <cuboid min="-10,71,-27" max="12,126,-5"/>\n            <cuboid min="-10,6,-27" max="12,6,-5"/>\n            <point>1.5,8,0.5</point>\n        </regions>\n    </spawn>\n</spawns>\n'})}),"\n",(0,t.jsx)(s.h2,{id:"respawn-module",children:"Respawn Module"}),"\n",(0,t.jsxs)(s.p,{children:["The respawn module allows the map creator to adjust the respawn time and if players are automatically respawned.\nFor maps that may require instant respawn, you can set the delay to ",(0,t.jsx)(s.code,{children:"0s"})," and auto to ",(0,t.jsx)(s.code,{children:"true"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["To allow players to spawn at a bed set the ",(0,t.jsx)(s.code,{children:"bed"})," attribute to true.\nPlayers spawning at beds will not spawn with a kit, even if there is one specified.\nIf a player has a bed spawn location set, it overrides all other spawn regions for that player."]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Element"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"<respawn/>"})}),(0,t.jsx)(s.td,{children:"Node specifying the default respawn settings for this map."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"<respawns>"})}),(0,t.jsx)(s.td,{children:"Node specifying multiple respawn options for this map."})]})]})]}),"\n",(0,t.jsx)(s.h5,{id:"respawn-attributes",children:"Respawn Attributes"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Attribute"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Value"}),(0,t.jsx)(s.th,{children:"Default"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"delay"})}),(0,t.jsx)(s.td,{children:"Delay a player's respawn for this duration."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/reference/misc/time-periods",children:"Time Period"})}),(0,t.jsx)(s.td,{children:"2s"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"filter"})}),(0,t.jsx)(s.td,{children:"Filters when the respawn is used."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/modules/mechanics/filters",children:"Filter"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"auto"})}),(0,t.jsx)(s.td,{children:"Automatically respawn the player after the delay time has elapsed."}),(0,t.jsx)(s.td,{children:(0,t.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,t.jsx)(s.td,{children:"false"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"blackout"})}),(0,t.jsx)(s.td,{children:"Dead players get a blindness effect applied."}),(0,t.jsx)(s.td,{children:(0,t.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,t.jsx)(s.td,{children:"false"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"spectate"})}),(0,t.jsx)(s.td,{children:"Allow dead players to fly around."}),(0,t.jsx)(s.td,{children:(0,t.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,t.jsx)(s.td,{children:"false"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"bed"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)("span",{className:"badge badge--danger",title:"This feature once existed, but has not been re-implemented in modern versions of PGM.",children:"N/A"}),"Allow players to respawn from beds."]}),(0,t.jsx)(s.td,{children:(0,t.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,t.jsx)(s.td,{children:"false"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"message"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element.",children:"Property"}),"Message to display on the respawn screen to respawning players."]}),(0,t.jsx)(s.td,{children:(0,t.jsx)("span",{className:"badge badge--primary",children:"Formatted Text"})}),(0,t.jsx)(s.td,{})]})]})]}),"\n",(0,t.jsx)(s.h5,{id:"respawn-sub-elements",children:"Respawn Sub-elements"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Element"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Value/Children"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"<message>"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)("span",{className:"badge badge--secondary",title:"Can be either this sub-element or an attribute.",children:"Property"}),"Message to display on the respawn screen to respawning players."]}),(0,t.jsx)(s.td,{children:(0,t.jsx)("span",{className:"badge badge--primary",children:"Formatted Text"})})]})})]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-xml",children:'\x3c!-- Default auto respawn of 2 seconds --\x3e\n<respawn auto="true"/>\n\n\x3c!-- Allow players to respawn after 3 seconds, blackout the player when they die --\x3e\n<respawn delay="3s" blackout="true"/>\n\n\x3c!-- Allow respawning after 5s, display translatable waiting on flag drop respawn message --\x3e\n<respawn delay="5s" spectate="true">\n    <message>{translate: "death.respawn.confirmed.waiting.flagDropped"}</message>\n</respawn>\n\n\x3c!-- Allow respawning after 1.5 seconds --\x3e\n\x3c!-- After 10 minutes has passed, allow respawning after 10 seconds --\x3e\n<respawns>\n    <respawn delay="10s" filter="after-10m"/>\n</respawns>\n<respawn delay="1.5s"/>\n'})})]})}function o(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>i,a:()=>d});var t=n(7294);const a={},r=t.createContext(a);function d(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);