import React from 'react'
import { useDispatch } from 'react-redux'
import { beginPlayRequest, cancelGame } from 'src/actions/mainActions'

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
    CancelButton,
    WaitingPlayers,
    WaitingPlayerNow,
    WaitingTime,
    GameCardFooter,
    GamePlayerNow,
    BeginButton
} from './GameCardRegistered.style'

const GameCardRegistered = props => {
    const { data } = props
    const dispatch = useDispatch()
    console.log(data)
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
            <GameCardBody beginPlay={data.beginPlay}>
                {
                    data.beginPlay ? (
                        <WaitingPlayers>
                            <p>გთხოვთ დაელოდოთ მოწინააღდმეგეს</p>
                            <WaitingPlayerNow>
                                <img src='/img/person.svg' />
                                <img src='/img/person.svg' />
                                <img src='/img/person.svg' />
                                <img src='/img/personblack.svg' />
                                <img src='/img/personblack.svg' />
                            </WaitingPlayerNow>
                            <WaitingTime>
                                <p>სავარაუდო მოლოდინის დრო: 30 წამი</p>
                                <div className='line'>
                                    <div className='progress' />
                                </div>
                            </WaitingTime>
                        </WaitingPlayers>
                    ) : (
                        <>
                             <Coeficient>
                                <h2>5X</h2>
                                <h3>კოეფიციენტი</h3>
                            </Coeficient>
                            <GameType>
                                <img src='/img/gameType.png' />
                                <h3>JAMING JARS</h3>
                            </GameType>
                        </>
                    )
                }
               
            </GameCardBody>
            <GameCardFooter>
                {
                    data.beginPlay ? (
                        <CancelButton onClick={() => cancelGame(dispatch)}>
                            გაუქმება
                        </CancelButton>
                    ) : (
                        <>
                            <GamePlayerNow>
                                <img src='/img/person.svg' />
                                <img src='/img/person.svg' />
                                <img src='/img/person.svg' />
                                <img src='/img/person.svg' />
                                <img src='/img/person.svg' />
                            </GamePlayerNow>
                            <BeginButton onClick={() => beginPlayRequest(data.id, dispatch)}>
                                დაწყება
                            </BeginButton>
                        </>
                        
                    )
                }
                

                
            </GameCardFooter>
        </GameCardWrapper>
    )
}

export default GameCardRegistered