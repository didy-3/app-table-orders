<template>
	<div class="page-content flex-column ">
		<!-- <DxPopup v-if="askToken" :visible="askToken" title="Введите токен" height="auto" :width="700">
			<div class="flex-column">
				<DxTextBox label="Токен" placeholder="Введите токен" v-model:value="token"  />
				<DxButton text="Сохранить" @click="checkToken" />
			</div>
		</DxPopup> -->
		<template v-if="token">
			<OrdersTableToolbar />
			<OrdersTable />
		</template>
		
		<DxPopup v-if="orderShown!=null || askToken" :visible="true" :title="askToken? 'Введите токен': 'Заказ'" height="auto"  maxHeight="90vh" :width="700"
			@hiding="hidePopup">
			<DxScrollView>
			<div class="flex-column" v-if="askToken">
				<DxTextBox label="Токен" placeholder="Введите токен" v-model:value="token"  />
				<DxButton text="Сохранить" @click="checkToken" />
			</div>
			<OrderCard v-if="orderShown!=null" :order='orderShown' />
			</DxScrollView>
		</DxPopup>
	</div>
	<LoaderComponent v-if="loading" />
</template>

<script lang="ts" setup>
import ruMessages from 'devextreme/localization/messages/ru.json'
import { locale, loadMessages } from 'devextreme/localization'
import { ref, type Ref } from 'vue'
import { useMainStore } from './store/index'
import { storeToRefs } from 'pinia'
import notify from 'devextreme/ui/notify'
import DxTextBox from 'devextreme-vue/text-box'
import { DxPopup } from 'devextreme-vue/popup'
import { DxScrollView } from 'devextreme-vue/scroll-view'
import DxButton from 'devextreme-vue/button'
import OrdersTable from './components/OrdersTable.vue'
import OrdersTableToolbar from '@/components/OrdersTableToolbar.vue'
import OrderCard from '@/components/OrderCard.vue'
import LoaderComponent from '@/components/LoaderComponent.vue'

loadMessages(ruMessages)
locale('ru')

let main = useMainStore()
let { loading, token, orderShown } = storeToRefs(main)
const askToken: Ref<boolean> = ref(false)
main.token = localStorage.getItem('token')
if (token.value == null)
	askToken.value = true
function checkToken(){
	if(token.value == null || token.value == ''){
		notify('Токен не введен', 'error')
		return
	}
	localStorage.setItem('token', token.value)
	askToken.value = false
}
function hidePopup(){
	if(askToken.value){
		checkToken()
		return
	}
	if(orderShown.value!=null){
		orderShown.value=null
		return
	}
}
</script>

<style lang="scss"></style>
