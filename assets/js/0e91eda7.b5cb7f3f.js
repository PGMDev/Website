"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3827],{7135:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>o,frontMatter:()=>n,metadata:()=>d,toc:()=>c});var r=s(5893),i=s(1151);const n={id:"proximity-alarms",title:"Proximity Alarms"},a=void 0,d={id:"modules/mechanics/proximity-alarms",title:"Proximity Alarms",description:"Proximity Alarms can be used to alert players when an enemy enters a specified area.",source:"@site/docs/modules/mechanics/proximity-alarms.mdx",sourceDirName:"modules/mechanics",slug:"/modules/mechanics/proximity-alarms",permalink:"/docs/modules/mechanics/proximity-alarms",draft:!1,unlisted:!1,editUrl:"https://github.com/PGMDev/Website/tree/master/docs/modules/mechanics/proximity-alarms.mdx",tags:[],version:"current",lastUpdatedAt:1724740491e3,frontMatter:{id:"proximity-alarms",title:"Proximity Alarms"},sidebar:"docs",previous:{title:"Portals",permalink:"/docs/modules/mechanics/portals"},next:{title:"Lanes",permalink:"/docs/modules/mechanics/lanes"}},l={},c=[{value:"Proximity-alarm Attributes",id:"proximity-alarm-attributes",level:4},{value:"Proximity-alarm Sub-elements",id:"proximity-alarm-sub-elements",level:4},{value:"Examples",id:"examples",level:3}];function h(e){const t={a:"a",code:"code",em:"em",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Proximity Alarms can be used to alert players when an enemy enters a specified area.\nFlares will go off around the protected area, with the color of the detected player's team, and all allied players will receive an alert message with sound."}),"\n",(0,r.jsxs)(t.p,{children:["If the ",(0,r.jsx)(t.code,{children:"<notify>"})," subelement is not defined, the proximity-alarm message is sent only to players who ",(0,r.jsx)(t.em,{children:"cannot"})," be detected, i.e. those who do not match the detection filter.\nIf the ",(0,r.jsx)(t.code,{children:"<detect>"})," attribute is missing no message will be sent, which means that only players who can see or hear the flares will know when the alarm is tripped."]}),"\n",(0,r.jsxs)(t.p,{children:["Flares will only be set off if a ",(0,r.jsx)(t.code,{children:'flare-radius=""'}),' is defined.\nIf this attribute is missing a message must be specified to alert players.\nThis is how the alarm can be made "silent", so that enemies may not realize that they have been detected.']}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Element"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"<proximity-alarms> </proximity-alarms>"})}),(0,r.jsx)(t.td,{children:"Node containing this map's proximity-alarms."})]})})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Sub-elements"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Value/Children"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"<proximity-alarm>"})}),(0,r.jsx)(t.td,{children:"An individual proximity-alarm node."}),(0,r.jsx)(t.td,{children:(0,r.jsx)("span",{className:"badge badge--secondary",children:"Proximity-alarm Sub-elements"})})]})})]}),"\n",(0,r.jsx)(t.h4,{id:"proximity-alarm-attributes",children:"Proximity-alarm Attributes"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Attribute"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"region"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element.",children:"Property"}),(0,r.jsx)("span",{className:"badge badge--danger",children:"Required"}),"The region this alarm applies to."]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/modules/mechanics/regions",children:"Region"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"message"})}),(0,r.jsx)(t.td,{children:"The message to show in chat when a player is detected."}),(0,r.jsx)(t.td,{children:(0,r.jsx)("span",{className:"badge badge--primary",children:"Formatted Text"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"flare-radius"})}),(0,r.jsx)(t.td,{children:"The radius of the circular area to show flares in, centered on the proximity-alarm region."}),(0,r.jsx)(t.td,{children:(0,r.jsx)("span",{className:"badge badge--primary",children:"Number"})})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"proximity-alarm-sub-elements",children:"Proximity-alarm Sub-elements"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Element"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Value/Children"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"<region>"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element.",children:"Property"}),(0,r.jsx)("span",{className:"badge badge--danger",children:"Required"}),"The region this alarm applies to, treated as a region union."]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/modules/mechanics/regions",children:"Regions"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"<detect>"})}),(0,r.jsx)(t.td,{children:"Filter who gets detected by the proximity alarm."}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/modules/mechanics/filters",children:"Filter"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"<notify>"})}),(0,r.jsx)(t.td,{children:"Filter who gets notified by the proximity alarm."}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/modules/mechanics/filters",children:"Filter"})})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",children:'<proximity-alarms>\n    <proximity-alarm message="Enemy detected at Blue monument!" flare-radius="4">\n        <region>\n            <cylinder base="27.5,119,-26.5" radius="7.5" height="15"/>\n        </region>\n        <detect>\n            <team>red</team>\n        </detect>\n    </proximity-alarm>\n</proximity-alarms>\n'})})]})}function o(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>d,a:()=>a});var r=s(7294);const i={},n=r.createContext(i);function a(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);