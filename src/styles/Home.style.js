import styled from 'styled-components'


export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 7fr 2fr;
  grid-column-gap: 10px;
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
      a {
        text-decoration: none;
        display: flex;
        height: 100%;
        align-items: center;
        font-size: 15px;
        color: white;
        padding: 0px 27px;
        text-transform: uppercase;
        cursor: pointer;
      }

      &.active {
        a {
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 10px;
`

export const GameCard = styled.div`
  width: 100%;
  background-color: #5F39B7;
  display: grid;
  grid-row-gap: 20px;
  justify-items: center;
  border-radius: 10px;
  position: relative;
  padding: 70px 6px 10px 6px;
  box-sizing: border-box;

`

export const TotalPlayer = styled.p`
  color: white;
  font-size; 16px;
  position: absolute;
  top: 14px;
  left: 14px;
`

export const GamePrize = styled.div`

  h2 {
    font-size: 3.75rem;
    color: white;
    margin: 0px;
    text-align: center;
    span {
      font-size: 20px;
      margin-left: 9px;
      text-transform: uppercase;
    }
  }

  p {
    color: white;
    font-size: 16px;
    text-align: center;
  }


`

export const PlayerNow = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 23px);
  grid-column-gap: 20px;
  img {
    width: 23px;
  }
`

export const GamePrice = styled.h4`
  padding: 8px 20px 11px 20px;
  border-radius: 19px;
  background: #FFE926;
  font-size: 16px;
  color: black;

`

export const GameRegistration = styled.button`
  width: 100%;
  border: none;
  outline: none;
  padding: 20px 0px;
  border-radius: 5px;
  background-color: #764ED4;
  color: white;
  font-size: 19px;
`

export const InformationTable = styled.div`
  width: 100%;
  display: grid;

`

export const InformationNav = styled.div`
  width: 100%;
  height: auto;
  ul {
    list-style: none;

    li {
      float: left;
      margin: 30px 50px;
      padding-bottom: 18px;
      a {
        color: white;
        font-size: 17px;
        text-decoration: none;
      }
    }
  }
`