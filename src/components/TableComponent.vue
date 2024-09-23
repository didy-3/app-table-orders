<template lang="">
    <DxDataGrid 
        id="gridContainer" 
        ref="dataGridTableRef" 
        :data-source="rows"
        :key-expr="keyExpr"
        :wordWrapEnabled="true"
        :show-borders="true"
        :show-row-lines="true"
        :row-alternation-enabled="true"
        :style="{ maxHeight: '84vh' }"
        :column-auto-width="true"
        :columns="columns"
        @row-click="rowClick" >   
        <DxScrolling />
        <DxPaging :page-size="25" />
        <DxPager :visible="true" />
        <DxSorting mode="multiple" />
        <DxSearchPanel :visible="false" />
    </DxDataGrid>
</template>
<script lang="ts" setup>
import type { ColumnProp } from '@/interfaces/ColumnProp.interface';
import {
    DxDataGrid,
    DxSearchPanel,
    DxScrolling,
    DxPager,
    DxPaging,
    DxSorting   
} from 'devextreme-vue/data-grid'

const props = withDefaults(
    defineProps<{
        columns: ColumnProp[],
        rows: any[],
        keyExpr?: string,
        rowClick?: ()=>void
    }>(),
    {
        keyExpr:'id',
        rowClick:()=>{}
    }
)


</script>
<style lang="">
    
</style>