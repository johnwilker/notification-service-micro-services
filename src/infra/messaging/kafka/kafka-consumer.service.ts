import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['possible-lacewing-7671-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'cG9zc2libGUtbGFjZXdpbmctNzY3MSRO_qOqwF0nXB2nqxseeWT6Pa1APIegckc',
          password:
            'aLOPTsRUkxz_5urfc397ny1TjKZUBfIGKTYMFBbAh51feGDxuBiCvFpdCIlVF-ac-98iZQ==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
