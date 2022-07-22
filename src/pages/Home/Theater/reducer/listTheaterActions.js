import { api } from './../../../../util/apiConfig'

export const actFetchData = () => {
    return dispatch => {

        api.get("QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01")
            .then(result => {
                dispatch({
                    type: "LIST_THEATER",
                    payload: result.data.content
                })
            })
    }
}