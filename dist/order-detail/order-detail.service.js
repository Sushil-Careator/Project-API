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
exports.OrderDetailService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_service_1 = require("../auth/user/user.service");
const typeorm_2 = require("typeorm");
const order_detail_entity_1 = require("./entities/order-detail.entity");
let OrderDetailService = class OrderDetailService {
    constructor(orderDetailRepository, userService) {
        this.orderDetailRepository = orderDetailRepository;
        this.userService = userService;
    }
    async create(createOrderDetailDto, userId) {
        const user = await this.userService.findById(userId);
        let [data, count] = await this.orderDetailRepository.findAndCount();
        console.log(data);
        console.log(count);
        return this.orderDetailRepository.save({
            orderAmount: createOrderDetailDto.orderAmount,
            orderQty: createOrderDetailDto.orderQty,
            orderId: count + 1,
            paymentId: count + 1,
            address: count + 1,
            user: user,
        });
    }
    findAll() {
        return this.orderDetailRepository.find({
            relations: ["user", "orderId", "payment", "address"],
        });
    }
    findOne(id) {
        return this.orderDetailRepository.findOne(id).then((data) => {
            if (!data)
                throw new common_1.NotFoundException();
            return data;
        });
    }
    update(id, updateOrderDetailDto) {
        return this.orderDetailRepository.update({ orderDetailId: id }, {
            orderAmount: updateOrderDetailDto.orderAmount,
            orderQty: updateOrderDetailDto.orderQty,
        });
    }
    remove(id) {
        return this.orderDetailRepository.delete(id);
    }
};
OrderDetailService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(order_detail_entity_1.OrderDetail)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService])
], OrderDetailService);
exports.OrderDetailService = OrderDetailService;
//# sourceMappingURL=order-detail.service.js.map