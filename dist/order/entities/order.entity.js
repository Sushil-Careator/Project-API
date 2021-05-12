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
var Order_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const user_entity_1 = require("../../auth/entities/user.entity");
const typeorm_1 = require("typeorm");
let Order = Order_1 = class Order {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Order.prototype, "orderId", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, precision: 10 }),
    __metadata("design:type", Number)
], Order.prototype, "totalAmount", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], Order.prototype, "orderDate", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], Order.prototype, "shoppingDate", void 0);
__decorate([
    typeorm_1.Column({ default: "pending" }),
    __metadata("design:type", String)
], Order.prototype, "status", void 0);
__decorate([
    typeorm_1.Column("simple-array"),
    __metadata("design:type", Array)
], Order.prototype, "products", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.UserEntity, (user) => user.userId),
    typeorm_1.JoinColumn({ name: "userId" }),
    __metadata("design:type", user_entity_1.UserEntity)
], Order.prototype, "user", void 0);
__decorate([
    typeorm_1.OneToMany(() => Order_1, (order) => order.orderId),
    typeorm_1.JoinColumn({ name: "userId" }),
    __metadata("design:type", user_entity_1.UserEntity)
], Order.prototype, "order", void 0);
Order = Order_1 = __decorate([
    typeorm_1.Entity({ name: "order" })
], Order);
exports.Order = Order;
//# sourceMappingURL=order.entity.js.map