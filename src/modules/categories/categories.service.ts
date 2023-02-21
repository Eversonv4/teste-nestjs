import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaServices';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) { }

  create(createCategoryDto: CreateCategoryDto) {
    return this.prisma.categories.create({
      data: { ...createCategoryDto },
    });
  }

  findAll() {
    return this.prisma.categories.findMany({});
  }

  findOne(id: string) {
    return this.prisma.categories.findFirst({
      where: {
        id,
      },
    });
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.prisma.categories.update({
      data: { ...updateCategoryDto },
      where: { id },
    });
  }

  remove(id: string) {
    return this.prisma.categories.delete({
      where: {
        id,
      },
    });
  }
}
