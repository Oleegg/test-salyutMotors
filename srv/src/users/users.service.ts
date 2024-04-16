import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from './users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(
    @InjectRepository(UsersEntity)
    private usersRepo: Repository<UsersEntity>,
  ) {}

  // get list of all users
  // async findAll(): Promise<UsersEntity[]> {
  //   return await this.usersRepo.find();
  // }

  async findByParams(query: any): Promise<any> {
    const { page, maxpages: maxPages, limit } = query;
    if (!page || !maxPages || !limit) return await this.usersRepo.find();
    const count = maxPages * limit;
    const users = await this.usersRepo.find();
    return users.filter((_, i) => i > page - 1 * count && i < count);
  }
}
