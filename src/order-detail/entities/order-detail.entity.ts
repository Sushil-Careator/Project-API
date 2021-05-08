import { UserEntity } from "src/auth/entities/user.entity";
import { Order } from "src/order/entities/order.entity";
import { Product } from "src/product/entities/product.entity";
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    // OneToOne,
    PrimaryColumn,
    PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "order-details" })
export class OrderDetail {
    //@PrimaryColumn()
    @PrimaryGeneratedColumn({ type: "integer" })
    orderDetailId: number;

    @Column({ type: "decimal", precision: 10 })
    orderAmount: number;

    @Column({ type: "integer" })
    orderQty: number;

    // @ManyToOne(() => UserEntity, (user) => user.userId)
    // @JoinColumn({ name: "userId" })
    // users: UserEntity;

    //   //@PrimaryColumn()
    @ManyToOne(() => Order, (order) => order.orderId)
    @JoinColumn({ name: "orderId" })
    orderId: number;

    @ManyToOne(() => UserEntity, (user) => user.userId)
    @JoinColumn({ name: "userId" })
    user: UserEntity;
}
