import Header from './../components/Header'
import Footer from './../components/Footer'

import classNames from 'classnames/bind'
import styles from './DefaultLayout.module.scss'


const cx = classNames.bind(styles)

export default function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                {children}
            </div>
            <Footer />
        </div>
    )
}
