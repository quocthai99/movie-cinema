import { Navigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { Fragment, useEffect } from "react"
import { useParams } from "react-router-dom"

import { actFetchData } from "./reducer/TicketRoomActions"

import classNames from "classnames/bind"
import styles from "./Checkout.module.scss"

const cx = classNames.bind(styles)

export default function Checkout() {
  const { ticketRoom } = useSelector(state => state.ticketRoomReducer)
  const dispatch = useDispatch()
  const params = useParams()
  console.log(ticketRoom);

  const { thongTinPhim, danhSachGhe } = ticketRoom

  useEffect(() => {
    dispatch(actFetchData(params.id))
  }, [])

  const renderSeats = () => {
    return danhSachGhe?.map((ghe, index) => {
      return (
        <Fragment key={index}>
          {ghe.loaiGhe === "Vip" ? <button className={cx("red")}>{ghe.stt}</button> : <button className={cx("silver")}>{ghe.stt}</button>}
        </Fragment>
      )
    })
  }

  if (!localStorage.getItem("KhachHang")) return <Navigate replace to="/login" />

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx("content-left")}>
          <div>
            header
          </div>
          <div>
            {renderSeats()}
          </div>
        </div>
        <div className={cx('content-right')}>
          <h1>Tien ve: 0d</h1>
          <div>
            <h3>{thongTinPhim?.tenPhim}</h3>
            <p>{thongTinPhim?.diaChi}</p>
            <p>{thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }} >
            <h4>Ghe</h4>
            <span>0</span>
          </div>

          <div>
            <h4>Email</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
