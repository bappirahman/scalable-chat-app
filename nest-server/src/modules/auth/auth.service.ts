import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { DRIZZLE_INJECTION_TOKEN } from '../db/db.module';
import { type DrizzleDB } from '../db/type/drizzle';
import { user } from '../db/schema';
import { eq } from 'drizzle-orm';
import { SignInDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject(DRIZZLE_INJECTION_TOKEN) private readonly db: DrizzleDB,
  ) {}

  async signIn(signInDto: SignInDto) {
    try {
      console.log('starting block');
      const findUser = await this.db
        .select()
        .from(user)
        .where(eq(user.email, signInDto.email))
        .limit(1);
      console.log('found the user');
      if (!findUser) {
        this.db.insert(user).values(signInDto).returning();
      }
      return findUser;
    } catch (error) {
      console.error('SignIn error:', error);
      throw new HttpException(
        'Authentication failed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  //  try {
  //     let findUser = await prisma.user.findUnique({
  //       where: {
  //         email: body.email,
  //       },
  //     });
  //     if (!findUser) {
  //       findUser = await prisma.user.create({
  //         data: body,
  //       });
  //     }
  //     let jwtPayload = {
  //       name: body.name,
  //       email: body.email,
  //       id: findUser.id,
  //     };
  //     if (!process.env.JWT_SECRET) {
  //       throw new Error('JWT_SECRET is not defined in environment variables');
  //     }
  //     const token = jwt.sign(jwtPayload, process.env.JWT_SECRET as string, {
  //       expiresIn: '365d',
  //     });
  //     return res.json({
  //       message: 'Logged in successfully',
  //       user: {
  //         ...findUser,
  //         token: `Bearer ${token}`,
  //       },
  //     });
  //   } catch (error) {
  //     return res.status(500);
  //   }
}
