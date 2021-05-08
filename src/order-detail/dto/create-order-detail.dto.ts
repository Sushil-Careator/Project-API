import { ApiProperty } from "@nestjs/swagger";

export class CreateOrderDetailDto {
    @ApiProperty({ example: "orderdetail" })
    orderId: number;

    @ApiProperty()
    orderAmount: number;

    @ApiProperty()
    orderQty: number;

    @ApiProperty()
    user: number;
}
