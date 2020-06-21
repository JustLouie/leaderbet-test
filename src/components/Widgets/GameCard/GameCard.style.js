import styled from 'styled-components'

export const GameCardWrapper = styled.div`
  width: 24%;
  background-color: #5F39B7;
  display: grid;
  grid-row-gap: 20px;
  justify-items: center;
  border-radius: 10px;
  position: relative;
  padding: 70px 6px 10px 6px;
  box-sizing: border-box;
  margin-left: 10px;
  margin-top: 10px;

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
  cursor: pointer;
`