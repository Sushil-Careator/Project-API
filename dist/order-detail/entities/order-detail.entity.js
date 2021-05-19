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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetail = void 0;
const address_entity_1 = require("../../address/entities/address.entity");
const user_entity_1 = require("../../auth/entities/user.entity");
const order_entity_1 = require("../../order/entities/order.entity");
const payment_entity_1 = require("../../payment/entities/payment.entity");
const typeorm_1 = require("typeorm");
let OrderDetail = class OrderDetail {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "integer" }),
    __metadata("design:type", Number)
], OrderDetail.prototype, "orderDetailId", void 0);
__decorate([
    typeorm_1.Column({ type: "decimal", precision: 10 }),
    __metadata("design:type", Number)
], OrderDetail.prototype, "orderAmount", void 0);
__decorate([
    typeorm_1.Column({ type: "integer" }),
    __metadata("design:type", Number)
], OrderDetail.prototype, "orderQty", void 0);
__decorate([
    typeorm_1.OneToMany(() => order_entity_1.Order, (order) => order.orderId),
    typeorm_1.JoinColumn({ name: "orderId" }),
    __metadata("design:type", Number)
], OrderDetail.prototype, "orderId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.UserEntity, (user) => user.userId),
    typeorm_1.JoinColumn({ name: "userId" }),
    __metadata("design:type", user_entity_1.UserEntity)
], OrderDetail.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(() => payment_entity_1.Payment, (payment) => payment.paymentId),
    typeorm_1.JoinColumn({ name: "paymentId" }),
    __metadata("design:type", Number)
], OrderDetail.prototype, "paymentId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => address_entity_1.Address, (address) => address.id),
    typeorm_1.JoinColumn({ name: "address" }),
    __metadata("design:type", Number)
], OrderDetail.prototype, "address", void 0);
OrderDetail = __decorate([
    typeorm_1.Entity({ name: "order-details" })
], OrderDetail);
exports.OrderDetail = OrderDetail;
//# sourceMappingURL=order-detail.entity.js.map