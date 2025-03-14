import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Response } from 'express';
import { map, Observable } from 'rxjs';
import { ResponseDto } from '../dto/response.dto';
import { RESPONSE_FORMAT_KEY } from '../decorator/response-format.decorator';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  constructor(private readonly reflector: Reflector) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const responseFormat = this.reflector.get<ResponseDto>(
      RESPONSE_FORMAT_KEY,
      context.getHandler(),
    );

    const code = context.switchToHttp().getResponse<Response>().statusCode;
    return next
      .handle()
      .pipe(map((data) => ({ data, code, ...responseFormat })));
  }
}
