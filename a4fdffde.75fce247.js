(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{194:function(e,t,l){"use strict";l.r(t),l.d(t,"frontMatter",(function(){return c})),l.d(t,"metadata",(function(){return r})),l.d(t,"rightToc",(function(){return i})),l.d(t,"default",(function(){return s}));var b=l(1),n=l(9),a=(l(0),l(230)),c={id:"actions-triggers",title:"Actions & Triggers"},r={id:"modules/mechanics/actions-triggers",title:"Actions & Triggers",description:"Actions are a set of features that are applied to players, teams or matches, similiar to [Kits](/docs/modules/gear/kits).",source:"@site/docs/modules/mechanics/actions-triggers.mdx",permalink:"/docs/modules/mechanics/actions-triggers",editUrl:"https://github.com/PGMDev/Website/edit/master/docs/modules/mechanics/actions-triggers.mdx",sidebar:"Modules",previous:{title:"Regions",permalink:"/docs/modules/mechanics/regions"},next:{title:"Variables",permalink:"/docs/modules/mechanics/variables"}},i=[{value:"Action Elements",id:"action-elements",children:[]},{value:"Trigger Element",id:"trigger-element",children:[]}],u={rightToc:i};function s(e){var t=e.components,l=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(b.a)({},u,l,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Actions are a set of features that are applied to players, teams or matches, similiar to ",Object(a.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/modules/gear/kits"}),"Kits"),".\nMultiple actions can be started by one trigger."),Object(a.b)("span",{className:"badge badge--primary"},"Note:")," In the future, some features that are currently used in Kits may be transferred to be used as an Action instead.",Object(a.b)("h3",{id:"action-elements"},"Action Elements"),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Element"),Object(a.b)("th",null,"Description"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<action> </action>")),Object(a.b)("td",null,"A single Action.")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<switch-scope> </switch-scope>")),Object(a.b)("td",null,"Changes the scope that an action applies to.")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<message/>")),Object(a.b)("td",null,"A message that is sent to the player.")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<set/>")),Object(a.b)("td",null,"Sets a new value for a"," ",Object(a.b)("a",{href:"/docs/modules/mechanics/variables"},"Variable"),".")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<kill-entities/>")),Object(a.b)("td",null,"Removes entities based on a filter.")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<kit/>")),Object(a.b)("td",null,"Applies a ",Object(a.b)("a",{href:"/docs/modules/gear/kits"},"Kit"),".")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<replace-item> </replace-item>")),Object(a.b)("td",null,"Finds and replaces certain items."))))),Object(a.b)("h4",{id:"action-attributes"},"Action Attributes"),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Attribute"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"id")),Object(a.b)("td",null,"An ID."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"String"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"scope")),Object(a.b)("td",null,"Runs the filter against a certain query."),Object(a.b)("td",null,Object(a.b)("label",null,"player"),", ",Object(a.b)("label",null,"team"),", ",Object(a.b)("label",null,"match"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"filter")),Object(a.b)("td",null,"A filter that is tested before running actions inside."),Object(a.b)("td",null,Object(a.b)("a",{href:"/docs/modules/mechanics/filters"},"Filter")))))),Object(a.b)("h4",{id:"switch-scope-attributes"},"Switch-Scope Attributes"),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Attribute"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"id")),Object(a.b)("td",null,"An ID."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"String"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"inner")),Object(a.b)("td",null,"Runs the filter against a new query."),Object(a.b)("td",null,Object(a.b)("label",null,"player"),", ",Object(a.b)("label",null,"team"),", ",Object(a.b)("label",null,"match"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"outer")),Object(a.b)("td",null,"The previously defined query."),Object(a.b)("td",null,Object(a.b)("label",null,"player"),", ",Object(a.b)("label",null,"team"),", ",Object(a.b)("label",null,"match")))))),Object(a.b)("h4",{id:"message-attributes"},"Message Attributes"),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Attribute"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"text")),Object(a.b)("td",null,"The text that will be sent to a player."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"String")))))),Object(a.b)("h4",{id:"set-attributes"},"Set Attributes"),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Attribute"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"var")),Object(a.b)("td",null,"The variable to update."),Object(a.b)("td",null,Object(a.b)("a",{href:"/docs/modules/mechanics/variables"},"Variable"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"value")),Object(a.b)("td",null,"Sets a new value for the variable."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"String")))))),Object(a.b)("h4",{id:"kill-entities-attributes"},"Kill-Entities Attributes"),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Attribute"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"filter")),Object(a.b)("td",null,"Filters which entities to remove."),Object(a.b)("td",null,Object(a.b)("a",{href:"/docs/modules/mechanics/filters"},"Filter")))))),Object(a.b)("h4",{id:"replace-item-attributeselements"},"Replace Item Attributes/Elements"),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Attribute"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<find/>")),Object(a.b)("td",null,"The item to find."),Object(a.b)("td",null,Object(a.b)("a",{href:"/docs/modules/gear/items#item-attributes"},"Item Attributes"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<replace/>")),Object(a.b)("td",null,"The new item to replace with."),Object(a.b)("td",null,Object(a.b)("a",{href:"/docs/modules/gear/items#item-attributes"},"Item Attributes"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"keep-amount")),Object(a.b)("td",null,"Player recives the same amount of the new item as they had of the old item."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"True/False"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"keep-enchants")),Object(a.b)("td",null,"Enchantments on the old item will be applied to the new item."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"True/False"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"ignore-metadata")),Object(a.b)("td",null,"Filters which entities to remove."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"True/False"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"amount")),Object(a.b)("td",null,"Match for item stacks that have a certain amount of items in a range."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Range")))))),Object(a.b)("h3",{id:"trigger-element"},"Trigger Element"),Object(a.b)("p",null,"The ",Object(a.b)("label",null,Object(a.b)("inlineCode",{parentName:"p"},"<trigger/>"))," Element waits for a dynamic filter to activate it, and afterwards it will\ntrigger an Action."),Object(a.b)("h4",{id:"trigger-attributes"},"Trigger Attributes"),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Attribute"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"filter")),Object(a.b)("td",null,"A dynamic filter that activiates the trigger."),Object(a.b)("td",null,Object(a.b)("a",{href:"/docs/modules/mechanics/filters#dynamic-filters"},"Dynamic Filter"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"action")),Object(a.b)("td",null,"Sets an Action."),Object(a.b)("td",null,Object(a.b)("a",{href:"#action-elements"},"Action"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"scope")),Object(a.b)("td",null,"Runs the filter against a certain query."),Object(a.b)("td",null,Object(a.b)("label",null,"player"),", ",Object(a.b)("label",null,"team"),", ",Object(a.b)("label",null,"match")))))),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Example")),Object(a.b)("pre",null,Object(a.b)("code",Object(b.a)({parentName:"pre"},{className:"language-xml"}),'<kits>\n    <kit id="spawn">\n        <item slot="0" unbreakable="true" material="stone sword"/>\n        <action>\n            <message text="You were given a kit!"/>\n        </action>\n    </kit>\n</kits>\n<actions>\n    <action id="do-stuff" scope="player">\n        \x3c!-- Gives the player who activated the trigger a diamond --\x3e\n        <message text="You\'ve been given a diamond!"/>\n        <kit>\n            <item>diamond</item>\n        </kit>\n        \x3c!-- Sends a message to the player\'s team --\x3e\n        <switch-scope outer="player" inner="team">\n            <message text="Your team has been given the spawn kit!"/>\n            \x3c!-- Gives each player in the team a kit (Kits are applied per player) --\x3e\n            <switch-scope outer="team" inner="player">\n                <kit id="spawn"/>\n            </switch-scope>\n        </switch-scope>\n    </action>\n    <trigger filter="some-dynamic-filter" action="do-stuff" scope="player"/>\n    <message id="standalone-text" text="This is a standalone text trigger"/>\n    <trigger filter="another-dynamic-filter" action="standalone-text" scope="player"/>\n</actions>\n')))}s.isMDXComponent=!0},230:function(e,t,l){"use strict";l.d(t,"a",(function(){return o})),l.d(t,"b",(function(){return d}));var b=l(0),n=l.n(b);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function c(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,b)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?c(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):c(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,b,n=function(e,t){if(null==e)return{};var l,b,n={},a=Object.keys(e);for(b=0;b<a.length;b++)l=a[b],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(b=0;b<a.length;b++)l=a[b],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var u=n.a.createContext({}),s=function(e){var t=n.a.useContext(u),l=t;return e&&(l="function"==typeof e?e(t):r({},t,{},e)),l},o=function(e){var t=s(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=Object(b.forwardRef)((function(e,t){var l=e.components,b=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),o=s(l),j=b,d=o["".concat(c,".").concat(j)]||o[j]||O[j]||a;return l?n.a.createElement(d,r({ref:t},u,{components:l})):n.a.createElement(d,r({ref:t},u))}));function d(e,t){var l=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var a=l.length,c=new Array(a);c[0]=j;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r.mdxType="string"==typeof e?e:b,c[1]=r;for(var u=2;u<a;u++)c[u]=l[u];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,l)}j.displayName="MDXCreateElement"}}]);