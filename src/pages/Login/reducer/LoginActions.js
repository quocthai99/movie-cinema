import { api } from './../../../util/apiConfig'


export const fetchData = (user) => {
    return dispatch => {

        api.post('QuanLyNguoiDung/DangNhap', user)
            .then(result => {
                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: result.data.content
                })
            })
            .catch(error => {
                dispatch({
                    type: "LOGIN_FAILED",
                    payload: error
                })
            })
    }
}