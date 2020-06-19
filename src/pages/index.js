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
  UserInfo,
  UserHistory,
  UserPrices,
  UserBalance,
  UserSpins,
  UserImg,
  TopSpins,
  Spins,
  SpinItem
} from 'src/styles/Home.style'

import { InfoTable } from 'src/components/Table'

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
          <InfoTable />
        </InformationTable>
      </HomeGames>
      <HomeSidebar>

          <UserInfo>
            <UserHistory>
              <img src='/img/time.svg' />
              ისტორია
            </UserHistory>
            <UserImg>
              <img src='/img/logo.svg' />
            </UserImg>
            <h1>Muscul Bones</h1>
            <UserPrices>
              <UserBalance>
                <img src='/img/coins.svg' />
                <p>ბალანსი</p>
                <span>995.65 GEL</span>
              </UserBalance>
              <UserSpins>
                <img src='/img/dollar.svg' />
                <p>უფასო სპინები</p>
                <span>18 GEL</span>
              </UserSpins>
            </UserPrices>
          </UserInfo>

          <TopSpins>
            <h1 classNme='with-dotted-underline pink'>
              ტოპ სპინები
            </h1>
            <Spins>
              <SpinItem>
                <p className='date'>
                  <img src='/img/time.svg' />
                  23.04.19 20:33
                </p>
                <h3>
                  <strong>5000</strong>
                  <span>gel</span>
                </h3>
                <p className='users'>
                  <img src='/img/person.svg' />
                  <span>
                    ნოდარა, ელდარა, ემზარა
                  </span>
                </p>
                <p className='koef'>
                  1000 X 2
                </p>
              </SpinItem>
              <SpinItem>
                <p className='date'>
                  <img src='/img/time.svg' />
                  23.04.19 20:33
                </p>
                <h3>
                  <strong>5000</strong>
                  <span>gel</span>
                </h3>
                <p className='users'>
                  <img src='/img/person.svg' />
                  <span>
                    ნოდარა, ელდარა, ემზარა
                  </span>
                </p>
                <p className='koef'>
                  1000 X 2
                </p>
              </SpinItem>
              <SpinItem>
                <p className='date'>
                  <img src='/img/time.svg' />
                  23.04.19 20:33
                </p>
                <h3>
                  <strong>5000</strong>
                  <span>gel</span>
                </h3>
                <p className='users'>
                  <img src='/img/person.svg' />
                  <span>
                    ნოდარა, ელდარა, ემზარა
                  </span>
                </p>
                <p className='koef'>
                  1000 X 2
                </p>
              </SpinItem>
            </Spins>
          </TopSpins>

      </HomeSidebar>
    </HomeContainer>
  )
}

export default IndexPage
