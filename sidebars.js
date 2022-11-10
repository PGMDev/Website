/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
  docs: [
    {
      type: 'category',
      label: 'General',
      items: ['modules/general/introduction', 'modules/general/main', 'modules/general/proto',],
    },
    {
      type: 'category',
      label: 'Information',
      items: ['modules/information/broadcasts', 'modules/information/rules'],
    },
    {
      type: 'category',
      label: 'Enviroment',
      items: ["modules/environment/world",
      "modules/environment/time",
      "modules/environment/border",
      "modules/environment/mobs",],
    },
    {
      type: 'category',
      label: 'Format',
      items: ["modules/format/players", "modules/format/teams",],
    },
    {
      type: 'category',
      label: 'Objectives',
      items: ["modules/objectives/ctw",
      "modules/objectives/ctf",
      "modules/objectives/control-points",
      "modules/objectives/dtm",
      "modules/objectives/dtc",
      "modules/objectives/monument-modes",
      "modules/objectives/blitz",
      "modules/objectives/scoring",
      "modules/objectives/other",
      "modules/objectives/payload",],
    },
    {
      type: 'category',
      label: 'Mechanics',
      items: ["modules/mechanics/filters",
      "modules/mechanics/regions",
      "modules/mechanics/actions-triggers",
      "modules/mechanics/variables",
      "modules/mechanics/spawns",
      "modules/mechanics/portals",
      "modules/mechanics/proximity-alarms",
      "modules/mechanics/lanes",
      "modules/mechanics/damage",
      "modules/mechanics/gamerules",
      "modules/mechanics/spawners",],
    },
    {
      type: 'category',
      label: 'Gear',
      items: ["modules/gear/items",
      "modules/gear/potions",
      "modules/gear/kits",
      "modules/gear/classes",
      "modules/gear/pickups",
      "modules/gear/shops",
      "modules/gear/item-mods",
      "modules/gear/crafting",
      "modules/gear/repair-remove-keep",
      "modules/gear/projectiles",
      "modules/gear/tnt",
      "modules/gear/kill-rewards"],
    },
    {
      type: 'category',
      label: 'Blocks',
      items: ["modules/blocks/blockdrops",
      "modules/blocks/enderchests",
      "modules/blocks/falling-blocks",
      "modules/blocks/renewables",
      "modules/blocks/structures"],
    },
  ],
  Reference: {
    Items: [
      "reference/items/inventory",
      "reference/items/potions",
      "reference/items/enchantments",
      "reference/items/attributes",
    ],
    Entities: [
      "reference/entities/entity-types",
      "reference/entities/spawn-reasons",
    ],
    Misc: [
      "reference/misc/formatting",
      "reference/misc/objective-names",
      "reference/misc/colors",
      "reference/misc/time-periods",
    ],
  },
  Guides: {
    "XML Pointers": [
      "guides/xml-pointers/regions",
      "guides/xml-pointers/applying-to-regions",
      "guides/xml-pointers/filter-apply-order",
      "guides/xml-pointers/conventions",
    ],
    "Packaging Maps": [
      "guides/packaging/cleaning-files",
      "guides/packaging/pruning-chunks",
      "guides/packaging/compiling-and-releasing",
    ],
  },
  Commands: ["commands/main", "commands/community", "commands/events"],
  Events: [
    "events/main",
    {
      Format: ["events/xml", "events/examples"],
    },
    "events/teams",
    "events/commands",
  ],
  Examples: [
    "examples/airship-battle",
    "examples/harb",
    "examples/ozone",
    "examples/race-for-victory",
    "examples/the-fenland",
    "examples/warlock",
  ],
};

module.exports = sidebars;
