import React from 'react'

import {
    CustomHistoryModal,

} from './HistoryModal.style'

import { HistoryTable } from 'src/components/Table'

const HistoryModal = props => {
    return (
        <CustomHistoryModal className='history-modal' title='ისტორია' visible={props.visible}>
            <HistoryTable />
        </CustomHistoryModal>
    )
}

export default HistoryModal