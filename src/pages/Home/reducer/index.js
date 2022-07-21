

const initialState = {
    listFilm: null,
    nowShowing: true,
    commingSoon: true,
    filmDefault: []
}

const listFilmReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LIST_FILM": {
            state.listFilm = action.payload
            state.filmDefault = [...state.listFilm]
            return { ...state }
        }

        case "NOW_SHOWING": {
            state.listFilm = state.filmDefault.filter(film => film.dangChieu === state.nowShowing)
            return { ...state }
        }

        case "COMMING_SOON": {
            state.listFilm = state.filmDefault.filter(film => film.sapChieu === state.commingSoon)

            return { ...state }
        }

        default:
            return { ...state }
    }
}

export default listFilmReducer