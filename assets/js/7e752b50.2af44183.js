"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9320],{9613:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=n(5893),i=n(1151);const o={id:"introduction",title:"Introduction",description:"PGM originally started in 2012 as a single game plugin specifically built to run one map."},s=void 0,r={id:"modules/general/introduction",title:"Introduction",description:"PGM originally started in 2012 as a single game plugin specifically built to run one map.",source:"@site/docs/modules/general/introduction.mdx",sourceDirName:"modules/general",slug:"/modules/general/introduction",permalink:"/docs/modules/general/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/PGMDev/Website/tree/master/docs/modules/general/introduction.mdx",tags:[],version:"current",frontMatter:{id:"introduction",title:"Introduction",description:"PGM originally started in 2012 as a single game plugin specifically built to run one map."},sidebar:"docs",next:{title:"Main Map Element",permalink:"/docs/modules/general/main"}},l={},d=[{value:"History",id:"history",level:3},{value:"How it Works",id:"how-it-works",level:3}];function c(e){const t={a:"a",code:"code",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h3,{id:"history",children:"History"}),"\n",(0,a.jsxs)(t.p,{children:["PGM originally started in 2012 as a single game plugin specifically built to run one map, ",(0,a.jsx)(t.a,{href:"https://youtu.be/3dLo8ytygWs",children:"Airship Battle"}),".\nThis plugin could manage the match and reset the map easily at the end of the game, which was unique at the time as there were no comprehensive Bukkit plugins that could manage PvP matches.\nOther maps were created later, but these all had to be hard-coded into the plugin.\nThis was cumbersome and complicated, and there needed to be a new way to quickly program maps into the plugin using an easy to understand language and syntax.\nThis problem would later meet its solution, the PvP Game Manager.\nPlayers unknown to Java programming could now create their own games and matches using an XML file that PGM takes as an input."]}),"\n",(0,a.jsx)(t.p,{children:"This was the signature plugin that was exclusive to a major Minecraft server called Overcast Network (also known as oc.tc).\nAfter the server's closure, it was open sourced for the community to enjoy, but at that point it became very complex to maintain and use.\nThis current iteration of PGM has been forked from an earlier 1.8 copy to heavily simplify its scope and has three major changes from the previous iterations of PGM."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Based on Minecraft 1.8."}),"\n",(0,a.jsx)(t.li,{children:"No backend, website, or API."}),"\n",(0,a.jsx)(t.li,{children:"Reduced dependencies to make it easier to compile and submit contributions."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"It is now easier for anyone to run a Minecraft server using PGM, and people are still making new maps with new features coming in.\nAs of now, there are over 1000 maps made for PGM!"}),"\n",(0,a.jsx)(t.h3,{id:"how-it-works",children:"How it Works"}),"\n",(0,a.jsxs)(t.p,{children:["All maps made for PGM are configured using a unique XML file called ",(0,a.jsx)(t.code,{children:"map.xml"}),".\nXML is structured and layered similar to HTML, making it easily readable.\nPGM reads ",(0,a.jsx)(t.code,{children:"map.xml"})," when the server is loaded, and when the match starts it applies all the functions that is defined in the XML file onto the game.\nEverything from objectives, spawn kits, filters, jump pads, and kill rewards is defined in a map's XML file.\nMany different game modes can be reproduced with PGM, like Team Deathmatch, Capture the Wool, Race, Destroy the Monument, Attack and Defend, and King of the Hill.\nAspects of a map are defined by modules, and information can be placed inside other modules, making them very versatile and can be used to create many other unique game modes and maps.\nMost of the XML can be programmed with little involvement of Minecraft, save for testing and getting coordinates."]}),"\n",(0,a.jsxs)(t.p,{children:["Take a look at this ",(0,a.jsx)(t.a,{href:"/docs/examples/airship-battle",children:"example"})," to see how ",(0,a.jsx)(t.code,{children:"map.xml"})," works and how the modules work together.\nPGM is also backwards compatible with XML files that were made for a previous spec (map proto) so older maps don't need to be upgraded to be playable."]}),"\n",(0,a.jsxs)(t.p,{children:["The rest of this documentation will explain how to use the modules to build a working XML file for your map.\nText editors like ",(0,a.jsx)(t.a,{href:"https://notepad-plus-plus.org/",children:"Notepad++"}),", ",(0,a.jsx)(t.a,{href:"https://code.visualstudio.com/",children:"Visual Studio Code"}),", or ",(0,a.jsx)(t.a,{href:"https://www.sublimetext.com/",children:"Sublime Text"})," are good choices for editing XML files."]}),"\n",(0,a.jsxs)(t.p,{children:["Let's ",(0,a.jsx)(t.a,{href:"/docs/modules/general/main/",children:"get started!"})]})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var a=n(7294);const i={},o=a.createContext(i);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);