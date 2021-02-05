(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{191:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),i=n(9),o=(n(0),n(215)),a={id:"time",title:"Time & Dimension"},c={id:"modules/environment/time",title:"Time & Dimension",description:"### Time",source:"@site/docs/modules/environment/time.mdx",permalink:"/docs/modules/environment/time",editUrl:"https://github.com/PGMDev/Website/edit/master/docs/modules/environment/time.mdx",sidebar:"Modules",previous:{title:"World & Terrain",permalink:"/docs/modules/environment/world"},next:{title:"World Border",permalink:"/docs/modules/environment/border"}},l=[{value:"Time",id:"time",children:[]},{value:"Dimension",id:"dimension",children:[]}],m={rightToc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"time"},"Time"),Object(o.b)("p",null,"Lock the time to what the map was saved with. Change the maps time to midnight and then save it. The time will then remain locked to midnight the whole game through. This can also be accomplished with the ",Object(o.b)("inlineCode",{parentName:"p"},"doDaylightCycle")," ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/modules/mechanics/gamerules"}),"gamerule"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<timelock>on</timelock>  \x3c!-- Defaults to off --\x3e\n")),Object(o.b)("h3",{id:"dimension"},"Dimension"),Object(o.b)("p",null,"Change the dimension the map is played in to ",Object(o.b)("inlineCode",{parentName:"p"},"nether"),", ",Object(o.b)("inlineCode",{parentName:"p"},"normal")," or ",Object(o.b)("inlineCode",{parentName:"p"},"the end"),". The default is ",Object(o.b)("inlineCode",{parentName:"p"},"normal"),".\nThis mainly affects the color of the sky and natural mob spawning if it's enabled."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<dimension>nether</dimension>\n")))}p.isMDXComponent=!0},215:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=i.a.createContext({}),p=function(e){var t=i.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=p(e.components);return i.a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,b=s["".concat(a,".").concat(d)]||s[d]||u[d]||o;return n?i.a.createElement(b,c({ref:t},m,{components:n})):i.a.createElement(b,c({ref:t},m))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var m=2;m<o;m++)a[m]=n[m];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);