export function getMetrikaInstance (config) {
    var instance = new Ya.Metrika2(config);
    setMetrikaInstance(instance, config);
    return instance;
}
function setMetrikaInstance (instance, config) {
    window["yaCounter".concat(config.id)] = instance;
}