"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1183],{7826:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=i(5893),s=i(1151);const o={id:"regions",title:"Defining Regions"},r=void 0,a={id:"guides/xml-pointers/regions",title:"Defining Regions",description:"First of all, region coordinates in PGM are real numbers.",source:"@site/docs/guides/xml-pointers/regions.mdx",sourceDirName:"guides/xml-pointers",slug:"/guides/xml-pointers/regions",permalink:"/docs/guides/xml-pointers/regions",draft:!1,unlisted:!1,editUrl:"https://github.com/PGMDev/Website/tree/master/docs/guides/xml-pointers/regions.mdx",tags:[],version:"current",lastUpdatedAt:1702944966e3,frontMatter:{id:"regions",title:"Defining Regions"},sidebar:"Guides",next:{title:"Using Filters and Regions",permalink:"/docs/guides/xml-pointers/applying-to-regions"}},d={},c=[{value:"Cuboid",id:"cuboid",level:3},{value:"Cylinder",id:"cylinder",level:3},{value:"Regions: The Wrong Way",id:"regions-the-wrong-way",level:3}];function h(e){const n={code:"code",em:"em",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["First of all, region coordinates in PGM are ",(0,t.jsx)(n.em,{children:"real numbers"}),".\nThat means they can be fractional values, like ",(0,t.jsx)(n.code,{children:"2.3"}),", ",(0,t.jsx)(n.code,{children:"4.5"}),", ",(0,t.jsx)(n.code,{children:"6.789"}),", and so on.\nA coordinate represents a ",(0,t.jsx)(n.em,{children:"point"})," on one of the three axes (X, Y, or Z), and a set of three coordinates represents a ",(0,t.jsx)(n.em,{children:"point"})," in 3D space.\nCoordinates do ",(0,t.jsx)(n.strong,{children:"not"})," represent blocks, at least not ",(0,t.jsx)(n.em,{children:"directly"}),".\nWhen PGM needs to decide if a block is inside a region, it checks if the point at the ",(0,t.jsx)(n.strong,{children:"center"})," of the block is inside the region.\nThe center point of a block will always have coordinates that end in ",(0,t.jsx)(n.code,{children:"0.5"}),".\nWhen making regions, you have to make sure that all the block centers are ",(0,t.jsx)(n.em,{children:"inside"})," the region."]}),"\n",(0,t.jsx)(n.h3,{id:"cuboid",children:"Cuboid"}),"\n",(0,t.jsx)(n.p,{children:"Here is an example. Let us say we want to make a region for a destroyable monument that looks like this:"}),"\n",(0,t.jsx)("div",{className:"text--center",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"An overview of a polished andesite tower.",src:i(817).Z+"",title:"An overview of a polished andesite tower.",width:"800",height:"300"})})}),"\n",(0,t.jsxs)(n.p,{children:["First, we stand very close to one ",(0,t.jsx)(n.strong,{children:"corner"})," of the region and note the coordinates are ",(0,t.jsx)(n.code,{children:"(32, 60, -20)"}),":"]}),"\n",(0,t.jsx)("div",{className:"text--center",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"The player in this screenshot is standing at the top edge of the polished andesite tower. The coordinates are visible in the corner.",src:i(3710).Z+"",title:"The player in this screenshot is standing at the top edge of the polished andesite tower. The coordinates are visible in the corner.",width:"800",height:"498"})})}),"\n",(0,t.jsxs)(n.p,{children:["Then, we stand over the opposite corner and note the coordinates are ",(0,t.jsx)(n.code,{children:"(34, 60, -18)"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["We know the monument is three blocks tall, so we will just subtract 3 from the Y coordinate to get ",(0,t.jsx)(n.code,{children:"(34, 57, -18)"}),":"]}),"\n",(0,t.jsx)("div",{className:"text--center",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"The player in this screenshot is standing at the same top edge, but on the opposite corners. The coordinates are visible in the corner.",src:i(5382).Z+"",title:"The player in this screenshot is standing at the same top edge, but on the opposite corners. The coordinates are visible in the corner.",width:"800",height:"498"})})}),"\n",(0,t.jsxs)(n.p,{children:["Notice that we are rounding to the ",(0,t.jsx)(n.strong,{children:"nearest"})," integer, since those will be the coordinates of the corner we are standing close to.\nWe do not need to worry about positive vs negative coordinates, as they work the same way, and we never need to add or subtract one."]}),"\n",(0,t.jsx)(n.p,{children:"With these coordinates, we can make a cuboid region for the monument:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<cuboid min="32,60,-20" max="34,57,-18"/>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["For style points, we can make sure all the low coordinates are in ",(0,t.jsx)(n.code,{children:"min"})," and the high ones in ",(0,t.jsx)(n.code,{children:"max"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<cuboid min="32,57,-20" max="34,60,-18"/>\n'})}),"\n",(0,t.jsx)(n.p,{children:"This is not necessary, as PGM will fix it for you, but it might make the XML easier for a human to read and edit."}),"\n",(0,t.jsx)(n.p,{children:"An easy way to check that cuboid regions are correct is to simply subtract the low coordinates from the high ones.\nThe result should be the size of the region. If it is not, you may need to check both the coordinates and your calculation again."}),"\n",(0,t.jsx)(n.h3,{id:"cylinder",children:"Cylinder"}),"\n",(0,t.jsxs)(n.p,{children:["Let us try a more interesting region: a cylinder.\nA cylinder is defined by its base (center) point, radius, and height.\nAssuming one layer of blocks, the cylinder in the image below is based at ",(0,t.jsx)(n.code,{children:"(53.5, 57, -10.5)"})," and has a radius of ",(0,t.jsx)(n.code,{children:"2.5"})," and a height of ",(0,t.jsx)(n.code,{children:"1"}),".\nBlocks with their center point inside the cylinder will be considered part of the region."]}),"\n",(0,t.jsx)(n.p,{children:"The region boundary and the block centers are highlighted, so you can easily see how this works:"}),"\n",(0,t.jsx)("div",{className:"text--center",children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"The topdown view of a cylinder region with a highlight showing a radius of 5 blocks.",src:i(8817).Z+"",title:"The topdown view of a cylinder region with a highlight showing a radius of 5 blocks.",width:"800",height:"498"})})}),"\n",(0,t.jsx)(n.p,{children:"So the region would be:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<cylinder base="53.5,57,-10.5" radius="2.5" height="1"/>\n'})}),"\n",(0,t.jsx)(n.h3,{id:"regions-the-wrong-way",children:"Regions: The Wrong Way"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"DO NOT USE"})," use WorldEdit to get region coordinates.\nWorldEdit uses a different coordinate system that will not give you correct regions. Although it is possible to convert the coordinates,\nit is not worth the extra work and mistakes it can cause."]})]})}function l(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},3710:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/cuboid-c1-e21df495d02e8b26bf9081d36343624d.png"},5382:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/cuboid-c2-ec61cc8382ea0ac28d8445eca7eaaaab.png"},817:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/cuboid-overview-02605fa2340b30997c996d4b56437386.png"},8817:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/cylinder-overview-399d9bbcd31258e00dc2dec327985349.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>r});var t=i(7294);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);