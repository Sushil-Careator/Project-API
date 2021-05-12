import { UserEntity } from "src/auth/entities/user.entity";
export declare class Order {
    orderId: number;
    totalAmount: number;
    orderDate: Date;
    shoppingDate: Date;
    status: string;
    products: string[];
    user: UserEntity;
    order: UserEntity;
}
