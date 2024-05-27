"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2089],{8026:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>d,contentTitle:()=>n,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var t=r(5893),l=r(1151);const a={id:"players",title:"Players (free-for-all)"},n=void 0,i={id:"modules/format/players",title:"Players (free-for-all)",description:"The players module is the basis for all team-less gamemodes, such as Free for All (FFA), Ultra Hardcore (UHC), or Survival Games-style matches.",source:"@site/docs/modules/format/players.mdx",sourceDirName:"modules/format",slug:"/modules/format/players",permalink:"/docs/modules/format/players",draft:!1,unlisted:!1,editUrl:"https://github.com/PGMDev/Website/tree/master/docs/modules/format/players.mdx",tags:[],version:"current",lastUpdatedAt:1702944966e3,frontMatter:{id:"players",title:"Players (free-for-all)"},sidebar:"docs",previous:{title:"Mob Spawning",permalink:"/docs/modules/environment/mobs"},next:{title:"Teams",permalink:"/docs/modules/format/teams"}},d={},c=[{value:"Players Attributes",id:"players-attributes",level:5},{value:"Examples",id:"examples",level:3}];function o(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",h5:"h5",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["The players module is the basis for all team-less gamemodes, such as ",(0,t.jsx)(s.a,{href:"/docs/modules/objectives/other#free-for-all",children:"Free for All (FFA)"}),", Ultra Hardcore (UHC), or Survival Games-style matches.\nThis module is not limited to matches focused on combat,\nit can also be used in combat-less game modes where players have to collect specific items, etc.\nWin conditions are set by using the score and time limit modules."]}),"\n",(0,t.jsx)(s.admonition,{type:"warning",children:(0,t.jsx)(s.p,{children:"This gamemode is not compatible with the Teams module!"})}),"\n",(0,t.jsx)("div",{className:"table-container",children:(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Element"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"<players />"})}),(0,t.jsx)(s.td,{children:"The players node, containing player settings."})]})})]})}),"\n",(0,t.jsx)(s.h5,{id:"players-attributes",children:"Players Attributes"}),"\n",(0,t.jsx)("div",{className:"table-container",children:(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Attribute"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Value"}),(0,t.jsx)(s.th,{children:"Default"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"min"})}),(0,t.jsx)(s.td,{children:"The minimum amount of players required to start a match."}),(0,t.jsx)(s.td,{children:(0,t.jsx)("span",{className:"badge badge--primary",children:"Number"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"max"})}),(0,t.jsxs)(s.td,{children:["The maximum player limit \u2014 normal players cannot join the match once it reaches this size.",(0,t.jsx)("br",{}),(0,t.jsxs)(s.em,{children:["Premium players may join over this limit until ",(0,t.jsx)(s.code,{children:"max-overfill"})," is reached."]})]}),(0,t.jsx)(s.td,{children:(0,t.jsx)("span",{className:"badge badge--primary",children:"Number"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"max-overfill"})}),(0,t.jsxs)(s.td,{children:["Player overfill \u2014 premium players cannot join the match once it reaches this size.",(0,t.jsx)("br",{}),(0,t.jsxs)(s.em,{children:["Must be greater than the defined ",(0,t.jsx)(s.code,{children:"max"}),"."]})]}),(0,t.jsx)(s.td,{children:(0,t.jsx)("span",{className:"badge badge--primary",children:"Number"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"show-name-tags"})}),(0,t.jsxs)(s.td,{children:["Specify who can see the name tags of players.",(0,t.jsx)("br",{}),(0,t.jsx)(s.em,{children:"Observers will always see all name tags."})]}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.code,{children:"true"}),(0,t.jsx)("br",{}),(0,t.jsx)(s.code,{children:"false"}),(0,t.jsx)("br",{}),(0,t.jsx)(s.code,{children:"allies"}),(0,t.jsx)("br",{}),(0,t.jsx)(s.code,{children:"enemies"})]}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"true"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"colors"})}),(0,t.jsx)(s.td,{children:"Automatically assign a unique color to each player, works up to 10 players before colors repeat."}),(0,t.jsx)(s.td,{children:(0,t.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,t.jsx)(s.td,{children:"false"})]})]})]})}),"\n",(0,t.jsx)(s.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-xml",children:'<players max="16" max-overfill="20"/>\n<time>8m</time>\n\n<score>\n    <kills>1</kills>\n    <deaths>1</deaths>\n</score>\n'})})]})}function h(e={}){const{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},1151:(e,s,r)=>{r.d(s,{Z:()=>i,a:()=>n});var t=r(7294);const l={},a=t.createContext(l);function n(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:n(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);