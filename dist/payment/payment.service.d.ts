import { UserService } from "src/auth/user/user.service";
import { Repository } from "typeorm";
import { CreatePaymentDto } from "./dto/create-payment.dto";
import { UpdatePaymentDto } from "./dto/update-payment.dto";
import { Payment } from "./entities/payment.entity";
export declare class PaymentService {
    private paymentRepository;
    private userService;
    constructor(paymentRepository: Repository<Payment>, userService: UserService);
    create(createPaymentDto: CreatePaymentDto, userId: string): Promise<{
        amountPaid: number;
        paymentMethod: string;
        paymentType: string;
        orderId: number;
        user: import("../auth/entities/user.entity").UserEntity;
    } & Payment>;
    findAll(): Promise<Payment[]>;
    findOne(id: number): Promise<Payment>;
    update(id: number, updatePaymentDto: UpdatePaymentDto): string;
    remove(id: number): string;
}
