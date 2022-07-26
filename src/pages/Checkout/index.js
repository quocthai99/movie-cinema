import { Navigate } from "react-router-dom"

import classNames from "classnames/bind"
import styles from "./Checkout.module.scss"

const cx = classNames.bind(styles)

export default function Checkout() {
  if (!localStorage.getItem("KhachHang")) return <Navigate replace to="/login" />


  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx("content-left")}>
            <h1>Chon ghe</h1>
        </div>
        <div className={cx('content-right')}>
            <h1>title Phim</h1>
        </div>
      </div>
    </div>
  )
}
