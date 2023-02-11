import 'dotenv/config';
import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '@src/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: console,
  });

  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());

  const config = new DocumentBuilder()
    .setTitle('Talent Cities')
    .setDescription('The Talent Cities API description')
    .setVersion('1.0')
    .addTag('talent-cities')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  writeFileSync(
    resolve(process.cwd(), 'client/swagger.json'),
    JSON.stringify(document, null, 2),
    { encoding: 'utf8' },
  );

  SwaggerModule.setup('/api', app, document);
  app.use(
    helmet({
      crossOriginEmbedderPolicy: false,
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          ...helmet.contentSecurityPolicy.getDefaultDirectives(),
          'connect-src': ["'self'"],
          'script-src': ["'self'", "'unsafe-inline'"],
          'img-src': ["'self'", 'https: data: blob:'],
        },
      },
    }),
  );

  app.enableCors();
  await app.listen(8000);
}
bootstrap();
