(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{227:function(e,t,l){"use strict";l.r(t),l.d(t,"frontMatter",(function(){return c})),l.d(t,"metadata",(function(){return r})),l.d(t,"rightToc",(function(){return o})),l.d(t,"default",(function(){return s}));var n=l(1),b=l(9),a=(l(0),l(232)),c={id:"items",title:"Items & Armor"},r={id:"modules/gear/items",title:"Items & Armor",description:"The item elements are used to place items into a player's inventory or armor slots.",source:"@site/docs/modules/gear/items.mdx",permalink:"/docs/modules/gear/items",editUrl:"https://github.com/PGMDev/Website/edit/master/docs/modules/gear/items.mdx",sidebar:"Modules",previous:{title:"Spawners",permalink:"/docs/modules/mechanics/spawners"},next:{title:"Potion Effects",permalink:"/docs/modules/gear/potions"}},o=[{value:"Sub-Elements",id:"sub-elements",children:[]},{value:"Item Attributes",id:"item-attributes",children:[]},{value:"Custom Heads",id:"custom-heads",children:[]},{value:"Armor",id:"armor",children:[]},{value:"Potions",id:"potions",children:[]},{value:"Auto Potion Bottle Remover",id:"auto-potion-bottle-remover",children:[]},{value:"Books",id:"books",children:[]},{value:"Enchantments",id:"enchantments",children:[]},{value:"Attribute Modifiers",id:"attribute-modifiers",children:[]},{value:"Grenades",id:"grenades",children:[]},{value:"Can-Destroy / Can-Place-On",id:"can-destroy--can-place-on",children:[]}],i={rightToc:o};function s(e){var t=e.components,l=Object(b.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,l,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The item elements are used to place items into a player's inventory or armor slots.\nItems have many different attributes, and some may only apply to certain item types;\nsuch as the leather armor ",Object(a.b)("inlineCode",{parentName:"p"},"color")," attribute."),Object(a.b)("p",null,"Item names can be found with the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/items/inventory#material_finder"}),"material finder"),"\nor on the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html"}),"bukkit docs - Material")),Object(a.b)("h4",{id:"item-element"},"Item Element"),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Element"),Object(a.b)("th",null,"Description"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<item>")),Object(a.b)("td",null,"A single item stack."))))),Object(a.b)("h3",{id:"sub-elements"},"Sub-Elements"),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Element"),Object(a.b)("th",null,"Description"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<enchantment> </enchantment>")),Object(a.b)("td",null,Object(a.b)("a",{href:"#enchantments"},"Enchantment"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<stored-enchantment> </stored-enchantment>")),Object(a.b)("td",null,Object(a.b)("a",{href:"#enchantments"},"Stored Enchantment (for enchanted books)"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<effect> </effect>")),Object(a.b)("td",null,Object(a.b)("a",{href:"#potions"},"Potion Effect")," (only works on potion items)")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<attribute> </attribute>")),Object(a.b)("td",null,Object(a.b)("a",{href:"/docs/reference/items/attributes"},"Attribute Modifier"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<can-destroy> </can-destroy>")),Object(a.b)("td",null,Object(a.b)("a",{className:"left-ref-link",href:"#can-destroy"},Object(a.b)("i",{className:"fa fa-chevron-down"}))," ","Materials that can be mined with the item")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<can-place-on> </can-place-on>")),Object(a.b)("td",null,Object(a.b)("a",{className:"left-ref-link",href:"#can-destroy"},Object(a.b)("i",{className:"fa fa-chevron-down"}))," ","Materials that the item can be placed on"))))),Object(a.b)("h3",{id:"item-attributes"},"Item Attributes"),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Attribute"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value"),Object(a.b)("th",null,"Default"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"material")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--danger"},"Required"),"The item's material name."),Object(a.b)("td",null,Object(a.b)("a",{href:"/docs/reference/items/inventory#material_matchers"},"Material Name")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"slot")),Object(a.b)("td",null,"Slot where the item will be placed in the player's inventory.",Object(a.b)("br",null),Object(a.b)("i",null,"If no slot is specified the item will be merged into the player's inventory.")),Object(a.b)("td",null,Object(a.b)("a",{href:"/docs/reference/items/inventory"},"Inventory Slot")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"amount")),Object(a.b)("td",null,'The amount of items. Blocks can be given an infinite amount by using "oo".'),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Number")),Object(a.b)("td",null,"1")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"damage")),Object(a.b)("td",null,"The item's damage, used for items such as birch logs, red wool, potion types, etc."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Number")),Object(a.b)("td",null,"0")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"unbreakable")),Object(a.b)("td",null,"Specify if this item is unbreakable, hides the durability bar in minecraft."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",null,"false")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"name")),Object(a.b)("td",null,"The item's display name."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"String")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"lore")),Object(a.b)("td",null,"Custom lore string."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"String")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"color")),Object(a.b)("td",null,"Leather armor color as a hexadecimal color. ",Object(a.b)("label",null,"RRGGBB"),Object(a.b)("br",null),Object(a.b)("i",null,"Only applies to leather armor items.")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Hex Color")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"team-color")),Object(a.b)("td",null,"Automatically applies the team's"," ",Object(a.b)("a",{href:"/docs/modules/format/teams#team-attributes"},"Dye Color")," to colored blocks",Object(a.b)("i",null,"\xa0(wool, stained glass, etc).")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",null,"false")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"grenade")),Object(a.b)("td",null,Object(a.b)("a",{className:"left-ref-link",href:"#grenades"},Object(a.b)("i",{className:"fa fa-chevron-down"})),"Projectile explodes on impact.",Object(a.b)("br",null),Object(a.b)("i",null,"Works with ender pearls, snowballs, eggs, and arrows.")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",null,"false")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"grenade-power")),Object(a.b)("td",null,"The power of the grenade explosion on impact."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Decimal")),Object(a.b)("td",null,"1.0")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"grenade-fire")),Object(a.b)("td",null,"Explosion creates fire."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",null,"false")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"grenade-destroy")),Object(a.b)("td",null,"Explosion destroys blocks."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",null,"true")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"prevent-sharing")),Object(a.b)("td",null,"Prevent this item from being moved from the player's inventory."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",null,"false")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"projectile")),Object(a.b)("td",null,"Make this item shoot a custom projectile."),Object(a.b)("td",null,Object(a.b)("a",{href:"/docs/modules/projectiles"},"Projectile ID")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"show-enchantments")),Object(a.b)("td",null,"Show enchantments in the item tooltip."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",null,"true")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"show-attributes")),Object(a.b)("td",null,"Show attribute modifiers in the item tooltip."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",null,"true")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"show-unbreakable")),Object(a.b)("td",null,"Show the unbreakable property in the item tooltip."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",null,"true")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"show-can-destroy")),Object(a.b)("td",null,"Show the breakable block list in the item tooltip."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",null,"true")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"show-can-place-on")),Object(a.b)("td",null,"Show the blocks the item can be placed on in the item tooltip."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",null,"true")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"show-other")),Object(a.b)("td",null,"Show various other things in the item tooltip."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",null,"true"))))),Object(a.b)("p",null,"Items can be give custom names and lore with the ",Object(a.b)("inlineCode",{parentName:"p"},"name")," and ",Object(a.b)("inlineCode",{parentName:"p"},"lore")," attributes.\nColors and fancy text in item names or lore can be specified with the grave symbol ",Object(a.b)("inlineCode",{parentName:"p"},"`")," and then the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/misc/formatting"}),"formatting code"),".\nYou can specify multiple lines of lore using a pipe symbol ",Object(a.b)("inlineCode",{parentName:"p"},"|")," for line breaks."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<item name="`6Golden Sword" material="gold sword"/> \x3c!-- Gold sword with a gold/yellow name. --\x3e\n<item lore="`4The One and Only" material="stick"/> \x3c!-- A stick with the lore colored red. --\x3e\n<item lore="`eWarning!|`5Does damage!" material="iron sword"/> \x3c!-- A sword with 2 lines of lore. --\x3e\n')),Object(a.b)("h3",{id:"custom-heads"},"Custom Heads"),Object(a.b)("p",null,"Player heads can be given to players by using the heads element."),Object(a.b)("p",null,"A player's skin data can be found by using ",Object(a.b)("inlineCode",{parentName:"p"},"https://sessionserver.mojang.com/session/minecraft/profile/(UUID)"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<head name="Cubist" uuid="3fbec7dd-0a5f-40bf-9d11-885a54507112" slot="slot.armor.head">\n    <skin>eyJ0aW1lc3RhbXAiOjE0NDY0MDgwOTExNzQsInByb2ZpbGVJZCI6IjNmYmVjN2RkMGE1ZjQwYmY5ZDExODg1YTU0NTA3MTEyIiwicHJvZmlsZU5hbWUiOiJDdWJpc3QiLCJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvOTRlZGExMjg4NWIzYmE2ZGY2ODMyZGZkMTIzNGEyNjc5MmQwNDI2ZDkyMDM2ZWVlYzc1M2ZiZmM2NmRiIn19fQ==</skin>\n</head>\n')),Object(a.b)("h5",{id:"head-attributes"},"Head Attributes"),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Attribute"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value"),Object(a.b)("th",null,"Default"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"name")),Object(a.b)("td",null,"The heads display name."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"String")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"uuid")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),Object(a.b)("span",{className:"badge badge--danger"},"Required"),"UUID used to identify the player this head belongs to."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"String")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"skin")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),Object(a.b)("span",{className:"badge badge--danger"},"Required"),"The skin data used for this head."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"String")),Object(a.b)("td",null))))),Object(a.b)("h5",{id:"head-sub-elements"},"Head Sub-elements"),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Element"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<uuid>")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary",title:"Can be either this sub-element or an attribute."},"Property"),Object(a.b)("span",{className:"badge badge--danger"},"Required"),"UUID used to identify the player this head belongs to."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"String"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<skin>")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary",title:"Can be either this sub-element or an attribute."},"Property"),Object(a.b)("span",{className:"badge badge--danger"},"Required"),"The skin data used for this head."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"String")))))),Object(a.b)("h3",{id:"armor"},"Armor"),Object(a.b)("p",null,"Armor slots have predefined tags to make it easier to give them to a player. They accept all of the properties of normal items, and may have their own special attributes."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<helmet material="iron helmet"/>\n<chestplate material="diamond chestplate"/>\n<leggings material="gold leggings"/>\n<boots material="leather boots"/>\n')),Object(a.b)("h5",{id:"armor-attributes"},"Armor Attributes"),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Attribute"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value"),Object(a.b)("th",null,"Default"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"locked")),Object(a.b)("td",null,"Prevent this armor item from being removed from the armor slot in any way."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",null,"false"))))),Object(a.b)("p",null,"Enchanting, naming or giving armor lore works the same way as with items."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<boots material="iron boots" lore="The Winged Boots of Hermes">\n    <enchantment level="1">feather_falling</enchantment>\n</boots>\n')),Object(a.b)("p",null,"Items like leather armor can be colored with the ",Object(a.b)("inlineCode",{parentName:"p"},"color")," attribute.\nThe color is represented in hexadecimal, see ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/misc/colors"}),"dye colors")," for a list of hex colors for the different dyes."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"NOTE:")," The hex color value is specified without the hash ",Object(a.b)("inlineCode",{parentName:"p"},"#")," symbol."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<helmet color="cd0000" material="leather helmet"/>\n')),Object(a.b)("h6",{id:"team-color-attribute"},"Team Color Attribute"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"team-color")," attribute can be used to add color to leather armor automatically.\nArmor color is based on the team's ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/misc/formatting#chat-colors"}),"Chat Color")," rather\nthan their ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/misc/colors"}),"Dye Color"),", so using the ",Object(a.b)("inlineCode",{parentName:"p"},"dye-color")," attribute on ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/modules/format/teams#team-attributes"}),"Teams")," is not required.\nThis helps simplfy kits so a seperate team kit for colored armor and items is not required."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<kits>\n    <kit id="spawn" force="true">\n        \x3c!-- automatically applies blue colored armor to blue team, red armor to red team, etc --\x3e\n        <helmet team-color="true" unbreakable="true" material="leather helmet"/>\n        <chestplate team-color="true" unbreakable="true" material="leather chestplate"/>\n    </kit>\n</kits>\n')),Object(a.b)("h3",{id:"potions"},"Potions"),Object(a.b)("p",null,"Potion items (including lingering and splash potions) can specify their potion type, and any number of custom effects.\nThe potion type determines the name and color of the item.\nIt also determines the default effects of the potion.\nHowever, if any custom effects are present, they will completely replace the default effects."),Object(a.b)("p",null,"By default when a player drinks a potion bottle the empty bottle is automatically removed from the players inventory.\nThis behavior can be disabled with the ",Object(a.b)("inlineCode",{parentName:"p"},"<keep-potion-bottles/>")," tag."),Object(a.b)("p",null,"See ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/modules/gear/potions"}),"Potion Effects")," for details on the ",Object(a.b)("inlineCode",{parentName:"p"},"<effect>")," element."),Object(a.b)("p",null,"Also see the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/modules/gear/potions"}),"Potions & Effects")," reference page."),Object(a.b)("h5",{id:"potion-item-sub-elements"},"Potion Item Sub-elements"),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Element"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<effect>")),Object(a.b)("td",null,"Custom effect"),Object(a.b)("td",null,Object(a.b)("a",{href:"/docs/modules/gear/potions"},"Potion Effect")))))),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<item slot="1" material="potion" damage="3">\n    <effect duration="15m">fire_resistance</effect>\n</item>\n\x3c!-- A Jump Boost Splash Potion --\x3e\n<item slot="0" material="potion" damage="16395">\n    <effect duration="3m" amplifier="2">jump_boost</effect>\n</item>\n')),Object(a.b)("h3",{id:"auto-potion-bottle-remover"},"Auto Potion Bottle Remover"),Object(a.b)("p",null,"Empty potion bottles are removed automatically when a player drinks a potion.",Object(a.b)("br",null),"\nThis feature is enabled by default, but can be disabled with this tag."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),"<keep-potion-bottles/>\n")),Object(a.b)("h3",{id:"books"},"Books"),Object(a.b)("p",null,"Written books can be created using the book element, the tile, author and individual pages can be formatted with ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/misc/formatting"}),"formatting codes"),".\nAll normal item attributes can also be applied to books."),Object(a.b)("p",null,"Each page in a book can contain a maximum of 13 lines, with approximately 19 characters per line.\nPreferably books should be written in-game to ensure proper formatting, and then translated into the books element."),Object(a.b)("h5",{id:"book-element"},"Book Element"),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Element"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<book>")),Object(a.b)("td",null,"The element containing the books",Object(a.b)("label",null,"<title>"),Object(a.b)("label",null,"<author>"),"&",Object(a.b)("label",null,"<pages>")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Formatted Text")))))),Object(a.b)("h5",{id:"book-sub-elements"},"Book Sub-elements"),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Element"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<title>")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--danger"},"Required"),"The title of the book."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Formatted Text"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<author>")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--danger"},"Required"),"The author of the book."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Formatted Text"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<pages>")),Object(a.b)("td",null,"The pages in the book."),Object(a.b)("td",null,Object(a.b)("label",null,"<page>"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<page>")),Object(a.b)("td",null,"A newline separated string. Used inside",Object(a.b)("label",null,"<pages>")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Formatted Text")))))),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<book slot="1">\n    <title>`6Example`r</title>\n    <author>`4BB-8`r</author>\n    <pages>\n        <page>\n            `lPage `1I`r\n            This is an example\n        </page>\n        <page>\n            `lPage `1II`r\n\n            Nothing to see here, move along...\n        </page>\n        \x3c!-- More pages --\x3e\n    </pages>\n</book>\n')),Object(a.b)("h3",{id:"enchantments"},"Enchantments"),Object(a.b)("p",null,"Any enchantment can be applied to any item and an item can have one or multiple enchantments.\nThe enchantment type can be specified by its\n",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"http://minecraft.gamepedia.com/Data_values#Enchantment_IDs"}),"Minecraft name")," or\n",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/items/enchantments"}),"Bukkit name"),"."),Object(a.b)("p",null,"To store an enchantment in an enchanted book (instead of enchanting the book itself),\nsimply replace the tag ",Object(a.b)("inlineCode",{parentName:"p"},"enchantment")," with ",Object(a.b)("inlineCode",{parentName:"p"},"stored-enchantment"),"."),Object(a.b)("h5",{id:"enchantment-element"},"Enchantment Element"),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Element"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<enchantment> </enchantment>")),Object(a.b)("td",null,"An item enchantment."),Object(a.b)("td",null,Object(a.b)("a",{href:"/docs/reference/items/enchantments"},"Enchantment Name"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<stored-enchantment> </stored-enchantment>")),Object(a.b)("td",null,"An enchantment stored in an enchanted book."),Object(a.b)("td",null,Object(a.b)("a",{href:"/docs/reference/items/enchantments"},"Enchantment Name")))))),Object(a.b)("h5",{id:"enchantment-attributes"},"Enchantment Attributes"),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Attribute"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value"),Object(a.b)("th",null,"Default"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"level")),Object(a.b)("td",null,"The specified enchantment's level."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Number")),Object(a.b)("td",null,"1"))))),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Examples")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'\x3c!-- A sharpness II iron sword --\x3e\n<item material="iron sword">\n    <enchantment level="2">sharpness</enchantment>\n</item>\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'\x3c!-- A knockback IV stick --\x3e\n<item material="stick">\n    <enchantment level="4">knockback</enchantment>\n</item>\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'\x3c!-- Feather falling 2 boots --\x3e\n<boots material="gold boots">\n    <enchantment level="2">feather_falling</enchantment>\n</boots>\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'\x3c!-- Enchanted book of Luck --\x3e\n<item material="enchanted_book">\n    <stored-enchantment level="1">luck</stored-enchantment>\n</item>\n')),Object(a.b)("h3",{id:"attribute-modifiers"},"Attribute Modifiers"),Object(a.b)("p",null,"Attribute modifiers can be applied to items in the same way they are applied to kits.\nSee ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/modules/gear/kits#attributes"}),"Attribute Kits")," for details."),Object(a.b)("p",null,"Additionally, a ",Object(a.b)("inlineCode",{parentName:"p"},"slot")," can be specified, in which case the modifier will only be applied\nwhen the item is in that slot. This must be an ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/items/inventory"}),"armor or hand slot"),"."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Examples")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<chestplate material="chainmail chestplate">\n    <attribute amount="1">generic.knockbackResistance</attribute>\n</chestplate>\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<item material="diamond spade">\n    <attribute slot="weapon.mainhand" operation="multiply" amount="2">generic.movementSpeed</attribute>\n</item>\n')),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"NOTE:")," Negative attribute values are allowed; however sometimes they don't work as expected."),Object(a.b)("h3",{id:"grenades"},"Grenades"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},'grenade="true"')," attribute will make the item explode on impact, just like a grenade.\nThis option only works on items that can turn into projectiles.\nFor example, ender pearls, snowballs, eggs, and arrows all work."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},'grenade-power="1.0"')," attribute sets the explosion power.\nThe default value of ",Object(a.b)("inlineCode",{parentName:"p"},"1.0")," will not destroy blocks, but it will damage players and set off TNT."),Object(a.b)("p",null,"The attributes ",Object(a.b)("inlineCode",{parentName:"p"},'grenade-fire="true"')," and ",Object(a.b)("inlineCode",{parentName:"p"},'grenade-destroy="true"')," determine if the explosion creates fire and/or destroys blocks."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"NOTE:")," If an ender pearl is used as a grenade, the player will teleport to the location and the explosion will occur."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<item slot="1" amount="12" name="`4Grenade" grenade="true" grenade-power="1.2" material="snow ball"/>\n<item name="`a`lRocket Ammo" amount="3" enchantment="thorns" grenade="true" grenade-power="4" grenade-fire="true" material="arrow"/>\n')),Object(a.b)("h3",{id:"can-destroy--can-place-on"},"Can-Destroy / Can-Place-On"),Object(a.b)("p",null,"In adventure mode, no blocks can be placed or mined by default. The ",Object(a.b)("inlineCode",{parentName:"p"},"<can-destroy>")," element allows an item to mine a specified list of blocks.\nThe ",Object(a.b)("inlineCode",{parentName:"p"},"<can-place-on>")," element allows a block item to be placed against a specified list of blocks. In each case, the blocks are listed inside\nthe element, each wrapped in a ",Object(a.b)("inlineCode",{parentName:"p"},"<material>")," sub-element. These blocks ",Object(a.b)("strong",{parentName:"p"},"cannot")," have damage/data values (this is a limitation of Minecraft\nthat we are unable to work around)."),Object(a.b)("p",null,"Instead of a list of blocks, you can use the ",Object(a.b)("inlineCode",{parentName:"p"},"<all-blocks/>")," element, which is equivalent to listing literally every block in the game.\nIn this case, you will probably want to specify ",Object(a.b)("inlineCode",{parentName:"p"},'show-can-place-on="false"')," or ",Object(a.b)("inlineCode",{parentName:"p"},'show-can-destroy="false"')," on the item to prevent a\nmassive tooltip being displayed to the player."),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Elements"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value/Children"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<can-destroy> </can-destroy>")),Object(a.b)("td",null,"A node containing the materials this item can destroy."),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<can-place-on> </can-place-on>")),Object(a.b)("td",null,"A node containing materials this item can be placed on."),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("th",null,"Sub-elements"),Object(a.b)("th",null),Object(a.b)("th",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<material> </material>")),Object(a.b)("td",null,"An individual material to match.",Object(a.b)("br",null),Object(a.b)("i",null,"Does not accept a damage/data value.")),Object(a.b)("td",null,Object(a.b)("a",{href:"/docs/reference/items/inventory#material_matchers"},"Material Name"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<all-blocks/>")),Object(a.b)("td",null,"Match all block type materials."),Object(a.b)("td",null))))),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<item material="iron shovel">\n    <can-destroy>\n        <material>dirt</material>\n        <material>grass</material>\n        <material>sand</material>\n    </can-destroy>\n</item>\n\n<item material="lever">\n    <can-place-on>\n        <all-blocks/>\n    </can-place-on>\n</item>\n')))}s.isMDXComponent=!0},232:function(e,t,l){"use strict";l.d(t,"a",(function(){return u})),l.d(t,"b",(function(){return O}));var n=l(0),b=l.n(n);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function c(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?c(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):c(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,n,b=function(e,t){if(null==e)return{};var l,n,b={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(b[l]=e[l]);return b}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(b[l]=e[l])}return b}var i=b.a.createContext({}),s=function(e){var t=b.a.useContext(i),l=t;return e&&(l="function"==typeof e?e(t):r({},t,{},e)),l},u=function(e){var t=s(e.components);return b.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var l=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=s(l),m=n,O=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return l?b.a.createElement(O,r({ref:t},i,{components:l})):b.a.createElement(O,r({ref:t},i))}));function O(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=l.length,c=new Array(a);c[0]=m;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:n,c[1]=r;for(var i=2;i<a;i++)c[i]=l[i];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,l)}m.displayName="MDXCreateElement"}}]);