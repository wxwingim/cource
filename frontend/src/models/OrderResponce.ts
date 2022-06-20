export interface OrderRes{
    id: number,
    model: string,
    defect: string,
    equipment: string,
    mechanicalDamage: string,
    addres: string,
    quarantee: boolean,
    dateRequest: any,
    dateLimit: any,
    deviceType: DeviceType,
    statusRepair: StatusRepair 
}

export interface DeviceType {
    id: number;
    nameType: string;
}

export interface StatusRepair {
    id: number;
    nametatus: string;
}

export interface Service {
    id: number;
    name: string;
    price: number;
    quarantee: number;
    deviceType: DeviceType;
}

export interface Works{
    id: number,
    service: Service
}
