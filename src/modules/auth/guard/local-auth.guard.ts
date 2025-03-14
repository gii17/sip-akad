import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { plainToInstance } from 'class-transformer';
import { LoginDto } from '../dto/login.dto';
import { validate } from 'class-validator';
import { Request } from 'express';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const body = request.body;

    // validasi input dulu baru call super.canActivate
    // karena default nya langsung validate user baru request
    const dto = plainToInstance(LoginDto, body);
    const errors = await validate(dto);
    if (errors.length > 0) {
      throw new BadRequestException(
        errors.flatMap((error) =>
          error.constraints ? Object.values(error.constraints) : [],
        ),
      );
    }

    return super.canActivate(context) as boolean;
  }
}
