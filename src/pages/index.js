import React, { useState } from "react"
import { useSelector } from 'react-redux'
import {
  HomeContainer,
  HomeOverlay,
  HomeGames,
  HomeSidebar,
  GamesNavigation,
  Games,
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
import GameCard from 'src/components/Widgets/GameCard'
import GameCardRegistered from 'src/components/Widgets/GameCardRegistered'
import BeginPlayModal from 'src/components/Widgets/BeginPlayModal'
import HistoryModal from 'src/components/Widgets/HistoryModal'
import CongratsModal from 'src/components/Widgets/CongratsModal'

const IndexPage = () => {

  const state = useSelector(state => state.home)

  const [ historyModal, setHistoryModal ] = useState(false)

  const { cards, registerView, beginPlayRequest, requestedGame } = state
  
  return (
    <HomeContainer>
      {
        registerView && <HomeOverlay />
      }
      <BeginPlayModal visible={beginPlayRequest} data={requestedGame || {}} />
      <HistoryModal visible={historyModal} />
      <CongratsModal visible={true} type='first' />
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
            cards.map(game => {
              if (game.registered){
                return (
                  <GameCardRegistered key={game.id} data={game} />
                )
              }

              return (
                <GameCard key={game.id} data={game} />

              )
            })
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
            <UserHistory onClick={() => setHistoryModal(true)}>
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
