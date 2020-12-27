import { CommonModel } from './commonModel';

export class SideSearchListModel {
    CarType: CommonModel;
    Make: CommonModel;
    CarModel: CommonModel;
    Location: CommonModel;
    Year: CommonModel;
    Variant:CommonModel;
}

export class SideSearchModel {
    CarTypeId: string = "0";
    MakeId: string = "0";
    CarModelId: string = "0";
    LocationId: string = "0";
    YearId: string = "0";
}
