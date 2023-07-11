import { Module } from '@nestjs/common';
import { PublicationsService } from './publications.service';
import { PublicationsController } from './publications.controller';
import { PublicationsRepository } from './publications.repository';
import { AuthModule } from '../auth/auth.module'; // Importe o AuthModule aqui
import { AuthGuard } from '../auth/authGuard/auth.guard';
import { UsersModule } from '../users/users.module';

@Module({
  controllers: [PublicationsController],
  providers: [PublicationsService, PublicationsRepository, AuthGuard],
  imports: [AuthModule, UsersModule] // Adicione o AuthModule aos imports
})
export class PublicationsModule {}
