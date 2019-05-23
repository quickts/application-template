import { Module } from "@nestjs/common";
import { ClusterModule } from "@quickts/nestjs-cluster";
import { AuthModule } from "@quickts/nestjs-auth";
const configLoad = require("./../config");

@Module({
    imports: [
        ClusterModule.forRoot(configLoad("RegistryConfig"), configLoad("AppConfig")), //
        AuthModule.forRoot(configLoad("AuthConfig"))
    ]
})
export class AppModule {}
