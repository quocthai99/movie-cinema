import { combineReducers } from 'redux'
import listFilmReducer from './../../pages/Home/reducer'
import listBannerReducer from '../../components/Layout/HomeLayout/Carousel/reducer';
import listTheaterReducer from '../../pages/Home/Theater/reducer';
import loginReducer from '../../pages/Login/reducer';
import detailReducer from '../../pages/DetailMovie/reducer';
import ticketRoomReducer from '../../pages/Checkout/reducer';
import tabTicketReducer from '../../pages/DetailMovie/TabsTicket/reducer';

const rootReducer = combineReducers({
    listFilmReducer,
    listBannerReducer,
    listTheaterReducer,
    loginReducer,
    detailReducer,
    ticketRoomReducer,
    tabTicketReducer,
})

export default rootReducer;