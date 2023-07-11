
import { CreatePublicationDto } from './dto/create-publication.dto';
import { Publication, User } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class PublicationsRepository {
  constructor(private readonly prisma: PrismaService) {}


  async findUserPublications(userId: number): Promise<Publication[]> {
    return await this.prisma.publication.findMany({where: {user_id: userId}})
  }

  async findByTitle(title: string) {
  
    return  await this.prisma.publication.findFirst({ where:{title} });
  
  }
  async create(body: CreatePublicationDto) {
     return await this.prisma.publication.create({data: body});
  }
}
