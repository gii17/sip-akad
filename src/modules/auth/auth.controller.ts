import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { User } from '../../common/decorator/user.decorator';
import { IUser } from './interface/auth.interface';
import { ApiBody } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { Public } from 'src/common/decorator/public.decorator';

@Public()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post('login')
  @ApiBody({
    type: LoginDto,
  })
  login(@User() user: IUser) {
    return this.authService.signToken(user);
  }
}
