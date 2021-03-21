import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../database/entity/user.entity'
@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private usersRepository: Repository<UserEntity>,
    ) { }

    public async findAll(): Promise<UserEntity[]> {
        return this.usersRepository.find();
    }

    public async findOne(id: number): Promise<UserEntity> {
        return this.usersRepository.findOneOrFail(id);
    }
}
