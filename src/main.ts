import 'dotenv/config';
import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '@src/app.module';
import helmet from 'helmet';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { ValidationPipe } from '@nestjs/common';
const PORT = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: console,
  });
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());

  const config = new DocumentBuilder()
    .setTitle('ProjectZ')
    .setDescription('The ProjectZ API description')
    .setVersion('1.0')
    .addTag('projectz')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  writeFileSync(
    resolve(process.cwd(), 'client/swagger.json'),
    JSON.stringify(document, null, 4),
    { encoding: 'utf8' },
  );

  SwaggerModule.setup('/api', app, document);
  app.use(helmet());

  app.enableCors();
  await app.listen(PORT);
}
bootstrap();
