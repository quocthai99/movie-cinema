import { api } from "./../../../util/apiConfig";


export const actFetchData = (id) => {
    return dispatch => {
        
        api.get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`)
        .then(result => {
            dispatch({
                type: "TICKET_ROOM",
                payload: result.data.content,
            });
        })
    }
}