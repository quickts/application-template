import { Injectable } from "@nestjs/common";
import { Event, Config, ClusterService } from "@quickts/nestjs-cluster";
@Injectable()
export class AppService {
    constructor(private readonly clusterService: ClusterService) {}

    @Event("game-over")
    onGameOver() {}
}
