import React from 'react'

import {
    CustomTable,
} from './Table.style'

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