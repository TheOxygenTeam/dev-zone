// priority: -1
StartupEvents.registry("block", (event) => {
global.resources.meteorites.forEach(element => {
    event.create(element.id).textureAll(element.texture);
});

});