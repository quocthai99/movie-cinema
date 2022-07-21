import { Carousel } from 'antd';
import React from 'react';

import styles from './HomeCarousel.module.scss'
import classNames from 'classnames/bind';


const cx = classNames.bind(styles)

const contentStyle = {
  height: '600px',
  color: '#fff',
  lineHeight: '600px',
  textAlign: 'center',
  background: '#364d79',
};

export default function HomeCarousel() {
  return (
    <div className={cx('wrapper')}>
      <Carousel effect="fade">
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  )
}
