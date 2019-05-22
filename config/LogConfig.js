var path = require("path");
var basePath = path.resolve(__dirname, "../../logs");
var appLogPath = path.resolve(basePath, "app");
module.exports = {
    appenders: {
        logToErrorFile: {
            type: "dateFile",
            filename: path.join(appLogPath, "error"),
            alwaysIncludePattern: true,
            pattern: "yyyy-MM-dd.log",
            daysToKeep: 14
        },
        errorLogger: {
            type: "logLevelFilter",
            appender: "logToErrorFile",
            level: "error"
        },
        appLogger: {
            type: "dateFile",
            filename: path.join(appLogPath, "all"),
            alwaysIncludePattern: true,
            pattern: "yyyy-MM-dd.log",
            daysToKeep: 14
        },
        consoleLogger: {
            type: "console",
            layout: {
                type: "colored"
            }
        },
    },
    categories: {
        default: {
            appenders: ["consoleLogger", "appLogger", "errorLogger"],
            level: "all"
        },
    }
}