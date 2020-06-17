import { createStore, applyMiddleware  } from 'redux'
import thunk from "redux-thunk"
import reducer from 'src/reducers'

export default preloadedState => {
   return createStore(reducer, applyMiddleware(thunk))
}
