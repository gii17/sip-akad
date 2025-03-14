import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Response } from 'express';
import { map, Observable } from 'rxjs';
import { ResponseDto, TActionType } from '../dto/response.dto';
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
    return next.handle().pipe(
      map((data) => {
        let message = 'Action success';

        if (responseFormat?.entity) {
          message = this.getMessageByActionType(
            responseFormat.entity,
            responseFormat.actionType,
          );
        } else if (responseFormat?.message) {
          message = responseFormat.message;
        }

        return {
          message,
          data,
          code,
        };
      }),
    );
  }

  private getMessageByActionType(
    entity: string,
    actionType: TActionType,
  ): string {
    switch (actionType) {
      case 'create':
        return `Success create ${entity}`;
      case 'read':
        return `Success get ${entity}`;
      case 'update':
        return `Success update ${entity}`;
      case 'delete':
        return `Success delete ${entity}`;
      default:
        return `Unknown action type for ${entity}`;
    }
  }
}
