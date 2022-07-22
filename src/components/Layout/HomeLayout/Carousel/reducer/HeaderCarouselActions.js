import { api } from './../../../../../util/apiConfig'

export const actFetchData = () => {
    return dispatch => {

        api.get("QuanLyPhim/LayDanhSachBanner")
            .then(result => {
                dispatch({
                    type: "LIST_BANNER",
                    payload: result.data.content
                })
            })
            .catch(error => {
                console.log(error);
            })
    }
}