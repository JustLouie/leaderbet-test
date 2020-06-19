import React, { useState } from "react"
import {
  HomeContainer,
  HomeGames,
  HomeSidebar,
  GamesNavigation,
  Games,
  GameCard,
  TotalPlayer,
  GamePrize,
  PlayerNow,
  GamePrice,
  GameRegistration,
  InformationTable,
  InformationNav,
  Table
} from 'src/styles/Home.style'

const gameCardData = [
  {
    prize: 5000,
    price: 5,
    maxPlayer: 5,
  },
  {
    prize: 5000,
    price: 5,
    maxPlayer: 5,
  },
  {
    prize: 5000,
    price: 5,
    maxPlayer: 5,
  },
  {
    prize: 5000,
    price: 5,
    maxPlayer: 5,
  }
]


const IndexPage = () => {
  return (
    <HomeContainer>
      <HomeGames>
        <GamesNavigation>
          <ul>
            <li className='active'>
              <a href=''>
                All games
              </a>
            </li>
            <li>
              <a href=''>
                Only 3 player
              </a>
            </li>
            <li>
              <a href=''>
                Only 5 Player
              </a>
            </li>
          </ul>

          <p>
            <img src='/img/person.svg' />
            Online Players: 4364
          </p>
        </GamesNavigation>

        <Games>
          {
            gameCardData.map(game => (
              <GameCard>
                <TotalPlayer className='with-dotted-underline' dotColor='#FFD919'>
                  {game.maxPlayer} კაციანი
                </TotalPlayer>
                <GamePrize>
                  <h2>
                    <strong>{game.prize}</strong> 
                    <span>gel</span>
                  </h2>
                  <p>მაქს. მოგება</p>
                </GamePrize>
                <PlayerNow>
                  <img src='/img/person.svg' />
                  <img src='/img/person.svg' />
                  <img src='/img/personblack.svg' />
                  <img src='/img/personblack.svg' />
                  <img src='/img/personblack.svg' />
                </PlayerNow>
                <GamePrice>
                  {game.price} ლარი
                </GamePrice>
                <GameRegistration>
                  რეგისტრაცია
                </GameRegistration>
              </GameCard>
            ))
          }
          
        </Games>

        <InformationTable>
          <InformationNav>
            <ul>
              <li className='with-dotted-underline orange'>
                <a href=''>
                  ტოპ მოგებები
                </a>
              </li>
              <li>
                <a href=''>
                  ლიდერბორდი
                </a>
              </li>
              <li>
                <a href=''>
                  ისტორია
                </a>
              </li>
              <li>
                <a href=''>
                  წესები
                </a>
              </li>
            </ul>
          </InformationNav>
        </InformationTable>
      </HomeGames>
      <HomeSidebar>

      </HomeSidebar>
    </HomeContainer>
  )
}

export default IndexPage
