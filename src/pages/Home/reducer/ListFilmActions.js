import { api } from './../../../util/apiConfig'

export const actFetchData = () => {
    return dispatch => {

        api.get('QuanLyPhim/LayDanhSachPhim?maNhom=GP10')
            .then(result => {
                dispatch(actListFilm(result.data.content))
            })
    }
}

const actListFilm = (data) => {
    return {
        type: "LIST_FILM",
        payload: data
    }
}