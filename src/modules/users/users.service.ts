import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {

  constructor(private readonly usersRepository: UsersRepository) {}

  async create(body: CreateUserDto) {
    const user = await this.findByEmail(body.email);
    console.log(user)
    if (user)
      throw new HttpException('User already exists', HttpStatus.CONFLICT);
    const hashPassword = bcrypt.hashSync(body.password, 12);
    await this.usersRepository.create({ ...body, password: hashPassword });
  }

  findAll() {
    return this.usersRepository.findAll();
  }

  async findByEmail(email: string) {
    return await this.usersRepository.findByEmail(email);
  }

  async signIn(body: UpdateUserDto) {
    return await this.usersRepository.signIn(body)
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
