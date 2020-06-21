import React, { useState, useEffect } from 'react'

import {
    FirstPlaceModal,
    FirstPlaceWrapper,
    FirstPlaceInfo,
    FirstPlacePrize,
    FirstPlaceActions,
    CloseButton,
    PlayerPlacesModal,
    PlayerPlacesWrapper,
    PrizeFond,
    Place,
    PlaceNumber,
    PlaceUser,
    PlaceUserCoins,
    PlaceItem
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

    return (
        <PlayerPlacesModal visible={visible} closable={false}>
            <PlayerPlacesWrapper>
                <PrizeFond>
                    <img src='/img/logo.svg' />
                    <h3>
                        <strong>5000</strong>
                        <span>GEL</span>
                    </h3>
                    <p>საპრიზო ფონდი</p>
                </PrizeFond>
                <Place>
                    <h3>
                        <img src='/img/reward.svg' />
                        ლიდერბორდი
                    </h3>
                    <PlaceItem>
                        <PlaceNumber>1</PlaceNumber>
                        <PlaceUser>
                            <h4>
                                <img src='/img/personblack.svg' />
                                Alberto
                            </h4>
                            <p>322145</p>
                        </PlaceUser>
                        <PlaceUserCoins>
                            3264
                            <span>COIN</span>
                        </PlaceUserCoins>
                    </PlaceItem>
                    <PlaceItem>
                        <PlaceNumber>2</PlaceNumber>
                        <PlaceUser>
                            <h4>
                                <img src='/img/personblack.svg' />
                                Alberto
                            </h4>
                            <p>322145</p>
                        </PlaceUser>
                        <PlaceUserCoins>
                            3264
                            <span>COIN</span>
                        </PlaceUserCoins>
                    </PlaceItem>
                    <PlaceItem>
                        <PlaceNumber>3</PlaceNumber>
                        <PlaceUser>
                            <h4>
                                <img src='/img/personblack.svg' />
                                Alberto
                            </h4>
                            <p>322145</p>
                        </PlaceUser>
                        <PlaceUserCoins>
                            3264
                            <span>COIN</span>
                        </PlaceUserCoins>
                    </PlaceItem>
                    <PlaceItem className='active'>
                        <PlaceNumber>4</PlaceNumber>
                        <PlaceUser>
                            <h4>
                                <img src='/img/personblack.svg' />
                                Alberto
                            </h4>
                            <p>322145</p>
                        </PlaceUser>
                        <PlaceUserCoins>
                            3264
                            <span>COIN</span>
                        </PlaceUserCoins>
                    </PlaceItem>
                    <PlaceItem>
                        <PlaceNumber>5</PlaceNumber>
                        <PlaceUser>
                            <h4>
                                <img src='/img/personblack.svg' />
                                Alberto
                            </h4>
                            <p>322145</p>
                        </PlaceUser>
                        <PlaceUserCoins>
                            3264
                            <span>COIN</span>
                        </PlaceUserCoins>
                    </PlaceItem>
                </Place>
            </PlayerPlacesWrapper>
        </PlayerPlacesModal>
    )
}

export default CongratsModal