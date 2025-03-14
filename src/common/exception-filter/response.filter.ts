import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Logger,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class ResponseFilter implements ExceptionFilter {
  private readonly logger = new Logger(ResponseFilter.name);

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const statusCode = exception.getStatus();

    const exceptionResponse = exception.getResponse();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const message =
      exceptionResponse instanceof Object
        ? exceptionResponse['message']
        : exceptionResponse;

    if (statusCode === 500) {
      this.logger.fatal(exception);
    }

    response.status(statusCode).json({
      code: statusCode,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      message,
      data: null,
    });
  }
}
