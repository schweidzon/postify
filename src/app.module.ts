import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { PublicationsModule } from './modules/publications/publications.module';
@Module({
  imports: [PrismaModule, UsersModule, AuthModule, PublicationsModule],
})
export class AppModule {}
