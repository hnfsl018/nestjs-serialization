import { ClassSerializerInterceptor, Controller, Get, Param, ParseIntPipe, SerializeOptions, UseInterceptors } from '@nestjs/common';
import { GROUP_ALL_USERS, GROUP_USER, UserEntity } from 'src/database/entity/user.entity';
import { UserService } from './user.service';

@Controller('user')
@UseInterceptors(ClassSerializerInterceptor)
export class UserController {
    constructor(
        private readonly userService: UserService
    ) { }

    @Get()
    @SerializeOptions({
        groups: [GROUP_ALL_USERS],
    })
    public async getUsers(): Promise<UserEntity[]> {
        return await this.userService.findAll();
    }

    @Get(':id')
    @SerializeOptions({
        groups: [GROUP_USER],
    })
    public async getUser(
        @Param('id', ParseIntPipe) userId: number,
    ): Promise<UserEntity> {
        return await this.userService.findOne(userId);
    }
}