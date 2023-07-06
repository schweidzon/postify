import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {
  IsEmail,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  @IsStrongPassword(
    {
      minLength: 6,
      minLowercase: 2,
      minSymbols: 1,
      minUppercase: 1,
      minNumbers: 3,
    },
    {
      message:
        'Password must have lower case characters (min 2), upper case characteres (min 1), a synbol (ex: @) and numbers (min 3)',
    },
  )
  password: string;

  @IsString()
  @IsOptional()
  avatar: string;
} // talvez colocar IsOptinal nos atributos
