import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { apiReference } from '@scalar/nestjs-api-reference';

const config = new DocumentBuilder()
  .setTitle('SIAKAD')
  .setDescription('Siakad API Documentation')
  .setVersion('1.0')
  .build();

export function setupScalar(app: INestApplication) {
  const document = SwaggerModule.createDocument(app, config);
  app.use(
    '/reference',
    apiReference({
      spec: {
        content: document,
      },
    }),
  );
}
