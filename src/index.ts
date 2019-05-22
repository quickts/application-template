import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { ClusterService } from "@quickts/nestjs-cluster";
import { Log4jsService } from "@quickts/nestjs-log4js";
import { AppModule } from "./app.module";

(async function() {
    const configLoad = require("./../config");
    const logger = new Log4jsService(configLoad("LogConfig"));
    try {
        const app = await NestFactory.create(AppModule, { logger: logger });
        app.useGlobalPipes(new ValidationPipe());
        const cluster = app.get(ClusterService);
        cluster.initialize(Reflect.get(app, "container"));
        await app.listen(configLoad("AppConfig").port, "0.0.0.0");
        await cluster.connectToRegistry();
    } catch (err) {
        logger.error(err);
        logger.flushall(process.exit);
    }
})();
