import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { fetchData } from './reducer/LoginActions'



import styles from './Login.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export default function Login() {

    const props = useSelector(state => state.loginReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [state, setState] = useState({
        taiKhoan: "",
        matKhau: ""
    })

    const handleonChange = (e) => {
        const { name, value } = e.target
        setState({
            ...state,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(fetchData(state, navigate))
    }

    const renderNoti = () => {
        const { error } = props
        return error && <div style={{ color: 'red' }}>{error.response.data.content}</div>
    }

    return (
        <div>
            <div className={cx("main")}>
                <form onSubmit={handleSubmit} method="POST" className={cx("form")} id="form-1">
                    <h3 className={cx("heading")}>Đăng nhập</h3>
                    <p className={cx("desc")}>Vui lòng đăng nhập để mua vé ❤️</p>
                    {renderNoti()}
                    <div className={cx("spacer")} />
                    <div className={cx("form-group")}>
                        <label htmlFor="fullname" className={cx("form-label")}>Tài khoản</label>
                        <input onChange={handleonChange} id="fullname" name="taiKhoan" type="text" placeholder="VD: abc..." className={cx("form-control")} />
                        <span className={cx("form-message")} />
                    </div>
                    <div className={cx("form-group")}>
                        <label htmlFor="password" className={cx("form-label")}>Mật khẩu</label>
                        <input onChange={handleonChange} id="password" name="matKhau" type="password" placeholder="Nhập mật khẩu" className={cx("form-control")} />
                        <span className={cx("form-message")} />
                    </div>
                    <button className={cx("form-submit")}>Đăng nhập</button>
                </form>
            </div>
        </div>
    )
}
