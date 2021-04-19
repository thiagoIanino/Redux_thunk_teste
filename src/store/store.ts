import { createStore, combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import ReqReducer from './req/req.reducer'

const rootReducer = combineReducers({
    requisicao: ReqReducer,
  
  })
  
  export type rootStore = ReturnType<typeof rootReducer>
  
  const store = createStore(rootReducer, applyMiddleware(thunk))
  export default store
  