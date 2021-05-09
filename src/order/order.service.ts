import { HttpException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/auth/entities/user.entity";
import { UserService } from "src/auth/user/user.service";
import { getConnection, getRepository, Repository } from "typeorm";
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
        return this.orderRepository.find({ relations: ["user"] });
    }

    async findOne(id: number) {
        // return this.orderRepository.findOne(id).then((data) => {
        //     if (!data) throw new NotFoundException(); //throw new HttpException({}, 204);
        //     return data;
        // });
        // const a = await getRepository(UserEntity)
        //     .createQueryBuilder("user")
        //     .from(this.userRepo, "user")
        //     .where("UserService.userId =:id");
        // const a = await UserService.fi(id)
        // console.log(a);
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
