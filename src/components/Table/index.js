import React from 'react'
import Table from './Table'
import {
    TableTag
} from './Table.style'

const infoTableColumns = [
    {
        title: '',
        dataIndex: 'type',
        key: 'type',
        className: 'type',
        render: (url) => {
            return (
                <img className='type' src={url} />
            )
        }
    },
    {
        title: 'ნომერი',
        dataIndex: 'number',
        key: 'number'
    },
    {
        title: 'დრო',
        dataIndex: 'time',
        key: 'time',
        render: (time) => {
            return (
                <>
                    <img src='/img/time.svg' />
                    {time}
                </>
            )
        }
    },
    {
        title: 'კოეფიციენტი',
        dataIndex: 'koeficient',
        key: 'koeficient',
        key: 'winedPrice',
        render: (koef) => {
            return (
                <TableTag className='dark'>
                    {koef}
                </TableTag>
            )
        }
    },
    {
        title: 'მომხმარებელი',
        dataIndex: 'user',
        key: 'user',
        render: (user) => {
            return (
                <>
                    <img src='/img/person.svg' />
                    {user}
                </>
            )
        }
    },
    {
        title: 'მოგებული თანხა',
        dataIndex: 'winedPrice',
        key: 'winedPrice',
        render: (price) => {
            return (
                <TableTag>
                    {price}
                </TableTag>
            )
        }
    }
]

const infoTableData = [
    {
        type: '/img/type.svg',
        number: '# 4412452',
        time: '12:33',
        koeficient: '2.37',
        user: 'Nodard...',
        winedPrice: '33.35₾'
    },
    {
        type: '/img/type.svg',
        number: '# 4412452',
        time: '12:33',
        koeficient: '2.37',
        user: 'Nodard...',
        winedPrice: '33.35₾'
    },
    {
        type: '/img/type.svg',
        number: '# 4412452',
        time: '12:33',
        koeficient: '2.37',
        user: 'Nodard...',
        winedPrice: '33.35₾'
    },
    {
        type: '/img/type.svg',
        number: '# 4412452',
        time: '12:33',
        koeficient: '2.37',
        user: 'Nodard...',
        winedPrice: '33.35₾'
    },
    {
        type: '/img/type.svg',
        number: '# 4412452',
        time: '12:33',
        koeficient: '2.37',
        user: 'Nodard...',
        winedPrice: '33.35₾'
    }
]

export const InfoTable = () => {
    return (
        <Table columns={infoTableColumns} data={infoTableData} />
    )
}


export default Table