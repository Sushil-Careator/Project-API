import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateAddressDto {
    @ApiProperty()
    @IsNotEmpty()
    firstName: string;

    @ApiProperty()
    @IsNotEmpty()
    lastName: string;

    @ApiProperty()
    @IsNotEmpty()
    mobileNo: string;

    @ApiProperty()
    @IsNotEmpty()
    line1: string;

    @ApiProperty()
    line2?: string;

    @ApiProperty()
    @IsNotEmpty()
    city: string;

    @ApiProperty()
    @IsNotEmpty()
    state: string;

    @ApiProperty()
    // @IsNumber()
    pincode?: number;
}
