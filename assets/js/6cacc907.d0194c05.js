"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[389],{3636:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var i=n(5893),r=n(1151);const t={id:"crafting",title:"Crafting Recipes"},d=void 0,l={id:"modules/gear/crafting",title:"Crafting Recipes",description:"The crafting module allows custom shaped and shapeless crafting recipes and smelting products.",source:"@site/docs/modules/gear/crafting.mdx",sourceDirName:"modules/gear",slug:"/modules/gear/crafting",permalink:"/docs/modules/gear/crafting",draft:!1,unlisted:!1,editUrl:"https://github.com/PGMDev/Website/tree/master/docs/modules/gear/crafting.mdx",tags:[],version:"current",lastUpdatedAt:1724740491e3,frontMatter:{id:"crafting",title:"Crafting Recipes"},sidebar:"docs",previous:{title:"Item Mods",permalink:"/docs/modules/gear/item-mods"},next:{title:"Repair, Remove, & Keep",permalink:"/docs/modules/gear/repair-remove-keep"}},c={},a=[{value:"Crafting Element",id:"crafting-element",level:4},{value:"Recipe Attributes",id:"recipe-attributes",level:5},{value:"Recipe Sub-elements",id:"recipe-sub-elements",level:5},{value:"Shaped Recipes",id:"shaped-recipes",level:2},{value:"Shape Sub-elements",id:"shape-sub-elements",level:5},{value:"Shaped Ingredient Attributes",id:"shaped-ingredient-attributes",level:5},{value:"Examples",id:"examples",level:3},{value:"Shapeless Recipes",id:"shapeless-recipes",level:2},{value:"Shapeless Ingredient attributes",id:"shapeless-ingredient-attributes",level:4},{value:"Examples",id:"examples-1",level:3},{value:"Smelt Recipes",id:"smelt-recipes",level:2},{value:"Examples",id:"examples-2",level:3}];function h(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"The crafting module allows custom shaped and shapeless crafting recipes and smelting products.\nVanilla recipes for a specific material can also be disabled to prevent crafting of that material except with the new recipe."}),"\n",(0,i.jsx)(s.h4,{id:"crafting-element",children:"Crafting Element"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Element"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"<crafting> </crafting>"})}),(0,i.jsx)(s.td,{children:"Node containing the custom crafting recipes."})]})})]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Sub-elements"}),(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{children:"Value/Children"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"<shaped>"})}),(0,i.jsx)(s.td,{children:"A shaped crafting recipe node."}),(0,i.jsx)(s.td,{children:(0,i.jsx)("span",{className:"badge badge--secondary",children:"Shaped Recipe Sub-elements"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"<shapeless>"})}),(0,i.jsx)(s.td,{children:"A custom shapeless recipe node."}),(0,i.jsx)(s.td,{children:(0,i.jsx)("span",{className:"badge badge--secondary",children:"Shapeless Recipe Sub-elements"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"<smelt>"})}),(0,i.jsx)(s.td,{children:"A custom smelting recipe."}),(0,i.jsx)(s.td,{children:(0,i.jsx)("span",{className:"badge badge--secondary",children:"Smelt Recipe Sub-elements"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"<disable>"})}),(0,i.jsx)(s.td,{children:"Disable all vanilla recipes for this item."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/docs/reference/items/inventory#material-matchers",children:"Single Material Pattern"})})]})]})]}),"\n",(0,i.jsx)(s.h5,{id:"recipe-attributes",children:"Recipe Attributes"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Attribute"}),(0,i.jsx)(s.th,{children:"Description"}),(0,i.jsx)(s.th,{children:"Value"}),(0,i.jsx)(s.th,{children:"Default"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"override"})}),(0,i.jsxs)(s.td,{children:["Disable all vanilla recipes for the same item. This is a convenient alternative to the ",(0,i.jsx)(s.code,{children:"<disable>"})," element."]}),(0,i.jsx)(s.td,{children:(0,i.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,i.jsx)(s.td,{children:"false"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"override-all"})}),(0,i.jsx)(s.td,{children:"Override all vanilla recipes resulting in this material."}),(0,i.jsx)(s.td,{children:(0,i.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,i.jsx)(s.td,{children:"false"})]})]})]}),"\n",(0,i.jsx)(s.h5,{id:"recipe-sub-elements",children:"Recipe Sub-elements"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Element"}),(0,i.jsx)(s.th,{children:"Description"}),(0,i.jsx)(s.th,{children:"Value"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"<result>"})}),(0,i.jsxs)(s.td,{children:[(0,i.jsx)("span",{className:"badge badge--danger",children:"Required"}),(0,i.jsx)("span",{className:"badge badge--warning",title:"Only one of this child permitted per parent",children:"Unique"}),"The result of this recipe, only one result is allowed per recipe.",(0,i.jsx)("br",{}),(0,i.jsx)(s.em,{children:"Accepts all attributes and sub-elements of a normal kit item."})]}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/docs/modules/gear/items",children:"Item"})})]})})]}),"\n",(0,i.jsx)(s.h2,{id:"shaped-recipes",children:"Shaped Recipes"}),"\n",(0,i.jsx)(s.p,{children:"Shaped recipes require that their items are arranged in a specific location on the crafting grid."}),"\n",(0,i.jsxs)(s.p,{children:["The crafting grid is represented inside ",(0,i.jsx)(s.code,{children:"<shape>"})," using ",(0,i.jsx)(s.code,{children:"<row>"})," elements.\nA ",(0,i.jsx)(s.code,{children:"<row>"})," element contains a string with up to 3 symbols specifying the ingredient at that spot in the grid.\nAn ingredients symbol is defined in the ",(0,i.jsx)(s.code,{children:'<ingredient symbol="">'})," attribute."]}),"\n",(0,i.jsxs)(s.p,{children:["A shaped recipe does not need to specify all 3 rows of a crafting grid, only one row is required.\nAll columns in a shaped recipe need to be the same width.\nBlank ingredient spots are specifed with a dot ",(0,i.jsx)(s.code,{children:"."})]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Element"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"<shaped> </shaped>"})}),(0,i.jsx)(s.td,{children:"A shaped crafting recipe node."})]})})]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Sub-elements"}),(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{children:"Value/Children"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"<shape>"})}),(0,i.jsxs)(s.td,{children:[(0,i.jsx)("span",{className:"badge badge--danger",children:"Required"}),(0,i.jsx)("span",{className:"badge badge--warning",title:"Only one of this child permitted per parent",children:"Unique"}),"An ingredient used in this recipe.",(0,i.jsx)("br",{}),(0,i.jsx)(s.em,{children:"Only one shape per recipe is allowed."})]}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"<row>"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.code,{children:"<ingredient>"}),"|",(0,i.jsx)(s.code,{children:"<i>"})]}),(0,i.jsxs)(s.td,{children:[(0,i.jsx)("span",{className:"badge badge--danger",children:"Required"})," An ingredient used in this recipe.",(0,i.jsx)("br",{}),(0,i.jsx)(s.em,{children:"A shaped recipe requires at least one ingredient."})]}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/docs/reference/items/inventory#material-matchers",children:"Single Material Pattern"})})]})]})]}),"\n",(0,i.jsx)(s.h5,{id:"shape-sub-elements",children:"Shape Sub-elements"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Element"}),(0,i.jsx)(s.th,{children:"Description"}),(0,i.jsx)(s.th,{children:"Value"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"<row>"})}),(0,i.jsx)(s.td,{children:"A row in the recipe crafting shape."}),(0,i.jsx)(s.td,{children:(0,i.jsx)("span",{className:"badge badge--secondary",children:"Row String"})})]})})]}),"\n",(0,i.jsx)(s.h5,{id:"shaped-ingredient-attributes",children:"Shaped Ingredient Attributes"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Attribute"}),(0,i.jsx)(s.th,{children:"Description"}),(0,i.jsx)(s.th,{children:"Value"}),(0,i.jsx)(s.th,{children:"Default"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"symbol"})}),(0,i.jsxs)(s.td,{children:[(0,i.jsx)("span",{className:"badge badge--danger",children:"Required"}),"The symbol used to specify this ingredients grid location in the recipe."]}),(0,i.jsx)(s.td,{children:(0,i.jsx)("span",{className:"badge badge--primary",children:"Single Character"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"A-Z 0-9"})})]})})]}),"\n",(0,i.jsx)(s.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-xml",children:'<crafting>\n    \x3c!-- Add custom shaped recipe and disable vanilla recipes for the same item. --\x3e\n    <shaped override="true">\n        <result material="stone pickaxe">\n            <enchantment level="2">durability</enchantment>\n        </result>\n        <shape>\n            <row>FFF</row>\n            <row>.S.</row>\n            <row>.S.</row>\n        </shape>\n        <ingredient symbol="F">flint</ingredient >\n        <ingredient symbol="S">stick</i>\n    </shaped>\n\n    \x3c!-- 3x1 recipe, cheaper gold ingots --\x3e\n    <shaped override="true">\n        <result material="gold ingot"/>\n        <shape>\n            <row>GGG</row>\n        </shape>\n        <ingredient symbol="G">gold nugget</ingredient >\n    </shaped>\n</crafting>\n'})}),"\n",(0,i.jsx)(s.h2,{id:"shapeless-recipes",children:"Shapeless Recipes"}),"\n",(0,i.jsx)(s.p,{children:"Unlike a shaped recipe, shapeless recipes do not require that their items are arranged in any specific way in the crafting grid."}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Element"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"<shapeless> </shapeless>"})}),(0,i.jsx)(s.td,{children:"A custom shapeless recipe node."})]})})]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Sub-elements"}),(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{children:"Value/Children"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.code,{children:"<ingredient>"}),"|",(0,i.jsx)(s.code,{children:"<i>"})]}),(0,i.jsxs)(s.td,{children:[(0,i.jsx)("span",{className:"badge badge--danger",children:"Required"}),"An ingredient used in this recipe.",(0,i.jsx)("br",{}),(0,i.jsx)(s.em,{children:"A shapeless recipe requires at least one ingredient."})]}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/docs/reference/items/inventory#material-matchers",children:"Single Material Pattern"})})]})})]}),"\n",(0,i.jsx)(s.h4,{id:"shapeless-ingredient-attributes",children:"Shapeless Ingredient attributes"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Attribute"}),(0,i.jsx)(s.th,{children:"Description"}),(0,i.jsx)(s.th,{children:"Value"}),(0,i.jsx)(s.th,{children:"Default"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"amount"})}),(0,i.jsxs)(s.td,{children:["Amount of items of this type required for this recipe.",(0,i.jsx)("br",{}),(0,i.jsx)(s.em,{children:"Items must be in separate slots, not stacked, for this recipe to work."})]}),(0,i.jsx)(s.td,{children:(0,i.jsx)("span",{className:"badge badge--primary",children:"Number"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"1-9"})})]})})]}),"\n",(0,i.jsx)(s.h3,{id:"examples-1",children:"Examples"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-xml",children:'<crafting>\n    <shapeless>\n        <result material="redstone"/>\n        <ingredient>sugar</ingredient>\n        <ingredient amount="3">ink sack:1</ingredient>\n    </shapeless>\n</crafting>\n'})}),"\n",(0,i.jsx)(s.h2,{id:"smelt-recipes",children:"Smelt Recipes"}),"\n",(0,i.jsx)(s.p,{children:"Smelt recipes specify what a material gets smelted into in a furnace."}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Element"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"<smelt> </smelt>"})}),(0,i.jsx)(s.td,{children:"A custom smelting recipe."})]})})]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Sub-elements"}),(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{children:"Value/Children"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.code,{children:"<ingredient>"}),"|",(0,i.jsx)(s.code,{children:"<i>"})]}),(0,i.jsxs)(s.td,{children:[(0,i.jsx)("span",{className:"badge badge--danger",children:"Required"}),(0,i.jsx)("span",{className:"badge badge--warning",title:"Only one of this child permitted per parent",children:"Unique"}),"An ingredient used in this recipe.",(0,i.jsx)("br",{}),(0,i.jsx)(s.em,{children:"A smelt recipe only accepts one ingredient."})]}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"/docs/reference/items/inventory#material-matchers",children:"Single Material Pattern"})})]})})]}),"\n",(0,i.jsx)(s.h3,{id:"examples-2",children:"Examples"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-xml",children:'<crafting>\n    <smelt>\n        <result amount="16" material="torch"/>\n        <ingredient>stick</ingredient>\n    </smelt>\n</crafting>\n'})})]})}function x(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>d});var i=n(7294);const r={},t=i.createContext(r);function d(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);