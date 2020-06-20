import React from 'react'

import {
    BeginPlayWrapper,
    PlayInfo,
    GameInfoWrapper,
    GameInfo,
    GameType,
    GamePrice,
    GamePrizes,
    PrizeItem,
    GameActions,
    BeginButton
} from './BeginPlayModal.style'

import Modal from 'src/components/Modal'

const BeginPlayModal = props => {
    return (
        <Modal visible={props.visible}>
            <BeginPlayWrapper>
                <PlayInfo>
                    <h4>თამაში დაიწყო</h4>
                    <ul>
                        <li>
                            ხანგრძლივობა
                            <span>2 საათი</span>
                        </li>
                        <li>
                            ქოინების რაოდენობა
                            <span>2 ცალი</span>
                        </li>
                        <li>
                            მინიმალური ფსონი
                            <span>22 ლარი</span>
                        </li>
                        <li>
                            მაქსიმალური ფსონი
                            <span>78 ლარი</span>
                        </li>
                    </ul>
                    <p>
                        თუ რამე ტექსტი იქნება აგერ ააატექსტის ადგილი
                    </p>
                </PlayInfo>
                <GameInfoWrapper>
                    <GameInfo>
                        <GameType>
                            <img src='/img/gameType.png' />
                            <h3>JAMING JARS</h3>
                        </GameType>
                        <GamePrice>
                            <strong>5000</strong>
                            <span>GEL</span>
                        </GamePrice>
                        <GamePrizes>
                            <PrizeItem>
                                <img src='/img/person.svg' />
                                <p>
                                    1 ადგილი
                                </p>
                                <span>
                                    2000 GEL
                                </span>
                            </PrizeItem>
                            <PrizeItem>
                                <img src='/img/person.svg' />
                                <p>
                                    2 ადგილი
                                </p>
                                <span>
                                    2000 GEL
                                </span>
                            </PrizeItem>
                            <PrizeItem>
                                <img src='/img/person.svg' />
                                <p>
                                    3 ადგილი
                                </p>
                                <span>
                                    2000 GEL
                                </span>
                            </PrizeItem>
                        </GamePrizes>
                    </GameInfo>

                    <GameActions>
                        <BeginButton>
                            დაწყება
                        </BeginButton>
                    </GameActions>

                </GameInfoWrapper>
            </BeginPlayWrapper>
        </Modal>
    )
}

export default BeginPlayModal