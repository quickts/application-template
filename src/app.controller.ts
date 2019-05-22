import { Controller, Get, Post } from "@nestjs/common";
import { Rpc } from "@quickts/nestjs-cluster";
import { AppService } from "./app.service";
@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}
}
