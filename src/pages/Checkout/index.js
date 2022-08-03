import { Navigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { Fragment, useEffect } from "react"
import { useParams } from "react-router-dom"

import { actFetchData } from "./reducer/TicketRoomActions"
import { CloseOutlined } from '@ant-design/icons'

import "./Checkout.scss"
import classNames from "classnames/bind"
import styles from "./Checkout.module.scss"

const cx = classNames.bind(styles)

export default function Checkout() {
  const { ticketRoom, danhSachGheDangDat } = useSelector(state => state.ticketRoomReducer)
  const { data } = useSelector(state => state.loginReducer)
  const dispatch = useDispatch()
  const params = useParams()
  console.log(danhSachGheDangDat);

  const { thongTinPhim, danhSachGhe } = ticketRoom

  useEffect(() => {
    dispatch(actFetchData(params.id))
  }, [])

  const renderSeats = () => {
    return danhSachGhe?.map((ghe, index) => {

      let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : "";
      let classGheDaDat = ghe.daDat === true ? 'gheDaDat' : "";

      let classGheDangDat = "";
      let indexGheDD = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe)
      if (indexGheDD !== -1) {
        classGheDangDat = 'gheDangDat'
      }
      return (
        <Fragment key={index}>
          <button onClick={() => {
            dispatch({
              type: "DAT_VE",
              payload: ghe
            })
          }} className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDaDat} ${classGheDangDat} `} key={index} >{ghe.daDat ? <CloseOutlined /> : ghe.stt}</button>
        </Fragment>
      )
    })
  }

  if (!localStorage.getItem("KhachHang")) return <Navigate replace to="/login" />

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx("content-left")}>
          <div className={cx("content-head")}>
            header
          </div>
          <div className={cx("content-body")}>
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
            <span>Ghe</span>
            {danhSachGheDangDat?.map((gheDD, index) => {
              return (
                <span key={index} >{gheDD.stt}</span>
              )
            })}
          </div>
          <div>
            <span>
              {danhSachGheDangDat?.reduce((total, ghe, index) => {
                return total += ghe.giaVe
              }, 0)}
            </span>
          </div>

          <div>
            <h4>Email</h4>
            <span>{data.email}</span>
          </div>

          <div className={cx("btn-buy")}>
            <button>Dat Ve</button>
          </div>
        </div>
      </div>
    </div>
  )
}
