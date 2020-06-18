import styled from 'styled-components'

export const Container = styled.div`
    max-width: 1390px;
    margin: auto;
    @media screen and (min-width: 1650px) {
        max-width: 1585px;
    }
    @media screen and (max-width: 1200px) {
        max-width: 100%;
        padding: 0px 20px;
    }
`