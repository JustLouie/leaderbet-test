import styled from 'styled-components'

export const BeginPlayWrapper = styled.div`
    border-radius: 10px;
    box-shadow: 0px 0px 40px #00000096;
    min-width: 815px;
    display: grid;
    grid-template-columns: 1fr 1fr;

`

export const PlayInfo = styled.div`
    padding: 15px 20px;
    background-color: #201932;
    display: grid;
    grid-row-gap: 43px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    h4 {
        font-size: 17px;
        color: #ECEFFE;
        margin: 0px;
    }

    ul {
        list-style: none;
        li {
            width: 100%;
            display: flex;
            justify-content: space-between;
            color: white;
            font-size: 15px;

            span {
                color: #FFE926;
            }
            padding: 17.5px 0px;
            border-bottom: 1px solid #312946;
            &:first-child {
                border-top: 1px solid #312946;
            }
        }
    }

    p {
        font-size: 13px;
        color: #B2AAC5;
        text-align: center;
        margin: 0px;
        max-width: 268px;
        justify-self: center;
    }
`



export const GameInfoWrapper = styled.div`
    background-color: #352D4B;
    padding: 10px;
    display: grid;
    grid-row-gap: 24px;
    padding-top: 53px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
`

export const GameInfo = styled.div`
    display: grid;
    justify-content: center;
    grid-row-gap: 24px;
`

export const GameType = styled.div`
    border: 2px solid #56BEC9;
    border-radius: 10px;
    padding: 13px;
    width: 100%;
    height: 133px;
    box-sizing: border-box;
    position: relative;
    h3 {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -15px;
        background-color: #352D4B;
        padding: 4px 11px;
        font-size: 16px;
        color: white;
        border-radius: 10px;
        margin: 0px;
        white-space: nowrap;

    }
    img {
        width: 100%;
        height: 100%;
    }
`

export const GamePrice = styled.h3`
    font-size: 40px;
    color: #FFE926;
    text-align: center;
    margin: 0px;
    span {
        font-size: 15px;
        margin-left: 7px;
    }
`

export const GamePrizes = styled.div`
    display: grid;
    grid-row-gap: 5px;
`

export const PrizeItem = styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-column-gap: 10px;
    padding: 9px 10px;
    border-radius: 18px;
    background-color: #413858;

    p {
        margin: 0px;
        font-size: 14px;
        color: white;
    }

    span {
        font-size: 14px;
        color: #FFE926;
    }
`

export const GameActions = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const BeginButton = styled.button`
    outline: none;
    border: none;
    padding: 20px 28px;
    background-color: #2DBFB5;
    color: white;
    font-size: 19px;
    border-radius: 5px;
    cursor: pointer;
`