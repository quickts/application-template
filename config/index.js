const path = require("path");
const projectName = path.parse(path.resolve(__dirname, "..")).name;

module.exports = function (configName) {
    try {
        return require("./../../../service_config")(projectName, configName);
    } catch {}
    return require("./" + configName);
};