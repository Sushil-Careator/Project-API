import { OrderDetailService } from "./order-detail.service";
import { CreateOrderDetailDto } from "./dto/create-order-detail.dto";
import { UpdateOrderDetailDto } from "./dto/update-order-detail.dto";
export declare class OrderDetailController {
    private readonly orderDetailService;
    constructor(orderDetailService: OrderDetailService);
    create(req: any, createOrderDetailDto: CreateOrderDetailDto): Promise<{
        orderAmount: number;
        orderQty: number;
        orderId: number;
        paymentId: number;
        address: number;
        user: import("../auth/entities/user.entity").UserEntity;
    } & import("./entities/order-detail.entity").OrderDetail>;
    findAll(): Promise<import("./entities/order-detail.entity").OrderDetail[]>;
    findOne(id: string): Promise<import("./entities/order-detail.entity").OrderDetail>;
    update(id: string, updateOrderDetailDto: UpdateOrderDetailDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
