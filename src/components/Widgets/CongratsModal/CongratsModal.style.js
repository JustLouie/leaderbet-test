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
