import { Tabs } from 'antd';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { api } from '../../../util/apiConfig';

import { Link } from 'react-router-dom';
import moment from 'moment';

import styles from './TabsTicket.module.scss'
import classNames from 'classnames/bind';


const { TabPane } = Tabs;
const cx = classNames.bind(styles)




const TabsTicket = () => {
    const [tabPosition, setTabPosition] = useState('left');
    const theater = useSelector(state => state.listTheaterReducer.listTheater)
    const dispatch = useDispatch()

    useEffect(() => {
        api.get("QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01")
            .then(result => {
                dispatch({
                    type: "LIST_THEATER",
                    payload: result.data.content
                })
            })
    }, [])

    const renderTheater = () => {
        return (
            theater?.map((htr, index) => {
                return (
                    <TabPane
                        tab={
                            <div style={{ display: "flex", alignItems: "center", margin: "auto 10px" }}>
                                <img width={50} src={htr.logo} />
                                <h4>{htr.tenHeThongRap}</h4>
                            </div>
                        }
                        key={index}>

                        {htr.lstCumRap?.map((cumRap, index) => {
                            return (
                                <div key={index}>
                                    <div className={cx("tabs-container")}>
                                        <img width={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe1ZGIVMnO8O058T9E5brAafc5iOQdDq4Utg&usqp=CAU" />
                                        <div className={cx("tabs-title")}>
                                            <h4>{cumRap.tenCumRap}</h4>
                                            <p>{cumRap.diaChi}</p>
                                        </div>
                                    </div>
                                    <div className={cx("tabs-ticket")}>
                                        {cumRap.danhSachPhim.slice(1, 5)?.map((lichChieu) => {
                                            return lichChieu.lstLichChieuTheoPhim?.slice(0, 1).map((maLichChieu, index) => {
                                                return (
                                                    <Link key={index} to={`/checkout/${maLichChieu.maLichChieu}`} >
                                                        <button className={cx("btn-ticket")}>
                                                            {moment(maLichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                        </button>
                                                    </Link>
                                                )
                                            })
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </TabPane>
                )
            })
        )
    }

    return (
        <div className={cx('wrapper')}>
            <Tabs className={cx('inner')} defaultActiveKey="1" centered>
                <TabPane tab="Lịch chiếu" key="1">
                    <Tabs className={cx('inner')} tabPosition={tabPosition}>
                        {renderTheater()}
                    </Tabs>
                </TabPane>
                <TabPane tab="Thông tin" key="2">
                    Content of Tab Pane 2
                </TabPane>
                <TabPane tab="Đánh giá" key="3">
                    Content of Tab Pane 3
                </TabPane>
            </Tabs>
        </div>
    );
};

export default TabsTicket;