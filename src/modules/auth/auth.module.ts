import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersRepository } from '../users/users.repository';
import { UsersService } from '../users/users.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from './authGuard/auth.guard';

@Module({
  imports: [JwtModule.register({
    secret: process.env.JWT_SECRET
  })],
  controllers: [AuthController],
  providers: [AuthService, UsersRepository, UsersService, JwtModule],
  exports: [AuthService]

})
export class AuthModule {}
