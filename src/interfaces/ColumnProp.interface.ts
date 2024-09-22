export interface ColumnProp {
    dataField: string
    caption?: string
    width?: string | number
    maxWidth?: string | number
    minWidth?: string | number
    lookup?: any
    alignment?: string
    dataType?:string
    format?: string
    visible?: boolean
    cellTemplate?: string | ((container:HTMLTableCellElement, options: any)=>void)
    allowEditing?:boolean
    editCellTemplate?: string | (()=>{})
    sortOrder?:string
    filterType?:string
    filterOperations?:string[]
}