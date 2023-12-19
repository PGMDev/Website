"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7443],{4750:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var d=s(5893),t=s(1151);const i={id:"cleaning-files",title:"Cleaning Files"},r=void 0,l={id:"guides/preparing/cleaning-files",title:"Cleaning Files",description:"Minecraft will generate quite a few files in your world folder when you create a world.",source:"@site/docs/guides/preparing/cleaning-files.mdx",sourceDirName:"guides/preparing",slug:"/guides/preparing/cleaning-files",permalink:"/docs/guides/preparing/cleaning-files",draft:!1,unlisted:!1,editUrl:"https://github.com/PGMDev/Website/tree/master/docs/guides/preparing/cleaning-files.mdx",tags:[],version:"current",frontMatter:{id:"cleaning-files",title:"Cleaning Files"},sidebar:"Guides",previous:{title:"XML Conventions",permalink:"/docs/guides/xml-pointers/conventions"},next:{title:"Pruning Chunks",permalink:"/docs/guides/preparing/pruning-chunks"}},a={},c=[];function o(e){const n={code:"code",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:"Minecraft will generate quite a few files in your world folder when you create a world.\nMost of these files are not needed and by deleting them you can reduce the file size when it comes to uploading your world."}),"\n",(0,d.jsx)(n.p,{children:"Below is a table which displays all the files that may be generated in your world folder, along with a description and whether or not the file is required."}),"\n",(0,d.jsx)("div",{className:"table-container",children:(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"File Name"}),(0,d.jsx)(n.th,{style:{textAlign:"center"},children:"Required?"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"level.dat"})}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:(0,d.jsx)("span",{className:"badge badge--success",children:"YES"})}),(0,d.jsx)(n.td,{children:"Stores global information about the world such as name and generation type."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"region/*.mca"})}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:(0,d.jsx)("span",{className:"badge badge--success",children:"YES"})}),(0,d.jsxs)(n.td,{children:["Contains all the region files of your world.",(0,d.jsx)("br",{}),"Individual region files using ",(0,d.jsx)(n.code,{children:".mcr"})," extension should not be included if the world was converted to Anvil."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"data/map_[#].dat"})}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:(0,d.jsx)("span",{className:"badge badge--warning",children:"DEPENDS"})}),(0,d.jsx)(n.td,{children:"Stores map data for craftable maps \u2014 remove if you are not using custom map items."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"level.dat_mcr"})}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:(0,d.jsx)("span",{className:"badge badge--danger",children:"NO"})}),(0,d.jsxs)(n.td,{children:["A backup of ",(0,d.jsx)(n.code,{children:"level.dat"})," before the map was converted from the MCRegion world format to Anvil. This is typically seen in older maps built before Minecraft 1.2.1."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"level.dat_old"})}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:(0,d.jsx)("span",{className:"badge badge--danger",children:"NO"})}),(0,d.jsx)(n.td,{children:"A backup of an older version of the level.dat file."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"session.lock"})}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:(0,d.jsx)("span",{className:"badge badge--danger",children:"NO"})}),(0,d.jsx)(n.td,{children:"A timestamp when the level was last accessed. This is typically seen while a map is actively being used or modified by a third-party program."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"playerdata/"})," or ",(0,d.jsx)(n.code,{children:"players/"})]}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:(0,d.jsx)("span",{className:"badge badge--danger",children:"NO"})}),(0,d.jsx)(n.td,{children:"Contains files which store the individual states of each player."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"data/villages.dat"})}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:(0,d.jsx)("span",{className:"badge badge--danger",children:"NO"})}),(0,d.jsx)(n.td,{children:"Stores information about Villages in the world."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"DIM-1/"})," and ",(0,d.jsx)(n.code,{children:"DIM1/"})]}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:(0,d.jsx)("span",{className:"badge badge--danger",children:"NO"})}),(0,d.jsxs)(n.td,{children:["Contains all the region files for The Nether (",(0,d.jsx)(n.code,{children:"DIM-1"}),") and The End (",(0,d.jsx)(n.code,{children:"DIM1"}),")."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"stats/"})}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:(0,d.jsx)("span",{className:"badge badge--danger",children:"NO"})}),(0,d.jsx)(n.td,{children:"Contains achievements and other statistics."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"##MCEDIT.TEMP##/"})}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:(0,d.jsx)("span",{className:"badge badge--danger",children:"NO"})}),(0,d.jsx)(n.td,{children:"Generated while a map is being edited in MCEdit."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"forcedchunks.dat"})}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:(0,d.jsx)("span",{className:"badge badge--danger",children:"NO"})}),(0,d.jsx)(n.td,{children:"Typically seen in maps that was loaded on Minecraft with mods involving chunk loaders."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"customnpcs"})}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:(0,d.jsx)("span",{className:"badge badge--danger",children:"NO"})}),(0,d.jsx)(n.td,{children:"Generated by MCEdit or NBTEdit."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"NEI"})}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:(0,d.jsx)("span",{className:"badge badge--danger",children:"NO"})}),(0,d.jsx)(n.td,{children:"Generated by Not Enough Items."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"spc"})}),(0,d.jsx)(n.td,{style:{textAlign:"center"},children:(0,d.jsx)("span",{className:"badge badge--danger",children:"NO"})}),(0,d.jsx)(n.td,{children:"Generated by Single Player Commands."})]})]})]})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>r});var d=s(7294);const t={},i=d.createContext(t);function r(e){const n=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);