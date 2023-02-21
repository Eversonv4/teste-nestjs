import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './modules/post/post.module';
import { CategoriesModule } from './modules/categories/categories.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PostModule, CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
