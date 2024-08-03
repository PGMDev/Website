"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2841],{7472:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>n,default:()=>o,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var s=i(5893),r=i(1151);const l={id:"kits",title:"Kits"},n=void 0,d={id:"modules/gear/kits",title:"Kits",description:"Kits are groups of items and effects that can be given to players in various ways.",source:"@site/docs/modules/gear/kits.mdx",sourceDirName:"modules/gear",slug:"/modules/gear/kits",permalink:"/docs/modules/gear/kits",draft:!1,unlisted:!1,editUrl:"https://github.com/PGMDev/Website/tree/master/docs/modules/gear/kits.mdx",tags:[],version:"current",lastUpdatedAt:17086628e5,frontMatter:{id:"kits",title:"Kits"},sidebar:"docs",previous:{title:"Potion Effects",permalink:"/docs/modules/gear/potions"},next:{title:"Classes",permalink:"/docs/modules/gear/classes"}},a={},c=[{value:"Kit Element",id:"kit-element",level:4},{value:"Kit Attributes",id:"kit-attributes",level:3},{value:"Item &amp; Armor Kits",id:"item--armor-kits",level:3},{value:"Inventory Clear Elements",id:"inventory-clear-elements",level:5},{value:"Inventory Clear Attributes",id:"inventory-clear-attributes",level:5},{value:"Game-mode Kit",id:"game-mode-kit",level:3},{value:"Health &amp; Hunger Kits",id:"health--hunger-kits",level:3},{value:"Health &amp; Hunger Elements",id:"health--hunger-elements",level:5},{value:"Team Switch Kit",id:"team-switch-kit",level:3},{value:"Team Switch Kit Attributes",id:"team-switch-kit-attributes",level:5},{value:"Dynamic Kits",id:"dynamic-kits",level:3},{value:"Potion Effect Kits (removable)",id:"potion-effect-kits-removable",level:3},{value:"Attribute Modifier Kits (removable)",id:"attribute-modifier-kits-removable",level:3},{value:"Attribute Kit Elements",id:"attribute-kit-elements",level:5},{value:"Attribute Kit Attributes",id:"attribute-kit-attributes",level:5},{value:"Walk Speed Kit (removable)",id:"walk-speed-kit-removable",level:3},{value:"Knockback Reduction Kit (removable)",id:"knockback-reduction-kit-removable",level:3},{value:"Shield Kit (removable)",id:"shield-kit-removable",level:3},{value:"Shield Kit Attributes",id:"shield-kit-attributes",level:5},{value:"Double Jump Kit (removable)",id:"double-jump-kit-removable",level:3},{value:"Double-Jump Attributes",id:"double-jump-attributes",level:5},{value:"Fly Kit (removable)",id:"fly-kit-removable",level:3},{value:"Fly Kit Attributes",id:"fly-kit-attributes",level:5}];function h(e){const t={a:"a",code:"code",em:"em",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Kits are groups of items and effects that can be given to players in various ways.\nhere are many types of kits, and they can be packaged together in any combination."}),"\n",(0,s.jsxs)(t.p,{children:["Kits can be given an ",(0,s.jsx)(t.code,{children:"id"})," attribute, which is used to refer to them in other places.\nKits can contain other kits directly, and can also inherit items from other kits through the ",(0,s.jsx)(t.code,{children:'parents=""'})," attribute."]}),"\n",(0,s.jsxs)(t.p,{children:["Some types of kits are ",(0,s.jsx)(t.em,{children:"removable"}),", meaning that the kit can be automatically\ntaken from the player as well as given. When used in certain contexts,\nthese kits will be automatically removed from the player at an appropriate time.\nThese can be used in ",(0,s.jsx)(t.a,{href:"#dynamic-kits",children:"Dynamic Kits"}),".\nRemovable kits will be noted in the documentation where applicable."]}),"\n",(0,s.jsx)(t.h4,{id:"kit-element",children:"Kit Element"}),"\n",(0,s.jsx)("div",{className:"table-container",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Element"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"<kit> </kit>"})}),(0,s.jsx)(t.td,{children:"A kit node, containing specific kit types and/or other kit nodes."})]})})]})}),"\n",(0,s.jsx)(t.h3,{id:"kit-attributes",children:"Kit Attributes"}),"\n",(0,s.jsx)("div",{className:"table-container",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Value"}),(0,s.jsx)(t.th,{children:"Default"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"id"})}),(0,s.jsx)(t.td,{children:"Unique identifier used to reference this kit from other places in the XML."}),(0,s.jsx)(t.td,{children:(0,s.jsx)("span",{className:"badge badge--primary",children:"String"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"filter"})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element.",children:"Property"}),"Filter when this kit is used."]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/modules/mechanics/filters",children:"Filter"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"parents"})}),(0,s.jsx)(t.td,{children:"The kit's parent or a comma separated list of parent kits."}),(0,s.jsx)(t.td,{children:(0,s.jsx)("span",{className:"badge badge--primary",children:"String"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"force"})}),(0,s.jsx)(t.td,{children:"Force apply the kit, which will override existing items in certain slots."}),(0,s.jsx)(t.td,{children:(0,s.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"overflow-warning"})}),(0,s.jsxs)(t.td,{children:["Warn the player when the kit cannot give the player all of its items.",(0,s.jsx)("br",{}),(0,s.jsx)(t.em,{children:"Defaults to standard translatable message"})]}),(0,s.jsx)(t.td,{children:(0,s.jsx)("span",{className:"badge badge--primary",children:"String"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"repair-tools"})}),(0,s.jsx)(t.td,{children:"Repairs tools in the player's inventory with those given in the kit."}),(0,s.jsx)(t.td,{children:(0,s.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,s.jsx)(t.td,{children:"true"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"deduct-tools"})}),(0,s.jsx)(t.td,{children:"Deducts the toolrepair given in the kit by the toolrepair in the player's inventory."}),(0,s.jsx)(t.td,{children:(0,s.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,s.jsx)(t.td,{children:"true"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"deduct-items"})}),(0,s.jsx)(t.td,{children:"Deducts the number of items given in the kit by the number of items the player already has."}),(0,s.jsx)(t.td,{children:(0,s.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,s.jsx)(t.td,{children:"true"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"drop-overflow"})}),(0,s.jsx)(t.td,{children:"Drops overflow items on the ground near the player."}),(0,s.jsx)(t.td,{children:(0,s.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,s.jsx)(t.td,{children:"false"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"potion-particles"})}),(0,s.jsxs)(t.td,{children:["Enable or disable potion particles.",(0,s.jsx)("br",{}),(0,s.jsx)(t.em,{children:"Potion particles are disabled for all players by default."})]}),(0,s.jsx)(t.td,{children:(0,s.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,s.jsx)(t.td,{children:"false"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"reset-ender-pearls"})}),(0,s.jsx)(t.td,{children:"Reset any ender pearls the player might have thrown before the kit was applied."}),(0,s.jsx)(t.td,{children:(0,s.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,s.jsx)(t.td,{children:"false"})]})]})]})}),"\n",(0,s.jsxs)(t.p,{children:["The effect of the ",(0,s.jsx)(t.code,{children:"force"})," attribute depends on the type of kit it is used with:\nconflicting items or armor will be replaced instead of smartly merged and repaired,\nhealth and hunger will be set instead of only increased,\nand potion effects can be replaced with the same effect at a lower level or shorter duration."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:'<kits>\n    <kit id="spawn-kit" force="true">\n        <item slot="0" material="iron sword"/>\n        <item slot="8" amount="32" material="bread"/>\n        <effect duration="5">instant_health</effect>\n    </kit>\n    <kit id="red-kit" parents="spawn">\n        <helmet color="cd0000" material="leather helmet"/>\n    </kit>\n    <kit id="blue-kit" parents="spawn">\n        <helmet color="0066cc" material="leather helmet"/>\n    </kit>\n</kits>\n'})}),"\n",(0,s.jsx)(t.p,{children:"In the example above players from blue team will get a blue helmet,\nplayers from red team will get a red helmet; both teams will get the items from the spawn kit.\nThe spawn kit contains a 5 second healing potion to help prevent spawn killing."}),"\n",(0,s.jsx)(t.h3,{id:"item--armor-kits",children:"Item & Armor Kits"}),"\n",(0,s.jsxs)(t.p,{children:["Kits can place items in specific slots of a player's inventory, and equip them with armor.\nSee ",(0,s.jsx)(t.a,{href:"/docs/modules/gear/items",children:"Items & Armor"})," for details."]}),"\n",(0,s.jsxs)(t.p,{children:["Item kits will replace any items in the player's inventory in slots present in the kit, but they will not alter any other slots.\nIf you want to guarantee that a slot is empty, put an item called \"air\" in that slot.\nYou can also clear the player's entire inventory before applying the kit by using the ",(0,s.jsx)(t.code,{children:"<clear/>"})," element."]}),"\n",(0,s.jsx)(t.h5,{id:"inventory-clear-elements",children:"Inventory Clear Elements"}),"\n",(0,s.jsx)("div",{className:"table-container",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Element"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"<clear/>"})}),(0,s.jsx)(t.td,{children:"Clears all of the player's inventory, including armor slots."})]})})]})}),"\n",(0,s.jsx)(t.h5,{id:"inventory-clear-attributes",children:"Inventory Clear Attributes"}),"\n",(0,s.jsx)("div",{className:"table-container",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Value"}),(0,s.jsx)(t.th,{children:"Default"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"items"})}),(0,s.jsx)(t.td,{children:"Clears all of the player's inventory, except armor slots."}),(0,s.jsx)(t.td,{children:(0,s.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,s.jsx)(t.td,{children:"true"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"armor"})}),(0,s.jsx)(t.td,{children:"Clear's all of the player's armor slots."}),(0,s.jsx)(t.td,{children:(0,s.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,s.jsx)(t.td,{children:"true"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"effects"})}),(0,s.jsx)(t.td,{children:"Clears all of the player's current potion effects."}),(0,s.jsx)(t.td,{children:(0,s.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,s.jsx)(t.td,{children:"false"})]})]})]})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:'<kit id="ender" reset-ender-pearls="true">\n    <item slot="0" amount="4" material="ender pearl"/>\n    \x3c!-- clears items and armor slots by default --\x3e\n    <clear/>\n</kit>\n'})}),"\n",(0,s.jsx)(t.h3,{id:"game-mode-kit",children:"Game-mode Kit"}),"\n",(0,s.jsxs)(t.p,{children:["A player's gamemode can be changed when they spawn, enter or leave a region, etc., by applying a kit with a ",(0,s.jsx)(t.code,{children:"game-mode"})," element.\nThis is not to be confused with ",(0,s.jsxs)(t.a,{href:"/docs/modules/general/main#map-gamemode",children:["Map Gamemode ",(0,s.jsx)(t.code,{children:"<gamemode>"})]}),", which controls how PGM should display a map."]}),"\n",(0,s.jsx)("div",{className:"table-container",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Element"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"<game-mode> </game-mode>"})}),(0,s.jsx)(t.td,{children:"The gamemode to change the player to."}),(0,s.jsx)(t.td,{children:(0,s.jsx)("span",{className:"badge badge--secondary",children:"Game Mode String"})})]})})]})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:"<game-mode>adventure</game-mode>\n"})}),"\n",(0,s.jsx)(t.h3,{id:"health--hunger-kits",children:"Health & Hunger Kits"}),"\n",(0,s.jsxs)(t.p,{children:["A player's health and hunger can be modified with kits, this can be useful on maps with the ",(0,s.jsxs)(t.a,{href:"/docs/modules/mechanics/gamerules",children:[(0,s.jsx)(t.code,{children:"naturalRegeneration"})," gamerule"]})," set to false."]}),"\n",(0,s.jsxs)(t.p,{children:["By default health or hunger values are only increased, not decreased.\nFor example, a player with 5 hearts (10 points) will not get a 5 health point kit applied,\nhowever a 20 point kit will be applied. This can be overwritten with a kit ",(0,s.jsx)(t.code,{children:'force="true"'})," attribute."]}),"\n",(0,s.jsx)(t.h5,{id:"health--hunger-elements",children:"Health & Hunger Elements"}),"\n",(0,s.jsx)("div",{className:"table-container",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Element"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"<health> </health>"})}),(0,s.jsx)(t.td,{children:"Health value in \xbd heart increments."}),(0,s.jsx)(t.td,{children:(0,s.jsx)("span",{className:"badge badge--primary",children:"1 - 20"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"<max-health> </max-health>"})}),(0,s.jsx)(t.td,{children:"The maximum health a player can have."}),(0,s.jsx)(t.td,{children:(0,s.jsx)("span",{className:"badge badge--primary",children:">1"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"<saturation> </saturation>"})}),(0,s.jsx)(t.td,{children:"Food saturation, always equal to or less than the player's food level."}),(0,s.jsx)(t.td,{children:(0,s.jsx)("span",{className:"badge badge--primary",children:"Decimal"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"<foodlevel> </foodlevel>"})}),(0,s.jsx)(t.td,{children:"Food level in \xbd drumstick increments."}),(0,s.jsx)(t.td,{children:(0,s.jsx)("span",{className:"badge badge--primary",children:"0 - 20"})})]})]})]})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:'<kit id="health" force="true">\n    <health>10</health>\n</kit>\n\n<kit id="max-health-kit" force="true">\n     \x3c!-- Double health, default is 20 --\x3e\n     <max-health>40</max-health>\n</kit>\n\n<kit id="hunger">\n    <saturation>20</saturation>\n    <foodlevel>20</foodlevel>\n</kit>\n'})}),"\n",(0,s.jsx)(t.h3,{id:"team-switch-kit",children:"Team Switch Kit"}),"\n",(0,s.jsx)(t.p,{children:"Allow for players who receive this kit to be forced onto a different team."}),"\n",(0,s.jsx)("div",{className:"table-container",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Element"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"<team-switch/>"})}),(0,s.jsx)(t.td,{children:"Switch the player's current team."})]})})]})}),"\n",(0,s.jsx)(t.h5,{id:"team-switch-kit-attributes",children:"Team Switch Kit Attributes"}),"\n",(0,s.jsx)("div",{className:"table-container",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Value"}),(0,s.jsx)(t.th,{children:"Default"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"team"})}),(0,s.jsx)(t.td,{children:"The new team to switch the player to."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/modules/format/teams",children:"Team ID"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"show-title"})}),(0,s.jsx)(t.td,{children:"Set if the player should recieve join message as a title."}),(0,s.jsx)(t.td,{children:(0,s.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,s.jsx)(t.td,{children:"true"})]})]})]})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:'<kit id="team-switch">\n    <team-switch team="blue-team" show-title="false"/>\n</kit>\n'})}),"\n",(0,s.jsx)(t.h3,{id:"dynamic-kits",children:"Dynamic Kits"}),"\n",(0,s.jsx)(t.p,{children:"Kits that are removable can be given and taken dynamically by using a Dynamic Filter."}),"\n",(0,s.jsx)("div",{className:"table-container",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Element"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"<give>"})}),(0,s.jsx)(t.td,{children:"Gives a kit to a player when they match the filter."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/modules/mechanics/filters#dynamic-filters",children:"Dynamic Filter"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"<take>"})}),(0,s.jsx)(t.td,{children:"Removes a kit when they match the filter."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/modules/mechanics/filters#dynamic-filters",children:"Dynamic Filter"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"<lend>"})}),(0,s.jsxs)(t.td,{children:["Loans a player a kit when the filter is ",(0,s.jsx)(t.code,{children:"ALLOW"}),", removes when they stop matching the filter."]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/modules/mechanics/filters#dynamic-filters",children:"Dynamic Filter"})})]})]})]})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:'<kits>\n    \x3c!-- Kit and Filter References --\x3e\n    <lend kit="jumper-kit" filter="carrying-gold"/>\n    <give kit="regen-kit" filter="holding-redstone"/>\n    \x3c!-- Player can no longer fly after carrying the flag --\x3e\n    <take>\n        <kit>\n            <fly/>\n        </kit>\n        <filter>\n            <flag-carried>flag</flag-carried>\n        </filter>\n    </take>\n</kits>\n'})}),"\n",(0,s.jsx)(t.h3,{id:"potion-effect-kits-removable",children:"Potion Effect Kits (removable)"}),"\n",(0,s.jsxs)(t.p,{children:["Potion effects can be applied and removed with a kit.\nSee ",(0,s.jsx)(t.a,{href:"/docs/modules/gear/potions",children:"Potion Effects"})," for details about the ",(0,s.jsx)(t.code,{children:"<effect>"})," element."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:'<kit>\n    <effect duration="10" amplifier="4">resistance</effect>\n</kit>\n'})}),"\n",(0,s.jsx)(t.h3,{id:"attribute-modifier-kits-removable",children:"Attribute Modifier Kits (removable)"}),"\n",(0,s.jsxs)(t.p,{children:["Attribute modifiers can be applied directly to players through a kit. Modifying attributes in this way,\ninstead of through an item, is a simple way to ensure that the player cannot avoid the effect of\nthe modifier. See ",(0,s.jsx)(t.a,{href:"/docs/modules/gear/items#attribute-modifiers",children:"Attribute Modifiers"})," to learn how they are applied to items."]}),"\n",(0,s.jsx)(t.p,{children:"The only way to remove an attribute modifier applied to a player is by removing the kit that applied it.\nA kit cannot affect a modifier applied by a different kit."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Attribute Operations"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"add"})," \u2014 Add amount"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"base"})," \u2014 Multiply amount by base value and add it"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"multiply"})," \u2014 Multiply by amount"]}),"\n"]}),"\n",(0,s.jsx)(t.h5,{id:"attribute-kit-elements",children:"Attribute Kit Elements"}),"\n",(0,s.jsx)("div",{className:"table-container",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Element"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"<attribute> </attribute>"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/reference/items/attributes",children:"Attribute Name"})})]})})]})}),"\n",(0,s.jsx)(t.h5,{id:"attribute-kit-attributes",children:"Attribute Kit Attributes"}),"\n",(0,s.jsx)("div",{className:"table-container",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Value"}),(0,s.jsx)(t.th,{children:"Default"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"amount"})}),(0,s.jsx)(t.td,{children:"Numeric parameter"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("span",{className:"badge badge--primary",children:"Decimal"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"operation"})}),(0,s.jsx)(t.td,{children:"Modifier operation"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("span",{className:"badge badge--primary",children:"add / base / multiply"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"add"})})]})]})]})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:'<kit>\n    <attribute operation="add" amount="0.5">generic.movementSpeed</attribute>\n</kit>\n'})}),"\n",(0,s.jsx)(t.h3,{id:"walk-speed-kit-removable",children:"Walk Speed Kit (removable)"}),"\n",(0,s.jsx)(t.p,{children:"Increase or decrease a player's walking speed.\nThe value is a multiplier of the normal walking speed."}),"\n",(0,s.jsx)("div",{className:"table-container",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Element"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"<walk-speed> </walk-speed>"})}),(0,s.jsx)(t.td,{children:"Increase or decrease a player's walking speed."}),(0,s.jsx)(t.td,{children:(0,s.jsx)("span",{className:"badge badge--primary",children:"0 - 5.0"})})]})})]})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:'<kit id="rabbit">\n    \x3c!-- 1.8 times faster than a normal player --\x3e\n    <walk-speed>1.8</walk-speed>\n</kit>\n\n<kit id="tortoise">\n    \x3c!-- half as fast as a normal player --\x3e\n    <walk-speed>0.5</walk-speed>\n</kit>\n'})}),"\n",(0,s.jsx)(t.h3,{id:"knockback-reduction-kit-removable",children:"Knockback Reduction Kit (removable)"}),"\n",(0,s.jsxs)(t.p,{children:["Reduce (or increase) the knockback players receive when they have this kit applied.\nThe normal input range is ",(0,s.jsx)(t.code,{children:"0 - 1.0"}),". If the value is greater than one the knockback will be increased,\nand anything lower than zero pushes the player to the attacker instead of away from them."]}),"\n",(0,s.jsx)("div",{className:"table-container",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Element"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"<knockback-reduction> </knockback-reduction>"})}),(0,s.jsx)(t.td,{children:"Knockback reduction amount."}),(0,s.jsx)(t.td,{children:(0,s.jsx)("span",{className:"badge badge--primary",children:"Number"})})]})})]})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:"<kit>\n    <knockback-reduction>0.5</knockback-reduction>\n</kit>\n"})}),"\n",(0,s.jsx)(t.h3,{id:"shield-kit-removable",children:"Shield Kit (removable)"}),"\n",(0,s.jsx)(t.p,{children:"The shield kit gives the player a shield consisting of absorption hearts that recharge after a set period of time.\nRecharging of the shield is based on when damage was taken last, every time a player is damaged it resets the recharge timer."}),"\n",(0,s.jsx)("div",{className:"table-container",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Element"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"<shield/>"})}),(0,s.jsx)(t.td,{children:"Give the player a rechargable shield of absorption hearts."})]})})]})}),"\n",(0,s.jsx)(t.h5,{id:"shield-kit-attributes",children:"Shield Kit Attributes"}),"\n",(0,s.jsx)("div",{className:"table-container",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Value"}),(0,s.jsx)(t.th,{children:"Default"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"health"})}),(0,s.jsx)(t.td,{children:"Amount of extra absorption hearts to give to the player."}),(0,s.jsx)(t.td,{children:(0,s.jsx)("span",{className:"badge badge--primary",children:"Decimal"})}),(0,s.jsx)(t.td,{children:"4"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"delay"})}),(0,s.jsx)(t.td,{children:"Time to wait after a player is last damaged to recharge the shield."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/reference/misc/time-periods",children:"Time Period"})}),(0,s.jsx)(t.td,{children:"4s"})]})]})]})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:'<kit>\n    <shield health="4" delay="8s"/>\n</kit>\n'})}),"\n",(0,s.jsx)(t.h3,{id:"double-jump-kit-removable",children:"Double Jump Kit (removable)"}),"\n",(0,s.jsx)(t.p,{children:"Give players with this kit the ability to double-jump.\nThis element's enabled attribute can be used to disable double-jump inside regions, etc."}),"\n",(0,s.jsx)("div",{className:"table-container",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Element"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"<double-jump/>"})}),(0,s.jsx)(t.td,{children:"Give a player the ability to double-jump."})]})})]})}),"\n",(0,s.jsx)(t.h5,{id:"double-jump-attributes",children:"Double-Jump Attributes"}),"\n",(0,s.jsx)("div",{className:"table-container",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Value"}),(0,s.jsx)(t.th,{children:"Default"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"enabled"})}),(0,s.jsx)(t.td,{children:"Enable or disable double-jump."}),(0,s.jsx)(t.td,{children:(0,s.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,s.jsx)(t.td,{children:"true"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"power"})}),(0,s.jsxs)(t.td,{children:["Power of the double jump.",(0,s.jsx)("br",{}),(0,s.jsx)(t.em,{children:"A normal player jump is 1.25 blocks."})]}),(0,s.jsx)(t.td,{children:(0,s.jsx)("span",{className:"badge badge--primary",children:"Number"})}),(0,s.jsx)(t.td,{children:"3"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"recharge-time"})}),(0,s.jsx)(t.td,{children:"Recharge time until the player can double jump again."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/reference/misc/time-periods",children:"Time Period"})}),(0,s.jsx)(t.td,{children:"2.5s"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"recharge-before-landing"})}),(0,s.jsx)(t.td,{children:"Player starts recharging before they land from their previous jump."}),(0,s.jsx)(t.td,{children:(0,s.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,s.jsx)(t.td,{children:"false"})]})]})]})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:'<kit>\n    <double-jump recharge-before-landing="true"/>\n</kit>\n'})}),"\n",(0,s.jsx)(t.h3,{id:"fly-kit-removable",children:"Fly Kit (removable)"}),"\n",(0,s.jsxs)(t.p,{children:["The fly kit gives players which it is applied to the ability to fly.\nIt also allows modification of the speed at which they fly.\nIf no attributes are specified, ",(0,s.jsx)(t.code,{children:"can-fly"})," defaults to true."]}),"\n",(0,s.jsx)("div",{className:"table-container",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Element"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"<fly/>"})}),(0,s.jsx)(t.td,{children:"Control the player's flying ability."})]})})]})}),"\n",(0,s.jsx)(t.h5,{id:"fly-kit-attributes",children:"Fly Kit Attributes"}),"\n",(0,s.jsx)("div",{className:"table-container",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Value"}),(0,s.jsx)(t.th,{children:"Default"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"can-fly"})}),(0,s.jsx)(t.td,{children:"Set if the player can fly."}),(0,s.jsx)(t.td,{children:(0,s.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,s.jsx)(t.td,{children:"true"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"flying"})}),(0,s.jsxs)(t.td,{children:["Set if the player is currently flying.",(0,s.jsx)("br",{}),(0,s.jsxs)(t.em,{children:["To enable flying, ",(0,s.jsx)(t.code,{children:"can-fly"})," cannot be set to false."]})]}),(0,s.jsx)(t.td,{children:(0,s.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"fly-speed"})}),(0,s.jsx)(t.td,{children:"Set the fly speed multiplier."}),(0,s.jsx)(t.td,{children:(0,s.jsx)("span",{className:"badge badge--primary",children:"0 - 10"})}),(0,s.jsx)(t.td,{children:"1"})]})]})]})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:'<kit id="fly">\n    <fly/> \x3c!-- Allow player to fly --\x3e\n    <fly can-fly="false"/> \x3c!-- Do not allow player to fly --\x3e\n    <fly flying="true"/> \x3c!-- Make the player fly right away --\x3e\n    <fly flying="false"/> \x3c!-- Make the player stop flying right away --\x3e\n</kit>\n'})})]})}function o(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>d,a:()=>n});var s=i(7294);const r={},l=s.createContext(r);function n(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);