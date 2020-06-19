import styled from 'styled-components'


export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 7fr 2fr;
  grid-column-gap: 10px;
  width: 100%;
  padding-bottom: 56px;
`

export const HomeOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  background-color: rgba(0,0,0,0.48);
`

export const HomeGames = styled.div`
  width: 100%;
  display: grid;
  grid-row-gap: 10px;
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
  grid-row-gap: 10px;
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

export const HomeSidebar = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: auto 1fr;
  grid-row-gap: 10px;

`

export const UserInfo = styled.div`
  padding: 60px 24px;
  padding-bottom: 20px;
  background-color: #473f5a;
  position: relative;
  display: grid;
  grid-row-gap: 16px;
  justify-items: center;
  h1 {
    font-size: 16px;
    color: white;
    margin: 0px;
  }
`

export const UserHistory = styled.button`
  border: 1px solid #60667E;
  outline: none;
  font-size: 14px;
  padding: 8px 10px;
  background: transparent;
  border-radius: 18px;
  position: absolute;
  top: 10px;
  right: 10px;

  color: #C5D8F9;
  font-size: 14px;
  
  img {
    margin-right: 16px;
  }
`

export const UserPriceTemplate = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-column-gap: 10px;
  padding: 13px 16px;
  color: white;
  border-radius: 27px;

  p,span {
    font-size: 15px;
    color: white;
    margn: 0px;
  }

  span {
    justify-selft: end;
  }


`

export const UserPrices = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(2, 48px);
  grid-row-gap: 10px;
`

export const UserBalance = styled(UserPriceTemplate)`
  background-color: #6E717E;

`

export const UserSpins = styled(UserPriceTemplate)`
  background-color: #217C8B;
`

export const UserImg = styled.div`
  width: 119px;
  height: 119px;
  border: 8px solid #217C8B;
  background-color: #5F39B7;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`


export const TopSpins = styled.div`
  width: 100%;
  padding: 10px;
  padding-top: 30px;
  background-color: #35364A;

  h1 {
    font-size: 15px;
    color: #CAD0F1;
    margin-bottom: 23px;
  }
`

export const Spins = styled.div`
  display: grid;
  grid-row-gap: 10px;
  
`

export const SpinItem = styled.div`
  padding: 10px 19px;
  background-color: #444563;
  border-radius: 5px;
  position: relative;
  
  p {
    margin: 0px;
  }

  p.date {
    position: absolute;
    font-size: 15px;
    color: rgba(255,255,255,0.5);
    right: 10px;
    top: 10px;

    img {
      margin-right: 11px;
    }
    span {
      margin-left: 16px;
      display: inline-block;
    }
  }

  h3 {
    color: #39B7FF;
    margin: 0px;
    strong {
      font-size: 37px;
    }
    span {
      margin-left: 6px;
      font-size: 12px;
      text-transform: uppercase;
    }
  }

  p.users {
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-column-gap: 7px;
    font-size: 15px;
    color: white;
  }

  p.koef {
    color: #D2EFFF;
    font-size: 18px;
    margin-top: 7px;
  }

`