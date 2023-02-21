import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty({ message: 'O título não pode estar vazio' })
  @IsString({ message: 'O titulo deve ser string' })
  title: string;

  @IsNotEmpty({ message: 'O texto não pode estar vazio' })
  @IsString({ message: 'O texto deve ser string' })
  text: string;

  @IsOptional()
  categories: any;
}
