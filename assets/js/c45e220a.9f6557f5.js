"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3027],{8545:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>c,contentTitle:()=>n,default:()=>o,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var t=i(5893),r=i(1151);const s={id:"variables",title:"Variables"},n=void 0,l={id:"modules/mechanics/variables",title:"Variables",description:"Variables are used to store information that can later be used in a filter.",source:"@site/docs/modules/mechanics/variables.mdx",sourceDirName:"modules/mechanics",slug:"/modules/mechanics/variables",permalink:"/docs/modules/mechanics/variables",draft:!1,unlisted:!1,editUrl:"https://github.com/PGMDev/Website/tree/master/docs/modules/mechanics/variables.mdx",tags:[],version:"current",lastUpdatedAt:1724740491e3,frontMatter:{id:"variables",title:"Variables"},sidebar:"docs",previous:{title:"Actions & Triggers",permalink:"/docs/modules/mechanics/actions-triggers"},next:{title:"Spawns",permalink:"/docs/modules/mechanics/spawns"}},c={},d=[{value:"Variable Element",id:"variable-element",level:2},{value:"Variable Attributes",id:"variable-attributes",level:3},{value:"Array Attributes",id:"array-attributes",level:3},{value:"With-Team Attributes",id:"with-team-attributes",level:3},{value:"Player-Location Attributes",id:"player-location-attributes",level:3},{value:"Examples",id:"examples",level:2},{value:"Setting Variables",id:"setting-variables",level:3},{value:"Using a Variable In a Filter",id:"using-a-variable-in-a-filter",level:3},{value:"Using Exclusive Dummy Variables",id:"using-exclusive-dummy-variables",level:3},{value:"Timelimit Variables",id:"timelimit-variables",level:3},{value:"Maxbuildheight Variable",id:"maxbuildheight-variable",level:3},{value:"Team-Rescoping Variables",id:"team-rescoping-variables",level:3},{value:"General Example",id:"general-example",level:3}];function h(e){const a={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.p,{children:["Variables are used to store information that can later be used in a filter.\nValues are changed using the ",(0,t.jsx)(a.a,{href:"/docs/modules/mechanics/actions-triggers",children:"Actions & Triggers"})," mechanic.\nAfterwards, they can be used as a ",(0,t.jsx)(a.a,{href:"/docs/modules/mechanics/filters#variable-filter",children:"Filter"})," after meeting a certain number or range.\nYou can define as many variables as you want and all variables must have a scope defined."]}),"\n",(0,t.jsx)(a.h2,{id:"variable-element",children:"Variable Element"}),"\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:"Element"}),(0,t.jsx)(a.th,{children:"Description"})]})}),(0,t.jsx)(a.tbody,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"<variables> </variables>"})}),(0,t.jsx)(a.td,{children:"A node containing the variables for this map."})]})})]}),"\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:"Sub-elements"}),(0,t.jsx)(a.th,{})]})}),(0,t.jsxs)(a.tbody,{children:[(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"<variable/>"})}),(0,t.jsx)(a.td,{children:"An individual variable."})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"<score/>"})}),(0,t.jsx)(a.td,{children:"A score variable, allowing direct access to competitor's score. This is automatically scoped to teams."})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"<timelimit/>"})}),(0,t.jsx)(a.td,{children:"A time limit variable which starts/stops the time limit of the match."})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"<maxbuildheight/>"})}),(0,t.jsx)(a.td,{children:"A variable that sets the build height of the map."})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"<array/>"})}),(0,t.jsx)(a.td,{children:"A variable that represents a collection of values."})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"<with-team/>"})}),(0,t.jsx)(a.td,{children:"A team-rescoping variable that allows using a specific team's value from a different team-scoped variable as a match-scoped variable."})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"<player-location/>"})}),(0,t.jsx)(a.td,{children:"A variable that reads a player's location components."})]})]})]}),"\n",(0,t.jsx)(a.h3,{id:"variable-attributes",children:"Variable Attributes"}),"\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:"Attribute"}),(0,t.jsx)(a.th,{children:"Description"}),(0,t.jsx)(a.th,{children:"Value"})]})}),(0,t.jsxs)(a.tbody,{children:[(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"id"})}),(0,t.jsx)(a.td,{children:"Unique identifier used to reference this variable from other places in the XML."}),(0,t.jsx)(a.td,{children:(0,t.jsx)("span",{className:"badge badge--primary",children:"String"})})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"exclusive"})}),(0,t.jsxs)(a.td,{children:["Limits how many different instances there can be for a variable.",(0,t.jsx)("br",{}),(0,t.jsx)(a.em,{children:"Values between 1 and 50 are supported, higher values may lead to performance issues."})]}),(0,t.jsx)(a.td,{children:(0,t.jsx)("span",{className:"badge badge--primary",children:"Number"})})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"scope"})}),(0,t.jsxs)(a.td,{children:["Defines what the variable will be applied to.",(0,t.jsx)("br",{}),(0,t.jsx)(a.em,{children:"Variables scoped to a player will give each player a unique value that will be preserved, even if they switch teams."})]}),(0,t.jsxs)(a.td,{children:[(0,t.jsx)(a.code,{children:"player"}),", ",(0,t.jsx)(a.code,{children:"team"}),", or ",(0,t.jsx)(a.code,{children:"match"})]})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"default"})}),(0,t.jsx)(a.td,{children:"Sets the initial value of the variable."}),(0,t.jsx)(a.td,{children:(0,t.jsx)("span",{className:"badge badge--primary",children:"Number"})})]})]})]}),"\n",(0,t.jsx)(a.h3,{id:"array-attributes",children:"Array Attributes"}),"\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:"Attribute"}),(0,t.jsx)(a.th,{children:"Description"}),(0,t.jsx)(a.th,{children:"Value"})]})}),(0,t.jsxs)(a.tbody,{children:[(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"id"})}),(0,t.jsx)(a.td,{children:"Unique identifier used to reference this array-type variable from other places in the XML."}),(0,t.jsx)(a.td,{children:(0,t.jsx)("span",{className:"badge badge--primary",children:"String"})})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"size"})}),(0,t.jsxs)(a.td,{children:[(0,t.jsx)("span",{className:"badge badge--danger",children:"Required"}),"The size of this array."]}),(0,t.jsx)(a.td,{children:(0,t.jsx)("span",{className:"badge badge--primary",children:"1 - 1024"})})]})]})]}),"\n",(0,t.jsx)(a.h3,{id:"with-team-attributes",children:"With-Team Attributes"}),"\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:"Attribute"}),(0,t.jsx)(a.th,{children:"Description"}),(0,t.jsx)(a.th,{children:"Value"})]})}),(0,t.jsxs)(a.tbody,{children:[(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"id"})}),(0,t.jsx)(a.td,{children:"Unique identifier used to reference this with-team variable from other places in the XML."}),(0,t.jsx)(a.td,{children:(0,t.jsx)("span",{className:"badge badge--primary",children:"String"})})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"var"})}),(0,t.jsx)(a.td,{children:"The variable to target."}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.a,{href:"#variable-attributes",children:"Variable ID"})})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"team"})}),(0,t.jsx)(a.td,{children:"The team to target."}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.a,{href:"/docs/modules/format/teams#team-attributes",children:"Team ID"})})]})]})]}),"\n",(0,t.jsx)(a.h3,{id:"player-location-attributes",children:"Player-Location Attributes"}),"\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:"Attribute"}),(0,t.jsx)(a.th,{children:"Description"}),(0,t.jsx)(a.th,{children:"Value"})]})}),(0,t.jsxs)(a.tbody,{children:[(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"id"})}),(0,t.jsx)(a.td,{children:"Unique identifier used to reference this player-location variable from other places in the XML."}),(0,t.jsx)(a.td,{children:(0,t.jsx)("span",{className:"badge badge--primary",children:"String"})})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"component"})}),(0,t.jsxs)(a.td,{children:["The player's location component to target. ",(0,t.jsx)(a.code,{children:"XYZ"}),", ",(0,t.jsx)(a.code,{children:"YAW"}),", and ",(0,t.jsx)(a.code,{children:"PITCH"})," represents the player's position/angle, ",(0,t.jsx)(a.code,{children:"DIR_XYZ"})," represents the player's direction, and ",(0,t.jsx)(a.code,{children:"VEL_XYZ"})," represents the player's velocity."]}),(0,t.jsxs)(a.td,{children:[(0,t.jsx)(a.code,{children:"X"}),", ",(0,t.jsx)(a.code,{children:"Y"}),", ",(0,t.jsx)(a.code,{children:"Z"}),", ",(0,t.jsx)(a.code,{children:"PITCH"}),", ",(0,t.jsx)(a.code,{children:"YAW"}),",",(0,t.jsx)("br",{}),(0,t.jsx)(a.code,{children:"DIR_X"}),", ",(0,t.jsx)(a.code,{children:"DIR_Y"}),", ",(0,t.jsx)(a.code,{children:"DIR_Z"}),",",(0,t.jsx)("br",{}),(0,t.jsx)(a.code,{children:"VEL_X"}),", ",(0,t.jsx)(a.code,{children:"VEL_Y"}),", and ",(0,t.jsx)(a.code,{children:"VEL_Z"})]})]})]})]}),"\n",(0,t.jsx)(a.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(a.h3,{id:"setting-variables",children:"Setting Variables"}),"\n",(0,t.jsxs)(a.p,{children:["Setting variables are done inside the ",(0,t.jsx)(a.a,{href:"/docs/modules/mechanics/actions-triggers",children:"Actions & Triggers"})," mechanic.\nThe ",(0,t.jsx)(a.code,{children:"<set>"})," action which changes the variables, waits to be called by a trigger after a filter activates it.\nThe ",(0,t.jsx)(a.code,{children:"value"})," attribute can do any basic mathematical expressions."]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.em,{children:"Example"})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-xml",children:'<actions>\n    <action id="increment-flag-cap" scope="team">\n        \x3c!-- increments the current value by 1 --\x3e\n        <set var="flag_captures" value="flag_captures+1">\n    </action>\n    <trigger filter="flag-cap-filter" action="score-points" scope="player"/>\n</action>\n\n...\n\x3c!-- Sets some_variable to 0, 1, 2, 3, or 4 randomly --\x3e\n<set var="some_variable" value="floor(random() * 5)"/>\n...\n'})}),"\n",(0,t.jsxs)(a.p,{children:["In this example, the ",(0,t.jsx)(a.code,{children:"flag_captures"})," variable will increment by 1 after a player completes ",(0,t.jsx)(a.code,{children:"flag-cap-filter"}),"."]}),"\n",(0,t.jsx)(a.h3,{id:"using-a-variable-in-a-filter",children:"Using a Variable In a Filter"}),"\n",(0,t.jsxs)(a.p,{children:["The variable can then be used in the ",(0,t.jsx)(a.a,{href:"/docs/modules/mechanics/filters#variable-filter",children:"Variable Filter"}),"\nto be utilized in another Action or other module that uses filters.\nThe variable filter can match for a single number or a range of numbers."]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.em,{children:"Example"})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-xml",children:'\x3c!-- Match if next_post has a value of 1 --\x3e\n<variable id="next_blue" var="next_post">1</variable>\n\x3c!-- Match if t_score is >= 100 --\x3e\n<variable id="reached_score" var="t_score">[100,oo)</variable>\n\n\x3c!-- Match if t_score is between 5 and 10 (including 5 and 10) --\x3e\n<variable id="reached_score" var="t_score">[5,10]</variable>\n\x3c!-- Match if t_score is between 5 and 10 (excluding 5 and 10) --\x3e\n<variable id="reached_score" var="t_score">(5,10)</variable>\n\x3c!-- Match if t_score is between 0 and 10 (including 0 and excluding 10) --\x3e\n<variable id="reached_score" var="t_score">[0,10)</variable>\n'})}),"\n",(0,t.jsx)(a.h3,{id:"using-exclusive-dummy-variables",children:"Using Exclusive Dummy Variables"}),"\n",(0,t.jsxs)(a.p,{children:["In this example, the ",(0,t.jsx)(a.code,{children:"last_scored"})," variable would, at most, have a value for one team.\nThis in practice means that all other teams will always be reset to default whenever a team is set.\nIn the ",(0,t.jsx)(a.code,{children:"other"}),' example, the "last 2" updated players will be kept, while players who got in "earlier", are removed.']}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-xml",children:'<variables>\n    <variable id="last_scored" exclusive="1" scope="team" />\n    <variable id="other" exclusive="2" scope="player" />\n</variables>\n'})}),"\n",(0,t.jsxs)(a.p,{children:["In this example, we want the team which gets the ",(0,t.jsx)(a.code,{children:"on-score"})," action to add one, but the opposite team(s) to subtract one from their score, with ",(0,t.jsx)(a.code,{children:"exclusive"})," it looks like this:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-xml",children:'<variables>\n    <score id="team_score" scope="team"/>\n    <variable id="last_scored" exclusive="1" scope="team"/>\n</variables>\n<actions>\n    <action id="on-score" scope="team">\n        <set var="team_score" value="team_score+1"/>\n        <set var="last_scored" value="1"/>\n        <switch-scope inner="match">\n            <switch-scope inner="team" filter="last_scored=0">\n                <set var="team_score" value="team_score-1"/>\n            </switch-scope>\n        </switch-scope>\n    </action>\n</actions>\n'})}),"\n",(0,t.jsx)(a.h3,{id:"timelimit-variables",children:"Timelimit Variables"}),"\n",(0,t.jsxs)(a.p,{children:["When the time limit variable is given a value, it will start a timelimit for the match.\nThe time limit can be cancelled by setting the value to a negative number, or the match\ncan be ended by setting the value to ",(0,t.jsx)(a.code,{children:"0"}),"."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-xml",children:'<variables>\n    <timelimit id="tl_1"/>\n</variables>\n<actions>\n    <action id="on-score" scope="team">\n        <switch-scope inner="match">\n            \x3c!-- Sets/starts the timelimit to 60 seconds --\x3e\n            <set var="tl_1" value="60"/>\n        </switch-scope>\n    </action>\n    <action id="on-capture" scope="team">\n        <switch-scope inner="match">\n            \x3c!-- Instantly ends the match --\x3e\n            <set var="tl_1" value="0"/>\n        </switch-scope>\n    </action>\n    <action id="on-overtime" scope="team">\n        <switch-scope inner="match">\n            \x3c!-- Removes the timelimit --\x3e\n            <set var="tl_1" value="-10"/>\n        </switch-scope>\n    </action>\n</actions>\n'})}),"\n",(0,t.jsx)(a.h3,{id:"maxbuildheight-variable",children:"Maxbuildheight Variable"}),"\n",(0,t.jsxs)(a.p,{children:["The ",(0,t.jsx)(a.code,{children:"maxbuildheight"})," variable will give a height limit for placing blocks\nafter being set to a certain value."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-xml",children:'<variables>\n    <maxbuildheight id="build-limit"/>\n</variable>\n<actions>\n    <action id="increase-buildheight" scope="match" expose="true">\n        \x3c!-- Adds 1 to the current height, up to a maximum of 55 --\x3e\n        <set var="build-limit" value="min(55,whatever+1"/>\n    </action>\n</actions>\n'})}),"\n",(0,t.jsx)(a.h3,{id:"team-rescoping-variables",children:"Team-Rescoping Variables"}),"\n",(0,t.jsxs)(a.p,{children:["Whenever ",(0,t.jsx)(a.code,{children:"some-filter"})," matches for a player (e.g. entering a region), it will trigger an action that sets red team's score to exactly 10, then adds 5 to the score of the team the player is in.\nIn short, if a player in red team triggers ",(0,t.jsx)(a.code,{children:"some-filter"}),", red is reset to 10 + 5 = 15, no other scores are affected.\nIf a player in blue team triggers ",(0,t.jsx)(a.code,{children:"some-filter"}),", red is reset to 10, and blue wins 5 points."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-xml",children:'<variables>\n    <score id="team_score"/>\n    <with-team id="red_team_score" var="team_score" team="red"/>\n\n    <variable id="other" scope="team"/> \x3c!-- A dummy team variable --\x3e\n    \x3c!-- A match-scoped variable for the value of other for red team --\x3e\n    <with-team id="other_red" var="other" team="red"/>\n    \x3c!-- A match-scoped variable for the value of other for blue team --\x3e\n    <with-team id="other_blue" var="other" team="blue"/>\n</variables>\n\n<actions>\n    <trigger scope="player" filter="some-filter">\n        <action>\n            <set var="red_team_score" value="10"/>\n            <set var="team_score" value="team_score+5"/>\n        <action>\n    </trigger>\n</actions>\n'})}),"\n",(0,t.jsx)(a.h3,{id:"general-example",children:"General Example"}),"\n",(0,t.jsxs)(a.p,{children:["In this example, when a player first enters ",(0,t.jsx)(a.code,{children:"region-a"}),", the team score and later the player score is\nincreased by 5. The second time the same player enters, the team will score an additional 10 points,\nwith the player score continuing to increment by 5. Once the team gets 100 points or higher, a message indicating this will be sent."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-xml",children:'<variables>\n    \x3c!-- Initializes the variables --\x3e\n    <variable id="team_score" scope="team"/>\n    <variable id="player_score" scope="player" default="5"/>\n</variables>\n<actions>\n    <action id="score-points" scope="player"/>\n        \x3c!-- team_score = team_score + player_score --\x3e\n        \x3c!-- Adds the player\'s score to the team score --\x3e\n        <set var="team_score" value="team_score+player_score"/>\n        \x3c!-- Adds 5 points to the player\'s score --\x3e\n        <set var="player_score" value="player_score+5"/>\n    </action>\n    \x3c!-- Triggers the above score-points action when a player enters region-a --\x3e\n    <trigger filter="region-a" action="score-points" scope="player"/>\n    \x3c!-- Sends a message to the team once the filter reached-score passes Allow --\x3e\n    <trigger filter="reached-score" action="completed" scope="team"/>\n    <message id="completed" text="The team reached 100 points!"/>\n</action>\n<filters>\n    \x3c!-- Allows when the t_score variable is greater than or equal to 100 --\x3e\n    <variable id="reached-score" var="t_score">[100,oo)</variable>\n</filters>\n'})})]})}function o(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1151:(e,a,i)=>{i.d(a,{Z:()=>l,a:()=>n});var t=i(7294);const r={},s=t.createContext(r);function n(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);