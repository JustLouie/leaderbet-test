import { REGISTER_GAME, BEGIN_PLAY_REQUEST, BEGIN_PLAY, CANCEL_GAME } from 'src/actions/mainActions'

const initialState = {
  cards: [
    {
      id: 0,
      prize: 5000,
      price: 5,
      maxPlayer: 5,
    },
    {
      id: 1,
      prize: 5000,
      price: 5,
      maxPlayer: 5,
    },
    {
      id: 2,
      prize: 5000,
      price: 5,
      maxPlayer: 5,
    },
    {
      id: 3,
      prize: 5000,
      price: 5,
      maxPlayer: 5,
    },
    {
      id: 4,
      prize: 5000,
      price: 5,
      maxPlayer: 5,
    },
    {
      id: 5,
      prize: 5000,
      price: 5,
      maxPlayer: 5,
    },
    {
      id: 6,
      prize: 5000,
      price: 5,
      maxPlayer: 5,
    },
    {
      id: 7,
      prize: 5000,
      price: 5,
      maxPlayer: 5,
    },
  ],
  registerView: false,
  requestedGame: null,
  beginPlayRequest: false,

}


const setGameActions = (data, which, key, value) => {
  return data.map(item => {
    if (item.id === which) {
      return {
        ...item,
        [key]: value
      }
    }

    return {
      ...item,
      [key]: null
    }
  })
}

const disableGameActions = (data) => {
  return data.map(item => {
    return { ...item, registered: null, beginPlay: null }
  })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_GAME:
      return {
        ...state,
        cards: setGameActions(state.cards, action.payload, 'registered', true),
        registerView: true
      }
    case BEGIN_PLAY_REQUEST:
      const requestedGame = state.cards.find(item => item.id === action.payload)
      return {
        ...state,
        registerView: false,
        requestedGame,
        beginPlayRequest: true
      }
    case BEGIN_PLAY:
      return {
        ...state,
        cards: setGameActions(state.cards, action.payload, 'beginPlay', true),
        beginPlayRequest: false
      }
    case CANCEL_GAME:
      return {
        ...state,
        cards: disableGameActions(state.cards),
      }
    default:
        return state
  }
}

export default reducer
