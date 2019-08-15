import { Module } from '@nestjs/common';
import { NacosInstanceModule } from '@quickts/nestjs-nacos';
import { v4 } from 'internal-ip';
import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';

@Module({
    imports: [
        NacosInstanceModule.forRoot({
            serviceName: 'hello.service',
            ip: process.env.SERVICE_HOST || v4.sync(),
            port: Number(process.env.SERVICE_PORT)
        })
    ],
    controllers: [HelloController],
    providers: [HelloService]
})
export class HelloModule {}
