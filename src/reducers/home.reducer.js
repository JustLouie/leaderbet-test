const initialState = {
  cards: [
    {
      id: 0,
      prize: 5000,
      price: 5,
      maxPlayer: 5,
      registered: true,
      beginPlay: false
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
  registerView: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    default:
        return state
  }
}

export default reducer
