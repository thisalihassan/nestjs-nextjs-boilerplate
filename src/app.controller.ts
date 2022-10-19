import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
@Controller('/api/seed')
export class AppController {
  constructor(private readonly userSeedService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    await this.userSeedService.run();
    return 'Hello, asworld!';
  }
}
