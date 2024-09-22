import type { Client } from "./Client.interface"
import type { Payment } from "./Payment.interface"
import type { Shipment } from "./Shipment.interface"
import type { Shop } from "./Shop.interface"
import type { Status } from "./Status.interface"

export interface Orders {
    id: number //уникальный id заказа
    amount: number //сумма заказа
    uid1c: string //номер заказа в учетной системе
    shipment: Shipment
    quantity: number//кол - во товара в заказе
    shop: Shop //точка выдачи(магазин)
    created: string //дата - время создания заказа
    client: Client
    payment: Payment //статус и выбранный способ оплаты заказа
    operator: string //uid оператора который создал заказ
    status: Status	
}