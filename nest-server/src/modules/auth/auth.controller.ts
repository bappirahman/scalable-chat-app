import { Body, Controller, Post } from '@nestjs/common';
import jwt from 'jsonwebtoken';
import prisma from 'prisma';
import { SignInDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  @Post('login')
  static async login(@Body() signInDto: SignInDto) {}
}
