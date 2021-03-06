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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const rxjs_1 = require("rxjs");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../entities/user.entity");
const operators_1 = require("rxjs/operators");
let UserService = class UserService {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async findByEmail(email) {
        return this.userRepo.findOne({
            where: { userEmail: email },
            relations: ["address"],
        });
    }
    async findById(id) {
        return this.userRepo.findOne({
            where: { userId: id },
            relations: ["address", "order"],
        });
    }
    async create(userDto) {
        const { email, password, name } = userDto;
        const isUserAvailable = await this.findByEmail(email);
        if (isUserAvailable) {
            throw new common_1.HttpException({ message: "User already exists" }, 400);
        }
        const user = this.userRepo.create({
            createdAt: new Date().toISOString(),
            userEmail: email,
            userPassword: password,
            userName: name,
        });
        return this.userRepo.save(user);
    }
    updateOne(id, user) {
        return rxjs_1.from(this.userRepo.update(id, user)).pipe(operators_1.switchMap(() => this.findById(id)));
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map