

const initialState = {
    ticketRoom: {}
}

const ticketRoomReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TICKET_ROOM": {
            state.ticketRoom = action.payload
            return {...state}
        }

        default:
            return { ...state };
    }
}

export default ticketRoomReducer;