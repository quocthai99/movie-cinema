import Footer from "../components/Footer"
import Header from "../components/Header"
import HomeCarousel from "./Carousel"

import classNames from "classnames/bind"
import styles from './HomeLayout.module.scss'

const cx = classNames.bind(styles)

export default function HomeLayout({ children }) {
    return (
        <div className={cx("wrapper")}>
            <Header />
            <HomeCarousel />
            <div className="container">
                {children}
            </div>
            <Footer />
        </div>
    )
}