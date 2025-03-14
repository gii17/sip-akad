import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseInterceptor } from './interceptor/response.interceptor';

@Module({
  providers: [{ provide: APP_INTERCEPTOR, useClass: ResponseInterceptor }],
})
export class CommonModule {}
