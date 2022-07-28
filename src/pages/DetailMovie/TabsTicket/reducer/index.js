

const initialState = {
    tabsTicket: null
}

const tabTicketReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TABS_TICKET": {
            state.tabsTicket = action.payload

            return { ...state }
        }


        default:
            return { ...state };
    }
}

export default tabTicketReducer;