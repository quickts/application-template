var path = require("path");
var basePath = path.resolve(__dirname, "../logs");
module.exports = {
    appenders: {
        logToErrorFile: {
            type: "dateFile",
            filename: path.join(basePath, "error"),
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
            filename: path.join(basePath, "all"),
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