import styled from 'styled-components'
import Modal from 'src/components/Modal'

export const FirstPlaceModal = styled(Modal)`
    min-width: 447px;
`

export const FirstPlaceWrapper = styled.div`
    background-color: #241E36;
    border-radius: 10px
    padding: 10px;
`

export const FirstPlaceInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 72px;
    padding-bottom: 45px;

    h1 {
        font-size: 22px;
        color: white;
        margin: 0px;
    }
    
    p {
        color: white;
        font-size: 14px;
        margin: 0px;
        margin-top: 8px;
    }

`

export const FirstPlacePrize = styled.div`
    background-color: #201A31;
    border-radius: 44px;
    width: 300px;
    padding: 13px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 20px;

    h3 {
        font-size: 40px;
        color: #FFFF00;
        margin: 0px;
        line-height: 40px;
        span {
            font-size: 13px;
            text-transform: uppercase;
            margin-left: 7px;
        }
    }

`


export const FirstPlaceActions = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`

export const CloseButton = styled.button`
    border: none;
    outline: none;
    font-size: 19px;
    color: white;
    background-color: #2F2847;
    padding: 20px 28px;
    border-radius: 5px;
    cursor: pointer;
`


export const PlayerPlacesModal = styled(Modal)`
    min-width: 460px;
`

export const PlayerPlacesWrapper = styled.div`
    padding: 77px 60px;
    background-color: #241e36;
    border-radius: 10px;

`

export const PrizeFond = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 47px 0px;
    width: 100%;
    background-color: #5834AC;
    border-radius: 10px;

    img {
        margin-bottom: 24px;
    }

    h3 {
        font-size: 60px;
        color: white;
        margin: 0px;
        span {
            font-size: 20px;
            margin-left: 7px;
        }
    }

    p {
        font-size: 16px;
        color: white;
        margin: 0px;
    }

`

export const Place = styled.div`

    display: grid;
    grid-row-gap: 10px;
    width: 100%;
    margin-top: 30px;

    h3 {
        font-size: 16px;
        color: white;
        margin-bottom: 20px;
        text-align: center;

        img {
            margin-right: 16px;
        }
    }

`

export const PlaceNumber = styled.p`
    width: 63px;
    height: 63px;
    background-color: #3F365A;
    border-radius: 100%;
    font-size: 26px;
    color: white;
    text-align: center;
    line-height: 63px;
    margin: 0px;

`

export const PlaceUser = styled.div`
    h4 {
        font-size: 14px;
        color: white;
        margin: 0px;
        img {
            margin-right: 8px;
        }
    }

    p {
        font-size: 26px;
        color: #39B7FF;
        margin: 0px;
    }

`

export const PlaceUserCoins = styled.h4`
    font-size: 23px;
    color: #C3DAE8;
    margin: 0px;
    text-align: center;
    span {
        display: block;
        font-size: 13px;
    }
`

export const PlaceItem = styled.div`
    display: grid;
    grid-template-columns: 63px 1fr auto;
    grid-column-gap: 15px;
    align-items: center;
    width: 100%;
    border-radius: 41px;
    background-color: #352D4B;
    padding: 9px 10px;
    padding-right: 30px;

    &.active {
        background-color: #5834AC;
        p${PlaceNumber} {
            background-color: #FFCA2A;
            color: #000000;
        }

        div${PlaceUser} {
            p {
                color: #FFFF00;
            }
        }
    }

`