"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const multer_1 = require("multer");
const rxjs_1 = require("rxjs");
const auth_service_1 = require("./auth.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const login_dto_1 = require("./dto/login.dto");
const jwt_guard_1 = require("./jwt.guard");
const user_service_1 = require("./user/user.service");
const uuid_1 = require("uuid");
let AuthController = class AuthController {
    constructor(authService, userService) {
        this.authService = authService;
        this.userService = userService;
    }
    login(loginDto) {
        return this.authService.login(loginDto);
    }
    register(createUserDto) {
        return this.authService.registerUser(createUserDto);
    }
    getProfile(req) {
        return this.userService.findById(req.user.userId);
    }
    uploadFile(file, req) {
        const user = req.user.user;
        console.log(user);
        console.log(file);
        return rxjs_1.of({ imagePath: file.filename });
    }
};
__decorate([
    common_1.Post("login"),
    common_1.HttpCode(200),
    swagger_1.ApiOkResponse({ description: "Login Successful" }),
    swagger_1.ApiBadRequestResponse({
        description: "User does not exists or invalid login details",
    }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "login", null);
__decorate([
    common_1.Post("register"),
    swagger_1.ApiCreatedResponse({ description: "New user account created" }),
    swagger_1.ApiBadRequestResponse({
        description: "User already exists or server error",
    }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "register", null);
__decorate([
    common_1.UseGuards(jwt_guard_1.JwtAuthGuard),
    common_1.Get("profile"),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getProfile", null);
__decorate([
    common_1.UseGuards(jwt_guard_1.JwtAuthGuard),
    common_1.Post("upload"),
    common_1.UseInterceptors(platform_express_1.FileInterceptor("file", {
        storage: multer_1.diskStorage({
            destination: "./upload/profileimage",
            filename: (req, file, callback) => {
                return callback(null, `${uuid_1.v4()}${file.originalname}`);
            },
        }),
    })),
    __param(0, common_1.UploadedFile()), __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "uploadFile", null);
AuthController = __decorate([
    swagger_1.ApiTags("Authentication"),
    common_1.Controller("auth"),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        user_service_1.UserService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map