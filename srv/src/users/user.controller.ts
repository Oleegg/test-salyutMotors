import { UserService } from './users.service';
import { Controller, Get, Logger, Query } from '@nestjs/common';
import { UsersResponseDto } from './users.response.dto';

@Controller('users')
export class UserController {
  private readonly logger = new Logger(UserController.name);
  constructor(private userService: UserService) {}

  @Get()
  async findUsersByParams(@Query() query) {
    this.logger.log('Get all users, params');
    const users = await this.userService.findByParams(query);
    return users.map((user) => UsersResponseDto.fromUsersEntity(user));
  }
}
