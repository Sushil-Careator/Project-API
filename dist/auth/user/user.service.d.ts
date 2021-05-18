import { Repository } from "typeorm";
import { CreateUserDto } from "../dto/create-user.dto";
import { UserEntity } from "../entities/user.entity";
import { UpdateUserDto } from "../dto/update-user.dto";
export declare class UserService {
    private userRepo;
    constructor(userRepo: Repository<UserEntity>);
    findByEmail(email: string): Promise<UserEntity>;
    findById(id: string): Promise<UserEntity>;
    create(userDto: CreateUserDto): Promise<UserEntity>;
    updateOne(id: string, user: UpdateUserDto): import("rxjs").Observable<UserEntity>;
}
