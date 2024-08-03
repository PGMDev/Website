"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4523],{6933:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var r=t(5893),i=t(1151);const s={id:"world",title:"World & Terrain",description:"You can use these world and terrain modules to have a finer control over your map's environment."},d=void 0,l={id:"modules/environment/world",title:"World & Terrain",description:"You can use these world and terrain modules to have a finer control over your map's environment.",source:"@site/docs/modules/environment/world.mdx",sourceDirName:"modules/environment",slug:"/modules/environment/world",permalink:"/docs/modules/environment/world",draft:!1,unlisted:!1,editUrl:"https://github.com/PGMDev/Website/tree/master/docs/modules/environment/world.mdx",tags:[],version:"current",lastUpdatedAt:1721766315e3,frontMatter:{id:"world",title:"World & Terrain",description:"You can use these world and terrain modules to have a finer control over your map's environment."},sidebar:"docs",previous:{title:"Rules",permalink:"/docs/modules/information/rules"},next:{title:"Time & Dimension",permalink:"/docs/modules/environment/time"}},a={},o=[{value:"Build Height",id:"build-height",level:3},{value:"Terrain",id:"terrain",level:3},{value:"Terrain Attributes",id:"terrain-attributes",level:5},{value:"Internal Maps",id:"internal-maps",level:3}];function h(e){const n={a:"a",code:"code",h3:"h3",h5:"h5",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"build-height",children:"Build Height"}),"\n",(0,r.jsxs)(n.p,{children:["A world's maximum build height can be set using the ",(0,r.jsx)(n.code,{children:"maxbuildheight"})," element.\nOnce a player tries to build past the set maximum build height, they will be prompted with a message stating that they can not build past the playing field."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"<maxbuildheight>64</maxbuildheight>\n"})}),"\n",(0,r.jsx)(n.h3,{id:"terrain",children:"Terrain"}),"\n",(0,r.jsx)(n.p,{children:"A world's terrain generator can be modified to use a specific seed, world and/or whether the vanilla chunk generator is used.\nBy default a new random seed is generated for each match, unless one is specified in the seed attribute."}),"\n",(0,r.jsxs)(n.p,{children:["When using the vanilla generator, the default Minecraft terrain generator will be used instead of generating null chunks.\nThe specific world generation rules such as flat worlds, etc., can be changed by editing the world's ",(0,r.jsx)(n.code,{children:"level.dat"})," file with a NBT editor.\nThe ",(0,r.jsx)(n.code,{children:"RandomSeed"})," value in the level data file is not used."]}),"\n",(0,r.jsxs)(n.p,{children:["Any chunks not in the world's ",(0,r.jsx)(n.code,{children:"region/"})," folder will be generated according to the Minecraft chunk generation rules.\nThis means that only the terrain that you have modified needs to be saved with the world."]}),"\n",(0,r.jsx)("div",{className:"table-container",children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Element"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<terrain />"})}),(0,r.jsx)(n.td,{children:"A node defining properties for this world's generator."})]})})]})}),"\n",(0,r.jsx)(n.h5,{id:"terrain-attributes",children:"Terrain Attributes"}),"\n",(0,r.jsx)("div",{className:"table-container",children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Attribute"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Value"}),(0,r.jsx)(n.th,{children:"Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"vanilla"})}),(0,r.jsx)(n.td,{children:"Specify if this world is uses the vanilla or null chunk generator."}),(0,r.jsx)(n.td,{children:(0,r.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,r.jsx)(n.td,{children:"false"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"seed"})}),(0,r.jsx)(n.td,{children:"The world's seed that determines how the world is generated."}),(0,r.jsx)(n.td,{children:(0,r.jsx)("span",{className:"badge badge--primary",children:"String"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"environment"})}),(0,r.jsxs)(n.td,{children:["The world's dimension type.",(0,r.jsx)("br",{}),(0,r.jsx)(n.strong,{children:"Note:"})," Worlds with ",(0,r.jsx)(n.code,{children:"the end"})," environment are not supported."]}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"normal"}),(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"nether"})]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"normal"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"pre-match-physics"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)("span",{className:"badge badge--danger",title:"This feature once existed, but has not been re-implemented in modern versions of PGM.",children:"N/A"}),"Allow physics events, such as water flowing, before the match starts."]}),(0,r.jsx)(n.td,{children:(0,r.jsx)("span",{className:"badge badge--primary",children:"true/false"})}),(0,r.jsx)(n.td,{children:"false"})]})]})]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"\x3c!-- Make a vanilla world with the seed 'qwerty' --\x3e\n<terrain vanilla=\"true\" seed=\"qwerty\"/>\n\n\x3c!-- Make the world Nether-like. The 'region' folder must be renamed to 'DIM-1' for this to work. --\x3e\n<terrain environment=\"nether\"/>\n"})}),"\n",(0,r.jsx)(n.h3,{id:"internal-maps",children:"Internal Maps"}),"\n",(0,r.jsxs)(n.p,{children:["Maps that are entirely indoors or underground can use the ",(0,r.jsx)(n.code,{children:"internal"})," attribute on the ",(0,r.jsx)(n.a,{href:"/docs/modules/general/main",children:"main map element"}),"\nto prevent observers from accidentally teleporting on top of the map with the compass tool.\nIn order for this to work, the exterior of the map must be completely filled in with solid blocks,\nall the way up to the maximum build height."]}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/docs/modules/general/main",children:"Main Map Element"})]})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>d});var r=t(7294);const i={},s=r.createContext(i);function d(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);