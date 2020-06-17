import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: grid;
    grid-template-columns: repeat(3, auto);
    width: 100%;
    padding-top: 25px;
    padding-bottom: 31px;
`

export const HeaderJackpot = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-column-gap: 10px;

`

export const Jackpot = styled.div`
    display: grid;
    grid-row-gap: 9px;

    h2 {
        display: flex;
        align-items: flex-end;
        margin: 0px;
        span {
            font-size: 20px;
            padding: 6px 7px 4px 8px;
            color: #D6D9D9;
            background-color: #505081;
            border-radius: 3px;
            &:not(:first-child) {
                margin-left: 3px;
            }
        }

        i {
            color: #505081;
            font-size: 20px;
            font-style: normal;
            margin-left: 3px;
            line-height: 1;
        }

        span.small-number {
            font-size: 16px;
            color: #9AAACF;
            background-color: #40406D;
        }
    }

    p {
        font-size: 15px;
        color: #98AAC2;
        font-weight: bold;
        text-transform: uppercase;
    }
`

export const HeaderActions = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 1fr auto;
    justify-items: end;
    grid-column-gap: 65px;
`

export const CashierButton = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
    background-color: #FFCA2A;
    padding: 11px 14px;
    border-radius: 21px;
    font-size: 15px;
    color: #000000;
    font-weight: bold;
    max-width: 114px;
    display: flex;
    align-items: center;

    img {
        margin-right: 9px;
    }
`

export const HeaderSettingActions = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 21px);
    grid-column-gap: 25px;

    button {
        border: none;
        outline: none;
        background: none;
    }

`