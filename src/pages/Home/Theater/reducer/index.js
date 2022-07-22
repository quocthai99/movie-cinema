

const initialState = {
    listTheater: null
}

const listTheaterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LIST_THEATER": {
            state.listTheater = action.payload

            return { ...state }
        }

        default:
            return { ...state };
    }
}

export default listTheaterReducer;