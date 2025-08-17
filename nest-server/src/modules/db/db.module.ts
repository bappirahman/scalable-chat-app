import { Pool } from '@neondatabase/serverless';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { drizzle } from 'drizzle-orm/neon-serverless';
import * as schema from './schema';
import { DrizzleDB } from './type/drizzle';

export const DRIZZLE_INJECTION_TOKEN = Symbol('drizzle-injection-token');

@Module({
  providers: [
    {
      provide: DRIZZLE_INJECTION_TOKEN,
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const databaseURL = configService.get<string>('DATABASE_URL');
        const pool = new Pool({
          connectionString: databaseURL,
        });
        return drizzle(pool, { schema }) as DrizzleDB;
      },
    },
  ],
  exports: [DRIZZLE_INJECTION_TOKEN],
})
export class DbModule {}
