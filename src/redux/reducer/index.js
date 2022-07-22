import { combineReducers } from 'redux'
import listFilmReducer from './../../pages/Home/reducer'
import listBannerReducer from '../../components/Layout/HomeLayout/Carousel/reducer';
import listTheaterReducer from '../../pages/Home/Theater/reducer';
import loginReducer from '../../pages/Login/reducer';

const rootReducer = combineReducers({
    listFilmReducer,
    listBannerReducer,
    listTheaterReducer,
    loginReducer,
})

export default rootReducer;