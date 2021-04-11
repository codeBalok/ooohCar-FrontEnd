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
export class SearchSelectedYear
{
    Year:CommonModel[] ;
}

export class  SearchSelectedFuelType
{
    FuelType:[];
}
export class  SearchSelectedCylinder
{
    Cylinder:[];
}
export class  SearchSelectedEngineSize
{
    EngineSize:[];
}
export class  SearchSelectedEngineDescription
{
    EngineDescription:CommonModel;
}

export class  SearchSelectedFuelEconomy
{
    FuelEconomy:CommonModel;
}
export class  SearchSelectedInductionTurbo
{
    InductionTurbo:CommonModel;
}
export class  SearchSelectedPower
{
    Power:CommonModel;
}
export class  SearchSelectedPowerToWeight
{
    PowerToWeight:CommonModel;
}
export class  SearchSelectedTow
{
    Tow:CommonModel;
}
export class  SearchSelectedDriveType
{
    DriveType:CommonModel;
}
export class SearchSelectedBodyType
{
    BodyType:[];
}
export class SearchSelectedColour
{
    Colour:[];
}
export class  SearchSelectedSeats
{
    Seat:CommonModel[];
}

export class  SearchSelectedLifeStyles
{
    LifeStyles:CommonModel;
}

export class  SearchSelectedDoors
{
    Doors:CommonModel;    
}
export class SearchSelectedVehicleType
{
    VehicleType:[];
}

export class SearchSelectedCertifiedInspected
{
    CertifiedInspected:[];
}
