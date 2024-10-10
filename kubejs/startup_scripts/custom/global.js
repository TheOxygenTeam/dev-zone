// priority: 1
global.jei = {
  recipes: {
    click: [
      {
        input: {
          main_hand: "minecraft:flint",
          off_hand: "",
          block: "minecraft:cobblestone",
          extra: "",
        },
        output: {
          type: "fluid",
          block_replace: "minecraft:water",
          drop: [],
          chance: [],
          isCrouching: false,
          extra: "",
        },
      },
    ],
    atomic: [
      {
        input: "minecraft:diamond_ore",
        output: "minecraft:diamond_block",
      },
      {
        input: "minecraft:coal_ore",
        output: "minecraft:coal_block",
      },
    ],
  },
};
global.resources = {
  meteorites: [
    {
      id: "meteorite_1",
      texture: "minecraft:beacon",
      drop: ["minecraft:raw_copper"],
      chance: [50],
      biomes : ["ad_astra:lunar_wastelands"]
    },
  ],
};