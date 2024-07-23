"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5607],{4696:(e,d,s)=>{s.r(d),s.d(d,{assets:()=>c,contentTitle:()=>t,default:()=>o,frontMatter:()=>i,metadata:()=>l,toc:()=>r});var a=s(5893),n=s(1151);const i={id:"damage",title:"Damage"},t=void 0,l={id:"modules/mechanics/damage",title:"Damage",description:"Friendly Fire",source:"@site/docs/modules/mechanics/damage.mdx",sourceDirName:"modules/mechanics",slug:"/modules/mechanics/damage",permalink:"/docs/modules/mechanics/damage",draft:!1,unlisted:!1,editUrl:"https://github.com/PGMDev/Website/tree/master/docs/modules/mechanics/damage.mdx",tags:[],version:"current",lastUpdatedAt:1721766315e3,frontMatter:{id:"damage",title:"Damage"},sidebar:"docs",previous:{title:"Lanes",permalink:"/docs/modules/mechanics/lanes"},next:{title:"Gamerules",permalink:"/docs/modules/mechanics/gamerules"}},c={},r=[{value:"Friendly Fire",id:"friendly-fire",level:3},{value:"Difficulty",id:"difficulty",level:3},{value:"Hunger",id:"hunger",level:3},{value:"Damage Filtering",id:"damage-filtering",level:3},{value:"Disable Damage",id:"disable-damage",level:3},{value:"Disable Damage Element",id:"disable-damage-element",level:4},{value:"Damage Attributes",id:"damage-attributes",level:4},{value:"Block Explosion Attributes",id:"block-explosion-attributes",level:4},{value:"Damage Causes",id:"damage-causes",level:3}];function h(e){const d={a:"a",code:"code",em:"em",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.h3,{id:"friendly-fire",children:"Friendly Fire"}),"\n",(0,a.jsx)(d.p,{children:"Allows teammates to kill each other. Arrows will be absorbed if they hit a teammate."}),"\n",(0,a.jsx)(d.pre,{children:(0,a.jsx)(d.code,{className:"language-xml",children:"<friendlyfire>on</friendlyfire> \x3c!-- Defaults to off --\x3e\n"})}),"\n",(0,a.jsx)(d.p,{children:"Refunds arrows blocked by teammates from non-infinity bows."}),"\n",(0,a.jsx)(d.pre,{children:(0,a.jsx)(d.code,{className:"language-xml",children:"<friendlyfirerefund>off</friendlyfirerefund> \x3c!-- Defaults to on --\x3e\n"})}),"\n",(0,a.jsx)(d.h3,{id:"difficulty",children:"Difficulty"}),"\n",(0,a.jsxs)(d.p,{children:["The difficulty level can be set to ",(0,a.jsx)(d.code,{children:"peaceful"}),", ",(0,a.jsx)(d.code,{children:"easy"}),", ",(0,a.jsx)(d.code,{children:"normal"}),", or ",(0,a.jsx)(d.code,{children:"hard"}),". The default is ",(0,a.jsx)(d.code,{children:"hard"}),"."]}),"\n",(0,a.jsx)(d.pre,{children:(0,a.jsx)(d.code,{className:"language-xml",children:"<difficulty>easy</difficulty> \x3c!-- Defaults to hard --\x3e\n"})}),"\n",(0,a.jsx)(d.h3,{id:"hunger",children:"Hunger"}),"\n",(0,a.jsxs)(d.p,{children:["Specify if a player can starve to death, usually used with the difficulty setting.\nThis can also be accomplished with the ",(0,a.jsxs)(d.a,{href:"/docs/modules/mechanics/gamerules",children:[(0,a.jsx)(d.code,{children:"naturalRegeneration"})," gamerule"]}),"."]}),"\n",(0,a.jsx)(d.pre,{children:(0,a.jsx)(d.code,{className:"language-xml",children:"<hunger>\n    <depletion>off</depletion>\n</hunger>\n"})}),"\n",(0,a.jsx)(d.h3,{id:"damage-filtering",children:"Damage Filtering"}),"\n",(0,a.jsxs)(d.p,{children:["This module is used to filter when or if damage is applied to entities.\nIts contents can be a filter or combination of filters.\nIt doesn't have to be ",(0,a.jsx)(d.code,{children:"<allow>"})," and ",(0,a.jsx)(d.code,{children:"<deny>"})," at the top level but that's usually what you want.\nRegions can also be used since they are filters that filter for a location."]}),"\n",(0,a.jsx)(d.p,{children:(0,a.jsx)(d.em,{children:"Examples"})}),"\n",(0,a.jsx)(d.pre,{children:(0,a.jsx)(d.code,{className:"language-xml",children:"<damage>\n    <deny>\n        <cause>explosion</cause>\n    </deny>\n</damage>\n"})}),"\n",(0,a.jsx)(d.pre,{children:(0,a.jsx)(d.code,{className:"language-xml",children:"\x3c!-- Deny damage events where the attacker is on the red team --\x3e\n<damage>\n    <deny>\n        <attacker>\n            <team>red</team>\n        </attacker>\n    </deny>\n</damage>\n"})}),"\n",(0,a.jsx)(d.pre,{children:(0,a.jsx)(d.code,{className:"language-xml",children:"\x3c!-- Deny fall damage for players using the Eagle class --\x3e\n<damage>\n    <deny>\n        <all>\n            <class>eagle</class>\n            <cause>fall</cause>\n        </all>\n    </deny>\n</damage>\n"})}),"\n",(0,a.jsx)(d.h3,{id:"disable-damage",children:"Disable Damage"}),"\n",(0,a.jsx)(d.p,{children:"Use this module to disable damage from specific causes."}),"\n",(0,a.jsxs)(d.p,{children:["While almost every form of damage can be disabled safely, it is recommended that you do ",(0,a.jsx)(d.strong,{children:"not"})," disable ",(0,a.jsx)(d.code,{children:"VOID"})," damage."]}),"\n",(0,a.jsx)(d.h4,{id:"disable-damage-element",children:"Disable Damage Element"}),"\n",(0,a.jsxs)("div",{className:"table-container",children:[(0,a.jsxs)(d.table,{children:[(0,a.jsx)(d.thead,{children:(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.th,{children:"Element"}),(0,a.jsx)(d.th,{children:"Description"})]})}),(0,a.jsx)(d.tbody,{children:(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"<disabledamage> </disabledamage>"})}),(0,a.jsx)(d.td,{children:"Node containing the disabled damage types."})]})})]}),(0,a.jsxs)(d.table,{children:[(0,a.jsx)(d.thead,{children:(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.th,{children:"Sub-elements"}),(0,a.jsx)(d.th,{}),(0,a.jsx)(d.th,{children:"Value/Children"})]})}),(0,a.jsx)(d.tbody,{children:(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"<damage> </damage>"})}),(0,a.jsx)(d.td,{children:"The damage type that is disabled."}),(0,a.jsx)(d.td,{children:(0,a.jsx)(d.a,{href:"#damage-causes",children:"Damage Cause"})})]})})]})]}),"\n",(0,a.jsx)(d.h4,{id:"damage-attributes",children:"Damage Attributes"}),"\n",(0,a.jsx)("div",{className:"table-container",children:(0,a.jsxs)(d.table,{children:[(0,a.jsx)(d.thead,{children:(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.th,{children:"Attribute"}),(0,a.jsx)(d.th,{children:"Description"}),(0,a.jsx)(d.th,{children:"Value"})]})}),(0,a.jsxs)(d.tbody,{children:[(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"attacker-action"})}),(0,a.jsx)(d.td,{children:"The action to trigger for the attacker."}),(0,a.jsx)(d.td,{children:(0,a.jsx)(d.a,{href:"/docs/modules/mechanics/actions-triggers",children:"Action ID"})})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"victim-action"})}),(0,a.jsx)(d.td,{children:"The action to trigger for the victim."}),(0,a.jsx)(d.td,{children:(0,a.jsx)(d.a,{href:"/docs/modules/mechanics/actions-triggers",children:"Action ID"})})]})]})]})}),"\n",(0,a.jsx)(d.p,{children:(0,a.jsx)(d.em,{children:"Example"})}),"\n",(0,a.jsx)(d.pre,{children:(0,a.jsx)(d.code,{className:"language-xml",children:"<disabledamage>\n    \x3c!-- Disable fall damage --\x3e\n    <damage>fall</damage>\n</disabledamage>\n"})}),"\n",(0,a.jsx)(d.pre,{children:(0,a.jsx)(d.code,{className:"language-xml",children:'\x3c!-- Deny explosions & use actions "when-attacking" and "when-damaged" --\x3e\n<damage attacker-action="when-attacking" victim-action="when-damaged">\n    <deny>\n        <cause>explosion</cause>\n    </deny>\n</damage>\n'})}),"\n",(0,a.jsx)(d.h4,{id:"block-explosion-attributes",children:"Block Explosion Attributes"}),"\n",(0,a.jsxs)(d.p,{children:["The ",(0,a.jsx)(d.code,{children:"BLOCK_EXPLOSION"})," damage cause has several extended attributes to customize who/what gets damaged. Only attributes with ",(0,a.jsx)(d.code,{children:"false"})," as the value need to be explicitly defined since all attributes default to ",(0,a.jsx)(d.code,{children:"true"}),"."]}),"\n",(0,a.jsx)("div",{className:"table-container",children:(0,a.jsxs)(d.table,{children:[(0,a.jsx)(d.thead,{children:(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.th,{children:"Attribute"}),(0,a.jsx)(d.th,{children:"Description"}),(0,a.jsx)(d.th,{children:"Value"}),(0,a.jsx)(d.th,{children:"Default"})]})}),(0,a.jsxs)(d.tbody,{children:[(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"ally"})}),(0,a.jsx)(d.td,{children:"Damage to players on the same team as the person that caused the explosion."}),(0,a.jsx)(d.td,{children:(0,a.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,a.jsx)(d.td,{children:"true"})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"self"})}),(0,a.jsx)(d.td,{children:"Damage to the person that caused the explosion."}),(0,a.jsx)(d.td,{children:(0,a.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,a.jsx)(d.td,{children:"true"})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"enemy"})}),(0,a.jsx)(d.td,{children:"Damage to players not on the same team as the person that caused the explosion."}),(0,a.jsx)(d.td,{children:(0,a.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,a.jsx)(d.td,{children:"true"})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"other"})}),(0,a.jsx)(d.td,{children:"Any other damage caused by the explosion."}),(0,a.jsx)(d.td,{children:(0,a.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,a.jsx)(d.td,{children:"true"})]})]})]})}),"\n",(0,a.jsx)(d.p,{children:(0,a.jsx)(d.em,{children:"Example"})}),"\n",(0,a.jsx)(d.pre,{children:(0,a.jsx)(d.code,{className:"language-xml",children:'<disabledamage>\n    \x3c!-- TNT damages enemies and self, but not teammates --\x3e\n    <damage ally="true" self="false" enemy="false" other="false">block explosion</damage>\n</disabledamage>\n'})}),"\n",(0,a.jsx)(d.h3,{id:"damage-causes",children:"Damage Causes"}),"\n",(0,a.jsxs)(d.p,{children:["The following damage causes can be used in the disable damage module.\nThese causes do not need to be capitalized or contain underscores, i.e., ",(0,a.jsx)(d.code,{children:"FIRE_TICK"})," and ",(0,a.jsx)(d.code,{children:"fire tick"})," will both work."]}),"\n",(0,a.jsx)("div",{className:"table-container",children:(0,a.jsxs)(d.table,{children:[(0,a.jsx)(d.thead,{children:(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.th,{children:"Name"}),(0,a.jsx)(d.th,{children:"Description"})]})}),(0,a.jsxs)(d.tbody,{children:[(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"CONTACT"})}),(0,a.jsx)(d.td,{children:"Damage caused when an entity contacts a block such as a Cactus."})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"ENTITY_ATTACK"})}),(0,a.jsx)(d.td,{children:"Damage caused when an entity attacks another entity."})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"PROJECTILE"})}),(0,a.jsx)(d.td,{children:"Damage caused when attacked by a projectile."})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"SUFFOCATION"})}),(0,a.jsx)(d.td,{children:"Damage caused by being put in a block."})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"FALL"})}),(0,a.jsx)(d.td,{children:"Damage caused when an entity falls a distance greater than 3 blocks."})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"FIRE"})}),(0,a.jsx)(d.td,{children:"Damage caused by direct exposure to fire."})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"FIRE_TICK"})}),(0,a.jsx)(d.td,{children:"Damage caused due to burns caused by fire."})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"MELTING"})}),(0,a.jsx)(d.td,{children:"Damage caused due to a snowman melting."})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"LAVA"})}),(0,a.jsx)(d.td,{children:"Damage caused by direct exposure to lava."})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"DROWNING"})}),(0,a.jsx)(d.td,{children:"Damage caused by running out of air while in water."})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"BLOCK_EXPLOSION"})}),(0,a.jsx)(d.td,{children:"Damage caused by being in the area when a block explodes."})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"ENTITY_EXPLOSION"})}),(0,a.jsx)(d.td,{children:"Damage caused by being in the area when an entity, such as a Creeper, explodes."})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"VOID"})}),(0,a.jsx)(d.td,{children:"Damage caused by falling into the void."})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"LIGHTNING"})}),(0,a.jsx)(d.td,{children:"Damage caused by being struck by lightning."})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"SUICIDE"})}),(0,a.jsxs)(d.td,{children:["Damage caused by committing suicide using the command ",(0,a.jsx)(d.code,{children:"/kill"}),"."]})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"STARVATION"})}),(0,a.jsx)(d.td,{children:"Damage caused by starving due to having an empty hunger bar."})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"POISON"})}),(0,a.jsx)(d.td,{children:"Damage caused due to an ongoing poison effect."})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"MAGIC"})}),(0,a.jsx)(d.td,{children:"Damage caused by being hit by a damage potion or spell."})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"WITHER"})}),(0,a.jsx)(d.td,{children:"Damage caused by Wither potion effect."})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"FALLING_BLOCK"})}),(0,a.jsx)(d.td,{children:"Damage caused by being hit by a falling block which deals damage."})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"THORNS"})}),(0,a.jsx)(d.td,{children:"Damage caused in retaliation to another attack by the Thorns enchantment."})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:(0,a.jsx)(d.code,{children:"CUSTOM"})}),(0,a.jsx)(d.td,{children:"Custom damage."})]})]})]})}),"\n",(0,a.jsxs)(d.p,{children:["Copied from: ",(0,a.jsx)(d.a,{href:"https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/event/entity/EntityDamageEvent.DamageCause.html",children:"bukkit docs - Damage Cause"})]})]})}function o(e={}){const{wrapper:d}={...(0,n.a)(),...e.components};return d?(0,a.jsx)(d,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},1151:(e,d,s)=>{s.d(d,{Z:()=>l,a:()=>t});var a=s(7294);const n={},i=a.createContext(n);function t(e){const d=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),a.createElement(i.Provider,{value:d},e.children)}}}]);