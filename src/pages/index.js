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
          <GameCard>
            <TotalPlayer>
              5 კაციანი
            </TotalPlayer>
            <GamePrize>
              <h2>
                5000 <span>gel</span>
              </h2>
              <p>მაქს. მოგება</p>
            </GamePrize>
            <PlayerNow>
              <img src='/img/person.svg' />
              <img src='/img/person.svg' />
              <img src='/img/person.svg' />
              <img src='/img/person.svg' />
              <img src='/img/person.svg' />
            </PlayerNow>
            <GamePrice>
              5 ლარი
            </GamePrice>
            <GameRegistration>
              რეგისტრაცია
            </GameRegistration>
          </GameCard>
        </Games>

        <InformationTable>
          <InformationNav>

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
