import React from 'react'
import Table, { CustomHistoryTable } from './Table'
import {
    TableTag
} from './Table.style'

const infoTableColumns = [
    {
        title: '',
        align: 'center',
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
        align: 'center',
        dataIndex: 'number',
        key: 'number'
    },
    {
        title: 'დრო',
        align: 'center',
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
        align: 'center',
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
        align: 'center',
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
        align: 'center',
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


const historyTableColumns = [
    {
        title: 'თარიღი',
        align: 'center',
        dataIndex: 'date',
        key: 'date'
    },
    {
        title: 'ღირებუ.ი',
        align: 'center',
        dataIndex: 'price',
        key: 'price'
    },
    {
        title: 'რა Xი',
        align: 'center',
        dataIndex: 'rate',
        key: 'rate'
    },
    {
        title: 'რაოდენობა',
        align: 'center',
        dataIndex: 'quantity',
        key: 'quantity'
    },
    {
        title: 'მონაწილეები',
        dataIndex: 'players',
        key: 'players',
        width: 250,
        className: 'players',
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
        title: 'ადგილიი',
        align: 'center',
        dataIndex: 'place',
        key: 'place'
    },
    {
        title: 'მოგებული',
        align: 'center',
        dataIndex: 'win',
        key: 'win'
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

const historyTableData = [
    {
        date: '23 იანვ.',
        price: '2 ლარი',
        rate: '100X',
        quantity: '5 კაციანი',
        players: 'ნოდარა, ელდარა, ემზარა, ზაირა, მერაბა',
        place: '10',
        win: '5000 ლარი'
    },
    {
        date: '23 იანვ.',
        price: '2 ლარი',
        rate: '100X',
        quantity: '5 კაციანი',
        players: 'ნოდარა, ელდარა, ემზარა, ზაირა, მერაბა',
        place: '10',
        win: '5000 ლარი'
    },
    {
        date: '23 იანვ.',
        price: '2 ლარი',
        rate: '100X',
        quantity: '5 კაციანი',
        players: 'ნოდარა, ელდარა, ემზარა, ზაირა, მერაბა',
        place: '10',
        win: '5000 ლარი'
    },
    {
        date: '23 იანვ.',
        price: '2 ლარი',
        rate: '100X',
        quantity: '5 კაციანი',
        players: 'ნოდარა, ელდარა, ემზარა, ზაირა, მერაბა',
        place: '10',
        win: '5000 ლარი'
    },
    {
        date: '23 იანვ.',
        price: '2 ლარი',
        rate: '100X',
        quantity: '5 კაციანი',
        players: 'ნოდარა, ელდარა, ემზარა, ზაირა, მერაბა',
        place: '10',
        win: '5000 ლარი'
    }
]

export const InfoTable = () => {
    return (
        <Table columns={infoTableColumns} data={infoTableData} />
    )
}

export const HistoryTable = () => {
    return (
        <CustomHistoryTable columns={historyTableColumns} data={historyTableData} />
    )
}

export default Table