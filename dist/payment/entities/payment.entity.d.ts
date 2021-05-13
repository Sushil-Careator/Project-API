import { UserEntity } from "src/auth/entities/user.entity";
export declare class Payment {
    paymentId: number;
    amountPaid: number;
    paymentDate: Date;
    paymentMethod: string;
    orderId: number;
    user: UserEntity;
}
