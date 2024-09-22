import type { ShipmentMethod } from "./ShipmentMethod.interface";
import type { Status } from "./Status.interface";

export interface Payment{
    method: ShipmentMethod
    status: Status
}