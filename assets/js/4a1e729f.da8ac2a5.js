"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5607],{3905:(e,t,l)=>{l.d(t,{Zo:()=>o,kt:()=>c});var a=l(7294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function u(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function d(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),l=t;return e&&(l="function"==typeof e?e(t):u(u({},t),e)),l},o=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var l=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),k=s(l),c=n,p=k["".concat(i,".").concat(c)]||k[c]||m[c]||r;return l?a.createElement(p,u(u({ref:t},o),{},{components:l})):a.createElement(p,u({ref:t},o))}));function c(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=l.length,u=new Array(r);u[0]=k;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:n,u[1]=d;for(var s=2;s<r;s++)u[s]=l[s];return a.createElement.apply(null,u)}return a.createElement.apply(null,l)}k.displayName="MDXCreateElement"},4903:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>s});var a=l(7462),n=(l(7294),l(3905));const r={id:"damage",title:"Damage"},u=void 0,d={unversionedId:"modules/mechanics/damage",id:"modules/mechanics/damage",title:"Damage",description:"Friendly Fire",source:"@site/docs/modules/mechanics/damage.mdx",sourceDirName:"modules/mechanics",slug:"/modules/mechanics/damage",permalink:"/docs/modules/mechanics/damage",draft:!1,editUrl:"https://github.com/PGMDev/Website/tree/master/src/docs/modules/mechanics/damage.mdx",tags:[],version:"current",frontMatter:{id:"damage",title:"Damage"},sidebar:"docs",previous:{title:"Lanes",permalink:"/docs/modules/mechanics/lanes"},next:{title:"Gamerules",permalink:"/docs/modules/mechanics/gamerules"}},i={},s=[{value:"Friendly Fire",id:"friendly-fire",level:3},{value:"Difficulty",id:"difficulty",level:3},{value:"Hunger",id:"hunger",level:3},{value:"Damage Filtering",id:"damage-filtering",level:3},{value:"Disable Damage",id:"disable-damage",level:3},{value:"Block Explosion Attributes",id:"block-explosion-attributes",level:4},{value:"Damage Causes",id:"damage-causes",level:3}],o={toc:s};function m(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},o,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"friendly-fire"},"Friendly Fire"),(0,n.kt)("p",null,"Allows teammates to kill each other. Arrows will be absorbed if they hit a teammate."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<friendlyfire>on</friendlyfire> \x3c!-- Defaults to off --\x3e\n")),(0,n.kt)("p",null,"Refunds arrows blocked by teammates from non-infinity bows."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<friendlyfirerefund>off</friendlyfirerefund> \x3c!-- Defaults to on --\x3e\n")),(0,n.kt)("h3",{id:"difficulty"},"Difficulty"),(0,n.kt)("p",null,"The difficulty level can be set to ",(0,n.kt)("inlineCode",{parentName:"p"},"peaceful"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"easy"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"normal"),", or ",(0,n.kt)("inlineCode",{parentName:"p"},"hard"),". The default is ",(0,n.kt)("inlineCode",{parentName:"p"},"hard"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<difficulty>easy</difficulty> \x3c!-- Defaults to hard --\x3e\n")),(0,n.kt)("h3",{id:"hunger"},"Hunger"),(0,n.kt)("p",null,"Specify if a player can starve to death, usually used with the difficulty setting.",(0,n.kt)("br",null),"\nThis can also be accomplished with the ",(0,n.kt)("inlineCode",{parentName:"p"},"naturalRegeneration")," ",(0,n.kt)("a",{parentName:"p",href:"/docs/modules/mechanics/gamerules"},"gamerule"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<hunger>\n    <depletion>off</depletion>\n</hunger>\n")),(0,n.kt)("h3",{id:"damage-filtering"},"Damage Filtering"),(0,n.kt)("p",null,"This module is used to filter when or if damage is applied to entities.\nIts contents can be a filter or combination of filters.\nIt doesn't have to be ",(0,n.kt)("inlineCode",{parentName:"p"},"<allow>")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"<deny>")," at the top level but that's usually what you want.\nRegions can also be used since they are filters that filter for a location."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Examples")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<damage>\n    <deny>\n        <cause>explosion</cause>\n    </deny>\n</damage>\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- Deny damage events where the attacker is on the red team --\x3e\n<damage>\n    <deny>\n        <attacker>\n            <team>red</team>\n        </attacker>\n    </deny>\n</damage>\n")),(0,n.kt)("h3",{id:"disable-damage"},"Disable Damage"),(0,n.kt)("p",null,"Use this module to disable damage from specific causes."),(0,n.kt)("p",null,"While almost every form of damage can be disabled safely it is recommended that you do ",(0,n.kt)("strong",{parentName:"p"},"not")," disable ",(0,n.kt)("inlineCode",{parentName:"p"},"VOID")," damage."),(0,n.kt)("div",{className:"table-container"},(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Disable Damage Element"),(0,n.kt)("th",null,"Description"),(0,n.kt)("th",null,"Value/Children"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"<disabledamage> </disabledamage>")),(0,n.kt)("td",null,"Node containing the disabled damage types."),(0,n.kt)("td",null)),(0,n.kt)("tr",null,(0,n.kt)("th",null,"Sub-elements"),(0,n.kt)("th",null),(0,n.kt)("th",null)),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"<damage> </damage>")),(0,n.kt)("td",null,"The damage type that is disabled."),(0,n.kt)("td",null,(0,n.kt)("a",{href:"#damage-causes"},"Damage Cause")))))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Example")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<disabledamage>\n    \x3c!-- Disable fall damage --\x3e\n    <damage>fall</damage>\n</disabledamage>\n")),(0,n.kt)("h4",{id:"block-explosion-attributes"},"Block Explosion Attributes"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"BLOCK_EXPLOSION")," damage cause has several extended attributes to customize who/what gets damaged. Only attributes with ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," as the value need to be explicitly defined since all attributes default to ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,n.kt)("div",{className:"table-container"},(0,n.kt)("table",{className:"table table-striped table-condensed"},(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Attribute"),(0,n.kt)("th",null,"Description"),(0,n.kt)("th",null,"Value"),(0,n.kt)("th",null,"Default"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"ally")),(0,n.kt)("td",null,"Damage to players on the same team as the person that caused the explosion."),(0,n.kt)("td",null,(0,n.kt)("span",{className:"badge badge--primary"},"true/false")),(0,n.kt)("td",null,"true")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"self")),(0,n.kt)("td",null,"Damage to the person that caused the explosion."),(0,n.kt)("td",null,(0,n.kt)("span",{className:"badge badge--primary"},"true/false")),(0,n.kt)("td",null,"true")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"enemy")),(0,n.kt)("td",null,"Damage to players not on the same team as the person that caused the explosion."),(0,n.kt)("td",null,(0,n.kt)("span",{className:"badge badge--primary"},"true/false")),(0,n.kt)("td",null,"true")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"other")),(0,n.kt)("td",null,"Any other damage caused by the explosion."),(0,n.kt)("td",null,(0,n.kt)("span",{className:"badge badge--primary"},"true/false")),(0,n.kt)("td",null,"true"))))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Example")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<disabledamage>\n    \x3c!-- TNT damages enemies and self, but not teammates --\x3e\n    <damage ally="true" self="false" enemy="false" other="false">block explosion</damage>\n</disabledamage>\n')),(0,n.kt)("h3",{id:"damage-causes"},"Damage Causes"),(0,n.kt)("p",null,"The following damage causes can be used in the disable damage module.\nThese causes do not need to be capitalized or contain underscores, i.e., ",(0,n.kt)("inlineCode",{parentName:"p"},"FIRE_TICK")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"fire tick")," will both work."),(0,n.kt)("div",{className:"table-container"},(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Name"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"CONTACT")),(0,n.kt)("td",null,"Damage caused when an entity contacts a block such as a Cactus.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"ENTITY_ATTACK")),(0,n.kt)("td",null,"Damage caused when an entity attacks another entity.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"PROJECTILE")),(0,n.kt)("td",null,"Damage caused when attacked by a projectile.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"SUFFOCATION")),(0,n.kt)("td",null,"Damage caused by being put in a block.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"FALL")),(0,n.kt)("td",null,"Damage caused when an entity falls a distance greater than 3 blocks.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"FIRE")),(0,n.kt)("td",null,"Damage caused by direct exposure to fire.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"FIRE_TICK")),(0,n.kt)("td",null,"Damage caused due to burns caused by fire.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"MELTING")),(0,n.kt)("td",null,"Damage caused due to a snowman melting.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"LAVA")),(0,n.kt)("td",null,"Damage caused by direct exposure to lava.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"DROWNING")),(0,n.kt)("td",null,"Damage caused by running out of air while in water.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"BLOCK_EXPLOSION")),(0,n.kt)("td",null,"Damage caused by being in the area when a block explodes.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"ENTITY_EXPLOSION")),(0,n.kt)("td",null,"Damage caused by being in the area when an entity, such as a Creeper, explodes.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"VOID")),(0,n.kt)("td",null,"Damage caused by falling into the void.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"LIGHTNING")),(0,n.kt)("td",null,"Damage caused by being struck by lightning.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"SUICIDE")),(0,n.kt)("td",null,'Damage caused by committing suicide using the command "/kill".')),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"STARVATION")),(0,n.kt)("td",null,"Damage caused by starving due to having an empty hunger bar.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"POISON")),(0,n.kt)("td",null,"Damage caused due to an ongoing poison effect.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"MAGIC")),(0,n.kt)("td",null,"Damage caused by being hit by a damage potion or spell.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"WITHER")),(0,n.kt)("td",null,"Damage caused by Wither potion effect.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"FALLING_BLOCK")),(0,n.kt)("td",null,"Damage caused by being hit by a falling block which deals damage.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"THORNS")),(0,n.kt)("td",null,"Damage caused in retaliation to another attack by the Thorns enchantment.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("label",null,"CUSTOM")),(0,n.kt)("td",null,"Custom damage."))))),(0,n.kt)("p",null,"Copied from: ",(0,n.kt)("a",{parentName:"p",href:"https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/event/entity/EntityDamageEvent.DamageCause.html"},"bukkit docs - Damage Cause")))}m.isMDXComponent=!0}}]);