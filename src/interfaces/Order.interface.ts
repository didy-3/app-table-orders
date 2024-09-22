import type { Client } from "./Client.interface"
import type { Item } from "./Item.interface"
import type { Payment } from "./Payment.interface"
import type { Shipment } from "./Shipment.interface"
import type { Shop } from "./Shop.interface"
import type { Status } from "./Status.interface"

export interface Order {
    id: number //уникальный id заказа
    uid1c: string //номер заказа в учетной системе
    shipment: Shipment
    shop: Shop //точка выдачи(магазин)
    created: string //дата - время создания заказа
    client: Client
    items: Item[]
    operator: string //uid оператора который создал заказ
    payment: Payment //статус и выбранный способ оплаты заказа
    status: Status	
}