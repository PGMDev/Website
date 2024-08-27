"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3365],{5102:(e,r,l)=>{l.r(r),l.d(r,{assets:()=>a,contentTitle:()=>n,default:()=>o,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var i=l(5893),t=l(1151);const s={id:"kill-rewards",title:"Kill Rewards",toc_max_heading_level:4},n=void 0,d={id:"modules/gear/kill-rewards",title:"Kill Rewards",description:"The Kill Rewards module allows players to get items or a kit when they kill a player.",source:"@site/docs/modules/gear/kill-rewards.mdx",sourceDirName:"modules/gear",slug:"/modules/gear/kill-rewards",permalink:"/docs/modules/gear/kill-rewards",draft:!1,unlisted:!1,editUrl:"https://github.com/PGMDev/Website/tree/master/docs/modules/gear/kill-rewards.mdx",tags:[],version:"current",lastUpdatedAt:1724740491e3,frontMatter:{id:"kill-rewards",title:"Kill Rewards",toc_max_heading_level:4},sidebar:"docs",previous:{title:"TNT",permalink:"/docs/modules/gear/tnt"},next:{title:"Lootables",permalink:"/docs/modules/gear/lootables"}},a={},c=[{value:"Kill Rewards Element",id:"kill-rewards-element",level:5},{value:"Kill Reward Attributes",id:"kill-reward-attributes",level:5},{value:"Kill Reward Sub-elements",id:"kill-reward-sub-elements",level:5},{value:"Examples",id:"examples",level:2},{value:"Kill rewards with filters",id:"kill-rewards-with-filters",level:4},{value:"Kill rewards with kits",id:"kill-rewards-with-kits",level:4},{value:"Kill rewards with actions",id:"kill-rewards-with-actions",level:4}];function h(e){const r={a:"a",code:"code",h2:"h2",h4:"h4",h5:"h5",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.p,{children:"The Kill Rewards module allows players to get items or a kit when they kill a player.\nA kill reward can contain either individual items, kits or references to kits.\nThe reward can optionally filter which players are eligible to receive the reward, or when/where the reward is active."}),"\n",(0,i.jsxs)(r.p,{children:["This module can, for example, be used to give upgrades to players by giving them gold ingots.\nThen, once they have collected enough ingots, they can craft armor, purchase items from a ",(0,i.jsx)(r.a,{href:"/docs/modules/gear/shops",children:"shop"}),", or use the ingots as ",(0,i.jsx)(r.a,{href:"/docs/modules/objectives/scoring#redeemables",children:"redeemables"})," for a scorebox, etc."]}),"\n",(0,i.jsx)(r.h5,{id:"kill-rewards-element",children:"Kill Rewards Element"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Element"}),(0,i.jsx)(r.th,{children:"Description"}),(0,i.jsx)(r.th,{children:"Value/Children"})]})}),(0,i.jsx)(r.tbody,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"<kill-rewards> </kill-rewards>"})}),(0,i.jsx)(r.td,{children:"Node containing all kill reward definitions."}),(0,i.jsx)(r.td,{children:(0,i.jsx)("span",{className:"badge badge--secondary",children:"Kill Reward elements"})})]})})]}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Sub-elements"}),(0,i.jsx)(r.th,{}),(0,i.jsx)(r.th,{})]})}),(0,i.jsx)(r.tbody,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"<kill-reward> </kill-reward>"})}),(0,i.jsx)(r.td,{children:"A single kill reward."}),(0,i.jsx)(r.td,{children:(0,i.jsx)("span",{className:"badge badge--secondary",children:"Kill Reward Sub-elements"})})]})})]}),"\n",(0,i.jsx)(r.h5,{id:"kill-reward-attributes",children:"Kill Reward Attributes"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Attribute"}),(0,i.jsx)(r.th,{children:"Description"}),(0,i.jsx)(r.th,{children:"Value/Children"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"filter"})}),(0,i.jsxs)(r.td,{children:[(0,i.jsx)("span",{className:"badge badge--secondary",title:"Can be either this sub-element or an attribute.",children:"Property"}),"Filter who can claim this reward and when."]}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"/docs/modules/mechanics/filters",children:"Filter"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"kit"})}),(0,i.jsxs)(r.td,{children:[(0,i.jsx)("span",{className:"badge badge--secondary",title:"Can be either this sub-element or an attribute.",children:"Property"}),"The kit to give players as the kill reward."]}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"/docs/modules/gear/kits",children:"Kit ID"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"action"})}),(0,i.jsxs)(r.td,{children:[(0,i.jsx)("span",{className:"badge badge--secondary",title:"Can be either this sub-element or an attribute.",children:"Property"}),"Run the specified action as the kill reward."]}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"/docs/modules/mechanics/actions-triggers",children:"Action ID"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"victim-action"})}),(0,i.jsxs)(r.td,{children:[(0,i.jsx)("span",{className:"badge badge--secondary",title:"Can be either this sub-element or an attribute.",children:"Property"}),"Run the specified action on the victim instead of the attacker."]}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"/docs/modules/mechanics/actions-triggers",children:"Action ID"})})]})]})]}),"\n",(0,i.jsx)(r.h5,{id:"kill-reward-sub-elements",children:"Kill Reward Sub-elements"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Element"}),(0,i.jsx)(r.th,{children:"Description"}),(0,i.jsx)(r.th,{children:"Value/Children"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"<item>"})}),(0,i.jsx)(r.td,{children:"Individual items given as a kill reward."}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"/docs/modules/gear/items",children:"Item"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"<filter>"})}),(0,i.jsxs)(r.td,{children:[(0,i.jsx)("span",{className:"badge badge--secondary",title:"Can be either this sub-element or an attribute.",children:"Property"}),"Filter who can claim this reward and when."]}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"/docs/modules/mechanics/filters",children:"Filter"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"<kit>"})}),(0,i.jsxs)(r.td,{children:[(0,i.jsx)("span",{className:"badge badge--secondary",title:"Can be either this sub-element or an attribute.",children:"Property"}),"The kit to give players as the kill reward."]}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"/docs/modules/gear/kits",children:"Kit"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"<action>"})}),(0,i.jsxs)(r.td,{children:[(0,i.jsx)("span",{className:"badge badge--secondary",title:"Can be either this sub-element or an attribute.",children:"Property"}),"The action to run as the kill reward."]}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"/docs/modules/mechanics/actions-triggers",children:"Action"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"<victim-action>"})}),(0,i.jsxs)(r.td,{children:[(0,i.jsx)("span",{className:"badge badge--secondary",title:"Can be either this sub-element or an attribute.",children:"Property"}),"The action to run on the victim."]}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"/docs/modules/mechanics/actions-triggers",children:"Action"})})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(r.h4,{id:"kill-rewards-with-filters",children:"Kill rewards with filters"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-xml",children:'<kill-rewards>\n    \x3c!-- Give two emeralds for all kills --\x3e\n    <kill-reward>\n        <item amount="2" material="emerald"/>\n    </kill-reward>\n\n    \x3c!-- Give a cactus to players on the red team for every third kill --\x3e\n    <kill-reward>\n        <filter>\n            <all>\n                <team>red</team>\n                <kill-streak count="3"/>\n            </all>\n        </filter>\n        <item material="cactus"/>\n    </kill-reward>\n</kill-rewards>\n'})}),"\n",(0,i.jsx)(r.h4,{id:"kill-rewards-with-kits",children:"Kill rewards with kits"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-xml",children:'<kill-rewards>\n    \x3c!-- Give the player an iron helmet, iron helmet, and Speed II effect --\x3e\n    <kill-reward>\n        <kit force="true">\n            <item slot="0" material="iron sword"/>\n            <helmet material="iron helmet"/>\n            <effect amplifier="2">speed</effect>\n        </kit>\n    </kill-reward>\n\n    \x3c!-- Give the "reward-kit" to the player for every 8th kill --\x3e\n    <kill-reward>\n        <filter>\n            <kill-streak count="8" repeat="true"/>\n        </filter>\n        <kit id="reward-kit"/>\n    </kill-reward>\n</kill-rewards>\n'})}),"\n",(0,i.jsx)(r.h4,{id:"kill-rewards-with-actions",children:"Kill rewards with actions"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-xml",children:'<kill-rewards>\n    \x3c!-- Runs "some-action" on the victim whenever they are killed by a member of red team --\x3e\n    <kill-reward filter="red-team" victim-action="some-action"/>\n\n    \x3c!-- Kits and actions defined as references --\x3e\n    <kill-reward action="some-kit" /> \x3c!-- Kits are a type of action, so they can be used as an action --\x3e\n    <kill-reward action="some-action"/>\n\n    \x3c!-- Inline defined actions --\x3e\n    <kill-reward>\n        <action>\n            <set var="some_variable" value="1"/>\n        </action>\n    </kill-reward>\n</kill-rewards>\n'})})]})}function o(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,r,l)=>{l.d(r,{Z:()=>d,a:()=>n});var i=l(7294);const t={},s=i.createContext(t);function n(e){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);