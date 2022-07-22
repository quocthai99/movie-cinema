import { Carousel } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';

import styles from './HomeCarousel.module.scss'
import classNames from 'classnames/bind';

import { actFetchData } from './reducer/HeaderCarouselActions'

const cx = classNames.bind(styles)

const contentStyle = {
  height: '600px',
  color: '#fff',
  lineHeight: '600px',
  textAlign: 'center',
  background: '#364d79',
};

export default function HomeCarousel() {

  const dispatch = useDispatch()
  const { listBanner } = useSelector(state => state.listBannerReducer)


  useEffect(() => {
    dispatch(actFetchData())
  }, [])

  const renderBanner = () => {
    return listBanner?.map((banner, index) => {
      return (
        <div key={index}>
          <img width={'100%'} src={banner.hinhAnh} style={contentStyle} />
        </div>
      )
    })
  }

  return (
    <div className={cx('wrapper')}>
      <Carousel effect="fade">
        {renderBanner()}
      </Carousel>
    </div>
  )
}
