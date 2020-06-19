import React from 'react'

import {
    GameCardWrapper,
    GameCardHead,
    TotalPlayer,
    GamePriceWrapper,
    GamePrice,
    GamePrize,
    GameCardBody,
    Coeficient,
    GameType,
    GameCardFooter,
    GamePlayerNow,
    BeginButton
} from './GameCardRegistered.style'

const GameCardRegistered = props => {
    const { data } = props
    return (
        <GameCardWrapper>
            <GameCardHead>
                <TotalPlayer className='with-dotted-underline'>
                    {data.maxPlayer} კაციანი
                </TotalPlayer>
                <GamePriceWrapper>
                    <GamePrice>
                        {data.price} ლარი
                    </GamePrice>
                    <GamePrize>
                        <strong>{data.prize}</strong> 
                        <span>gel</span>
                    </GamePrize>
                </GamePriceWrapper>
            </GameCardHead>
            <GameCardBody>
                <Coeficient>
                    <h2>5X</h2>
                    <h3>კოეფიციენტი</h3>
                </Coeficient>
                <GameType>
                    <img src='/img/gameType.png' />
                    <h3>JAMING JARS</h3>
                </GameType>
            </GameCardBody>
            <GameCardFooter>
                <GamePlayerNow>
                    <img src='/img/person.svg' />
                    <img src='/img/person.svg' />
                    <img src='/img/person.svg' />
                    <img src='/img/person.svg' />
                    <img src='/img/person.svg' />
                </GamePlayerNow>
                <BeginButton>
                    დაწყება
                </BeginButton>
            </GameCardFooter>
        </GameCardWrapper>
    )
}

export default GameCardRegistered