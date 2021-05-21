import { UserService } from "src/auth/user/user.service";
import { ProductService } from "src/product/product.service";
import { Repository } from "typeorm";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { Order } from "./entities/order.entity";
export declare class OrderService {
    private orderRepository;
    private userService;
    private productService;
    constructor(orderRepository: Repository<Order>, userService: UserService, productService: ProductService);
    create(createOrderDto: CreateOrderDto, userId: string): Promise<{
        totalAmount: number;
        orderDate: Date;
        shoppingDate: Date;
        products: string;
        user: import("../auth/entities/user.entity").UserEntity;
    } & Order>;
    findAll(): Promise<Order[]>;
    findOne(id: number): Promise<void>;
    update(id: number, updateOrderDto: UpdateOrderDto, userId: any): Promise<void>;
    findById(id: string): Promise<Order[]>;
}
