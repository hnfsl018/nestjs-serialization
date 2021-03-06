import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from "@nestjs/config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService)

  await app.listen(config.get<number>("app.port"));
  console.log(`=>> \n\n service start on ${await app.getUrl()} \n\n=>>`);
}
bootstrap();
