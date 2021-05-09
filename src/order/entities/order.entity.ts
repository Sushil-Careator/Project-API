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
    amount: number;

    @Column({ nullable: true, default: () => "CURRENT_TIMESTAMP" })
    orderDate: Date;

    @Column({ nullable: true })
    shoppingDate: Date;

    @Column({ default: "pending" })
    status: string;

    @ManyToOne(() => UserEntity, (user) => user.userId)
    @JoinColumn({ name: "userId" })
    user: UserEntity;

    @OneToMany(() => Order, (order) => order.orderId)
    @JoinColumn({ name: "userId" })
    order: UserEntity;
}
