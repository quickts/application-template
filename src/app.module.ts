import { Module } from '@nestjs/common';
import { AuthModule } from '@quickts/nestjs-auth';
import { AmqpGlobalModule } from '@quickts/nestjs-amqp';
import { NacosNamingGlobalModule, NacosConfigGlobalModule } from '@quickts/nestjs-nacos';
import { HelloModule } from 'hello/hello.module';

@Module({
    imports: [
        NacosNamingGlobalModule.forRoot({
            serverList: process.env.NACOS_LIST,
            namespace: process.env.NACOS_NAMESPACE
        }),
        NacosConfigGlobalModule.forRoot({
            serverAddr: process.env.NACOS_LIST.split(',')[0],
            namespace: process.env.NACOS_NAMESPACE
        }),
        AmqpGlobalModule.forRoot({
            hostname: process.env.RABBITMQ_HOST,
            port: Number(process.env.RABBITMQ_PORT),
            username: process.env.RABBITMQ_USERNAME,
            password: process.env.RABBITMQ_PASSWORD
        }),
        AuthModule.forRoot(process.env.JWT_SECRET),
        HelloModule
    ]
})
export class AppModule {}
