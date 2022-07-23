

const initialState = {
    data: {}
}

const detailReducer = (state = initialState, action) => {
    switch (action.type) {
        case "DETAIL_SUCCESS": {
            state.data = action.payload

            return { ...state }
        }

        default:
            return { ...state };
    }
}

export default detailReducer;