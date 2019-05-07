import { NestFactory } from "@nestjs/core";
import { LoggerService } from "@nestjs/common";
import { AppModule } from "./app.module";
import { Logger, getLogger, configure, shutdown } from "log4js";

configure(require("./../config")("LogConfig"));

class AppLogger implements LoggerService {
    loggers = new Map<string, Logger>();
    log(message: any, context?: string) {
        getLogger(`[${context}]`).info(message);
    }
    error(message: any, trace?: string, context?: string) {
        getLogger(`[${context}]`).error(message, trace);
    }
    warn(message: any, context?: string) {
        getLogger(`[${context}]`).warn(message);
    }
    debug(message: any, context?: string) {
        getLogger(`[${context}]`).debug(message);
    }
}

async function bootstrap() {
    try {
        const uncaughtExceptionlogger = getLogger("[UncaughtException]");
        process.on("uncaughtException", function(err) {
            uncaughtExceptionlogger.error(err);
        });

        const app = await NestFactory.create(AppModule, {
            logger: new AppLogger()
        });
        await app.listen(3000);
    } catch (err) {
        const bootstrapExceptionlogger = getLogger("[BootstrapException]");
        bootstrapExceptionlogger.error(err);
        shutdown();
    }
}
bootstrap();
