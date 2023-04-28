"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1183],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,g=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return n?r.createElement(g,a(a({ref:t},d),{},{components:n})):r.createElement(g,a({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3444:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={id:"regions",title:"Defining Regions"},a=void 0,s={unversionedId:"guides/xml-pointers/regions",id:"guides/xml-pointers/regions",title:"Defining Regions",description:"First of all, region coordinates in PGM are real numbers.",source:"@site/docs/guides/xml-pointers/regions.mdx",sourceDirName:"guides/xml-pointers",slug:"/guides/xml-pointers/regions",permalink:"/docs/guides/xml-pointers/regions",draft:!1,editUrl:"https://github.com/PGMDev/Website/tree/master/src/docs/guides/xml-pointers/regions.mdx",tags:[],version:"current",frontMatter:{id:"regions",title:"Defining Regions"},sidebar:"Guides",next:{title:"Using Filters and Regions",permalink:"/docs/guides/xml-pointers/applying-to-regions"}},l={},c=[{value:"Cuboid",id:"cuboid",level:3},{value:"Cylinder",id:"cylinder",level:3},{value:"Regions: The Wrong Way",id:"regions-the-wrong-way",level:3}],d={toc:c},p="wrapper";function u(e){let{components:t,...i}=e;return(0,o.kt)(p,(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"First of all, region coordinates in PGM are ",(0,o.kt)("em",{parentName:"p"},"real numbers"),".\nThat means they can be fractional values, like ",(0,o.kt)("inlineCode",{parentName:"p"},"2.3"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"4.5"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"6.789"),", and so on.\nA coordinate represents a ",(0,o.kt)("em",{parentName:"p"},"point")," on one of the three axes (X, Y, or Z), and a set of three coordinates represents a ",(0,o.kt)("em",{parentName:"p"},"point")," in 3D space.\nCoordinates do ",(0,o.kt)("strong",{parentName:"p"},"not")," represent blocks, at least not ",(0,o.kt)("em",{parentName:"p"},"directly"),".\nWhen PGM needs to decide if a block is inside a region, it checks if the point at the ",(0,o.kt)("strong",{parentName:"p"},"center")," of the block is inside the region.\nThe center point of a block will always have coordinates that end in ",(0,o.kt)("inlineCode",{parentName:"p"},"0.5"),".\nWhen making regions, you have to make sure that all the block centers are ",(0,o.kt)("em",{parentName:"p"},"inside")," the region."),(0,o.kt)("h3",{id:"cuboid"},"Cuboid"),(0,o.kt)("p",null,"Here is an example. Let us say we want to make a region for a destroyable monument that looks like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"An overview of a polished andesite tower",src:n(817).Z,width:"800",height:"300"})),(0,o.kt)("p",null,"First, we stand very close to one ",(0,o.kt)("strong",{parentName:"p"},"corner")," of the region and note the coordinates are ",(0,o.kt)("inlineCode",{parentName:"p"},"(32, 60, -20)"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(3710).Z,width:"800",height:"498"})),(0,o.kt)("p",null,"Then, we stand over the opposite corner and note the coordinates are ",(0,o.kt)("inlineCode",{parentName:"p"},"(34, 60, -18)"),"."),(0,o.kt)("p",null,"We know the monument is three blocks tall, so we will just subtract 3 from the Y coordinate to get ",(0,o.kt)("inlineCode",{parentName:"p"},"(34, 57, -18)"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5382).Z,width:"800",height:"498"})),(0,o.kt)("p",null,"Notice that we are rounding to the ",(0,o.kt)("strong",{parentName:"p"},"nearest")," integer, since those will be the coordinates of the corner we are standing close to.\nWe do not need to worry about positive vs negative coordinates, as they work the same way, and we never need to add or subtract one."),(0,o.kt)("p",null,"With these coordinates, we can make a cuboid region for the monument:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<cuboid min="32,60,-20" max="34,57,-18"/>\n')),(0,o.kt)("p",null,"For style points, we can make sure all the low coordinates are in ",(0,o.kt)("inlineCode",{parentName:"p"},"min")," and the high ones in ",(0,o.kt)("inlineCode",{parentName:"p"},"max"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<cuboid min="32,57,-20" max="34,60,-18"/>\n')),(0,o.kt)("p",null,"This is not necessary, as PGM will fix it for you, but it might make the XML easier for a human to read and edit."),(0,o.kt)("p",null,"An easy way to check that cuboid regions are correct is to simply subtract the low coordinates from the high ones.\nThe result should be the size of the region. If it is not, you may need to check both the coordinates and your calculation again."),(0,o.kt)("h3",{id:"cylinder"},"Cylinder"),(0,o.kt)("p",null,"Let us try a more interesting region: a cylinder.\nA cylinder is defined by its base (center) point, radius, and height.\nAssuming one layer of blocks, the cylinder in the image below is based at ",(0,o.kt)("inlineCode",{parentName:"p"},"(53.5, 57, -10.5)")," and has a radius of ",(0,o.kt)("inlineCode",{parentName:"p"},"2.5")," and a height of ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),".\nBlocks with their center point inside the cylinder will be considered part of the region."),(0,o.kt)("p",null,"The region boundary and the block centers are highlighted, so you can easily see how this works:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"The topdown view of a cylinder region with a highlight showing a radius of 5 blocks",src:n(3107).Z,width:"800",height:"498"})),(0,o.kt)("p",null,"So the region would be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<cylinder base="53.5,57,-10.5" radius="2.5" height="1"/>\n')),(0,o.kt)("h3",{id:"regions-the-wrong-way"},"Regions: The Wrong Way"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"DO NOT USE")," use WorldEdit to get region coordinates.\nWorldEdit uses a different coordinate system that will not give you correct regions. Although it is possible to convert the coordinates,\nit is not worth the extra work and mistakes it can cause."))}u.isMDXComponent=!0},3710:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cuboid-c1-b689a74fc930e4bc64d7eac2afb2173c.png"},5382:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cuboid-c2-b5b3dd598126bc0ca8e1e2e36a7ff4ff.png"},817:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cuboid-overview-ed137af11388e604059f48a55575ef22.png"},3107:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cylinder-overview-27022c6c8c1331398c01b6a6d6e89b1d.png"}}]);