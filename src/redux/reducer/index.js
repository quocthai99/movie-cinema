import { combineReducers } from 'redux'
import listFilmReducer from './../../pages/Home/reducer'

const rootReducer = combineReducers({
    listFilmReducer,
})

export default rootReducer;