import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePublicationDto {

  @IsNumber()
  @IsOptional()
  user_id: number
  
  @IsString()
  @IsNotEmpty()
  image: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  text: string;

  @IsString()
  @IsNotEmpty()
  dateToPublish: Date;

  @IsString()
  @IsOptional()
  createdat: Date;

  @IsBoolean()
  @IsNotEmpty()
  published: boolean;  

  @IsString()
  @IsNotEmpty()
  socialMedia: string;
}
