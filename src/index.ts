import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { Log4jsService } from '@quickts/nestjs-log4js';
import { AppModule } from './app.module';

async function bootstrap() {
    const logger = new Log4jsService(process.env.LOG_LEVEL);
    process.on('uncaughtException', function(err) {
        logger.error('uncaughtException:');
        logger.error(err);
    });
    try {
        const app = await NestFactory.create(AppModule, { logger });
        app.useGlobalPipes(new ValidationPipe());
        await app.listen(process.env.SERVICE_PORT, '0.0.0.0');
    } catch (err) {
        logger.error(err);
        logger.flushall(process.exit);
    }
}
bootstrap();
