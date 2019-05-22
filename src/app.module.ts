import { Module } from "@nestjs/common";
import { ClusterModule } from "@quickts/nestjs-cluster";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
const configLoad = require("./../config");

@Module({
    imports: [ClusterModule.forRoot(configLoad("RegistryConfig"), configLoad("AppConfig"))],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
