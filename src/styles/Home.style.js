import styled from 'styled-components'


export const HomeContainer = styled.div`
  display: grid;
  grid-template-coluns: 7fr 2fr;
  width: 100%;
`

export const HomeGames = styled.div`
  width: 100%;
  display: grid;
  grid-row-gap: 10px;
`
export const HomeSidebar = styled.div`
  width: 100%;
  height: 100px;
  background: white;
`

export const GamesNavigation = styled.div`
  width: 100%;
  height: 60px;
  background-color: #3D2F60;
  padding: 5px 17px;
  padding-left: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border-radius: 5px;

  ul {
    list-style: none;
    height: 100%;
    li {
      float: left;
      height: 100%;
      button {
        border: none;
        outline: none;
        height: 100%;
        background: none;
        color: white;
        padding: 0px 27px;
        text-transform: uppercase;
        cursor: pointer;
      }

      &.active {
        button {
          color: #FFFF00;
          border-bottom: 4px solid #FF00B2;
        }
      }
    }
  }

  p {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: white;
    img {
      margin-right: 7px;
    }
  }

`

export const Games = styled.div`

`

export const GameCard = styled.div`

`

export const TotalPlayer = styled.p`

`

export const GamePrize = styled.div`

`

export const PlayerNow = styled.div`

`

export const GamePrice = styled.h4`

`

export const GameRegistration = styled.button`

`

export const InformationTable = styled.div`

`

export const InformationNav = styled.div`

`

export const Table = styled.table`

`