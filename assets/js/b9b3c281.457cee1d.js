"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[816],{7830:(e,s,d)=>{d.r(s),d.d(s,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var r=d(5893),t=d(1151);const n={id:"dtm",title:"Destroy the Monument"},i=void 0,l={id:"modules/objectives/dtm",title:"Destroy the Monument",description:"Players have to locate and destroy certain objects from the enemy team, such as an obsidian pillar, etc.",source:"@site/docs/modules/objectives/dtm.mdx",sourceDirName:"modules/objectives",slug:"/modules/objectives/dtm",permalink:"/docs/modules/objectives/dtm",draft:!1,unlisted:!1,editUrl:"https://github.com/PGMDev/Website/tree/master/docs/modules/objectives/dtm.mdx",tags:[],version:"current",lastUpdatedAt:1716777506e3,frontMatter:{id:"dtm",title:"Destroy the Monument"},sidebar:"docs",previous:{title:"Control Points",permalink:"/docs/modules/objectives/control-points"},next:{title:"Destroy the Core",permalink:"/docs/modules/objectives/dtc"}},a={},c=[{value:"Destroyable Attributes",id:"destroyable-attributes",level:5},{value:"Destroyable Sub-elements",id:"destroyable-sub-elements",level:5},{value:"Examples",id:"examples",level:3}];function o(e){const s={a:"a",code:"code",h3:"h3",h5:"h5",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"Players have to locate and destroy certain objects from the enemy team, such as an obsidian pillar, etc.\nTeams win after a specified percentage of the enemy teams destroyables are destroyed.\nTeams can have multiple destroyables and they can be made out of multiple materials."}),"\n",(0,r.jsx)(s.p,{children:"Completion specifies how much of the material(s) inside of the monument region must be removed for it to count as destroyed.\nFor example, if the monument is obsidian and completion is set to 100%, then all the obsidian must be removed in order for the monument to count as destroyed."}),"\n",(0,r.jsxs)("div",{className:"table-container",children:[(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Element"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"<destroyables> </destroyables>"})}),(0,r.jsx)(s.td,{children:"Node containing all the defined destroyables."})]})})]}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Sub-elements"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Value/Children"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"<destroyable> </destroyable>"})}),(0,r.jsx)(s.td,{children:"A single destroyable."}),(0,r.jsx)(s.td,{children:(0,r.jsx)("span",{className:"badge badge--secondary",children:"Destroyable Sub-elements"})})]})})]})]}),"\n",(0,r.jsx)(s.h5,{id:"destroyable-attributes",children:"Destroyable Attributes"}),"\n",(0,r.jsx)("div",{className:"table-container",children:(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Attribute"}),(0,r.jsx)(s.th,{children:"Description"}),(0,r.jsx)(s.th,{children:"Value"}),(0,r.jsx)(s.th,{children:"Default"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"id"})}),(0,r.jsx)(s.td,{children:"Unique identifier used to reference monuments from other places in the XML."}),(0,r.jsx)(s.td,{children:(0,r.jsx)("span",{className:"badge badge--primary",children:"String"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"name"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)("span",{className:"badge badge--danger",children:"Required"}),"The destroyable's name."]}),(0,r.jsx)(s.td,{children:(0,r.jsx)("span",{className:"badge badge--primary",children:"String"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"required"})}),(0,r.jsx)(s.td,{children:"Specify if this objective is required to win the match. Teams completing all of their required objectives will win regardless of score or Blitz configuration."}),(0,r.jsx)(s.td,{children:(0,r.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"region"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element.",children:"Property"}),(0,r.jsx)("span",{className:"badge badge--danger",children:"Required"}),"Region containing the destroyable."]}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/modules/mechanics/regions",children:"Bounded Region"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"materials"})}),(0,r.jsxs)(s.td,{children:["The destroyable's materials, multiple materials are separated with a semicolon ",(0,r.jsx)(s.code,{children:";"}),"."]}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/reference/items/inventory#material-matchers",children:"Material Pattern"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"owner"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)("span",{className:"badge badge--danger",children:"Required"}),"The destroyable's owner."]}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/modules/format/teams",children:"Team ID"})}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"completion"})}),(0,r.jsx)(s.td,{children:"Percentage of the destroyable that needs to be destroyed for a win."}),(0,r.jsx)(s.td,{children:(0,r.jsx)("span",{className:"badge badge--primary",children:"0 - 100"})}),(0,r.jsx)(s.td,{children:"100%"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"modes"})}),(0,r.jsxs)(s.td,{children:["Specify which ",(0,r.jsx)(s.a,{href:"/docs/modules/objectives/monument-modes",children:"monument modes"})," should be used. Multiple modes are separated with a space."]}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/modules/objectives/monument-modes",children:"Mode ID"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)("span",{className:"badge badge--secondary",children:"All modes"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"mode-changes"})}),(0,r.jsxs)(s.td,{children:["Specify if this destroyable uses monument modes.",(0,r.jsx)("br",{}),(0,r.jsx)(s.strong,{children:"Note:"})," Not used in conjunction with ",(0,r.jsx)(s.code,{children:"modes"}),"."]}),(0,r.jsx)(s.td,{children:(0,r.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,r.jsx)(s.td,{children:"false"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"show-progress"})}),(0,r.jsx)(s.td,{children:"Show this destroyable's progress in the scoreboard."}),(0,r.jsx)(s.td,{children:(0,r.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,r.jsx)(s.td,{children:"false"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"repairable"})}),(0,r.jsx)(s.td,{children:"Specify if the destroyable can be repaired."}),(0,r.jsx)(s.td,{children:(0,r.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,r.jsx)(s.td,{children:"true"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"sparks"})}),(0,r.jsx)(s.td,{children:"Spawn fireworks particles for each destroyed blocks and play the fireworks sound to all players."}),(0,r.jsx)(s.td,{children:(0,r.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,r.jsx)(s.td,{children:"false"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"show-messages"})}),(0,r.jsx)(s.td,{children:"Broadcast messages related to the monument in chat."}),(0,r.jsx)(s.td,{children:(0,r.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,r.jsx)(s.td,{children:"true"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"show-effects"})}),(0,r.jsx)(s.td,{children:"Play sounds, fireworks, and other effects related to the monument."}),(0,r.jsx)(s.td,{children:(0,r.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,r.jsx)(s.td,{children:"true"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"show-info"})}),(0,r.jsxs)(s.td,{children:["Display the monument under commands such as ",(0,r.jsx)(s.code,{children:"/match"}),"."]}),(0,r.jsx)(s.td,{children:(0,r.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,r.jsx)(s.td,{children:"true"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"show-sidebar"})}),(0,r.jsx)(s.td,{children:"Displays the monument on scoreboard."}),(0,r.jsx)(s.td,{children:(0,r.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,r.jsx)(s.td,{children:"true"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"stats"})}),(0,r.jsx)(s.td,{children:"Determines if this monument counts as a win condition."}),(0,r.jsx)(s.td,{children:(0,r.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,r.jsx)(s.td,{children:"true"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"show"})}),(0,r.jsxs)(s.td,{children:["Specify if the monument should be hidden from all visible locations to the player. These locations include chat, the boss bar, and the scoreboard.",(0,r.jsx)("br",{}),(0,r.jsx)(s.strong,{children:"Note:"})," This attribute sets all five values above to true/false."]}),(0,r.jsx)(s.td,{children:(0,r.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,r.jsx)(s.td,{children:"true"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"proximity-metric"})}),(0,r.jsxs)(s.td,{children:["Metric used to determine proximity to the destroyable.",(0,r.jsx)("br",{}),"Accepts ",(0,r.jsx)(s.code,{children:"closest player"}),", ",(0,r.jsx)(s.code,{children:"closest block"}),", ",(0,r.jsx)(s.code,{children:"closest kill"}),", or ",(0,r.jsx)(s.code,{children:"none"}),"."]}),(0,r.jsx)(s.td,{children:(0,r.jsx)("span",{className:"badge badge--primary",children:"Proximity Metric"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"closest player"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"proximity-horizontal"})}),(0,r.jsx)(s.td,{children:"Only calculate horizontal distance for destroyable proximity."}),(0,r.jsx)(s.td,{children:(0,r.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,r.jsx)(s.td,{children:"false"})]})]})]})}),"\n",(0,r.jsx)(s.h5,{id:"destroyable-sub-elements",children:"Destroyable Sub-elements"}),"\n",(0,r.jsx)("div",{className:"table-container",children:(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Element"}),(0,r.jsx)(s.th,{children:"Description"}),(0,r.jsx)(s.th,{children:"Value"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"<region>"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)("span",{className:"badge badge--secondary",title:"Can be either this sub-element or an attribute.",children:"Property"}),(0,r.jsx)("span",{className:"badge badge--danger",children:"Required"}),"Region containing the destroyable."]}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/modules/mechanics/regions",children:"Bounded Regions"})})]})})]})}),"\n",(0,r.jsx)(s.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-xml",children:'<destroyables name="Monument" materials="obsidian" completion="50%">\n    <destroyable owner="blue">\n        <region>\n            <cuboid min="46,16,26" max="45,14,25"/>\n        </region>\n    </destroyable>\n    <destroyable owner="red">\n        <region>\n            <cuboid min="-44,16,-24" max="-45,14,-25"/>\n        </region>\n    </destroyable>\n</destroyables>\n'})})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},1151:(e,s,d)=>{d.d(s,{Z:()=>l,a:()=>i});var r=d(7294);const t={},n=r.createContext(t);function i(e){const s=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);