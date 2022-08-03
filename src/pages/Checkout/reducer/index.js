

const initialState = {
    ticketRoom: {},
    danhSachGheDangDat: []
}

const ticketRoomReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TICKET_ROOM": {
            state.ticketRoom = action.payload
            return { ...state }
        }

        case "DAT_VE": {
            let danhSachGheCapNhat = [...state.danhSachGheDangDat]

            let index = danhSachGheCapNhat.findIndex(gheDD => gheDD.maGhe === action.payload.maGhe)

            if (index != -1) {
                danhSachGheCapNhat.splice(index, 1)
            } else {
                danhSachGheCapNhat.push(action.payload)
            }
            console.log(state.danhSachGheDangDat);

            return { ...state, danhSachGheDangDat: danhSachGheCapNhat }
        }

        default:
            return { ...state };
    }
}

export default ticketRoomReducer;