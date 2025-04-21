import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../user/user.repository';
import { CreateUserDto } from '../user/dto/create-user.dto.';
import { compare, hash } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import jwtConfig from 'src/config/jwt.config';
import { ConfigType } from '@nestjs/config';
import { IUser } from './interface/auth.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,
  ) {}

  async register(registerDto: CreateUserDto) {
    try {
      const hashedPassword = await hash(registerDto.password, 10);
      const user = await this.userRepository.create({
        email: registerDto.email,
        username: registerDto.username,
        password: hashedPassword,
        lastToken: null,
        role: registerDto.role,
      });

      return await this.signToken(user);
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY' || error.code === 1062) {
        throw new ConflictException('Email already exists');
      }
      throw error;
    }
  }

  async signToken(user: IUser) {
    const payload = {
      sub: user.id,
    };

    const accessToken = await this.jwtService.signAsync(payload, {
      secret: this.jwtConfiguration.secret,
      expiresIn: this.jwtConfiguration.expiresIn,
    });

    await this.userRepository.findOneAndUpdate(
      {
        id: user.id,
      },
      {
        lastToken: accessToken,
      },
    );

    return {
      access_token: accessToken,
    };
  }

  async validateUser(username: string, password: string) {
    const user = await this.userRepository.findOne({ username });
    if (user && (await compare(password, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
