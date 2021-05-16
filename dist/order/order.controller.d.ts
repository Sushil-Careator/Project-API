import { OrderService } from "./order.service";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    create(req: any, createOrderDto: CreateOrderDto): Promise<{
        totalAmount: number;
        orderDate: Date;
        shoppingDate: Date;
        products: string;
        user: import("../auth/entities/user.entity").UserEntity;
    } & import("./entities/order.entity").Order>;
    findOne(id: string): Promise<void>;
    update(id: string, updateOrderDto: UpdateOrderDto): Promise<import("typeorm").UpdateResult>;
    getOrder(req: any): Promise<import("./entities/order.entity").Order[]>;
}
