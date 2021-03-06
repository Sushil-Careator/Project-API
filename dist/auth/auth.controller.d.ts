/// <reference types="multer" />
import { AuthService } from "./auth.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { LoginDto } from "./dto/login.dto";
import { UserService } from "./user/user.service";
import { UserEntity } from "./entities/user.entity";
export declare class AuthController {
    private authService;
    private userService;
    constructor(authService: AuthService, userService: UserService);
    login(loginDto: LoginDto): Promise<{
        message: string;
        access_token: string;
        expiresIn: number;
    }>;
    register(createUserDto: CreateUserDto): Promise<UserEntity>;
    getProfile(req: any): Promise<UserEntity>;
    uploadFile(file: Express.Multer.File, req: any): import("rxjs").Observable<{
        profileImage: string;
    }>;
    serveAvatar(fileId: any, res: any): Promise<any>;
}
