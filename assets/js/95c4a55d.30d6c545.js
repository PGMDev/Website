"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9751],{7938:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>o,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var d=s(5893),n=s(1151);const i={id:"item-mods",title:"Item Mods"},r=void 0,l={id:"modules/gear/item-mods",title:"Item Mods",description:"The item mods module allows modification of all items present on a map or created during the match.",source:"@site/docs/modules/gear/item-mods.mdx",sourceDirName:"modules/gear",slug:"/modules/gear/item-mods",permalink:"/docs/modules/gear/item-mods",draft:!1,unlisted:!1,editUrl:"https://github.com/PGMDev/Website/tree/master/docs/modules/gear/item-mods.mdx",tags:[],version:"current",lastUpdatedAt:1724740491e3,frontMatter:{id:"item-mods",title:"Item Mods"},sidebar:"docs",previous:{title:"Shops",permalink:"/docs/modules/gear/shops"},next:{title:"Crafting Recipes",permalink:"/docs/modules/gear/crafting"}},a={},c=[{value:"Item-Mod Element",id:"item-mod-element",level:4},{value:"Rule Sub-Elements",id:"rule-sub-elements",level:4},{value:"Match Sub-Elements",id:"match-sub-elements",level:4},{value:"Examples",id:"examples",level:3},{value:"Item Meta",id:"item-meta",level:2},{value:"Modify Sub-Elements",id:"modify-sub-elements",level:4},{value:"Modify Attributes",id:"modify-attributes",level:4}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.p,{children:"The item mods module allows modification of all items present on a map or created during the match.\nThis can be used, for example, to make all gold swords unbreakable or give all items of a specific type a custom name."}),"\n",(0,d.jsx)(t.h4,{id:"item-mod-element",children:"Item-Mod Element"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Element"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsx)(t.tbody,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"<item-mods> </item-mods>"})}),(0,d.jsx)(t.td,{children:"The item mods node, containing all the individual modification rules."})]})})]}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Sub-elements"}),(0,d.jsx)(t.th,{}),(0,d.jsx)(t.th,{children:"Value/Children"})]})}),(0,d.jsx)(t.tbody,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"<rule> </rule>"})}),(0,d.jsx)(t.td,{children:"A single item modification rule."}),(0,d.jsx)(t.td,{children:(0,d.jsx)("span",{className:"badge badge--secondary",children:"Rule Sub-Elements"})})]})})]}),"\n",(0,d.jsx)(t.h4,{id:"rule-sub-elements",children:"Rule Sub-Elements"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Element"}),(0,d.jsx)(t.th,{children:"Description"}),(0,d.jsx)(t.th,{children:"Value/Children"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"<match> </match>"})}),(0,d.jsxs)(t.td,{children:[(0,d.jsx)("span",{className:"badge badge--danger",children:"Required"}),(0,d.jsx)("span",{className:"badge badge--warning",title:"Only one of this child permitted per parent",children:"Unique"}),"The material or materials to modify."]}),(0,d.jsx)(t.td,{children:(0,d.jsx)("span",{className:"badge badge--secondary",children:"Match Sub-Elements"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"<modify> </modify>"})}),(0,d.jsxs)(t.td,{children:[(0,d.jsx)("span",{className:"badge badge--danger",children:"Required"}),(0,d.jsx)("span",{className:"badge badge--warning",title:"Only one of this child permitted per parent",children:"Unique"}),"The attributes to modify on the specified material(s)."]}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"#item-meta",children:"Item Meta"})})]})]})]}),"\n",(0,d.jsx)(t.h4,{id:"match-sub-elements",children:"Match Sub-Elements"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Element"}),(0,d.jsx)(t.th,{children:"Description"}),(0,d.jsx)(t.th,{children:"Value/Children"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"<material> </material>"})}),(0,d.jsx)(t.td,{children:"An individual material to match."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"/docs/reference/items/inventory#material-matchers",children:"Single Material Pattern"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"<all-materials/>"})}),(0,d.jsx)(t.td,{children:"Match all materials."}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"<all-blocks/>"})}),(0,d.jsx)(t.td,{children:"Match all block type materials."}),(0,d.jsx)(t.td,{})]})]})]}),"\n",(0,d.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-xml",children:'<item-mods>\n    <rule>\n        <match>\n            <material>iron sword</material>\n        </match>\n        <modify unbreakable="true">\n            <enchantment>knockback</enchantment>\n        </modify>\n    </rule>\n</item-mods>\n'})}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-xml",children:'<item-mods>\n    <rule>\n        <match>\n            <material>bow</material>\n        </match>\n        <modify show-enchantments="false" unbreakable="true">\n            <enchantment level="2">infinity</enchantment>\n        </modify>\n    </rule>\n</item-mods>\n'})}),"\n",(0,d.jsx)(t.h2,{id:"item-meta",children:"Item Meta"}),"\n",(0,d.jsxs)(t.p,{children:["The following attributes and sub-elements can be used with the ",(0,d.jsx)(t.code,{children:"<modify>"})," element to modify an item or block.\nWhile these are the same attributes as used in item kits, the modify element does not currently support the projectile or grenade attributes."]}),"\n",(0,d.jsx)(t.h4,{id:"modify-sub-elements",children:"Modify Sub-Elements"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Element"}),(0,d.jsx)(t.th,{children:"Description"}),(0,d.jsx)(t.th,{children:"Value"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"<enchantment> </enchantment>"})}),(0,d.jsx)(t.td,{children:"This item's enchantments."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"/docs/modules/gear/items#enchantments",children:"Enchantments"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"<effect> </effect>"})}),(0,d.jsx)(t.td,{children:"A custom potion effect, only applies for potion items."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"/docs/modules/gear/potions",children:"Potion Effect"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"<attribute> </attribute>"})}),(0,d.jsx)(t.td,{children:"Custom attributes for this item."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"/docs/modules/gear/items#attribute-modifiers",children:"Attribute Modifiers"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"<can-destroy> </can-destroy>"})}),(0,d.jsx)(t.td,{children:"The materials that can be mined with the item."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"/docs/modules/gear/items#can-destroy--can-place-on",children:"Can Destroy"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"<can-place-on> </can-place-on>"})}),(0,d.jsx)(t.td,{children:"The materials that the item can be placed on."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"/docs/modules/gear/items#can-destroy--can-place-on",children:"Can Place On"})})]})]})]}),"\n",(0,d.jsx)(t.h4,{id:"modify-attributes",children:"Modify Attributes"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Attribute"}),(0,d.jsx)(t.th,{children:"Description"}),(0,d.jsx)(t.th,{children:"Value"}),(0,d.jsx)(t.th,{children:"Default"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"name"})}),(0,d.jsx)(t.td,{children:"The item's display name that appears when it is selected."}),(0,d.jsx)(t.td,{children:(0,d.jsx)("span",{className:"badge badge--primary",children:"String"})}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"lore"})}),(0,d.jsx)(t.td,{children:"Custom text that appears when a player hovers over the item in the inventory."}),(0,d.jsx)(t.td,{children:(0,d.jsx)("span",{className:"badge badge--primary",children:"String"})}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"unbreakable"})}),(0,d.jsx)(t.td,{children:"Specify if this item is unbreakable and hides the durability bar in Minecraft."}),(0,d.jsx)(t.td,{children:(0,d.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,d.jsx)(t.td,{children:"false"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"color"})}),(0,d.jsxs)(t.td,{children:["Leather armor color as a hexadecimal color. ",(0,d.jsx)(t.code,{children:"RRGGBB"}),(0,d.jsx)("br",{}),(0,d.jsx)(t.em,{children:"Only applies to leather armor items."})]}),(0,d.jsx)(t.td,{children:(0,d.jsx)("span",{className:"badge badge--primary",children:"Hex Color"})}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"potion"})}),(0,d.jsxs)(t.td,{children:["Potion type.",(0,d.jsx)("br",{}),(0,d.jsx)(t.em,{children:"Only applies to potion items."})]}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"https://minecraft.wiki/w/Potion#Data_values",children:"Potion ID"})}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"show-enchantments"})}),(0,d.jsx)(t.td,{children:"Show enchantments in the item tooltip."}),(0,d.jsx)(t.td,{children:(0,d.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,d.jsx)(t.td,{children:"true"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"show-attributes"})}),(0,d.jsx)(t.td,{children:"Show attribute modifiers in the item tooltip."}),(0,d.jsx)(t.td,{children:(0,d.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,d.jsx)(t.td,{children:"true"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"show-unbreakable"})}),(0,d.jsx)(t.td,{children:"Show the unbreakable property in the item tooltip."}),(0,d.jsx)(t.td,{children:(0,d.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,d.jsx)(t.td,{children:"true"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"show-can-destroy"})}),(0,d.jsx)(t.td,{children:"Show the breakable block list in the item tooltip."}),(0,d.jsx)(t.td,{children:(0,d.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,d.jsx)(t.td,{children:"true"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"show-can-place-on"})}),(0,d.jsx)(t.td,{children:"Show the blocks the item can be placed on in the item tooltip."}),(0,d.jsx)(t.td,{children:(0,d.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,d.jsx)(t.td,{children:"true"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"show-other"})}),(0,d.jsx)(t.td,{children:"Show various other things in the item tooltip."}),(0,d.jsx)(t.td,{children:(0,d.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,d.jsx)(t.td,{children:"true"})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>r});var d=s(7294);const n={},i=d.createContext(n);function r(e){const t=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),d.createElement(i.Provider,{value:t},e.children)}}}]);