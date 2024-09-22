import type { ShipmentMethod } from "./ShipmentMethod.interface"

export interface Shipment {
    date: string //дата когда заказ будет готов к выдаче клиенту
    method: ShipmentMethod
}