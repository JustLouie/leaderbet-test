import React from 'react'

import {
    GameCardWrapper,
    TotalPlayer,
    GamePrize,
    PlayerNow,
    GamePrice,
    GameRegistration
} from './GameCard.style'

const GameCard = props => {
    const { data } = props
    return (
        <GameCardWrapper isRegistered={data.registered}>
            <TotalPlayer className='with-dotted-underline' dotColor='#FFD919'>
                {data.maxPlayer} კაციანი
            </TotalPlayer>
            <GamePrize>
                <h2>
                    <strong>{data.prize}</strong> 
                    <span>gel</span>
                </h2>
                <p>მაქს. მოგება</p>
            </GamePrize>
            <PlayerNow>
                <img src='/img/person.svg' />
                <img src='/img/person.svg' />
                <img src='/img/personblack.svg' />
                <img src='/img/personblack.svg' />
                <img src='/img/personblack.svg' />
            </PlayerNow>
            <GamePrice>
                {data.price} ლარი
            </GamePrice>
            <GameRegistration>
                რეგისტრაცია
            </GameRegistration>
        </GameCardWrapper>
    )
}

export default GameCard