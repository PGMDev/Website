"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8383],{3905:(t,e,l)=>{l.d(e,{Zo:()=>d,kt:()=>p});var n=l(7294);function a(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function r(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function u(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?r(Object(l),!0).forEach((function(e){a(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function o(t,e){if(null==t)return{};var l,n,a=function(t,e){if(null==t)return{};var l,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)l=r[n],e.indexOf(l)>=0||(a[l]=t[l]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)l=r[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(a[l]=t[l])}return a}var i=n.createContext({}),s=function(t){var e=n.useContext(i),l=e;return t&&(l="function"==typeof t?t(e):u(u({},e),t)),l},d=function(t){var e=s(t.components);return n.createElement(i.Provider,{value:e},t.children)},k="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var l=t.components,a=t.mdxType,r=t.originalType,i=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),k=s(l),c=a,p=k["".concat(i,".").concat(c)]||k[c]||m[c]||r;return l?n.createElement(p,u(u({ref:e},d),{},{components:l})):n.createElement(p,u({ref:e},d))}));function p(t,e){var l=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=l.length,u=new Array(r);u[0]=c;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o[k]="string"==typeof t?t:a,u[1]=o;for(var s=2;s<r;s++)u[s]=l[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,l)}c.displayName="MDXCreateElement"},9699:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>i,contentTitle:()=>u,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=l(7462),a=(l(7294),l(3905));const r={id:"main",title:"Main Map Element"},u=void 0,o={unversionedId:"modules/general/main",id:"modules/general/main",title:"Main Map Element",description:"Every map XML file must contain the base `` module. It contains modules that specify the map name, version, objective, authors, contributors and all other map settings. The objective is the text that players see when they join the match, and so it's important for this to be very clear, concise, and informative.",source:"@site/docs/modules/general/main.mdx",sourceDirName:"modules/general",slug:"/modules/general/main",permalink:"/docs/modules/general/main",draft:!1,editUrl:"https://github.com/PGMDev/Website/tree/master/src/docs/modules/general/main.mdx",tags:[],version:"current",frontMatter:{id:"main",title:"Main Map Element"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/modules/general/introduction"},next:{title:"Protocol Versions",permalink:"/docs/modules/general/proto"}},i={},s=[{value:"Map Attributes",id:"map-attributes",level:5},{value:"Map Sub-elements",id:"map-sub-elements",level:5},{value:"Authors &amp; Contributors",id:"authors--contributors",level:3},{value:"Author or Contributor Sub-elements",id:"author-or-contributor-sub-elements",level:4},{value:"Author &amp; Contributor Attributes",id:"author--contributor-attributes",level:5},{value:"Include Statements",id:"include-statements",level:3},{value:"Map Gamemode",id:"map-gamemode",level:3},{value:"Gamemode IDs",id:"gamemode-ids",level:4}],d={toc:s},k="wrapper";function m(t){let{components:e,...l}=t;return(0,a.kt)(k,(0,n.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Every map XML file must contain the base ",(0,a.kt)("inlineCode",{parentName:"p"},"<map>")," module. It contains modules that specify the map name, version, objective, authors, contributors and all other map settings. The objective is the text that players see when they join the match, and so it's important for this to be very clear, concise, and informative."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},'proto=""')," attribute specifies what PGM version the XML file was created for. Mapmakers should always use the latest supported proto version, which is documented in depth at ",(0,a.kt)("a",{parentName:"p",href:"docs/modules/general/proto"},"Protocol Versions"),"."),(0,a.kt)("p",null,"The maps version should follow the versioning schema ",(0,a.kt)("inlineCode",{parentName:"p"},"major.minor.patch"),"."),(0,a.kt)("div",{className:"table-container"},(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Map Element"),(0,a.kt)("th",null,"Description"),(0,a.kt)("th",null,"Value/Children"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<map> </map>")),(0,a.kt)("td",null,"The main map node containing all the modules used in this match."),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--secondary"},"XML Modules")))))),(0,a.kt)("h5",{id:"map-attributes"},"Map Attributes"),(0,a.kt)("div",{className:"table-container"},(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Attribute"),(0,a.kt)("th",null,"Description"),(0,a.kt)("th",null,"Value"),(0,a.kt)("th",null,"Default"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"proto")),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--danger"},"Required"),"The map's XML protocol version."),(0,a.kt)("td",null,(0,a.kt)("label",null,"1.4.2")),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"internal")),(0,a.kt)("td",null,"Prevent compass teleports above Y 255"),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"true/false")),(0,a.kt)("td",null,"false"))))),(0,a.kt)("h5",{id:"map-sub-elements"},"Map Sub-elements"),(0,a.kt)("div",{className:"table-container"},(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Element"),(0,a.kt)("th",null,"Description"),(0,a.kt)("th",null,"Value/Children"),(0,a.kt)("th",null,"Default"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<name>")),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--danger"},"Required"),"The name of the map."),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"String")),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<slug>")),(0,a.kt)("td",null,"The map's slug, usually auto generated from the maps name. This should only be used when a map is renamed to retain the map's ratings, etc.",(0,a.kt)("br",null),"Valid slugs are lowercase and only contain the characters:"," ",(0,a.kt)("label",null,"a-z 0-9 _")),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"String")),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--secondary"},"Auto Generated"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<version>")),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--danger"},"Required"),"The map's ",(0,a.kt)("a",{href:"https://semver.org"},"semantic version")," string."),(0,a.kt)("td",null,(0,a.kt)("label",null,"1.0.0")),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<objective>")),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--danger"},"Required"),"The map's objective, shown at the start of the match."),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"String")),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<authors>")),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--danger"},"Required"),"The authors of the map, at least one author is required."),(0,a.kt)("td",null,(0,a.kt)("label",null,"<author>")),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<contributors>")),(0,a.kt)("td",null,"Contributors to the map."),(0,a.kt)("td",null,(0,a.kt)("label",null,"<contributor>")),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<created>")),(0,a.kt)("td",null,"The date on which this map was initially released."),(0,a.kt)("td",null,(0,a.kt)("label",null,"YYYY-MM-DD")),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<phase>")),(0,a.kt)("td",null,"Phase of this map. Only maps with ",(0,a.kt)("label",null,"production")," and",(0,a.kt)("label",null,"standard")," show up on the website."),(0,a.kt)("td",null,(0,a.kt)("label",null,"development"),(0,a.kt)("label",null,"production")),(0,a.kt)("td",null,(0,a.kt)("label",null,"production"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<edition>")),(0,a.kt)("td",null,"Edition of this map, describes which servers it is run on."),(0,a.kt)("td",null,(0,a.kt)("label",null,"standard"),(0,a.kt)("label",null,"ranked"),(0,a.kt)("label",null,"tournament")),(0,a.kt)("td",null,(0,a.kt)("label",null,"standard"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<game>")),(0,a.kt)("td",null,"A custom title for this match's gamemode."),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"String")),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<gamemode>")),(0,a.kt)("td",null,(0,a.kt)("a",{className:"left-ref-link",href:"#gamemode"},(0,a.kt)("i",{className:"fa fa-chevron-down"})),"The gamemode(s) of this map, if this is not specified the map will set the gamemode(s) to whatever modules are used."),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"Gamemode ID")),(0,a.kt)("td",null))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<map proto="1.4.2">\n<name>Map Name</name>\n<version>1.0.0</version>\n<objective>Short description about the maps objective.</objective>\n\n\x3c!-- Map authors & contributors. --\x3e\n\n\x3c!-- Map modules, i.e. objectives, regions, spawns. --\x3e\n\n</map>\n')),(0,a.kt)("h3",{id:"authors--contributors"},"Authors & Contributors"),(0,a.kt)("p",null,"The authors and contributers elements provide information about who created and helped create the map. There can be multiple authors and contributors to a map. The contribution attribute should be used to specify what their contribution to the map was."),(0,a.kt)("p",null,"A player's name should ",(0,a.kt)("strong",{parentName:"p"},"not")," be used to credit them, instead their UUID should be used. A UUID is a unique user identifier that is used to keep track of players even if they change their name. You can check player UUIDs at ",(0,a.kt)("a",{parentName:"p",href:"https://mcuuid.net/"},"mcuuid.net"),". If an author or contributor is defined without a UUID, that player will not get any mapmaker perks on the map."),(0,a.kt)("h4",{id:"author-or-contributor-sub-elements"},"Author or Contributor Sub-elements"),(0,a.kt)("div",{className:"table-container"},(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Element"),(0,a.kt)("th",null,"Description"),(0,a.kt)("th",null,"Value/Children"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<author>")),(0,a.kt)("td",null,"A major author of the map, used in",(0,a.kt)("label",null,"<authors>"),(0,a.kt)("br",null)),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"String"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<contributor>")),(0,a.kt)("td",null,"A contributor to the map, used in",(0,a.kt)("label",null,"<contributors>")),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"String")))))),(0,a.kt)("h5",{id:"author--contributor-attributes"},"Author & Contributor Attributes"),(0,a.kt)("div",{className:"table-container"},(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Attribute"),(0,a.kt)("th",null,"Description"),(0,a.kt)("th",null,"Value"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"contribution")),(0,a.kt)("td",null,"The contribution this author or contributor made to the map."),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"String"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"uuid")),(0,a.kt)("td",null,"UUID used to identify a player."),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"String")))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- Major map authors. --\x3e\n<authors>\n    <author>aPerson</author>\n    <author uuid="ef4ea031-998f-4ec9-b7b6-1bdd428bcef8" contribution="Clarification of element usage, etc."/> \x3c!-- Plastix --\x3e\n    <author uuid="260004f0-996b-4539-ba21-df4ee6336b63"/> \x3c!-- Elliott_ --\x3e\n</authors>\n\n\x3c!-- People that contributed in some way to the map. --\x3e\n<contributors>\n    \x3c!-- Credit a person that doesn\'t have a Minecraft account --\x3e\n    <contributor contribution="A contribution">aHelper</contributor>\n    <contributor uuid="3fbec7dd-0a5f-40bf-9d11-885a54507112" contribution="Some Help"/> \x3c!-- Cubist --\x3e\n</contributors>\n')),(0,a.kt)("h3",{id:"include-statements"},"Include Statements"),(0,a.kt)("p",null,"Include statements allow for global XML files to be loaded and re-used across different maps.\nThis can be used to standardize values across maps.\nBelow is an example includes file that can be used on Blitz maps:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="/server/includes/blitz.xml"',title:'"/server/includes/blitz.xml"'},"\x3c!-- the location for include files is defined in config.yml --\x3e\n<map>\n    <blitz>\n        <lives>5</lives>\n    </blitz>\n</map>\n")),(0,a.kt)("p",null,"The file is automatically given an ID based on the file name, which in this case is ",(0,a.kt)("inlineCode",{parentName:"p"},"blitz"),".\nThen it can be added into the main ",(0,a.kt)("inlineCode",{parentName:"p"},"map.xml"),". Multiple include statements can be used per map."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="/server/maps/map_name/map.xml"',title:'"/server/maps/map_name/map.xml"'},'<map>\n  ...\n  \x3c!-- All maps with this include statement will give the player 5 lives --\x3e\n  <include id="blitz"/>\n  ...\n</map>\n')),(0,a.kt)("h3",{id:"map-gamemode"},"Map Gamemode"),(0,a.kt)("p",null,"The gamemode element is used to specify the gamemode(s) of the map.\nThis mainly affects how the map is displayed.\nIf no ",(0,a.kt)("inlineCode",{parentName:"p"},"<gamemode>"),' tags are specified the map will set the gamemode(s) to whatever modules are used.\nThis means that a map that uses destroyables and flags would be displayed as "DTM and CTF" unless specified otherwise.'),(0,a.kt)("div",{className:"table-container"},(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Element"),(0,a.kt)("th",null,"Description"),(0,a.kt)("th",null,"Value/Children"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"<gamemode> </gamemode>")),(0,a.kt)("td",null,"The gamemode(s) of this map."),(0,a.kt)("td",null,(0,a.kt)("span",{className:"badge badge--primary"},"Gamemode ID")))))),(0,a.kt)("h4",{id:"gamemode-ids"},"Gamemode IDs"),(0,a.kt)("div",{className:"table-container"},(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"ID"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"ad")),(0,a.kt)("td",null,"Attack/Defend")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"arcade")),(0,a.kt)("td",null,"Arcade")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"blitz")),(0,a.kt)("td",null,"Blitz")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"br")),(0,a.kt)("td",null,"Blitz: Rage")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"cp")),(0,a.kt)("td",null,"Control the Point")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"ctf")),(0,a.kt)("td",null,"Capture the Flag")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"ctw")),(0,a.kt)("td",null,"Capture the Wool")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"dtc")),(0,a.kt)("td",null,"Destroy the Core")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"dtm")),(0,a.kt)("td",null,"Destroy the Monument")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"ffa")),(0,a.kt)("td",null,"Free for All")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"ffb")),(0,a.kt)("td",null,"Flag Football")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"kotf")),(0,a.kt)("td",null,"King of the Flag")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"koth")),(0,a.kt)("td",null,"King of the Hill")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"mixed")),(0,a.kt)("td",null,"Mixed")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"pd")),(0,a.kt)("td",null,"Payload")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"rage")),(0,a.kt)("td",null,"Rage")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"rfw")),(0,a.kt)("td",null,"Race for Wool")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"scorebox")),(0,a.kt)("td",null,"Scorebox")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"skywars")),(0,a.kt)("td",null,"Skywars")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("label",null,"tdm")),(0,a.kt)("td",null,"Deathmatch"))))),(0,a.kt)("p",null,"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- A FFA map with scoreboxes --\x3e\n<gamemode>ffa</gamemode>\n<gamemode>scorebox</gamemode>\n")))}m.isMDXComponent=!0}}]);