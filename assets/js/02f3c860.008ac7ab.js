"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5433],{9699:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>a});var t=i(5893),r=i(1151);const n={id:"scoring",title:"Scoring"},d=void 0,c={id:"modules/objectives/scoring",title:"Scoring",description:"The score module can be used to give matches a score limit and modify how many points are added to the score for each kill or death.",source:"@site/docs/modules/objectives/scoring.mdx",sourceDirName:"modules/objectives",slug:"/modules/objectives/scoring",permalink:"/docs/modules/objectives/scoring",draft:!1,unlisted:!1,editUrl:"https://github.com/PGMDev/Website/tree/master/docs/modules/objectives/scoring.mdx",tags:[],version:"current",lastUpdatedAt:1724787644e3,frontMatter:{id:"scoring",title:"Scoring"},sidebar:"docs",previous:{title:"Blitz",permalink:"/docs/modules/objectives/blitz"},next:{title:"Other Gamemodes",permalink:"/docs/modules/objectives/other"}},l={},a=[{value:"Score Attributes",id:"score-attributes",level:5},{value:"Examples",id:"examples",level:3},{value:"Score Boxes",id:"score-boxes",level:2},{value:"Box Attributes",id:"box-attributes",level:4},{value:"Box Sub-elements",id:"box-sub-elements",level:4},{value:"Examples",id:"examples-1",level:3},{value:"Redeemables",id:"redeemables",level:2},{value:"Examples",id:"examples-2",level:3},{value:"Time Limit",id:"time-limit",level:2},{value:"Time Attributes",id:"time-attributes",level:4},{value:"Overtime",id:"overtime",level:2},{value:"Examples",id:"examples-3",level:3}];function o(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"The score module can be used to give matches a score limit and modify how many points are added to the score for each kill or death.\nIt can also be used to create score boxes that give a player or team a certain amount of points when they enter it."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Element"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"<score> </score>"})}),(0,t.jsx)(s.td,{children:"Node containing the score settings and score boxes."})]})})]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Sub-elements"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Value/Children"}),(0,t.jsx)(s.th,{children:"Default"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"<limit>"})}),(0,t.jsx)(s.td,{children:"The maximum score that can be reached before the match ends."}),(0,t.jsx)(s.td,{children:(0,t.jsx)("span",{className:"badge badge--primary",children:"String"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)("span",{className:"badge badge--secondary",children:"No limit"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"<mercy>"})}),(0,t.jsxs)(s.td,{children:["Points that a team will need to lead by to win.",(0,t.jsx)("br",{}),"This will increase the score limit until a ",(0,t.jsx)(s.code,{children:"<limit>"})," is reached."]}),(0,t.jsx)(s.td,{children:(0,t.jsx)("span",{className:"badge badge--primary",children:"Number"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)("span",{className:"badge badge--secondary",children:"No mercy"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"<kills>"})}),(0,t.jsxs)(s.td,{children:["Points to ",(0,t.jsx)(s.strong,{children:"give"})," to a team for killing an enemy player."]}),(0,t.jsx)(s.td,{children:(0,t.jsx)("span",{className:"badge badge--primary",children:"Number"})}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"<deaths>"})}),(0,t.jsxs)(s.td,{children:["Points to ",(0,t.jsx)(s.strong,{children:"deduct"})," from a team for the ",(0,t.jsx)(s.strong,{children:"accidental"})," death of a team member."]}),(0,t.jsx)(s.td,{children:(0,t.jsx)("span",{className:"badge badge--primary",children:"Number"})}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"<box>"})}),(0,t.jsx)(s.td,{children:"A single score box."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"#score-boxes",children:"Score Box"})}),(0,t.jsx)(s.td,{})]})]})]}),"\n",(0,t.jsx)(s.h5,{id:"score-attributes",children:"Score Attributes"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Attribute"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Value"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"scoreboard-filter"})}),(0,t.jsxs)(s.td,{children:["Determines when the objective should be displayed on the scoreboard.",(0,t.jsx)("br",{}),(0,t.jsx)(s.strong,{children:"Note:"})," This filter is team-scoped, it can filter whether each team should show or not independently."]}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/modules/mechanics/filters#dynamic-filters",children:"Dynamic Filter"})})]})})]}),"\n",(0,t.jsx)(s.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-xml",children:"<score>\n    \x3c!-- First team to reach 100 points wins the match --\x3e\n    <limit>100</limit>\n\n    <kills>3</kills> \x3c!-- +3 points for every kill --\x3e\n    <deaths>2</deaths> \x3c!-- -2 points for accidentally dying --\x3e\n</score>\n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-xml",children:"<score>\n    \x3c!-- The winner is the first team to get a mercy lead of 5 or reach the limit of 10. \n         Initially a score limit of 5 will be shown --\x3e\n    <mercy>5</mercy>\n    <limit>10</limit>\n</score>\n"})}),"\n",(0,t.jsx)(s.h2,{id:"score-boxes",children:"Score Boxes"}),"\n",(0,t.jsxs)(s.p,{children:["A score box will give points to a players team when they enter or bring a redeemable item to the score box region.\n",(0,t.jsx)(s.a,{href:"/docs/modules/mechanics/portals",children:"Portals"})," should be used to remove the player from the immediate vicinity of the score box to prevent multiple scores."]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Element"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Value/Children"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"<box>"})}),(0,t.jsx)(s.td,{children:"A single score box."}),(0,t.jsx)(s.td,{children:(0,t.jsx)("span",{className:"badge badge--secondary",children:"Box Sub-elements"})})]})})]}),"\n",(0,t.jsx)(s.h4,{id:"box-attributes",children:"Box Attributes"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Attribute"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Value"}),(0,t.jsx)(s.th,{children:"Default"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"points"})}),(0,t.jsx)(s.td,{children:"Points awarded for entering the box."}),(0,t.jsx)(s.td,{children:(0,t.jsx)("span",{className:"badge badge--primary",children:"Number"})}),(0,t.jsx)(s.td,{children:"0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"silent"})}),(0,t.jsx)(s.td,{children:"Do not notify players when points are scored in this box."}),(0,t.jsx)(s.td,{children:(0,t.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,t.jsx)(s.td,{children:"false"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"region"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element.",children:"Property"}),(0,t.jsx)("span",{className:"badge badge--danger",children:"Required"}),"The location and size of the score box."]}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/modules/mechanics/regions",children:"Region"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"filter"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element.",children:"Property"}),"Filter who can score in this box."]}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/modules/mechanics/filters",children:"Filter"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)("span",{className:"badge badge--secondary",children:"No Filter"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"trigger"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)("span",{className:"badge badge--danger",title:"This feature once existed, but has not been re-implemented in modern versions of PGM.",children:"N/A"}),(0,t.jsx)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element.",children:"Property"}),"Dynamic conditions under which this score box is applied."]}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/modules/mechanics/filters#dynamic-filters",children:"Dynamic Filter"})}),(0,t.jsx)(s.td,{})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"box-sub-elements",children:"Box Sub-elements"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Element"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Value/Children"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"<redeemables>"})}),(0,t.jsx)(s.td,{children:"Items that can be redeemed at this score box for points."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:'<item points="1">'})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"<region>"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)("span",{className:"badge badge--secondary",title:"Can be either this sub-element or an attribute.",children:"Property"}),(0,t.jsx)("span",{className:"badge badge--danger",children:"Required"}),"The region where this score box is located."]}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/modules/mechanics/regions",children:"Regions"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"<filter>"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)("span",{className:"badge badge--secondary",title:"Can be either this sub-element or an attribute.",children:"Property"}),"Filter who can score in this box."]}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/modules/mechanics/regions",children:"Filters"})})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"examples-1",children:"Examples"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-xml",children:'<score>\n    \x3c!-- Only allow red team to use this score box, and give them two points --\x3e\n    <box points="2" filter="only-red">\n        <region>\n            <cylinder base="21,8,63" radius="1" height="2"/>\n        </region>\n    </box>\n</score>\n\n<score>\n    <box points="8" filter="cyan" region="cyan-scorebox"/>\n</score>\n'})}),"\n",(0,t.jsx)(s.h2,{id:"redeemables",children:"Redeemables"}),"\n",(0,t.jsxs)(s.p,{children:["A score box can also award points in exchange for particular items carried by the player when they\nenter the box. These items are defined inside a ",(0,t.jsx)(s.code,{children:"<redeemables>"})," score box sub-element as ",(0,t.jsx)(s.code,{children:"<item>"})," tags.\nEach item contains a ",(0,t.jsx)(s.a,{href:"/docs/reference/items/inventory#material-finder",children:"material name"}),"\nand an optional ",(0,t.jsx)(s.code,{children:'points="..."'})," attribute specifying the number of points awarded for each item."]}),"\n",(0,t.jsx)(s.h3,{id:"examples-2",children:"Examples"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-xml",children:'<score>\n    <box filter="only-red" region="red-depot">\n        <redeemables>\n            <item points="5">diamond</item>\n            <item points="3">emerald</item>\n            <item points="1">gold nugget</item>\n        </redeemables>\n    </box>\n</score>\n'})}),"\n",(0,t.jsx)(s.h2,{id:"time-limit",children:"Time Limit"}),"\n",(0,t.jsxs)(s.p,{children:['Give the match a time limit, the result attribute determines how the winning team or player is calculated when the time runs out.\nResult can be the name of a team, or one of the special values; "tie" for no winner, or "objectives" for the team that has the most objectives completed.\nThe time limit can be specified in minutes, etc., by formatting it as a ',(0,t.jsx)(s.a,{href:"/docs/reference/misc/time-periods",children:"time period"}),"."]}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["This tag is ",(0,t.jsx)(s.strong,{children:"not"})," placed inside the score module. Instead, it is located in the root ",(0,t.jsx)(s.code,{children:"<map>"})," element."]})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-xml",children:'<time result="objectives">5m</time>\n'})}),"\n",(0,t.jsx)(s.h4,{id:"time-attributes",children:"Time Attributes"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Attribute"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Value"}),(0,t.jsx)(s.th,{children:"Default"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"result"})}),(0,t.jsxs)(s.td,{children:["Change how the winning team or player is calculated.",(0,t.jsx)("br",{}),"Accepts ",(0,t.jsx)(s.code,{children:"default"}),", ",(0,t.jsx)(s.code,{children:"tie"}),", ",(0,t.jsx)(s.code,{children:"objectives"}),", ",(0,t.jsx)(s.code,{children:"score"}),", or a ",(0,t.jsx)(s.a,{href:"/docs/modules/format/teams",children:"Team ID"}),"."]}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)("span",{className:"badge badge--primary",children:"Victory Condition"}),(0,t.jsx)("br",{}),(0,t.jsx)("span",{className:"badge badge--primary",children:"Team ID"})]}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"default"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"show"})}),(0,t.jsx)(s.td,{children:"Display the remaining time in the chat and boss bar."}),(0,t.jsx)(s.td,{children:(0,t.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,t.jsx)(s.td,{children:"true"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"overtime"})}),(0,t.jsx)(s.td,{children:"Specify the length of the overtime once the tie is broken."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/reference/misc/time-periods",children:"Time Period"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"max-overtime"})}),(0,t.jsx)(s.td,{children:"Specify a maximum duration that the overtime should last."}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/reference/misc/time-periods",children:"Time Period"})}),(0,t.jsx)(s.td,{})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"overtime",children:"Overtime"}),"\n",(0,t.jsxs)(s.p,{children:["Overtime can be used in order to force a single winner in a match. By using the optional ",(0,t.jsx)(s.code,{children:'overtime="..."'})," attribute in the time element, you can specify a ",(0,t.jsx)(s.a,{href:"/docs/reference/misc/time-periods",children:"time period"}),".\nIf the score is tied once regulation time ends, the match will extend into overtime.\nThe time will begin to tick down as soon as the tie is broken.\nIt will reset back to the specified time if a tie is reached again or a change in the lead occurs before the time expires."]}),"\n",(0,t.jsxs)(s.p,{children:["To limit how long overtime lasts, you can include the ",(0,t.jsx)(s.code,{children:'max-overtime="..."'})," attribute as well.\nIt, too, accepts a ",(0,t.jsx)(s.a,{href:"/docs/reference/misc/time-periods",children:"time period"})," as a value.\nThis will count down in the background and force the overtime to count down once surpassing the ",(0,t.jsx)(s.code,{children:'overtime="..."'})," attribute's value."]}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsxs)(s.p,{children:["Set the ",(0,t.jsx)(s.code,{children:"overtime"})," attribute to ",(0,t.jsx)(s.code,{children:"1s"})," for sudden death overtime."]})}),"\n",(0,t.jsx)(s.h3,{id:"examples-3",children:"Examples"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-xml",children:'\x3c!-- Match will last 12 minutes.\n     If score is tied when time reaches zero, a one-minute overtime starts. If the tie is broken\n     and no team makes a comeback within one minute, the leading team will win.\n     The overtime will last a maximum of 15 minutes --\x3e\n<time overtime="1m" max-overtime="15m">12m</time>\n'})})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},1151:(e,s,i)=>{i.d(s,{Z:()=>c,a:()=>d});var t=i(7294);const r={},n=t.createContext(r);function d(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);