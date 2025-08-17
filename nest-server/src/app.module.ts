import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './modules/db/db.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [AuthModule, DbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
