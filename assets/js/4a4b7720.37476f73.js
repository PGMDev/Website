"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3958],{6935:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=s(5893),i=s(1151);const o={id:"main",title:"Introduction"},r=void 0,a={id:"events/main",title:"Introduction",description:"Events is the official PGM plugin for managing PvP matches in a competitive setting.",source:"@site/docs/events/main.mdx",sourceDirName:"events",slug:"/events/main",permalink:"/docs/events/main",draft:!1,unlisted:!1,editUrl:"https://github.com/PGMDev/Website/tree/master/docs/events/main.mdx",tags:[],version:"current",frontMatter:{id:"main",title:"Introduction"},sidebar:"Events",next:{title:"XML",permalink:"/docs/events/xml"}},l={},c=[{value:"Running",id:"running",level:3},{value:"Permissions",id:"permissions",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Events"})," is the official PGM plugin for managing PvP matches in a competitive setting.\nTeam joining is disabled for everyone, and upon joining or cycling, all players on the match's registered teams are forced onto their respective, defined-in-config teams."]}),"\n",(0,t.jsx)(n.p,{children:"The plugin also manages cycling and starting matches as well as readying teams.\nMaps played in a match can be customized using a format file. Customizable vetos are also supported."}),"\n",(0,t.jsx)(n.h3,{id:"running",children:"Running"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Once you download Events from the ",(0,t.jsx)(n.a,{href:"/downloads",children:"Downloads"})," page, make sure that PGM is loaded and all your maps are present under the ",(0,t.jsx)(n.code,{children:"maps"})," folder."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Ensure that ",(0,t.jsx)(n.code,{children:"plugins/Events/teams/"})," contains all the teams playing in this tournament and ",(0,t.jsx)(n.code,{children:"plugins/Events/formats/"})," contains the formats for this tournament. You can find more information on how to create both in this section."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Register each team playing with /tm register ",(0,t.jsx)(n.code,{children:"<team>"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Start the format with /tm create ",(0,t.jsx)(n.code,{children:"<format>"})," where ",(0,t.jsx)(n.code,{children:"<format>"}),".xml is a valid file in plugins/Ingame/formats"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You will find more information about the plugin's commands in the ",(0,t.jsx)(n.code,{children:"Commands"})," section.\nThere is only one value to be configured, which is ",(0,t.jsx)(n.code,{children:"observers-must-ready"}),".\nIf disabled, the match will start without observers having to execute ",(0,t.jsx)(n.code,{children:"/ready"}),".\nThis is specially useful for referees, hence why it is enabled by default."]}),"\n",(0,t.jsx)(n.h3,{id:"permissions",children:"Permissions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"events.staff"})," - Allows users to run ",(0,t.jsx)(n.code,{children:"/tm"})," commands (for administrators)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"events.spectate"})," - Allows users to spectate matches. This applies for users that are ",(0,t.jsx)(n.strong,{children:"not"})," playing"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"events.spectate.vanish"})," - Like the above, but users will be vanished and therefore cannot interact with the game"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["The plugin is still work in progress. If you wish to contribute to its development,\nplease check its ",(0,t.jsx)(n.a,{href:"https://github.com/PGMDev/Events",children:"GitHub repository"}),"."]})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>r});var t=s(7294);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);