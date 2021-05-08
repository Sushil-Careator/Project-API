import { ApiProperty } from "@nestjs/swagger";

export class CreateOrderDto {
    @ApiProperty({ example: "order" })
    amount: number;

    @ApiProperty()
    orderDate: Date;

    @ApiProperty()
    shoppingDate: Date;

    @ApiProperty()
    status: string;

    @ApiProperty()
    user: string;
}
