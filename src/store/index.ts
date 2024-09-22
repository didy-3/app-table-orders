import type { Orders } from "@/interfaces/Orders.interface";
import type { Order } from "@/interfaces/Order.interface";
import axiosReq from "@/services/axios/axiosReq";
import { createPinia, defineStore } from "pinia";

const pinia = createPinia()
export const useMainStore = defineStore('main', {
	state: () => ({
		token: null as string | null,
		loading: false as boolean,
		ordersList: [] as Orders[],
		orderShown:null as Order | null
	}),
	actions: {
		getOrders(dateFrom: string, dateTo: string, orderStatus:number[]) {
			this.loading = true
			axiosReq(
				'GET',
				'https://msk.ivanor.ru/front/service/test-api/v1/orders',
				{},
				{
					dateFrom:dateFrom,
					dateTo:dateTo,
					orderStatus: orderStatus.join(',')
				},
				(data)=>{
					this.ordersList = data.orders
					this.loading = false
				},
				()=>this.loading = false
			)
		},
		getOrder(id:number){
			this.loading = true
			axiosReq(
				'GET',
				'https://msk.ivanor.ru/front/service/test-api/v1/order/'+id,
				{},
				{},
				(data)=>{					
					this.orderShown = data.order
					this.loading = false
				},
				()=>this.loading = false
			)
		}
	}
})
export default pinia