import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './filter/http-exception.filter';
import { ValidationPipe } from '@nestjs/common';
const graphqlUploadExpress = require('graphql-upload/graphqlUploadExpress.js');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());
  app.use(graphqlUploadExpress({ maxFiles: 10 }));
  await app.listen(3000);
}
bootstrap();
