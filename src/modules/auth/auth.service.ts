import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthSigninDTO } from './dto/auth-signin.dto';
import { AuthSignupDTO } from './dto/auth-signup.dto';
import { UsersService } from '../users/users.service';
import { UsersRepository } from '../users/users.repository';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

  private AUDIENCE: string = 'users'
  private ISSUER: string = 'DS'

  
  constructor(
    private readonly usersService: UsersService,
    private readonly usersRepository: UsersRepository,
    private readonly jtwService: JwtService,
  ) {}

  async signup(body: AuthSignupDTO) {
    const user = await this.usersService.create(body);
    return this.createToken(user);
  }
  
  async signin(body: AuthSigninDTO) {
    const user = await this.usersRepository.findByEmail(body.email);
    if (!user) throw new UnauthorizedException('Email or password invalid');
    const checkPassword = bcrypt.compareSync(body.password, user.password)
    if(!checkPassword) throw new UnauthorizedException('Email or password invalid');
    
    return this.createToken(user)
  }

  createToken(user: User) {
    const token = this.jtwService.sign(
      {
        name: user.name,
        email: user.email,
      },
      {
        expiresIn: '1 day',
        subject: String(user.id),
        issuer: this.ISSUER,
        audience: this.AUDIENCE,
      },
    );
    return { token };
  }


  checkToken(token: string) {
    try {

      const data = this.jtwService.verify(token, {
        issuer: this.ISSUER,
        audience: this.AUDIENCE
      })
      return data;
      
    } catch (error) {
      console.log(error)
      throw new BadRequestException(error)
    }
  }
}
