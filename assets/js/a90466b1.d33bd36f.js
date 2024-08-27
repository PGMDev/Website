"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2192],{1632:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var s=i(5893),n=i(1151);const l={id:"blitz",title:"Blitz"},r=void 0,d={id:"modules/objectives/blitz",title:"Blitz",description:"The game will run for a specified amount of time, players will have to find and kill enemy players.",source:"@site/docs/modules/objectives/blitz.mdx",sourceDirName:"modules/objectives",slug:"/modules/objectives/blitz",permalink:"/docs/modules/objectives/blitz",draft:!1,unlisted:!1,editUrl:"https://github.com/PGMDev/Website/tree/master/docs/modules/objectives/blitz.mdx",tags:[],version:"current",lastUpdatedAt:1724787644e3,frontMatter:{id:"blitz",title:"Blitz"},sidebar:"docs",previous:{title:"Monument Modes",permalink:"/docs/modules/objectives/monument-modes"},next:{title:"Scoring",permalink:"/docs/modules/objectives/scoring"}},c={},a=[{value:"Blitz Attributes",id:"blitz-attributes",level:5},{value:"Examples",id:"examples",level:3}];function o(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",h5:"h5",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"The game will run for a specified amount of time, players will have to find and kill enemy players.\nEach player has a limited amount of lives, and after their lives are used up, the player is moved to the observer team.\nThe match ends after the specified amount of time, or when one team is eliminated.\nIf the match timer ends before a team is eliminated, the team with the most players remaining wins."}),"\n",(0,s.jsxs)(t.p,{children:["The Blitz module is often combined with the ",(0,s.jsx)(t.a,{href:"/docs/modules/objectives/other#rage",children:"Rage Module"}),"."]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["Blitz maps should include ",(0,s.jsx)(t.code,{children:'<respawn auto="true"/>'}),' to prevent players from "hiding" and prolonging matches.']})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Element"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"<blitz> </blitz>"})}),(0,s.jsx)(t.td,{children:"A node containing the Blitz gamemode settings."})]})})]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Sub-elements"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Value"}),(0,s.jsx)(t.th,{children:"Default"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"<lives>"})}),(0,s.jsx)(t.td,{children:"The amount of lives each player has before they are out of the match."}),(0,s.jsx)(t.td,{children:(0,s.jsx)("span",{className:"badge badge--primary",children:"Number"})}),(0,s.jsx)(t.td,{children:"1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"<broadcastLives>"})}),(0,s.jsx)(t.td,{children:"Broadcast to the player the amount of lives they have left."}),(0,s.jsx)(t.td,{children:(0,s.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,s.jsx)(t.td,{children:"true"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"<filter>"})}),(0,s.jsx)(t.td,{children:"Filters when a player loses a life."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/modules/mechanics/filters",children:"Filter"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"always"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"<join-filter>"})}),(0,s.jsx)(t.td,{children:"Filters when a player can join the match after it has started."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/modules/mechanics/filters",children:"Filter"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"never"})})]})]})]}),"\n",(0,s.jsx)(t.h5,{id:"blitz-attributes",children:"Blitz Attributes"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Attribute"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"scoreboard-filter"})}),(0,s.jsxs)(t.td,{children:["Determines when the objective should be displayed on the scoreboard.",(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"Note:"})," This filter is team-scoped, it can filter whether each team should show or not independently."]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/modules/mechanics/filters#dynamic-filters",children:"Dynamic Filter"})})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:'<blitz>\n    <lives>1</lives>\n    <broadcastLives>false</broadcastLives>\n</blitz>\n\n\x3c!-- Time till the match ends in minutes --\x3e\n<time>10m</time>\n\n<respawn auto="true"/>\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:"\x3c!-- Player loses a life when dying 30 seconds after match start --\x3e\n<blitz>\n    <lives>5</lives>\n    <filter>\n        <time>30s</time>\n    </filter>\n</blitz>\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:'<blitz filter="blitz-filter">\n    <lives>2</lives>\n</blitz>\n\n\x3c!-- Player loses a life when dying without a golden apple --\x3e\n<not id="blitz-filter">\n    <carrying>\n        <item material="golden apple"/>\n    </carrying>\n</not>\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:"<blitz/> \x3c!-- Use the default blitz settings --\x3e\n"})})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>d,a:()=>r});var s=i(7294);const n={},l=s.createContext(n);function r(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);