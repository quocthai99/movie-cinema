import { api } from './../../../util/apiConfig'

export const fetchData = (id) => {
    return dispatch => {

        api.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
        .then(result => {
            dispatch({
                type: "DETAIL_SUCCESS",
                payload: result.data.content
            })
        })
    }
}