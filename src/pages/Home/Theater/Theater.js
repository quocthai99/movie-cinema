import { Tabs } from 'antd';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import { Fragment } from 'react';
import moment from 'moment'

import { actFetchData } from './reducer/listTheaterActions';

import styles from './Theater.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)


const { TabPane } = Tabs;

const Theater = () => {
    const [tabPosition, setTabPosition] = useState('left');

    const dispatch = useDispatch()
    const { listTheater } = useSelector(state => state.listTheaterReducer)
    console.log(listTheater);

    useEffect(() => {
        dispatch(actFetchData())
    }, [])

    const renderTheater = () => {




        return listTheater?.map((heThongRap, index) => {
            return (
                <TabPane tab={<img src={heThongRap.logo} width='50px' />} key={index}>
                    <Tabs tabPosition={tabPosition}>
                        {heThongRap.lstCumRap.slice(1, 5)?.map((cumRap, index) => {
                            return (
                                <TabPane tab={
                                    <div className={cx("menu-address")} >
                                        <img src={heThongRap.logo} width='50px' />
                                        <div className={cx('address-name')}>
                                            {cumRap.tenCumRap}
                                        </div>
                                        <p>{cumRap.diaChi}</p>
                                        <hr />
                                    </div>
                                }
                                    key={index}>
                                    {cumRap.danhSachPhim.slice(1, 5).map((film, index) => {
                                        return (
                                            <Fragment key={index}>
                                                <div className={cx('wrapper-film')}>
                                                    <div className={cx('inner-film')}>
                                                        <img width={50} height={50} src={film.hinhAnh} />
                                                        <div className={cx('film-title')}>
                                                            <h4>{film.tenPhim}</h4>
                                                            <p>{cumRap.diaChi}</p>
                                                        </div>
                                                    </div>
                                                    <div className={cx('hours-film')}>
                                                        {film.lstLichChieuTheoPhim?.slice(0, 12).map((lichChieu, index) => {
                                                            return (

                                                                <Link key={index} to='/checkout' >
                                                                    <button>
                                                                        {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                                    </button>
                                                                </Link>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                                <hr />
                                            </Fragment>
                                        )
                                    })}
                                </TabPane>
                            )
                        })}
                    </Tabs>
                </TabPane>
            )
        })
    }


    return (
        <>
            <Tabs style={{ border: '1px solid #ccc' }} tabPosition={tabPosition}>
                {renderTheater()}
                {/* <TabPane tab="Tab 1" key="1">
                    Content of Tab 1
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                    Content of Tab 2
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                    Content of Tab 3
                </TabPane> */}
            </Tabs>
        </>
    );
};

export default Theater;