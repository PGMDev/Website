"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5358],{3905:(t,e,l)=>{l.d(e,{Zo:()=>c,kt:()=>m});var n=l(7294);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function i(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function o(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?i(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function a(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)l=i[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)l=i[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var u=n.createContext({}),s=function(t){var e=n.useContext(u),l=e;return t&&(l="function"==typeof t?t(e):o(o({},e),t)),l},c=function(t){var e=s(t.components);return n.createElement(u.Provider,{value:e},t.children)},d="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var l=t.components,r=t.mdxType,i=t.originalType,u=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),d=s(l),p=r,m=d["".concat(u,".").concat(p)]||d[p]||k[p]||i;return l?n.createElement(m,o(o({ref:e},c),{},{components:l})):n.createElement(m,o({ref:e},c))}));function m(t,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=l.length,o=new Array(i);o[0]=p;var a={};for(var u in e)hasOwnProperty.call(e,u)&&(a[u]=e[u]);a.originalType=t,a[d]="string"==typeof t?t:r,o[1]=a;for(var s=2;s<i;s++)o[s]=l[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}p.displayName="MDXCreateElement"},7663:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var n=l(7462),r=(l(7294),l(3905));const i={id:"projectiles",title:"Custom Projectiles"},o=void 0,a={unversionedId:"modules/gear/projectiles",id:"modules/gear/projectiles",title:"Custom Projectiles",description:"Custom projectile types can be defined and applied to items in kits.",source:"@site/docs/modules/gear/projectiles.mdx",sourceDirName:"modules/gear",slug:"/modules/gear/projectiles",permalink:"/docs/modules/gear/projectiles",draft:!1,editUrl:"https://github.com/PGMDev/Website/tree/master/src/docs/modules/gear/projectiles.mdx",tags:[],version:"current",frontMatter:{id:"projectiles",title:"Custom Projectiles"},sidebar:"docs",previous:{title:"Repair, Remove & Keep",permalink:"/docs/modules/gear/repair-remove-keep"},next:{title:"TNT",permalink:"/docs/modules/gear/tnt"}},u={},s=[{value:"Projectiles Element",id:"projectiles-element",level:4},{value:"Projectile Attributes",id:"projectile-attributes",level:3},{value:"Projectile Sub-elements",id:"projectile-sub-elements",level:5},{value:"Modifying Bow Projectiles",id:"modifying-bow-projectiles",level:3},{value:"Custom Projectile Types",id:"custom-projectile-types",level:3}],c={toc:s},d="wrapper";function k(t){let{components:e,...l}=t;return(0,r.kt)(d,(0,n.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Custom projectile types can be defined and applied to items in ",(0,r.kt)("a",{parentName:"p",href:"/docs/modules/gear/kits"},"kits"),".\nThese items effectively become either weapons that shoot the custom projectile,\nor the item form of the custom projectile itself."),(0,r.kt)("h4",{id:"projectiles-element"},"Projectiles Element"),(0,r.kt)("div",{className:"table-container"},(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Element"),(0,r.kt)("th",null,"Description"),(0,r.kt)("th",null,"Value/Children"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"<projectiles> </projectiles>")),(0,r.kt)("td",null,"Node containing the custom projectile definitions."),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Sub-elements"),(0,r.kt)("th",null),(0,r.kt)("th",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"<projectile> </projectile>")),(0,r.kt)("td",null,"A custom projectile definition."),(0,r.kt)("td",null,(0,r.kt)("span",{className:"badge badge--secondary"},"Projectile Sub-elements")))))),(0,r.kt)("h3",{id:"projectile-attributes"},"Projectile Attributes"),(0,r.kt)("div",{className:"table-container"},(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{minWidth:"150px"}},"Attribute"),(0,r.kt)("th",null,"Description"),(0,r.kt)("th",{style:{minWidth:"100px"}},"Value"),(0,r.kt)("th",{style:{minWidth:"100px"}},"Default"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"id")),(0,r.kt)("td",null,(0,r.kt)("span",{className:"badge badge--danger"},"Required"),"Unique identifier used to reference this projectile from other places in the XML."),(0,r.kt)("td",null,(0,r.kt)("span",{className:"badge badge--primary"},"String")),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"name")),(0,r.kt)("td",null,'The display name of this projectile, used in "shot by" messages, etc.'),(0,r.kt)("td",null,(0,r.kt)("span",{className:"badge badge--primary"},"String")),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"throwable")),(0,r.kt)("td",null,"Items are consumed when using them to shoot this projectile (making them more like grenades than guns)."),(0,r.kt)("td",null,(0,r.kt)("span",{className:"badge badge--primary"},"true/false")),(0,r.kt)("td",null,"true")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"projectile")),(0,r.kt)("td",null,"The entity this projectile is materialized as."),(0,r.kt)("td",null,(0,r.kt)("a",{href:"/docs/reference/entities/entity-types"},"Entity Type")),(0,r.kt)("td",null,(0,r.kt)("span",{className:"badge badge--secondary"},"Arrow"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"damage")),(0,r.kt)("td",null,"The amount of damage this projectile deals."),(0,r.kt)("td",null,(0,r.kt)("span",{className:"badge badge--primary"},"Half-hearts")),(0,r.kt)("td",null,"0.0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"velocity")),(0,r.kt)("td",null,"The speed at which the projectile moves."),(0,r.kt)("td",null,(0,r.kt)("span",{className:"badge badge--primary"},"Meters/tick")),(0,r.kt)("td",null,"1.0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"click")),(0,r.kt)("td",null,"The click action that fires the projectile.",(0,r.kt)("br",null),"Accepts ",(0,r.kt)("label",null,"right"),", ",(0,r.kt)("label",null,"left")," or"," ",(0,r.kt)("label",null,"both"),"."),(0,r.kt)("td",null,(0,r.kt)("span",{className:"badge badge--primary"},"Click Action")),(0,r.kt)("td",null,(0,r.kt)("label",null,"both"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"effects")),(0,r.kt)("td",null,"The potion effects to apply to players hit by this projectile."),(0,r.kt)("td",null,(0,r.kt)("a",{href:"/docs/modules/gear/potions"},"Potion Effect")),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"destroy-filter")),(0,r.kt)("td",null,(0,r.kt)("span",{className:"badge badge--secondary",title:"Can be this attribute or a sub-element."},"Property"),"Filter if/what blocks get destroyed when hit with this projectile."),(0,r.kt)("td",null,(0,r.kt)("a",{href:"/docs/modules/mechanics/filters"},"Filter")),(0,r.kt)("td",null,(0,r.kt)("label",null,"deny-all"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"cooldown")),(0,r.kt)("td",null,"Minimum time between each firing of this projectile."),(0,r.kt)("td",null,(0,r.kt)("a",{href:"/docs/reference/misc/time-periods"},"Time Period")),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"precise")),(0,r.kt)("td",null,"Whether the path of a thrown projectile should be precise in hitting a target.",(0,r.kt)("br",null),(0,r.kt)("em",null,"This is only applicable if the projectile is ",(0,r.kt)("label",null,"Fireball"),", ",(0,r.kt)("label",null,"LargeFireball"),", ",(0,r.kt)("label",null,"SmallFireball"),", or ",(0,r.kt)("label",null,"WitherSkull"),".")),(0,r.kt)("td",null,(0,r.kt)("span",{className:"badge badge--primary"},"true/false")),(0,r.kt)("td",null,"true"))))),(0,r.kt)("h5",{id:"projectile-sub-elements"},"Projectile Sub-elements"),(0,r.kt)("div",{className:"table-container"},(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Element"),(0,r.kt)("th",null,"Description"),(0,r.kt)("th",null,"Value/Children"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"<destroy-filter>")),(0,r.kt)("td",null,(0,r.kt)("span",{className:"badge badge--secondary",title:"Can be this sub-element or an attribute."},"Property"),"Filter if/what blocks get destroyed when hit with this projectile."),(0,r.kt)("td",null,(0,r.kt)("a",{href:"/docs/modules/mechanics/filters"},"Filters"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"<effect>")),(0,r.kt)("td",null,"A potion effect to apply to players hit by this projectile."),(0,r.kt)("td",null,(0,r.kt)("a",{href:"/docs/modules/gear/potions"},"Potion Effect")))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- Create the projectile "template" --\x3e\n<projectiles>\n    <projectile\n        id="lazer"\n        name="lazer"\n        projectile="Snowball"\n        velocity="3.5"\n        damage="50"\n        throwable="false"\n        cooldown="5s"/>\n</projectiles>\n\x3c!-- Apply the projectile to an item --\x3e\n<kits>\n    <kit name="lazer-kit">\n        <item projectile="lazer" name="`alazer gun" material="stick"/>\n    </kit>\n</kits>\n')),(0,r.kt)("h3",{id:"modifying-bow-projectiles"},"Modifying Bow Projectiles"),(0,r.kt)("p",null,"Bows can be modified to shoot a different projectile at a custom speed.\nThe PGM plugin will calculate the damage the projectile does using the same formula as Minecraft does for arrows.\nThis means that a flying fish with a velocity of 40 will almost certainly kill you.\nProjectiles can also have custom ",(0,r.kt)("a",{parentName:"p",href:"/docs/modules/gear/potions"},"potion effects")," which are applied to the target when it is hit."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NOTE:")," You can currently only modify all bow projectiles, this means no normal and custom bow at the same time."),(0,r.kt)("div",{className:"table-container"},(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Projectiles Element"),(0,r.kt)("th",null,"Description"),(0,r.kt)("th",null,"Value/Children"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"<modifybowprojectile> </...>")),(0,r.kt)("td",null,"Node containing the modify bow projectile settings."),(0,r.kt)("td",null,(0,r.kt)("span",{className:"badge badge--secondary"},"Bow Projectile Sub-elements"))),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Sub-elements"),(0,r.kt)("th",null),(0,r.kt)("th",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"<projectile> </projectile>")),(0,r.kt)("td",null,"The entity to use as the bows projectile."),(0,r.kt)("td",null,(0,r.kt)("a",{href:"/docs/modules/gear/projectiles#custom-projectile-types"},"Projectile Type"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"<velocityMod> </velocityMod>")),(0,r.kt)("td",null,"The velocity modifier of the bows projectile."),(0,r.kt)("td",null,(0,r.kt)("span",{className:"badge badge--primary"},"Number"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"<potion> </potion>")),(0,r.kt)("td",null,"A potion effect to apply to players hit by the bow projectile."),(0,r.kt)("td",null,(0,r.kt)("a",{href:"/docs/modules/gear/potions"},"Potion Effect"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"<pickup-filter> </pickup-filter>")),(0,r.kt)("td",null,"A filter to determine which players can pick up arrows."),(0,r.kt)("td",null,(0,r.kt)("a",{href:"/docs/modules/mechanics/filters"},"Filter")))))),(0,r.kt)("p",null,"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<modifybowprojectile>\n    <projectile>EnderPearl</projectile>\n    <velocityMod>2.5</velocityMod>\n    \x3c!-- Projectile potion effect --\x3e\n    <potion duration="5" amplifier="1">poison</potion>\n</modifybowprojectile>\n<modifybowprojectile>\n    <potion duration="8" amplifier="1">wither</potion>\n</modifybowprojectile>\n')),(0,r.kt)("h3",{id:"custom-projectile-types"},"Custom Projectile Types"),(0,r.kt)("p",null,"All of the following projectiles in this table are guaranteed to work.\nSome projectiles such as ",(0,r.kt)("inlineCode",{parentName:"p"},"WitherSkull")," travel very fast by default and may need ",(0,r.kt)("inlineCode",{parentName:"p"},"<velocityMod>")," to reduce the speed.\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://gist.github.com/4617111"},"mrapple/Bukkit Entity Spawning.md")," for a list of tested entities."),(0,r.kt)("div",{className:"table-container"},(0,r.kt)("table",{className:"table table-striped"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Working Entity Types"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"Arrow"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"Boat"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"Egg"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"EnderPearl"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"Fireball"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"Firework"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"LargeFireball"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"SmallFireball"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"Snowball"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"ThrownExpBottle"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"WitherSkull"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("label",null,"TNTPrimed")))))))}k.isMDXComponent=!0}}]);