import { Address } from "src/address/entities/address.entity";
import { UserEntity } from "src/auth/entities/user.entity";
import { Payment } from "src/payment/entities/payment.entity";
export declare class OrderDetail {
    orderDetailId: number;
    orderAmount: number;
    orderQty: number;
    orderId: number;
    user: UserEntity;
    payment: Payment;
    address: Address;
}
