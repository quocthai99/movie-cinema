import { api } from './../../../util/apiConfig'


export const fetchData = (user, navigate) => {
    return dispatch => {

        api.post('QuanLyNguoiDung/DangNhap', user)
            .then(result => {
                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: result.data.content
                })

                localStorage.setItem("KhachHang", JSON.stringify(result.data.content))


                navigate(-1, { replace: true })
            })
            .catch(error => {
                dispatch({
                    type: "LOGIN_FAILED",
                    payload: error
                })
            })
    }
}