import { UserService } from "src/auth/user/user.service";
import { Repository } from "typeorm";
import { CreateOrderDetailDto } from "./dto/create-order-detail.dto";
import { UpdateOrderDetailDto } from "./dto/update-order-detail.dto";
import { OrderDetail } from "./entities/order-detail.entity";
export declare class OrderDetailService {
    private orderDetailRepository;
    private userService;
    constructor(orderDetailRepository: Repository<OrderDetail>, userService: UserService);
    create(createOrderDetailDto: CreateOrderDetailDto, userId: string): Promise<{
        orderAmount: number;
        orderQty: number;
        orderId: number;
        paymentId: number;
        address: number;
        user: import("../auth/entities/user.entity").UserEntity;
    } & OrderDetail>;
    findAll(): Promise<OrderDetail[]>;
    findOne(id: number): Promise<OrderDetail>;
    update(id: number, updateOrderDetailDto: UpdateOrderDetailDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
