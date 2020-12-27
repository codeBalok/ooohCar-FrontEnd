import { CommonModel } from './commonModel';

export class AddNewCarListModel {
    MakeType: CommonModel;
    CarModel: CommonModel;
    Year: CommonModel;
    Variant: CommonModel;
    Condition: CommonModel;
    Price: CommonModel;
    Transmission: CommonModel;
    Fuel: CommonModel;
    Cylinder: CommonModel;
    DriveTrain: string;
    BodyType: CommonModel;
    Color: CommonModel;
    AirConditioning: string;
    AuctionGrade: string;
    Location: CommonModel;
    Kilometer:string;
}

export class addvehicleForm {
    Id: string = "0";
    MakeId: string ="0";
    YearId: string = "0";
    ModelId: string = "0";
    Variant: string = "0";
    ConditionId: string = "0";
    PriceId: string = "0";
    Kilometer: string = "0";
    TransmissionId: string = "0";
    FuelTypeId: string = "0";
    DriveTrain: string = "0";
    CylindersId: string = "0";
    BodyTypeId: string = "0";
    ColourId: string = "0";
    AirConditioning: string = "0";
    AuctionGrade: string = "0";
    LocationId: string = "0";
    VehicleImageId:string="0";
    VehicleImage:any;
}
