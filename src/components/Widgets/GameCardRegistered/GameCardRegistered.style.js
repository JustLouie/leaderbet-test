import styled from 'styled-components'

export const GameCardWrapper = styled.div`
    width: 49%;
    background-color: #198a9c;
    position: relative;
    padding: 14px;
    padding-bottom: 10px;
    box-sizing: border-box;
    display: grid;
    grid-row-gap: 34px;
    margin-left: 10px;
    margin-top: 10px;
    border-radius: 10px;
    z-index: 999;
`

export const GameCardHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const GamePriceWrapper = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 37px;
    align-items: center;

`

export const GamePrice = styled.h4`
  padding: 8px 20px 11px 20px;
  border-radius: 19px;
  background: #FFE926;
  font-size: 16px;
  color: black;

`
export const GamePrize = styled.h2`
    font-size: 40px;
    color: white;
    margin: 0px;
    span {
        font-size: 15px;
        margin-left: 9px;
        text-transform: uppercase;
    }

`

export const TotalPlayer = styled.p`
  color: white;
  font-size; 16px;
  padding-bottom: 22px;
`

export const GameCardBody = styled.div`
    width: 100%;
    display: ${props => props.beginPlay ? 'flex' : 'grid'};
    grid-template-columns: repeat(2, 233px);
    grid-column-gap: 20px;
    justify-content: center;

`

export const BodyItem = styled.div`
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
        background-color: #198a9c;
        padding: 4px 11px;
        font-size: 16px;
        color: white;
        border-radius: 10px;
        margin: 0px;
        white-space: nowrap;

    }
`

export const Coeficient = styled(BodyItem)`
    display: flex;
    align-items: center;
    justify-content: center;
    h2 {
        font-size: 60px;
        text-transform: uppercase;
        color: white;
    }

`

export const GameType = styled(BodyItem)`
    img {
        width: 100%;
        height: 100%;
    }

    h3 {
        padding: 2px 11px;
        bottom: -17px;
    }
`

export const WaitingPlayers = styled.div`
    display: grid;
    grid-row-gap: 26px;
    justify-items: center;
    text-align: center;
    p {
        color: white;
        font-size: 20px;
    }
`

export const WaitingPlayerNow = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 65px;

    img {
        width: 37px;
    }

`

export const WaitingTime = styled.div`
    width: 314px;

    p {
        font-size: 14px;
        color: white;
        margin-bottom:  15px;
    }

    .line {
        width: 100%;
        height: 3px;
        background-color: #26C6DF;
        border-radius: 6px;
        position: relative;

        .progress {
            width: 58px;
            height: 100%;
            border-radius: 6px;
            background-color: #17FF4D;
            position: absolute;
            top: 0;
            left: 70%;
        }
    }

`

export const GameCardFooter = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    justify-items: end;

`

export const GamePlayerNow = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 32px;
    padding: 0px 32px;

    img {
        width: 30px;
    }
`

export const CancelButton = styled.button`
    border: none;
    outline: none;
    font-size: 19px;
    color: white;
    background-color: #1A6F7D;
    padding: 20px 28px;
    border-radius: 5px;
    cursor: pointer;
`

export const BeginButton = styled.button`
    border: none;
    outline: none;
    padding: 20px 28px;
    background-color: #2DBFB5;
    color: white;
    font-size: 19px;
    border-radius: 5px;
    cursor: pointer;
`
