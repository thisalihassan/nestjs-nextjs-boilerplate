import { Controller, Get } from '@nestjs/common';
@Controller('/hello')
export class AppController {
  @Get()
  getOpenApi(): string {
    return 'Hello, asworld!';
  }
}
