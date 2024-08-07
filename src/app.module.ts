import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://juandahernandez27991:KqZTbBkHAytZYSYX@cluster0.maddn.mongodb.net/',
    ),
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
