import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { fetchData } from './reducer/DetailActions'
import { Rate } from 'antd';

import styles from './DetailMovie.module.scss'
import classNames from 'classnames/bind'
import TabsTicket from './TabsTicket/TabsTicket';

const cx = classNames.bind(styles)
const desc = [1, 2, 3, 4, 5];

export default function DetailMovie() {
    const [value, setValue] = useState(3);

    const movie = useSelector(state => state.detailReducer.data)
    const dispatch = useDispatch()
    const params = useParams()
    console.log(movie);

    useEffect(() => {
        dispatch(fetchData(params.id))
    }, [])

    return (
        <div className={cx('wrapper')} >
            <div className={cx('inner')}>
                <div className={cx('content')}>
                    <div className={cx('information')}>
                        <div className={cx('img-movie')}>
                            <img width={300} src={movie.hinhAnh} />
                        </div>
                        <div className={cx("title")} >
                            <h3>{movie.tenPhim}</h3>
                            <p>Tình trạng: Đang chiếu</p>
                            <p>{movie.moTa}</p>
                        </div>
                    </div>
                    <div className={cx('option')}>
                        <Rate style={{ fontSize: "3rem" }} tooltips={desc} onChange={setValue} value={value} />
                        {value ? <span style={{ fontSize: '5rem', marginLeft: '50px', color: 'yellow' }} className="ant-rate-text">{desc[value - 1]}</span> : ''}
                    </div>
                </div>
                <div className={cx('buy-ticket')} >
                    <TabsTicket />
                </div>
            </div>
        </div>
    )
}
