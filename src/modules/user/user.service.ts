import { ConflictException, Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { FindAllUserDto } from './dto/find-all-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findAll(findAllUserDto: FindAllUserDto) {
    return await this.userRepository.findAll(findAllUserDto);
  }

  async findOne(id: string) {
    return await this.userRepository.findOne({ id });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      const user = await this.userRepository.findOneAndUpdate(
        {
          id,
        },
        updateUserDto,
      );
      return user;
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY' || error.code === 1062) {
        throw new ConflictException('Username already exists');
      }
      throw error;
    }
  }

  async remove(id: string) {
    return await this.userRepository.findOneAndDelete({ id });
  }
}
