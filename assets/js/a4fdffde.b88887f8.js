"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[845],{9427:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>x,frontMatter:()=>d,metadata:()=>l,toc:()=>a});var i=s(5893),r=s(1151);const d={id:"actions-triggers",title:"Actions & Triggers",toc_max_heading_level:4},n=void 0,l={id:"modules/mechanics/actions-triggers",title:"Actions & Triggers",description:"Actions are a set of features that are applied to players, teams, or matches, similiar to Kits.",source:"@site/docs/modules/mechanics/actions-triggers.mdx",sourceDirName:"modules/mechanics",slug:"/modules/mechanics/actions-triggers",permalink:"/docs/modules/mechanics/actions-triggers",draft:!1,unlisted:!1,editUrl:"https://github.com/PGMDev/Website/tree/master/docs/modules/mechanics/actions-triggers.mdx",tags:[],version:"current",lastUpdatedAt:1724740491e3,frontMatter:{id:"actions-triggers",title:"Actions & Triggers",toc_max_heading_level:4},sidebar:"docs",previous:{title:"Regions",permalink:"/docs/modules/mechanics/regions"},next:{title:"Variables",permalink:"/docs/modules/mechanics/variables"}},c={},a=[{value:"Action Elements",id:"action-elements",level:2},{value:"Action Attributes",id:"action-attributes",level:3},{value:"Switch-Scope Attributes",id:"switch-scope-attributes",level:3},{value:"Message Attributes",id:"message-attributes",level:3},{value:"Replacements",id:"replacements",level:4},{value:"Decimal Attributes",id:"decimal-attributes",level:5},{value:"Sound Attributes",id:"sound-attributes",level:3},{value:"Set Attributes",id:"set-attributes",level:3},{value:"Kill-Entities Attributes",id:"kill-entities-attributes",level:3},{value:"Fill Attributes",id:"fill-attributes",level:3},{value:"Paste-Structure Attributes",id:"paste-structure-attributes",level:3},{value:"Replace Item",id:"replace-item",level:3},{value:"Sub-elements",id:"sub-elements",level:4},{value:"Attributes",id:"attributes",level:4},{value:"Take-Payment",id:"take-payment",level:3},{value:"Sub-elements",id:"sub-elements-1",level:4},{value:"Attributes",id:"attributes-1",level:4},{value:"Velocity &amp; Teleport Attributes",id:"velocity--teleport-attributes",level:3},{value:"Trigger Element",id:"trigger-element",level:2},{value:"Trigger Attributes",id:"trigger-attributes",level:3},{value:"Examples",id:"examples",level:2},{value:"Enabling Blitz Mode",id:"enabling-blitz-mode",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Actions are a set of features that are applied to players, teams, or matches, similiar to ",(0,i.jsx)(t.a,{href:"/docs/modules/gear/kits",children:"Kits"}),".\nMultiple actions can be started by one trigger."]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"In the future, some features that are currently used in Kits may be transferred to be used as an Action instead."})}),"\n",(0,i.jsx)(t.h2,{id:"action-elements",children:"Action Elements"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Element"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"<action> </action>"})}),(0,i.jsx)(t.td,{children:"A group of actions running in a sequence."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"<switch-scope> </switch-scope>"})}),(0,i.jsx)(t.td,{children:"Changes the scope that an action applies to."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"<message/>"})}),(0,i.jsx)(t.td,{children:"A message that is sent to the player."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"<sound/>"})}),(0,i.jsx)(t.td,{children:"A sound that is played for the player."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"<set/>"})}),(0,i.jsxs)(t.td,{children:["Sets a new value for a ",(0,i.jsx)(t.a,{href:"/docs/modules/mechanics/variables",children:"Variable"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"<kill-entities/>"})}),(0,i.jsx)(t.td,{children:"Removes entities based on a filter."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"<kit/>"})}),(0,i.jsxs)(t.td,{children:["Applies a ",(0,i.jsx)(t.a,{href:"/docs/modules/gear/kits",children:"Kit"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"<fill/>"})}),(0,i.jsx)(t.td,{children:"Places blocks in a block-bounded region."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"<paste-structure/>"})}),(0,i.jsx)(t.td,{children:"Places a structure at a specified location when triggered."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"<replace-item> </replace-item>"})}),(0,i.jsx)(t.td,{children:"Finds and replaces certain items."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"<take-payment> </take-payment>"})}),(0,i.jsx)(t.td,{children:"Allow players to pay with items in their inventory to trigger an action."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"<velocity/>"})}),(0,i.jsx)(t.td,{children:"A player-scoped kit that applies velocity to the player."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"<teleport/>"})}),(0,i.jsx)(t.td,{children:"Teleport a player to a specific location."})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"action-attributes",children:"Action Attributes"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Attribute"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Value"}),(0,i.jsx)(t.th,{children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"id"})}),(0,i.jsx)(t.td,{children:"Unique identifier used to reference this action from other places in the XML."}),(0,i.jsx)(t.td,{children:(0,i.jsx)("span",{className:"badge badge--primary",children:"String"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"scope"})}),(0,i.jsx)(t.td,{children:"Sets the scope target an action should operate against."}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"player"}),", ",(0,i.jsx)(t.code,{children:"team"}),", or ",(0,i.jsx)(t.code,{children:"match"})]}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"filter"})}),(0,i.jsx)(t.td,{children:"A filter that is tested before running actions inside."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/modules/mechanics/filters",children:"Filter"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"expose"})}),(0,i.jsxs)(t.td,{children:["Allows an action to be triggered by ",(0,i.jsx)(t.code,{children:"/action"}),".",(0,i.jsx)("br",{}),(0,i.jsxs)(t.em,{children:["Actions must have an ID and support the match scope for expose to work. Moderators require the ",(0,i.jsx)(t.code,{children:"GAMEPLAY"})," permission to use the action command."]})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,i.jsx)(t.td,{children:"false"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"switch-scope-attributes",children:"Switch-Scope Attributes"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Attribute"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Value"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"id"})}),(0,i.jsx)(t.td,{children:"Unique identifier used to reference this switch-scope from other places in the XML."}),(0,i.jsx)(t.td,{children:(0,i.jsx)("span",{className:"badge badge--primary",children:"String"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"inner"})}),(0,i.jsx)(t.td,{children:"Specify the scope of the inner action."}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"player"}),", ",(0,i.jsx)(t.code,{children:"team"}),", or ",(0,i.jsx)(t.code,{children:"match"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"outer"})}),(0,i.jsxs)(t.td,{children:["Specify the scope outside of an action.",(0,i.jsx)("br",{}),(0,i.jsx)(t.em,{children:"In some cases, this can be omitted as PGM will automatically infer the outer scope."})]}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"player"}),", ",(0,i.jsx)(t.code,{children:"team"}),", or ",(0,i.jsx)(t.code,{children:"match"})]})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"message-attributes",children:"Message Attributes"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Attribute"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Value"}),(0,i.jsx)(t.th,{children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"text"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element.",children:"Property"}),"The text that will be sent in the chat to a player."]}),(0,i.jsx)(t.td,{children:(0,i.jsx)("span",{className:"badge badge--primary",children:"Formatted Text"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"actionbar"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element.",children:"Property"}),"The text above the hotbar."]}),(0,i.jsx)(t.td,{children:(0,i.jsx)("span",{className:"badge badge--primary",children:"Formatted Text"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"title"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element.",children:"Property"}),"The title text that will appear in the center of the player's screen."]}),(0,i.jsx)(t.td,{children:(0,i.jsx)("span",{className:"badge badge--primary",children:"Formatted Text"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"subtitle"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element.",children:"Property"}),"The subtitle text that will appear below the title text."]}),(0,i.jsx)(t.td,{children:(0,i.jsx)("span",{className:"badge badge--primary",children:"Formatted Text"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"fade-in"})}),(0,i.jsx)(t.td,{children:"How long the title and subtitle text will fade in."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/reference/misc/time-periods",children:"Time Period"})}),(0,i.jsx)(t.td,{children:"0.5s"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"stay"})}),(0,i.jsx)(t.td,{children:"How long the title and subtitle text will display for."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/reference/misc/time-periods",children:"Time Period"})}),(0,i.jsx)(t.td,{children:"3.5s"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"fade-out"})}),(0,i.jsx)(t.td,{children:"How long the title and subtitle text will fade out."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/reference/misc/time-periods",children:"Time Period"})}),(0,i.jsx)(t.td,{children:"1s"})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"replacements",children:"Replacements"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Element"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Value"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"<replacements>"})}),(0,i.jsxs)(t.td,{children:["A list of replacements.",(0,i.jsx)("br",{}),(0,i.jsx)(t.strong,{children:"Note:"})," In the future, more replacements such as player names will be supported."]}),(0,i.jsx)(t.td,{children:(0,i.jsx)("span",{className:"badge badge--secondary",children:"Replacements Sub-elements"})})]})})]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Sub-element"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"<decimal/>"})}),(0,i.jsx)(t.td,{children:"A numerical placeholder."})]})})]}),"\n",(0,i.jsx)(t.h5,{id:"decimal-attributes",children:"Decimal Attributes"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Attribute"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Value"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"id"})}),(0,i.jsx)(t.td,{children:"Unique identifier used to reference this decimal from other places in the XML."}),(0,i.jsx)(t.td,{children:(0,i.jsx)("span",{className:"badge badge--primary",children:"String"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"value"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)("span",{className:"badge badge--danger",children:"Required"}),"The variable this decimal should evaluate. It can be used with formulas."]}),(0,i.jsx)(t.td,{children:(0,i.jsx)("span",{className:"badge badge--primary",children:"Expression"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"format"})}),(0,i.jsxs)(t.td,{children:["Customize how the decimal should be displayed, e.g. ",(0,i.jsx)(t.code,{children:"#.00"}),"."]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://docs.oracle.com/javase/8/docs/api/java/text/DecimalFormat.html",children:"Java DecimalFormat pattern"})})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"sound-attributes",children:"Sound Attributes"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Attribute"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Value"}),(0,i.jsx)(t.th,{children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"preset"})}),(0,i.jsx)(t.td,{children:"Allows you to reuse a pre-existing sound with predefined volume and pitch."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/reference/misc/sounds",children:"Sounds Preset"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"CUSTOM"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"key"})}),(0,i.jsx)(t.td,{children:"The sound type that will be played for a player."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/reference/misc/sounds#sound-keys",children:"Sound Keys"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"volume"})}),(0,i.jsx)(t.td,{children:"How loud or quiet a sound should be."}),(0,i.jsx)(t.td,{children:(0,i.jsx)("span",{className:"badge badge--primary",children:"Decimal"})}),(0,i.jsx)(t.td,{children:"1.0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"pitch"})}),(0,i.jsx)(t.td,{children:"The tone of the sound."}),(0,i.jsx)(t.td,{children:(0,i.jsx)("span",{className:"badge badge--primary",children:"Decimal"})}),(0,i.jsx)(t.td,{children:"1.0"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"set-attributes",children:"Set Attributes"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Attribute"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Value"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"var"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)("span",{className:"badge badge--danger",children:"Required"}),"The variable to update."]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/modules/mechanics/variables",children:"Variable"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"index"})}),(0,i.jsxs)(t.td,{children:["If setting an array-type variable, the expression to be evaluated.",(0,i.jsx)("br",{}),(0,i.jsx)(t.em,{children:"Required when using array-type variables."})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)("span",{className:"badge badge--primary",children:"Expression"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"value"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)("span",{className:"badge badge--danger",children:"Required"}),"Sets a new value for the variable."]}),(0,i.jsx)(t.td,{children:(0,i.jsx)("span",{className:"badge badge--primary",children:"Expression"})})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"kill-entities-attributes",children:"Kill-Entities Attributes"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Attribute"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Value"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"filter"})}),(0,i.jsx)(t.td,{children:"Filters which entities to remove."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/modules/mechanics/filters",children:"Filter"})})]})})]}),"\n",(0,i.jsx)(t.h3,{id:"fill-attributes",children:"Fill Attributes"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Attribute"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Value"}),(0,i.jsx)(t.th,{children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"region"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element.",children:"Property"}),(0,i.jsx)("span",{className:"badge badge--danger",children:"Required"}),"The region to fill in. Multiple regions will be treated as an union."]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/modules/mechanics/regions",children:"Region"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"material"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)("span",{className:"badge badge--danger",children:"Required"}),"The filling material."]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/reference/items/inventory#material-matchers",children:"Single Material Pattern"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"filter"})}),(0,i.jsxs)(t.td,{children:["Filters which blocks get affected. ",(0,i.jsx)(t.em,{children:"May impact performance for large fills."})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/modules/mechanics/filters",children:"Filter"})}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"events"})}),(0,i.jsxs)(t.td,{children:["Calls events for block placements and removals, which will make it affected by other filters and PGM features. ",(0,i.jsx)(t.em,{children:"May impact performance for large fills."})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,i.jsx)(t.td,{children:"false"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"paste-structure-attributes",children:"Paste-Structure Attributes"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Attribute"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Value"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"x"})}),(0,i.jsx)(t.td,{children:"The X coordinate of the location to paste the structure, measured in east-west."}),(0,i.jsx)(t.td,{children:(0,i.jsx)("span",{className:"badge badge--primary",children:"Expression"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"y"})}),(0,i.jsx)(t.td,{children:"The Y coordinate of the location to paste the structure, measured in altitude."}),(0,i.jsx)(t.td,{children:(0,i.jsx)("span",{className:"badge badge--primary",children:"Expression"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"z"})}),(0,i.jsx)(t.td,{children:"The Z coordinate of the location to paste the structure, measured in north-south."}),(0,i.jsx)(t.td,{children:(0,i.jsx)("span",{className:"badge badge--primary",children:"Expression"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"structure"})}),(0,i.jsx)(t.td,{children:"The structure to paste."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/modules/blocks/structures",children:"Structure ID"})})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"replace-item",children:"Replace Item"}),"\n",(0,i.jsx)(t.h4,{id:"sub-elements",children:"Sub-elements"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Sub-elements"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Value"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"<find/>"})}),(0,i.jsx)(t.td,{children:"The item to find in a player's inventory."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/modules/gear/items#item-attributes",children:"Item Attributes"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"<replace/>"})}),(0,i.jsx)(t.td,{children:"The new item to replace with."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/modules/gear/items#item-attributes",children:"Item Attributes"})})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"attributes",children:"Attributes"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Attribute"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Value"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"keep-amount"})}),(0,i.jsx)(t.td,{children:"Player recives the same amount of the new item as they had of the old item."}),(0,i.jsx)(t.td,{children:(0,i.jsx)("span",{className:"badge badge--primary",children:"true/false"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"keep-enchants"})}),(0,i.jsx)(t.td,{children:"Enchantments on the old item will be applied to the new item."}),(0,i.jsx)(t.td,{children:(0,i.jsx)("span",{className:"badge badge--primary",children:"true/false"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"ignore-metadata"})}),(0,i.jsx)(t.td,{children:"Filters which entities to remove."}),(0,i.jsx)(t.td,{children:(0,i.jsx)("span",{className:"badge badge--primary",children:"true/false"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"amount"})}),(0,i.jsx)(t.td,{children:"Match for item stacks that have a certain amount of items in a range."}),(0,i.jsx)(t.td,{children:(0,i.jsx)("span",{className:"badge badge--primary",children:"Range"})})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"take-payment",children:"Take-Payment"}),"\n",(0,i.jsx)(t.h4,{id:"sub-elements-1",children:"Sub-elements"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Sub-elements"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Value"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"<payment/>"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element.",children:"Property"}),(0,i.jsx)("span",{className:"badge badge--danger",children:"Required"}),"An individual payment."]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/modules/gear/items#item-attributes",children:"Item Attributes"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"<success-action/>"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element.",children:"Property"}),"The action to trigger upon a successful payment."]}),(0,i.jsx)(t.td,{children:(0,i.jsx)("span",{className:"badge badge--primary",children:"Action"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"<fail-action/>"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element.",children:"Property"}),"The action to trigger upon a failed payment."]}),(0,i.jsx)(t.td,{children:(0,i.jsx)("span",{className:"badge badge--primary",children:"Action"})})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"attributes-1",children:"Attributes"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Attribute"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Value"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"material"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)("span",{className:"badge badge--danger",children:"Required"}),"The item to display as an icon."]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/reference/items/inventory#material-matchers",children:"Material Name"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"price"})}),(0,i.jsx)(t.td,{children:"The amount of a currency needed to purchase."}),(0,i.jsx)(t.td,{children:(0,i.jsx)("span",{className:"badge badge--primary",children:"Number"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"currency"})}),(0,i.jsx)(t.td,{children:"The currency needed to purchase."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/modules/mechanics/filters",children:"Filter"})})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"velocity--teleport-attributes",children:"Velocity & Teleport Attributes"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Attribute"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Value"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"x"})}),(0,i.jsx)(t.td,{children:"The X coordinate, measured in east-west."}),(0,i.jsx)(t.td,{children:(0,i.jsx)("span",{className:"badge badge--primary",children:"Expression"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"y"})}),(0,i.jsx)(t.td,{children:"The Y coordinate, measured in altitude."}),(0,i.jsx)(t.td,{children:(0,i.jsx)("span",{className:"badge badge--primary",children:"Expression"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"z"})}),(0,i.jsx)(t.td,{children:"The Z coordinate, measured in north-south."}),(0,i.jsx)(t.td,{children:(0,i.jsx)("span",{className:"badge badge--primary",children:"Expression"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"yaw"})}),(0,i.jsx)(t.td,{children:"The horizontal angle a user looks to."}),(0,i.jsx)(t.td,{children:(0,i.jsx)("span",{className:"badge badge--primary",children:"Expression"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"pitch"})}),(0,i.jsx)(t.td,{children:"The vertical angle a user looks to."}),(0,i.jsx)(t.td,{children:(0,i.jsx)("span",{className:"badge badge--primary",children:"Expression"})})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"trigger-element",children:"Trigger Element"}),"\n",(0,i.jsx)(t.p,{children:"The trigger element waits for a dynamic filter to activate it, and afterwards it will trigger an action."}),"\n",(0,i.jsx)(t.h3,{id:"trigger-attributes",children:"Trigger Attributes"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Attribute"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Value"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"filter"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element.",children:"Property"}),"A dynamic filter that activates the trigger."]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/docs/modules/mechanics/filters#dynamic-filters",children:"Dynamic Filter"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"action"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element.",children:"Property"}),"Sets the action to run when the filter allows."]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"#action-elements",children:"Action"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"scope"})}),(0,i.jsx)(t.td,{children:"Specify the scope for which to test the filter."}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"player"}),", ",(0,i.jsx)(t.code,{children:"team"}),", or ",(0,i.jsx)(t.code,{children:"match"})]})]})]})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"Example"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:'<kits>\n    <kit id="spawn">\n        <item slot="0" unbreakable="true" material="stone sword"/>\n        <action>\n            <message text="You were given a kit!"/>\n        </action>\n    </kit>\n</kits>\n<actions>\n    <action id="do-stuff" scope="player">\n        \x3c!-- Gives the player who activated the trigger a diamond --\x3e\n        <message text="You\'ve been given a diamond!"/>\n        <kit>\n            <item material="diamond"/>\n        </kit>\n        \x3c!-- Sends a message to the player\'s team --\x3e\n        <switch-scope outer="player" inner="team">\n            <message text="Your team has been given the spawn kit!"/>\n            \x3c!-- Gives each player in the team a kit (Kits are applied per player) --\x3e\n            <switch-scope outer="team" inner="player">\n                <kit id="spawn"/>\n            </switch-scope>\n        </switch-scope>\n    </action>\n    <trigger filter="some-dynamic-filter" action="do-stuff" scope="player"/>\n    <message id="standalone-text" text="This is a standalone text trigger"/>\n    <trigger filter="another-dynamic-filter" action="standalone-text" scope="player"/>\n</actions>\n'})}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.h3,{id:"enabling-blitz-mode",children:"Enabling Blitz Mode"}),"\n",(0,i.jsxs)(t.p,{children:["This example uses the ",(0,i.jsx)(t.code,{children:"expose"}),' attribute in Action to allow moderators to enable\na "Blitz Mode" using the ',(0,i.jsx)(t.code,{children:"/action"})," command. Moderators must have the ",(0,i.jsx)(t.code,{children:"GAMEPLAY"})," permissions\nin order to use ",(0,i.jsx)(t.code,{children:"/action"}),". See ",(0,i.jsx)(t.a,{href:"/docs/commands/main",children:"Commands"})," for more details."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:'<actions>\n    \x3c!-- Moderator uses "/action trigger start-blitz" to start this Action --\x3e\n    <action id="start-blitz" expose="true" scope="match">\n        \x3c!-- Sends notification to chat --\x3e\n        <message text="Blitz mode has been enabled!"/>\n        \x3c!-- Sets blitz_enabled to 1 --\x3e\n        <set var="blitz_enabled" value="1"/>\n    </action>\n\n    \x3c!-- Moderator uses "/action trigger end-blitz" to start this Action --\x3e\n    <action id="end-blitz" expose="true" scope="match">\n        <message text="Blitz mode has been disabled!"/>\n        <set var="blitz_enabled" value="0"/>\n    </action>\n</actions>\n\x3c!-- Creates the blitz_enabled variable --\x3e\n<variables>\n    <variable id="blitz_enabled" scope="match"/>\n</variables>\n<blitz>\n  \x3c!-- Matches for a condition where a player loses a life --\x3e\n  <filter>\n      \x3c!-- If a player dies when blitz_enabled is 1, they lose a life --\x3e\n      <variable var="blitz_enabled">1</variable>\n  </filter>\n</blitz>\n'})})]})}function x(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>n});var i=s(7294);const r={},d=i.createContext(r);function n(e){const t=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),i.createElement(d.Provider,{value:t},e.children)}}}]);