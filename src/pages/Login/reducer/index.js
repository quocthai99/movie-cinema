

const initialState = {
    data: {},
    error: null,
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS": {
            state.data = action.payload

            return { ...state }
        }

        case "LOGIN_FAILED": {
            state.error = action.payload

            return { ...state }
        }

        default:
            return { ...state };
    }
}

export default loginReducer;