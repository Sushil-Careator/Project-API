import { UserService } from "src/auth/user/user.service";
import { Repository } from "typeorm";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { Order } from "./entities/order.entity";
export declare class OrderService {
    private orderRepository;
    private userService;
    constructor(orderRepository: Repository<Order>, userService: UserService);
    create(createOrderDto: CreateOrderDto, userId: string): Promise<{
        amount: number;
        orderDate: Date;
        shoppingDate: Date;
        user: import("../auth/entities/user.entity").UserEntity;
    } & Order>;
    findAll(): Promise<Order[]>;
    findOne(id: number): Promise<Order>;
    update(id: number, updateOrderDto: UpdateOrderDto): Promise<import("typeorm").UpdateResult>;
}
