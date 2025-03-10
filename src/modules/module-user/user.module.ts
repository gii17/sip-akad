import { Module } from "@nestjs/common";

@Module({
    providers: [UserService, UserRepository],
    controllers: [UserController],
    exports: [UserService],
})
export class UserModule {}