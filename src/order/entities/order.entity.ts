import { UserEntity } from "src/auth/entities/user.entity";
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "order" })
export class Order {
    @PrimaryGeneratedColumn()
    orderId: number;

    @Column({ nullable: true, precision: 10 })
    totalAmount: number;

    @Column({ nullable: true, default: () => "CURRENT_TIMESTAMP" })
    orderDate: Date;

    @Column({ nullable: true, default: () => "CURRENT_TIMESTAMP" })
    shoppingDate: Date;

    @Column({ default: "pending" })
    status: string;

    @Column("simple-array")
    products: string[];

    @ManyToOne(() => UserEntity, (user) => user.userId)
    @JoinColumn({ name: "userId" })
    user: UserEntity;

    @OneToMany(() => Order, (order) => order.orderId)
    @JoinColumn({ name: "userId" })
    order: UserEntity;
}
