import { SetMetadata } from '@nestjs/common';
import { ResponseDto } from '../dto/response.dto';

export const RESPONSE_FORMAT_KEY = 'RESPONSE_FORMAT_KEY';

export const ResponseFormat = (response: ResponseDto) =>
  SetMetadata('RESPONSE_FORMAT_KEY', response);
