import { Injectable, Logger } from '@nestjs/common';
import { Publish, Publisher, Consume } from '@quickts/nestjs-amqp';

@Injectable()
export class HelloService {
    private readonly logger = new Logger('HelloService');
    @Publish('hello_exchange')
    private publish: Publisher;

    getHello(): string {
        this.publish('Some one getHello!');
        return 'Hello World!';
    }

    @Consume('hello_exchange', {
        queue: 'hello_queue',
        consumeOptions: {
            noAck: true
        }
    })
    // @Consume('hello_exchange', 'hello_queue')
    onHelloEvent(data: string) {
        this.logger.warn(data);
    }
}
