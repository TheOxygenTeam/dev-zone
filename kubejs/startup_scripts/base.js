// priority: 999
Platform.mods.kubejs.name = "OxygenUtils";

const $BooleanProperty = Java.loadClass(
  "net.minecraft.world.level.block.state.properties.BooleanProperty"
);
const $IntegerProperty = Java.loadClass(
  "net.minecraft.world.level.block.state.properties.IntegerProperty"
);

function rnd(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rnd50() {
  return Math.random() < 0.5;
}

function rnd75() {
  return Math.random() < 0.75;
}

function rnd25() {
  return Math.random() < 0.25;
}

/**
 *
 * @param {event} event
 * @param {Item} id
 * @param {Color} color
 */
function potion(event, id, color) {
  event
    .create(id + "_bottle")
    .color(0, color)
    .texture("layer0", "minecraft:item/potion_overlay")
    .texture("layer1", "minecraft:item/potion");
}

function clump(event, id, color) {
  event
    .create(id + "_clump")
    .color(0, color)
    .texture("layer0", "mekanism:item/clump_overlay")
    .texture("layer1", "mekanism:item/clump");
}

/**
 *
 * @param {event} event
 * @param {Item} id
 * @param {Color} color
 * @param {boolean} isclassic true -> classic | false -> meka style
 */
function nugget(event, id, color, isclassic) {
  event
    .create(id + "_nugget")
    .color(0, color)
    .texture(
      "layer0",
      isclassic ? "kubejs:item/template/classic_nugget" : "mekanism:item/nugget"
    );
}

/**
 *
 * @param {event} event
 * @param {Item} id
 * @param {Color} color
 */
function ingot(event, id, color) {
  event
    .create(id + "_ingot")
    .color(0, color)
    .texture("layer0", "mekanism:item/ingot");
}

/**
 *
 * @param {event} event
 * @param {Item} id
 * @param {Color} color
 */
function crystal(event, id, color) {
  event
    .create(id + "_crystal")
    .color(0, color)
    .texture("layer0", "mekanism:item/crystal_overlay")
    .texture("layer1", "mekanism:item/crystal");
}

/**
 *
 * @param {event} event
 * @param {Item} id
 * @param {Color} color
 */
function shard(event, id, color) {
  event
    .create(id + "_shard")
    .color(0, color)
    .texture("layer0", "mekanism:item/shard_overlay")
    .texture("layer1", "mekanism:item/shard");
}

/**
 *
 * @param {event} event
 * @param {Item} id
 * @param {Color} color
 */
function dust(event, id, color) {
  event
    .create(id + "_dust")
    .color(0, color)
    .texture("layer0", "mekanism:item/dust");
}

/**
 *
 * @param {event} event
 * @param {Item} id
 * @param {Color} color
 * @param {boolean} extradirty true -> extra layer | false -> no extra layer
 */
function dirty_dust(event, id, color, moreDirty) {
  if (moreDirty) {
    event
      .create(id + "_dirty_dust")
      .color(0, color)
      .texture("layer0", "mekanism:item/dirty_dust_overlay")
      .texture("layer1", "mekanism:item/dirty_dust")
      .texture("layer2", "kubejs:item/template/dust_extra_overlay");
  } else {
    event
      .create(id + "_dirty_dust")
      .color(0, color)
      .texture("layer0", "mekanism:item/dirty_dust_overlay")
      .texture("layer1", "mekanism:item/dirty_dust");
  }
}

//
//
//
//

//TODO BE SIDES
const energy_links = [
  "ad_astra:steel_cable",
  "ad_astra:desh_cable",
  "mekanism:creative_energy_cube",
  "mekanism:basic_universal_cable",
  "mekanism:advanced_universal_cable",
  "mekanism:elite_universal_cable",
  "mekanism:ultimate_universal_cable",
  "mekanism:basic_energy_cube",
  "mekanism:advanced_energy_cube",
  "mekanism:elite_energy_cube",
  "mekanism:ultimate_energy_cube",
];