import { Address } from "src/address/entities/address.entity";
import { UserEntity } from "src/auth/entities/user.entity";
export declare class Order {
    orderId: number;
    totalAmount: number;
    orderDate: Date;
    shoppingDate: Date;
    status: string;
    products: string;
    isCancelled: boolean;
    user: UserEntity;
    address: Address;
}
