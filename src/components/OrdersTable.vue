<template lang="">
    <div class="orders-table-wrapper">
        <TableComponent :rows="ordersList" :columns="columns" :row-click="getOrder" />
    </div>
</template>
<script lang="ts" setup>
import type { Orders } from '@/interfaces/Orders.interface';
import { useMainStore } from '@/store';
import { storeToRefs } from 'pinia';
import TableComponent from '@/components/TableComponent.vue'


const main = useMainStore()
const { ordersList } = storeToRefs(main)
const columns = [
    {
        dataField: 'uid1c',
        caption: 'Номер заказа'
    },
    {
        dataField: 'created',
        caption: 'Дата-время создания заказа',
        dataType: 'datetime'
    },
    {
        dataField: 'status.title',
        caption: 'Статус заказа',
        cellTemplate: statusTemplate
    },
    {
        dataField: 'shipment.method.title',
        caption: 'Тип отгрузки'
    },
    {
        dataField: 'shipment.date',
        caption: 'Дата отгрузки'
    },
    {
        dataField: 'payment.method.title',
        caption: 'Способ оплаты'
    },
    {
        dataField: 'shop.title',
        caption: 'Место отгрузки (адрес магазина)'
    },
    {
        dataField: 'client.lastname',
        caption: 'ФИО клиента',
        calculateCellValue: (rowData: Orders) => {
            return rowData.client.lastname + ' ' + rowData.client.firstname
        }
    },
    {
        dataField: 'amount',
        caption: 'Сумма заказа'
    },
    {
        dataField: 'quantity',
        caption: 'Количество товаров в заказе'
    },
    {
        dataField: 'operator',
        caption: 'Кто создал заказ (оператор)'
    },
]
function statusTemplate(container: HTMLTableCellElement, options: any) {
    container.textContent = options.data?.status?.title
    if (options.data?.status?.id == 4)
        container.classList.add('dark-green-bg')
    else if (options.data?.status?.id == 6)
        container.classList.add('green-bg')
    else if (options.data?.status?.id == 5)
        container.classList.add('green-bg')
}
function getOrder(e:any) {
    main.getOrder(e.data.id)
}
</script>
<style lang="scss">
.orders-table-wrapper {
    tr:hover {
        td {
            background: rgb(221, 221, 221);
        }
    }
    td {
        cursor: pointer;
    }
}
</style>