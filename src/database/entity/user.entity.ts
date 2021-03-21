import { Exclude, Expose } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export const GROUP_USER = 'group_user_details';
export const GROUP_ALL_USERS = 'group_all_users';

@Entity({ name: 'user' })
export class UserEntity {

    @PrimaryGeneratedColumn()
    @Expose({ groups: [GROUP_USER, GROUP_ALL_USERS] })
    id: number;

    @Column({ type: 'varchar', length: 100 })
    @Expose({ groups: [GROUP_USER, GROUP_ALL_USERS] })
    firstName: string;

    @Column({ type: 'varchar', length: 100 })
    @Expose({ groups: [GROUP_USER, GROUP_ALL_USERS] })
    lastName: string;

    @Column({ type: 'varchar', length: 100 })
    @Expose({ groups: [GROUP_USER] })
    username: string;

    @Column({ type: 'varchar', length: 100 })
    @Expose({ groups: [GROUP_USER] })
    email: string;

    @Column({ default: true })
    @Exclude()
    isActive: boolean;

    @Column({ default: true })
    @Exclude()
    password: string;

    constructor(partial: Partial<UserEntity>) {
        Object.assign(this, partial);
    }
}