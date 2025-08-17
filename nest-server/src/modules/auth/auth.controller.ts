import { Body, Controller } from '@nestjs/common';
import jwt from 'jsonwebtoken';
import prisma from 'prisma';
import { SignInDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  static async login(@Body() signInDto: SignInDto) {}
}
