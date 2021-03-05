import { CommonModel } from './commonModel';

export class SideSearchListModel {
    CarType: CommonModel;
    Make: CommonModel;
    CarModel: CommonModel;
    Location: CommonModel;
    Year: CommonModel;
    Variant:CommonModel;
    Transmission:CommonModel;
    CertifiedInspected:CommonModel;
    FuelType:CommonModel;
    Cylinders:CommonModel;
    EngineSize:CommonModel;
    EngineDescription:CommonModel;
    FuelEconomy:CommonModel;
    BodyType:CommonModel;
    Colour:CommonModel;
    InductionTurbo:CommonModel;
    Power:CommonModel;
    PowerToWeight:CommonModel;
    Tow:CommonModel;
    DriveType:CommonModel;
}

export class SideSearchModel {
    CarTypeId: string = "0";
    MakeId: string = "0";
    CarModelId: string = "0";
    LocationId: string = "0";
    YearId: string = "0";
}
