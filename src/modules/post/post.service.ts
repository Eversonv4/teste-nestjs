import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaServices';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) { }

  create(createPostDto: CreatePostDto) {
    return this.prisma.post.create({
      data: {
        ...createPostDto,
        categories: {
          connect: {
            id: createPostDto.categories,
          },
        },
      },
    });
  }

  findAll() {
    return this.prisma.post.findMany({
      include: {
        categories: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.post.findFirst({
      where: {
        id,
      },
    });
  }

  update(id: string, updatePostDto: UpdatePostDto) {
    return this.prisma.post.update({
      data: {
        ...updatePostDto,
        categories: {
          connect: {
            id: updatePostDto.categories,
          },
        },
      },
      where: {
        id,
      },
    });
  }

  remove(id: string) {
    return this.prisma.post.delete({
      where: {
        id,
      },
    });
  }
}
