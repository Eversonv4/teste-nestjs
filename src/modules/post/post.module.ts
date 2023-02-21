import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { PrismaService } from 'src/database/PrismaServices';

@Module({
  controllers: [PostController],
  providers: [PostService, PrismaService],
})
export class PostModule { }
