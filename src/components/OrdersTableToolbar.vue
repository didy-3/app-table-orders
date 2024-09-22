<template lang="">
<div class="flex-column">
    <div class="flex-row">
        <DxNumberBox label='Идентификатор заказа' v-model:value='orderId' />
        <DxButton text="Искать" @click="getOrder" :elementAttr="{class:'btn-with-margin-top'}" />
    </div>
    <div class="flex-row">
        <DxDateRangeBox 
            min="2024-05-01"
            max="2024-06-30"
            v-model:value="period"
        />        
        <DxTagBox 
            label='Статус' 
            width="auto" 
            :elementAttr="{class:'statuses-box'}"
            :data-source="statuses" 
            display-expr='title'
            value-expr='id'
            v-model:value="chosenStatuses" />
        <DxButton text="Искать" @click="getOrders" :elementAttr="{class:'btn-with-margin-top'}" />
    </div>
</div>
</template>
<script lang="ts" setup>
import type { Status } from '@/interfaces/Status.interface';
import { useMainStore } from '@/store';
import DxDateRangeBox from 'devextreme-vue/date-range-box';
import DxButton from 'devextreme-vue/button'
import DxTagBox from 'devextreme-vue/tag-box'
import DxNumberBox from 'devextreme-vue/number-box'
import { type Ref, ref } from 'vue';

const main = useMainStore()
const period:Ref<string[]> = ref(['2024-05-01','2024-06-30'])
const statuses: Status[] = [
    {
        id: 0,
        title: 'Неизвестный статус заказа'
    },
    {
        id: 1,
        title: 'Заказ обрабатывается'
    },
    {
        id: 2,
        title: 'Заказ обработан'
    },
    {
        id: 3,
        title: 'Не хватило товара для резервирования'
    },
    {
        id: 4,
        title: 'Заказ выполнен'
    },
    {
        id: 5,
        title: 'Заказ отменен'
    },
    {
        id: 6,
        title: 'Заказ зарезервирован'
    },
]
const chosenStatuses: Ref<number[]> = ref([])
const orderId: Ref<number|null> = ref(null)
function getOrders(){
    main.getOrders(period.value[0],period.value[1], chosenStatuses.value)
}
function getOrder(){
    if(orderId.value==null) return
    main.getOrder(orderId.value)
}
</script>
<style lang="scss">
.btn-with-margin-top{margin-top: 7.5px;}
.statuses-box{min-width:400px;}
</style>