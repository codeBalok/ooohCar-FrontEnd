import { CommonModel } from './commonModel';

export class SearchListModel {
    CarType: CommonModel;
    Make: CommonModel;
    CarModel: CommonModel;
    Location: CommonModel;
    Year: CommonModel;
}

export class SearchModel {
    CarTypeId: string = "0";
    MakeId: string = "0";
    CarModelId: string = "0";
    LocationId: string = "0";
    YearId: string = "0";
    UserId:string="";
}
export class SearchSelectedMakes {
    Make: CommonModel[] ;
}
export class SearchSelectedModels {
    Model: CommonModel[] ;
}
export class SearchSelectedVariants{
    Variant: CommonModel[] ;
}
export class SearchSelectedPrice{
    Price:[];
}
export class SearchSelectedOdometer{
    Odometer:[];
}
export class SearchSelectedTransmission
{
    Transmission:[];
}