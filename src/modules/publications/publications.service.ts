import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { UpdatePublicationDto } from './dto/update-publication.dto';
import { PublicationsRepository } from './publications.repository';
import { User } from '@prisma/client';

@Injectable()
export class PublicationsService {
  constructor(
    private readonly publicationsRepository: PublicationsRepository,
  ) {}

  async create(user: User, body: CreatePublicationDto) {
     const publication = await this.publicationsRepository.findByTitle(body.title);
     console.log(publication)
     if (publication)
       throw new ConflictException('This title is already in use');

       const publicationInfo = {
        image: body.image,
        title: body.title,
        text: body.text,
        dateToPublish: new Date(body.dateToPublish),
        published: false,
        socialMedia: body.socialMedia,
        createdat: new Date(),
        user_id: user.id
       }
    return await this.publicationsRepository.create(publicationInfo);
  }

 async  findAll(userId: number) {
    const publications = await this.publicationsRepository.findAll(userId)
    if(publications.length === 0) throw new NotFoundException('No publications found for this user')
    return publications
  }

  findOne(id: number) {
    return `This action returns a #${id} publication`;
  }

  update(id: number, updatePublicationDto: UpdatePublicationDto) {
    return `This action updates a #${id} publication`;
  }

  remove(id: number) {
    return `This action removes a #${id} publication`;
  }
}
