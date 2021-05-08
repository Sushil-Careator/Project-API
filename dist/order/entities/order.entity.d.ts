import { UserEntity } from "src/auth/entities/user.entity";
export declare class Order {
    orderId: number;
    amount: number;
    orderDate: Date;
    shoppingDate: Date;
    status: string;
    user: UserEntity;
}
