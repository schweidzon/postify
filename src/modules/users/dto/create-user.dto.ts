import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsStrongPassword({
    minLength: 6,
    minLowercase: 2,
    minSymbols: 1,
    minUppercase: 1,
    minNumbers: 3
  }, {message: "Password must have lower case characters (min 2), upper case characteres (min 1), a synbol (ex: @) and numbers (min 3)"})  
  password: string;

  @IsString()
  @IsNotEmpty()  
  avatar: string;
}
