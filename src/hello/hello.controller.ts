import { Controller, Get } from '@nestjs/common';
import { HelloService } from './hello.service';

@Controller('/api/hello')
export class HelloController {
    constructor(private readonly helloService: HelloService) {}

    @Get()
    getHello(): string {
        return this.helloService.getHello();
    }
}
