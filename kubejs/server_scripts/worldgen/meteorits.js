ServerEvents.highPriorityData((event) => {
  global.resources.meteorites.forEach((element) => {
    event.addJson("kubejs:worldgen/placed_feature/" + element.id, {
      feature: {
        type: "minecraft:random_patch",
        config: {
          tries: 24,
          xz_spread: 7,
          y_spread: 3,
          feature: {
            feature: {
              type: "minecraft:simple_block",
              config: {
                to_place: {
                  type: "minecraft:simple_state_provider",
                  state: {
                    Name: element.id,
                  },
                },
              },
            },
            placement: [
              {
                type: "minecraft:block_predicate_filter",
                predicate: {
                  type: "minecraft:matching_blocks",
                  offset: [0, -1, 0],
                  blocks: "ad_astra:moon_sand",
                },
              },
              {
                type: "minecraft:block_predicate_filter",
                predicate: {
                  type: "minecraft:matching_blocks",
                  offset: [0, 0, 0],
                  blocks: "minecraft:air",
                },
              },
            ],
          },
        },
      },
      placement: [
        {
          type: "minecraft:rarity_filter",
          chance: 8,
        },
        {
          type: "minecraft:in_square",
        },
        {
          type: "minecraft:heightmap",
          heightmap: "WORLD_SURFACE_WG",
        },
        {
          type: "minecraft:biome",
        },
        {
          type: "minecraft:height_range",
          height: {
            type: "minecraft:uniform",
            min_inclusive: {
              absolute: 64,
            },
            max_inclusive: {
              absolute: 0,
            },
          },
        },
      ],
    });

    event.addJson("kubejs:forge/biome_modifier/" + element.id,
    {
        "type": "forge:add_features",
        "biomes": element.biomes,
        "features": "kubejs:"+element.id,
        "step": "top_layer_modification"
      })
  });
});
