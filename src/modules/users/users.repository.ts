import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersRepository {
 

  constructor(private readonly prisma: PrismaService) {}

  async create(body: CreateUserDto) {
    return await this.prisma.user.create({ data: body });
  }
  async findAll() {
    return await this.prisma.user.findMany({
      where: {},
      select: {
        name: true,
        email: true,
        avatar: true
      }
    });
  }

  async findByEmail(email: string) {
     return await this.prisma.user.findFirst({where: {email}})
  }

  signIn(body: UpdateUserDto) {
    return  'oi'
  }

  async findUserById(id: number) {
    return await this.prisma.user.findFirst({where: {id}})
  }
 
}
