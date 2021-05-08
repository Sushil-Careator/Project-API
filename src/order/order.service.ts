import { HttpException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserService } from "src/auth/user/user.service";
import { Repository } from "typeorm";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { Order } from "./entities/order.entity";

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Order) private orderRepository: Repository<Order>,
        private userService: UserService
    ) {}

    async create(createOrderDto: CreateOrderDto, userId: string) {
        const user = await this.userService.findById(userId);
        return this.orderRepository.save({
            amount: createOrderDto.amount,
            orderDate: createOrderDto.orderDate,
            shoppingDate: createOrderDto.shoppingDate,
            user: user,
        });
    }

    findAll() {
        return this.orderRepository.find();
    }

    findOne(id: number) {
        return this.orderRepository.findOne(id);
    }

    update(id: number, updateOrderDto: UpdateOrderDto) {
        return this.orderRepository.update(
            { orderId: id },
            {
                amount: updateOrderDto.amount,
                orderDate: updateOrderDto.orderDate,
                shoppingDate: updateOrderDto.shoppingDate,
                status: updateOrderDto.status,
            }
        );
    }

    //     remove(id: number) {
    //         return `This action removes a #${id} order`;
    //     }
}
