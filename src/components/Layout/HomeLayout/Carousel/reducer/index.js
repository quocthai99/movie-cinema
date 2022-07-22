

const initialState = {
    listBanner: null
}

const listBannerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LIST_BANNER": {
            state.listBanner = action.payload

            return {...state}
        }

        default:
            return { ...state };
    }
}

export default listBannerReducer;