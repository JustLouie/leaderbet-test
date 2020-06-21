import React, { useState, useEffect } from 'react'

import {
    FirstPlaceModal,
    FirstPlaceWrapper,
    FirstPlaceInfo,
    FirstPlacePrize,
    FirstPlaceActions,
    CloseButton
} from './CongratsModal.style'

const CongratsModal = props => {

    const [ visible, setVisible ] = useState(false)

    useEffect(() => {
        setVisible(props.visible)
    }, [props.visible])


    if (props.type === 'first') {
        return (
            <FirstPlaceModal visible={visible} closable={false}>
                <FirstPlaceWrapper>
                    <FirstPlaceInfo>
                        <img src='/img/reward.svg' />
                        <h1>გილოცავთ!</h1>
                        <p>თქვენ დაიკავეთ პირველი ადგილი</p>
                        <FirstPlacePrize>
                            <h3>
                                <strong>5000</strong>
                                <span>GEL</span>
                            </h3>
                            <p>მოგებული თანხა</p>
                        </FirstPlacePrize>
                    </FirstPlaceInfo>
                    <FirstPlaceActions>
                        <CloseButton onClick={() => setVisible(false)}>
                            დახურვა
                        </CloseButton>
                    </FirstPlaceActions>
                </FirstPlaceWrapper>
            </FirstPlaceModal>
        )
    }

    return null
}

export default CongratsModal