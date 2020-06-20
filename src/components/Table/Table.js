import React from 'react'

import {
    CustomTable,
    HistoryTable
} from './Table.style'

export const CustomHistoryTable = props => {
    const { columns, data } = props

    return (
        <HistoryTable 
            columns={columns}
            dataSource={data}
            pagination={false}
        />
    )
}

const Table = props => {

    const { columns, data } = props

    return (
        <CustomTable 
            columns={columns}
            dataSource={data}
            pagination={false}
        />
    )
}

export default Table