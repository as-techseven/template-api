import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.use(helmet());

  await app.listen(parseInt(process.env.APP_PORT), '0.0.0.0');
  console.log('Listen in port: ', process.env.APP_PORT);
}
bootstrap();
