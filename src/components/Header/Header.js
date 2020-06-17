import React from 'react'
import { Link } from 'gatsby'

import {
    HeaderContainer,
    HeaderJackpot,
    Jackpot,
    HeaderActions,
    CashierButton,
    HeaderSettingActions
} from './Header.style'

const generateJackpotNumber = (number) => {
    const newNumber = number.toString()
    console.log(newNumber)
    let left = true
    const el = []
    for (let i = 0; i < newNumber.length; i++) {
        
        
        if (left) {
            if (newNumber[i] === '.') {
                el.push((
                    <i>{newNumber[i]}</i>
                ))
    
                left = false
            } else {
                el.push((
                    <span>{newNumber[i]}</span>
                ))
            }
           
        } else {
            el.push((
                <span className='small-number'>{newNumber[i]}</span>
            ))
        }

        

    }

    return el
}

const Header = props => {
    return (
        <HeaderContainer>
            <Link>
                <img src='/img/logo.svg' />
            </Link>
            <HeaderJackpot>
                <Jackpot>
                    <h2>
                        {generateJackpotNumber(82591.92)}
                    </h2>
                    <p>LEADER JACKPOT</p>
                </Jackpot>
                <Jackpot>
                    <h2>
                        {generateJackpotNumber(82591.92)}
                    </h2>
                    <p>LEADER JACKPOT</p>
                </Jackpot>
            </HeaderJackpot>
            <HeaderActions>
                <CashierButton>
                    <img src='/img/cashier.svg' />
                    Cashier
                </CashierButton>
                <HeaderSettingActions>
                    <button>
                        <img src='/img/setting.svg' />
                    </button>
                    <button>
                        <img src='/img/setting.svg' />
                    </button>
                    <button>
                        <img src='/img/setting.svg' />
                    </button>
                    <button>
                        <img src='/img/setting.svg' />
                    </button>
                </HeaderSettingActions>
            </HeaderActions>
        </HeaderContainer>
    )
}

export default Header