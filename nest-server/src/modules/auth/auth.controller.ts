import { Body, Controller, Post, Request } from '@nestjs/common';
import jwt from 'jsonwebtoken';
import prisma from 'prisma';
import { SignInDto } from './dto/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('signin')
  async signIn(@Request() req: any) {
    const signInDto: SignInDto = req.body;
    return this.authService.signIn(signInDto);
  }
}
