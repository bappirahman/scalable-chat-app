import { IsEmail, IsOptional, IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  name: string;
  @IsEmail()
  email: string;
  @IsString()
  provider: string;
  @IsString()
  oauth_id: string;
  @IsString()
  @IsOptional()
  image?: string;
}
