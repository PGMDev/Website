"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4889],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),u=o,g=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return r?n.createElement(g,a(a({ref:t},c),{},{components:r})):n.createElement(g,a({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3272:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294),o=r(2949);const i=e=>{let{lightImageSrc:t,darkImageSrc:r}=e;const{colorMode:i,setColorMode:a}=(0,o.I)();return n.createElement("img",{src:"dark"===i?r:t,alt:"This image needs JS enabled to load."})}},8352:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(7462),o=(r(7294),r(3905)),i=r(3272);const a={id:"filter-apply-order",title:"Filter Apply Order"},l=void 0,p={unversionedId:"guides/xml-pointers/filter-apply-order",id:"guides/xml-pointers/filter-apply-order",title:"Filter Apply Order",description:"After proto 1.3.3 and above, the order that you apply filters to regions affects their behavior.",source:"@site/docs/guides/xml-pointers/filter-apply-order.mdx",sourceDirName:"guides/xml-pointers",slug:"/guides/xml-pointers/filter-apply-order",permalink:"/docs/guides/xml-pointers/filter-apply-order",draft:!1,editUrl:"https://github.com/PGMDev/Website/tree/master/src/docs/guides/xml-pointers/filter-apply-order.mdx",tags:[],version:"current",frontMatter:{id:"filter-apply-order",title:"Filter Apply Order"},sidebar:"Guides",previous:{title:"Using Filters and Regions",permalink:"/docs/guides/xml-pointers/applying-to-regions"},next:{title:"XML Conventions",permalink:"/docs/guides/xml-pointers/conventions"}},s={},c=[],d={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"After proto ",(0,o.kt)("inlineCode",{parentName:"p"},"1.3.3")," and above, the order that you ",(0,o.kt)("a",{parentName:"p",href:"/docs/modules/mechanics/regions#applying"},"apply")," filters to regions affects their behavior.\nHere's an example."),(0,o.kt)("p",null,"Let's start out with a basic filter that ",(0,o.kt)("strong",{parentName:"p"},"denies")," everything ",(0,o.kt)("strong",{parentName:"p"},"except")," TNT."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<all id="only-tnt">\n    <block>tnt</block>\n</all>\n')),(0,o.kt)("p",null,"Now let's apply this filter to ",(0,o.kt)("inlineCode",{parentName:"p"},"Region A"),", and also apply a filter to ",(0,o.kt)("inlineCode",{parentName:"p"},"Region B")," that denies all blocks."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<apply block="only-tnt" region="region-a"/>\n\n<apply block="never" region="region-b"/>\n')),(0,o.kt)("p",null,"However, there is one slight complication. ",(0,o.kt)("inlineCode",{parentName:"p"},"Region B")," is inside of ",(0,o.kt)("inlineCode",{parentName:"p"},"Region A"),".\nSo which filter will override the other? This is where the apply order comes in handy."),(0,o.kt)(i.Z,{lightImageSrc:"/img/apply-order.png",darkImageSrc:"/img/apply-order-dark.png",mdxType:"ImageSwitcher"}),(0,o.kt)("p",null,"The order that you put the ",(0,o.kt)("inlineCode",{parentName:"p"},"<apply>")," tags can change the outcome when something gets filtered.\nIn the previous example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"only-tnt")," filter would always override the ",(0,o.kt)("inlineCode",{parentName:"p"},"never")," filter since it is above it.\nThe apply for ",(0,o.kt)("inlineCode",{parentName:"p"},"region B")," won't get checked since it overlaps completely with ",(0,o.kt)("inlineCode",{parentName:"p"},"region A")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"region A")," never returns abstain."),(0,o.kt)("p",null,"If we changed the order of the filters:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<apply block="never" region="region-b"/>\n<apply block="only-tnt" region="region-a"/>\n')),(0,o.kt)("p",null,"Now you cannot place blocks in ",(0,o.kt)("inlineCode",{parentName:"p"},"Region B"),", but outside of it in ",(0,o.kt)("inlineCode",{parentName:"p"},"Region A")," you can only place TNT blocks."),(0,o.kt)("p",null,"Although this may not be an issue for many maps such as a Blitz map or a TDM,\nthis is a crucial concept for many DTC/DTM/CTW maps that use the ",(0,o.kt)("inlineCode",{parentName:"p"},"<void/>")," filter.\nUsually it's best to have the ",(0,o.kt)("inlineCode",{parentName:"p"},"<void/>")," filter at the lowest priority (at the bottom of the list)."))}u.isMDXComponent=!0}}]);