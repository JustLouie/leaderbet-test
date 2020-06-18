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
    prise: 5,
    maxPlayer: 5,
  },
  {
    prize: 5000,
    prise: 5,
    maxPlayer: 5,
  },
  {
    prize: 5000,
    prise: 5,
    maxPlayer: 5,
  },
  {
    prize: 5000,
    prise: 5,
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
              <button>
                All games
              </button>
            </li>
            <li>
              <button>
                Only 3 player
              </button>
            </li>
            <li>
              <button>
                Only 5 Player
              </button>
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
                <TotalPlayer className='with-dotted-underline'>
                  ${game.maxPlayer} კაციანი
                </TotalPlayer>
                <GamePrize>
                  <h2>
                    <strong>${game.prize}</strong> 
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
                  ${game.price} ლარი
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
              <li>
                <button>
                  ტოპ მოგებები
                </button>
              </li>
              <li>
                <button>
                  ლიდერბორდი
                </button>
              </li>
              <li>
                <button>
                  ისტორია
                </button>
              </li>
              <li>
                <button>
                  წესები
                </button>
              </li>
            </ul>
          </InformationNav>
          <Table>

          </Table>
        </InformationTable>
      </HomeGames>
      <HomeSidebar>

      </HomeSidebar>
    </HomeContainer>
  )
}

export default IndexPage
