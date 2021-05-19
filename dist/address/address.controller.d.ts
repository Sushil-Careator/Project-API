import { AddressService } from "./address.service";
import { CreateAddressDto } from "./dto/create-address.dto";
import { UpdateAddressDto } from "./dto/update-address.dto";
export declare class AddressController {
    private readonly addressService;
    constructor(addressService: AddressService);
    create(req: any, createAddressDto: CreateAddressDto): Promise<{
        firstName: string;
        lastName: string;
        mobileNo: string;
        city: string;
        line1: string;
        line2: string;
        pincode: number;
        state: string;
        user: import("../auth/entities/user.entity").UserEntity;
        createdAt: string;
    } & import("./entities/address.entity").Address>;
    findOne(id: string): Promise<import("./entities/address.entity").Address>;
    update(id: string, updateAddressDto: UpdateAddressDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    getAddress(req: any): Promise<import("./entities/address.entity").Address[]>;
}
