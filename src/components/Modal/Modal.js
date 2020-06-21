import React, { useState, useEffect } from 'react'
import * as R from 'ramda'

import {
    CustomModal
} from './Modal.style'

const Modal = props => {

    const [ visible, setVisible ] = useState(false)

    useEffect(() => {
        setVisible(props.visible)
    }, [props.visible])

    return (
        <CustomModal
            {...R.omit(['visible', 'onCancel', 'footer', 'closeIcon'], props)}
            footer={null}
            closeIcon={<img src='/img/close.svg' />}
            onCancel={() => { setVisible(false) }}
            visible={visible}
        >
            { props.children }
        </CustomModal>
    )
}

export default Modal