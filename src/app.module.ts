import { Module } from '@nestjs/common';
import { NacosNamingModule, NacosConfigModule } from '@quickts/nestjs-nacos';
import { AuthModule } from '@quickts/nestjs-auth';
import { v4 } from 'internal-ip';

@Module({
    imports: [
        NacosNamingModule.forRoot({
            clientOptions: {
                serverList: process.env.NACOS_LIST,
                namespace: process.env.SERVIC_NAMESPACE
            },
            instanceOptions: {
                serviceName: process.env.SERVICE_NAME,
                ip: process.env.SERVICE_HOST || v4.sync(),
                port: Number(process.env.SERVICE_PORT)
            }
        }),
        NacosConfigModule.forRoot({
            nameServerAddr: process.env.NACOS_LIST.split(',')[0]
        }),
        AuthModule.forRoot(process.env.JWT_SECRET) //
    ]
})
export class AppModule {}
