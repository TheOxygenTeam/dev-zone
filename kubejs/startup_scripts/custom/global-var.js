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
      id: "1",
      block: "mercury_meteorite",
      texture: "minecraft:block/stone",
      drop: ["kubejs:copper_shard", "kubejs:tin_shard"],
      multiplier: [20, 12],
      biomes: ["ad_astra:lunar_wastelands"],
    },
    {
      id: "2",
      block: "mars_meteorite",
      texture: "minecraft:block/red_sandstone",
      drop: [
        "kubejs:iron_shard",
        "kubejs:redstone_shard",
        "kubejs:nickel_shard",
      ],
      multiplier: [14, 24, 10],
      biomes: ["ad_astra:lunar_wastelands"],
    },
  ],
};