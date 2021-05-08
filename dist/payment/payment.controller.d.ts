import { PaymentService } from "./payment.service";
import { CreatePaymentDto } from "./dto/create-payment.dto";
import { UpdatePaymentDto } from "./dto/update-payment.dto";
export declare class PaymentController {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    create(req: any, createPaymentDto: CreatePaymentDto): Promise<{
        amountPaid: number;
        paymentMethod: string;
        paymentType: string;
        orderId: number;
        user: import("../auth/entities/user.entity").UserEntity;
    } & import("./entities/payment.entity").Payment>;
    findAll(): Promise<import("./entities/payment.entity").Payment[]>;
    findOne(id: string): Promise<import("./entities/payment.entity").Payment>;
    update(id: string, updatePaymentDto: UpdatePaymentDto): string;
    remove(id: string): string;
}
