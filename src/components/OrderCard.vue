<template lang="">
    <div class="order-card-wrapper flex-column">
        <div>Данные по заказу:</div>
        <div class="flex-row">
            <DxNumberBox label="Идентификатор заказа" :value="order.id" :readOnly="true" />
            <DxTextBox label="Номер в учетной системе" :value="order.uid1c" :readOnly="true" />
            <DxDateBox label="Дата создания" :value="order.created" :readOnly="true" />
            <DxTextBox label="Статус заказа" :value="order.status.title" :readOnly="true" />
        </div>
        <div>Данные по клиенту:</div>
        <div class="flex-row">
            <DxTextBox label="Имя" :value="order.client.firstname" :readOnly="true" />
            <DxTextBox label="Фамилия" :value="order.client.lastname" :readOnly="true" />
            <DxTextBox label="Телефон" :value="order.client.phone" :readOnly="true" />
        </div>
        <div>Данные по магазину:</div>
        <DxTextBox label="Точка выдачи" :value="order.shop.title" :readOnly="true" />
        <div>Данные по способу оплаты:</div>
        <div class="flex-row">
            <DxTextBox label="Способ оплаты" :value="order.payment.method.title" :readOnly="true" :elementAttr="{class:'flex-item-full'}"  />
            <DxTextBox label="Статус оплаты" :value="order.payment.status.title" :readOnly="true" />
        </div>
        <div>Состав заказа:</div>
        <div class="flex-column">
            <div v-for="item in order.items" :key="item.id" class="flex-column flex-item-full">
                <DxTextBox label="Наименование товара" :value="item.title" :readOnly="true"  />
                <div class="flex-row">
                    <DxNumberBox label="Количество" :value="item.quantity" :readOnly="true" />
                    <DxNumberBox label="Цена" :value="item.price" :readOnly="true" />
                    <DxTextBox label="Статус резервирования" :value="item.status" :readOnly="true" />
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import DxNumberBox from 'devextreme-vue/number-box'
import DxDateBox from 'devextreme-vue/date-box'
import DxTextBox from 'devextreme-vue/text-box'
import type { Order } from '@/interfaces/Order.interface'
const props = defineProps<{
    order:Order
}>()

</script>
<style lang="">
    
</style>