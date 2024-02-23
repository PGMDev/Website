"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3049],{6499:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>a});var i=s(5893),r=s(1151);const t={id:"proto",title:"Protocol Versions",description:"The proto attribute specifies what iteration of PGM a certain XML document was created for. It also instructs PGM on whether to allow the usage of deprecated or newly introduced features within a map.",toc_max_heading_level:4},l=void 0,d={id:"modules/general/proto",title:"Protocol Versions",description:"The proto attribute specifies what iteration of PGM a certain XML document was created for. It also instructs PGM on whether to allow the usage of deprecated or newly introduced features within a map.",source:"@site/docs/modules/general/proto.mdx",sourceDirName:"modules/general",slug:"/modules/general/proto",permalink:"/docs/modules/general/proto",draft:!1,unlisted:!1,editUrl:"https://github.com/PGMDev/Website/tree/master/docs/modules/general/proto.mdx",tags:[],version:"current",frontMatter:{id:"proto",title:"Protocol Versions",description:"The proto attribute specifies what iteration of PGM a certain XML document was created for. It also instructs PGM on whether to allow the usage of deprecated or newly introduced features within a map.",toc_max_heading_level:4},sidebar:"docs",previous:{title:"Main Map Element",permalink:"/docs/modules/general/main"},next:{title:"Broadcasts",permalink:"/docs/modules/information/broadcasts"}},o={},a=[{value:"Map Element",id:"map-element",level:5},{value:"Map Attributes",id:"map-attributes",level:5},{value:"Map Protocol Values",id:"map-protocol-values",level:5},{value:"Map Protocol Changelog",id:"map-protocol-changelog",level:2},{value:"Changes in 1.5.0",id:"changes-in-150",level:3},{value:"Changes in 1.4.2",id:"changes-in-142",level:3},{value:"Breaking",id:"breaking",level:4},{value:"New",id:"new",level:4},{value:"Changes in 1.4.0",id:"changes-in-140",level:3},{value:"Breaking",id:"breaking-1",level:4},{value:"Changes",id:"changes",level:4},{value:"New",id:"new-1",level:4},{value:"Removed",id:"removed",level:4},{value:"Changes in 1.3.6",id:"changes-in-136",level:3},{value:"Breaking",id:"breaking-2",level:4}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:'proto=""'})," attribute specifies what iteration of PGM a certain XML document was created for.\nIt also instructs PGM on whether to allow the usage of deprecated or newly introduced features within a map.\nIf the value is lower than the currently recommended proto version, the map will load but the XML may be interpreted in an outdated and unexpected ways."]}),"\n",(0,i.jsxs)(n.p,{children:["Mapmakers should always use the latest supported proto version, and this may be required of new maps that are to be added to any map compilation projects, such as ",(0,i.jsx)(n.a,{href:"https://mcresourcepile.github.io",children:"ResourcePile"}),"."]}),"\n",(0,i.jsx)(n.h5,{id:"map-element",children:"Map Element"}),"\n",(0,i.jsx)("div",{className:"table-container",children:(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Map Element"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Value/Children"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"<map> </map>"})}),(0,i.jsx)(n.td,{children:"The main map node containing the protocol version to be used."}),(0,i.jsx)(n.td,{children:(0,i.jsx)("span",{className:"badge badge--secondary",children:"XML Modules"})})]})})]})}),"\n",(0,i.jsx)(n.h5,{id:"map-attributes",children:"Map Attributes"}),"\n",(0,i.jsx)("div",{className:"table-container",children:(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Attribute"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Value"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"proto"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)("span",{className:"badge badge--danger",children:"Required"}),"The map XML's protocol version."]}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)("span",{className:"badge badge--success",children:"Recommended"}),(0,i.jsx)(n.code,{children:"1.4.2"})]})]})})]})}),"\n",(0,i.jsx)(n.h5,{id:"map-protocol-values",children:"Map Protocol Values"}),"\n",(0,i.jsx)("div",{className:"table-container",children:(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Version"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"1.4.2"})}),(0,i.jsxs)(n.td,{children:["Refer to ",(0,i.jsx)(n.a,{href:"#changes-in-142",children:"Changes in 1.4.2"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"1.4.1"})}),(0,i.jsxs)(n.td,{children:["No change in features on PGM. Use ",(0,i.jsx)(n.code,{children:"1.4.0"})," or ",(0,i.jsx)(n.code,{children:"1.4.2"})," instead."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"1.4.0"})}),(0,i.jsxs)(n.td,{children:["Filters, regions, and teams are always referenced by its ID (replaces ",(0,i.jsx)(n.code,{children:"name"}),").",(0,i.jsx)("br",{}),"Disallows ",(0,i.jsx)(n.code,{children:"<time>"})," inside ",(0,i.jsx)(n.code,{children:"<score>"})," or ",(0,i.jsx)(n.code,{children:"<blitz>"})," & disallows ",(0,i.jsx)(n.code,{children:"<title>"})," inside ",(0,i.jsx)(n.code,{children:"<blitz>"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"1.3.6"})}),(0,i.jsxs)(n.td,{children:["Moved all defining elements out of module XML root.",(0,i.jsx)("br",{}),"Everything scores zero points by default."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"1.3.5"})}),(0,i.jsx)(n.td,{children:"Filters are aware of who owns TNT."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"1.3.4"})}),(0,i.jsx)(n.td,{children:"Wools must have a location property."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"1.3.3"})}),(0,i.jsx)(n.td,{children:"Define how overlapping regions should behave."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"1.3.2"})}),(0,i.jsxs)(n.td,{children:["Added ",(0,i.jsx)(n.a,{href:"/docs/modules/objectives/monument-modes",children:"monument modes"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"1.3.1"})}),(0,i.jsxs)(n.td,{children:["Fixed a bug in which cuboids' max value were off by one.",(0,i.jsx)("br",{}),(0,i.jsx)(n.strong,{children:"Note:"})," When upgrading a map from proto ",(0,i.jsx)(n.code,{children:"1.3.0"})," or below, all cuboid max values should be manually increased by positive 1. No other region types are affected."]})]})]})]})}),"\n",(0,i.jsx)(n.h2,{id:"map-protocol-changelog",children:"Map Protocol Changelog"}),"\n",(0,i.jsx)(n.h3,{id:"changes-in-150",children:"Changes in 1.5.0"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"1.5.0"})," is a upcoming protocol version that is currently in its planning stage and therefore, ",(0,i.jsx)(n.strong,{children:"not implemented"}),".\nIf you would like to learn more or propose changes, please visit ",(0,i.jsx)(n.a,{href:"https://github.com/PGMDev/PGM/issues/1267",children:"PGM#1267 on the issue tracker"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"changes-in-142",children:"Changes in 1.4.2"}),"\n",(0,i.jsx)(n.h4,{id:"breaking",children:"Breaking"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The objectives filter will now always automatically derive team ownership for the objective from context. To match an objective without any specific team, the ",(0,i.jsx)(n.code,{children:'any="true"'})," attribute needs to be specified."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"new",children:"New"}),"\n",(0,i.jsx)("span",{className:"badge badge--secondary",children:"Partially implemented"}),"\n"," ","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Portals, kits, score boxes & structures can now be dynamically applied using dynamic filters. All region types are dynamic, however, only some filter types are dynamic.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Kits now have ",(0,i.jsxs)(n.a,{href:"/docs/modules/gear/kits#dynamic-kits",children:[(0,i.jsx)(n.code,{children:"give"}),", ",(0,i.jsx)(n.code,{children:"take"})," & ",(0,i.jsx)(n.code,{children:"lend"})," properties"]}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Portals have ",(0,i.jsxs)(n.a,{href:"/docs/modules/mechanics/portals#portal-sub-elements",children:[(0,i.jsx)(n.code,{children:"forward"}),", ",(0,i.jsx)(n.code,{children:"reverse"})," & ",(0,i.jsx)(n.code,{children:"transit"})," properties"]}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/modules/blocks/structures",children:"Structures"})," & ",(0,i.jsx)(n.a,{href:"/docs/modules/objectives/scoring#score-boxes",children:"score boxes"})," have a ",(0,i.jsx)(n.code,{children:"trigger"})," property."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Added a player count filter."}),"\n",(0,i.jsxs)(n.li,{children:["Added a ",(0,i.jsx)(n.code,{children:"<grounded/>"})," filter to check if the player is standing on the ground."]}),"\n",(0,i.jsxs)(n.li,{children:["Added ",(0,i.jsx)(n.code,{children:"<match-started/>"}),", ",(0,i.jsx)(n.code,{children:"<match-running/>"})," & ",(0,i.jsx)(n.code,{children:"<match-finished/>"})," filters that are used to check the state of the current match."]}),"\n",(0,i.jsxs)(n.li,{children:["New ",(0,i.jsx)(n.code,{children:"pre-match-physics"})," attribute for the terrain module to enable physics events before the match starts."]}),"\n",(0,i.jsxs)(n.li,{children:["Added ",(0,i.jsx)(n.code,{children:"<observing>"})," and ",(0,i.jsx)(n.code,{children:"<participant>"})," filters. Also added an ",(0,i.jsx)(n.code,{children:"observers"})," filter property to portals to restrict observer access."]}),"\n",(0,i.jsx)(n.li,{children:"Added player rank and score filters. Filters return if the player's rank or score is within the specified range."}),"\n",(0,i.jsxs)(n.li,{children:["Control points have new ",(0,i.jsx)(n.code,{children:"recovery"})," and ",(0,i.jsx)(n.code,{children:"decay"})," attributes that replace the ",(0,i.jsx)(n.code,{children:"incremental"})," attribute and allow more control of the progress."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"changes-in-140",children:"Changes in 1.4.0"}),"\n",(0,i.jsx)(n.h4,{id:"breaking-1",children:"Breaking"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Filters, regions, and kits now use ",(0,i.jsx)(n.code,{children:"id"})," instead of ",(0,i.jsx)(n.code,{children:"name"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Keep in mind that IDs are all in the same namespace, so you can not use the same ID for two different types of thing."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Teams have an ",(0,i.jsx)(n.code,{children:"id"})," attribute and are always referenced by it everywhere in the XML, ",(0,i.jsx)(n.strong,{children:"never"})," by name."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Standalone filter definitions are no longer wrapped in a ",(0,i.jsx)(n.code,{children:"<filter>"})," tag, they start with an actual filter, just like regions, e.g."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:'<filters>\n    <team id="only-red">red-team</team>\n</filters>\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The region for an ",(0,i.jsx)(n.code,{children:"<apply>"})," must be either a ",(0,i.jsx)(n.code,{children:"region"})," attribute or a ",(0,i.jsx)(n.code,{children:"<region>"})," sub-element. It cannot appear directly inside the ",(0,i.jsx)(n.code,{children:"<apply>"})," tag."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Inline filters must always be a single tag, multiple tags are not accepted anywhere. To combine multiple filters, always use a compound filter like ",(0,i.jsx)(n.code,{children:"<all>"})," or ",(0,i.jsx)(n.code,{children:"<any>"}),". This change is retroactive, and affects ",(0,i.jsx)(n.em,{children:"all"})," proto versions."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["There is no longer a filter type called ",(0,i.jsx)(n.code,{children:"<block>"}),", use ",(0,i.jsx)(n.code,{children:"<material>"})," instead. ",(0,i.jsx)(n.code,{children:"<block>"})," is always interpreted as a region."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The old built-in filters are gone, and there are only two new ones: ",(0,i.jsx)(n.code,{children:"always"})," which is equivalent to ",(0,i.jsx)(n.code,{children:"allow-all"}),", and ",(0,i.jsx)(n.code,{children:"never"})," which is equivalent to ",(0,i.jsx)(n.code,{children:"deny-all"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["All of the new built-ins have equivalent tags of the same name i.e. ",(0,i.jsx)(n.code,{children:"<always/>"})," & ",(0,i.jsx)(n.code,{children:"<never/>"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"<allow>"})," and ",(0,i.jsx)(n.code,{children:"<deny>"})," can now be used anywhere a filter is expected, and actually function how they were supposed to i.e. they cause the filter to be ignored (skipped over) if it does not match."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Blitz titles are no longer a part of the ",(0,i.jsx)(n.a,{href:"/docs/modules/objectives/blitz",children:"Blitz module"}),", instead they are set using the map sub-element ",(0,i.jsx)(n.code,{children:"<game>"})," and can be used with any gamemode."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Match time limit is no longer part of the ",(0,i.jsx)(n.code,{children:"<score>"})," or ",(0,i.jsx)(n.code,{children:"<blitz>"})," module, instead it is defined directly in the root element."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:'<map proto="1.4.0">\n<time result="objectives">5m</time>\n\x3c!-- Other modules --\x3e\n</map>\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"changes",children:"Changes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The top-level tags ",(0,i.jsx)(n.code,{children:"<filters>"})," and ",(0,i.jsx)(n.code,{children:"<regions>"})," are now the same thing. You can define filters, regions, and ",(0,i.jsx)(n.code,{children:"<apply>"}),"s in either one (remember that regions are a type of filter, have been for a while now)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Any filter tag anywhere can have an ",(0,i.jsx)(n.code,{children:"id"})," attribute."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"<apply>"})," tag accepts both references and inline definitions for its ",(0,i.jsx)(n.code,{children:"region"}),", ",(0,i.jsx)(n.code,{children:"kit"}),", and all of its filter properties, e.g. the two tags below are equivalent:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:'<apply region="effect-pad" kit="effect-kit" filter="only-red" block="only-leaves"/>\n<apply>\n    <region>\n        <cuboid min="1,2,3" max="4,5,6"/> \x3c!-- effect-pad --\x3e\n    </region>\n    <kit>\n        <potion>...</potion> \x3c!-- effect-kit --\x3e\n    </kit>\n    <filter>\n        <team>red-team</team>\n    </filter>\n    <block>\n        <material>leaves</material>\n    </block>\n</apply>\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsxs)(n.a,{href:"/docs/modules/mechanics/spawns#spawn--default-element-attributes",children:[(0,i.jsx)(n.code,{children:"safe"})," and ",(0,i.jsx)(n.code,{children:"spread"})," attributes"]})," of spawns can now be combined."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["A items slot attribute is no longer required in kits. This attribute now also accepts Mojang slot names e.g. ",(0,i.jsx)(n.code,{children:"slot.hotbar.8"})," or ",(0,i.jsx)(n.code,{children:"armor.head"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"new-1",children:"New"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["There are two built-in regions called ",(0,i.jsx)(n.code,{children:"everywhere"})," and ",(0,i.jsx)(n.code,{children:"nowhere"})," that contain all points and no points, respectively.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["All of the new built-ins have equivalent tags of the same name i.e. ",(0,i.jsx)(n.code,{children:"<everywhere/>"})," & ",(0,i.jsx)(n.code,{children:"<nowhere/>"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["A team can have a minimum required size with the ",(0,i.jsx)(n.code,{children:'min=""'})," attribute."]}),"\n",(0,i.jsxs)(n.li,{children:["Objectives have a ",(0,i.jsx)(n.code,{children:"required"})," attribute that specifies if they are required to complete the match."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"removed",children:"Removed"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"<multitrade/>"})," tag has been removed, it is now always enabled."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"changes-in-136",children:"Changes in 1.3.6"}),"\n",(0,i.jsx)(n.h4,{id:"breaking-2",children:"Breaking"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Regions for cores, destroyables, wools, portals, and score boxes must be defined in a ",(0,i.jsx)(n.code,{children:"<region>"})," sub-element or referenced in a ",(0,i.jsx)(n.code,{children:"region"})," attribute."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:'<core>\n    <region>\n        <cuboid min="..." max="..."/>\n    </region>\n</core>\n<core region="my-region"/>\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Similarly, spawn regions must be defined in a ",(0,i.jsx)(n.code,{children:"<regions>"})," sub-element or referenced in a ",(0,i.jsx)(n.code,{children:"regions"})," attribute."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:'<spawns>\n    <spawn team="red">\n        <regions yaw="90">\n            <cuboid min="1,0,2" max="3,0,4"/>\n            <cylinder base="7,8,9" radius="5" height="0"/>\n        </regions>\n    </spawn>\n</spawns>\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Everything scores 0 points by default, this means you have to explicitly define ",(0,i.jsx)(n.code,{children:"<kills>"})," and ",(0,i.jsx)(n.code,{children:"<deaths>"})," in the score module if you want players to get points for killing players."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>l});var i=s(7294);const r={},t=i.createContext(r);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);