import { UserEntity } from "src/auth/entities/user.entity";
export declare class OrderDetail {
    orderDetailId: number;
    orderAmount: number;
    orderQty: number;
    orderId: number;
    user: UserEntity;
    paymentId: number;
    address: number;
}
