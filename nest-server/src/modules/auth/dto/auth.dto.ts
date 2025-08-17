import { IsEmail, IsOptional, IsString } from 'class-validator';

// interface LoginPayloadType {
//   name: string;
//   email: string;
//   provider: string;
//   oauth_id: string;
//   image?: string;
// }

export class SignInDto {
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
