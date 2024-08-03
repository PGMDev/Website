"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5358],{1157:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>n,contentTitle:()=>l,default:()=>j,frontMatter:()=>d,metadata:()=>c,toc:()=>o});var s=i(5893),r=i(1151);const d={id:"projectiles",title:"Custom Projectiles"},l=void 0,c={id:"modules/gear/projectiles",title:"Custom Projectiles",description:"Custom projectile types can be defined and applied to items in Kits.",source:"@site/docs/modules/gear/projectiles.mdx",sourceDirName:"modules/gear",slug:"/modules/gear/projectiles",permalink:"/docs/modules/gear/projectiles",draft:!1,unlisted:!1,editUrl:"https://github.com/PGMDev/Website/tree/master/docs/modules/gear/projectiles.mdx",tags:[],version:"current",lastUpdatedAt:17086628e5,frontMatter:{id:"projectiles",title:"Custom Projectiles"},sidebar:"docs",previous:{title:"Repair, Remove, & Keep",permalink:"/docs/modules/gear/repair-remove-keep"},next:{title:"Consumables",permalink:"/docs/modules/gear/consumables"}},n={},o=[{value:"Projectiles Element",id:"projectiles-element",level:4},{value:"Projectile Attributes",id:"projectile-attributes",level:4},{value:"Projectile Sub-elements",id:"projectile-sub-elements",level:5},{value:"Modifying Bow Projectiles",id:"modifying-bow-projectiles",level:3},{value:"Custom Projectile Types",id:"custom-projectile-types",level:3}];function h(e){const t={a:"a",code:"code",em:"em",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Custom projectile types can be defined and applied to items in ",(0,s.jsx)(t.a,{href:"/docs/modules/gear/kits",children:"Kits"}),".\nThese items effectively become either weapons that shoot the custom projectile,\nor the item form of the custom projectile itself."]}),"\n",(0,s.jsx)(t.h4,{id:"projectiles-element",children:"Projectiles Element"}),"\n",(0,s.jsxs)("div",{className:"table-container",children:[(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Element"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"<projectiles> </projectiles>"})}),(0,s.jsx)(t.td,{children:"Node containing the custom projectile definitions."})]})})]}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Sub-elements"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Value/Children"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"<projectile> </projectile>"})}),(0,s.jsx)(t.td,{children:"A custom projectile definition."}),(0,s.jsx)(t.td,{children:(0,s.jsx)("span",{className:"badge badge--secondary",children:"Projectile Sub-elements"})})]})})]})]}),"\n",(0,s.jsx)(t.h4,{id:"projectile-attributes",children:"Projectile Attributes"}),"\n",(0,s.jsx)("div",{className:"table-container",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Value"}),(0,s.jsx)(t.th,{children:"Default"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"id"})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)("span",{className:"badge badge--danger",children:"Required"}),"Unique identifier used to reference this projectile from other places in the XML."]}),(0,s.jsx)(t.td,{children:(0,s.jsx)("span",{className:"badge badge--primary",children:"String"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"name"})}),(0,s.jsx)(t.td,{children:'The display name of this projectile, used in "shot by" messages, etc.'}),(0,s.jsx)(t.td,{children:(0,s.jsx)("span",{className:"badge badge--primary",children:"String"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"throwable"})}),(0,s.jsx)(t.td,{children:"Items are consumed when using them to shoot this projectile (making them more like grenades than guns)."}),(0,s.jsx)(t.td,{children:(0,s.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,s.jsx)(t.td,{children:"true"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"projectile"})}),(0,s.jsx)(t.td,{children:"The entity this projectile is materialized as."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/reference/entities/entity-types",children:"Entity Type"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)("span",{className:"badge badge--secondary",children:"Arrow"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"damage"})}),(0,s.jsx)(t.td,{children:"The amount of damage this projectile deals."}),(0,s.jsx)(t.td,{children:(0,s.jsx)("span",{className:"badge badge--primary",children:"Half-hearts"})}),(0,s.jsx)(t.td,{children:"0.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"velocity"})}),(0,s.jsx)(t.td,{children:"The speed at which the projectile moves."}),(0,s.jsx)(t.td,{children:(0,s.jsx)("span",{className:"badge badge--primary",children:"Meters/tick"})}),(0,s.jsx)(t.td,{children:"1.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"click"})}),(0,s.jsx)(t.td,{children:"The click action that fires the projectile."}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"right"}),",",(0,s.jsx)("br",{}),(0,s.jsx)(t.code,{children:"left"}),",",(0,s.jsx)("br",{}),"or ",(0,s.jsx)(t.code,{children:"both"})]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"both"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"effects"})}),(0,s.jsx)(t.td,{children:"The potion effects to apply to players hit by this projectile."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/modules/gear/potions",children:"Potion Effect"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"destroy-filter"})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)("span",{className:"badge badge--secondary",title:"Can be this attribute or a sub-element.",children:"Property"}),"Filter if/what blocks get destroyed when hit with this projectile."]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/modules/mechanics/filters",children:"Filter"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"never"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"cooldown"})}),(0,s.jsx)(t.td,{children:"The minimum time between each firing of this projectile."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/reference/misc/time-periods",children:"Time Period"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"precise"})}),(0,s.jsxs)(t.td,{children:["Whether the path of a thrown projectile should be precise in hitting a target.",(0,s.jsx)("br",{}),(0,s.jsxs)(t.em,{children:["This is only applicable if the projectile is ",(0,s.jsx)(t.code,{children:"Fireball"}),", ",(0,s.jsx)(t.code,{children:"LargeFireball"}),", ",(0,s.jsx)(t.code,{children:"SmallFireball"}),", or ",(0,s.jsx)(t.code,{children:"WitherSkull"}),"."]})]}),(0,s.jsx)(t.td,{children:(0,s.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,s.jsx)(t.td,{children:"true"})]})]})]})}),"\n",(0,s.jsx)(t.h5,{id:"projectile-sub-elements",children:"Projectile Sub-elements"}),"\n",(0,s.jsx)("div",{className:"table-container",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Element"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Value/Children"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"<destroy-filter>"})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)("span",{className:"badge badge--secondary",title:"Can be this sub-element or an attribute.",children:"Property"}),"Filter if/what blocks get destroyed when hit with this projectile."]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/modules/mechanics/filters",children:"Filters"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"<effect>"})}),(0,s.jsx)(t.td,{children:"A potion effect to apply to players hit by this projectile."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/modules/gear/potions",children:"Potion Effects"})})]})]})]})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:'\x3c!-- Create the projectile "lazer" --\x3e\n<projectiles>\n    <projectile\n        id="lazer"\n        name="lazer"\n        projectile="Snowball"\n        velocity="3.5"\n        damage="50"\n        throwable="false"\n        cooldown="5s"/>\n</projectiles>\n\x3c!-- Apply the projectile to an item --\x3e\n<kits>\n    <kit id="lazer-kit">\n        <item projectile="lazer" name="`alazer gun" material="stick"/>\n    </kit>\n</kits>\n'})}),"\n",(0,s.jsx)(t.h3,{id:"modifying-bow-projectiles",children:"Modifying Bow Projectiles"}),"\n",(0,s.jsxs)(t.p,{children:["Bows can be modified to shoot a different projectile at a custom speed.\nThe PGM plugin will calculate the damage the projectile does using the same formula as Minecraft does for arrows.\nThis means that a flying fish with a velocity of 40 will almost certainly kill you.\nProjectiles can also have custom ",(0,s.jsx)(t.a,{href:"/docs/modules/gear/potions",children:"potion effects"})," which are applied to the target when it is hit."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," You can currently only modify all bow projectiles, this means no normal and custom bow at the same time."]}),"\n",(0,s.jsxs)("div",{className:"table-container",children:[(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Element"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Value/Children"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"<modifybowprojectile>"}),(0,s.jsx)("br",{}),(0,s.jsx)(t.code,{children:"</modifybowprojectile>"})]}),(0,s.jsx)(t.td,{children:"Node containing the modify bow projectile settings."}),(0,s.jsx)(t.td,{children:(0,s.jsx)("span",{className:"badge badge--secondary",children:"Bow Projectile Sub-elements"})})]})})]}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Sub-elements"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"<projectile> </projectile>"})}),(0,s.jsx)(t.td,{children:"The entity to use as the bows projectile."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/modules/gear/projectiles#custom-projectile-types",children:"Projectile Type"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"<velocityMod> </velocityMod>"})}),(0,s.jsx)(t.td,{children:"The velocity modifier of the bows projectile."}),(0,s.jsx)(t.td,{children:(0,s.jsx)("span",{className:"badge badge--primary",children:"Number"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"<potion> </potion>"})}),(0,s.jsx)(t.td,{children:"A potion effect to apply to players hit by the bow projectile."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/modules/gear/potions",children:"Potion Effect"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"<pickup-filter> </pickup-filter>"})}),(0,s.jsx)(t.td,{children:"A filter to determine which players can pick up arrows."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/modules/mechanics/filters",children:"Filter"})})]})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:'<modifybowprojectile>\n    <projectile>EnderPearl</projectile>\n    <velocityMod>2.5</velocityMod>\n    \x3c!-- Projectile potion effect --\x3e\n    <potion duration="5" amplifier="1">poison</potion>\n</modifybowprojectile>\n<modifybowprojectile>\n    <potion duration="8" amplifier="1">wither</potion>\n</modifybowprojectile>\n'})}),"\n",(0,s.jsx)(t.h3,{id:"custom-projectile-types",children:"Custom Projectile Types"}),"\n",(0,s.jsxs)(t.p,{children:["All of the following projectiles in this table are guaranteed to work.\nSome projectiles such as ",(0,s.jsx)(t.code,{children:"WitherSkull"})," travel very fast by default and may need ",(0,s.jsx)(t.code,{children:"<velocityMod>"})," to reduce the speed."]}),"\n",(0,s.jsx)("div",{className:"table-container",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.th,{children:"Working Entity Types"})})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Arrow"})})}),(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Boat"})})}),(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Egg"})})}),(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"EnderPearl"})})}),(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Fireball"})})}),(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Firework"})})}),(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"LargeFireball"})})}),(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"SmallFireball"})})}),(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Snowball"})})}),(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ThrownExpBottle"})})}),(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"WitherSkull"})})}),(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"TNTPrimed"})})})]})]})}),"\n",(0,s.jsxs)(t.p,{children:["Copied from: ",(0,s.jsx)(t.a,{href:"https://gist.github.com/4617111",children:"mrapple/Bukkit Entity Spawning.md"})]})]})}function j(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>c,a:()=>l});var s=i(7294);const r={},d=s.createContext(r);function l(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);