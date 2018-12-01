import { combineReducers } from 'redux'
import search from './searchVideo'
import reproduce from './reproduceVideo'

const rootReducer = combineReducers({
  search,
  reproduce
})

export default rootReducer
