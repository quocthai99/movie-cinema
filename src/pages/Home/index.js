import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { actFetchData } from './reducer/ListFilmActions'

import classNames from "classnames/bind"
import CarouselSlick from "./CarouselSlick"
import styles from './Home.module.scss'


const cx = classNames.bind(styles)

export default function Home() {

  const dispatch = useDispatch()
  const { listFilm } = useSelector(state => state.listFilmReducer)

  useEffect(() => {
    dispatch(actFetchData())
  }, [])

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('btn-film')}>
          <button className={cx('btn-left')} onClick={() => {
            dispatch({
              type: "NOW_SHOWING",
            })
          }}>Now Showing</button>
          <button className={cx('btn-right')} onClick={() => {
            dispatch({
              type: "COMMING_SOON",
            })
          }}>Comming Soon</button>
        </div>
        <div className={cx('show-list-film')}>
          <CarouselSlick listFilm={listFilm} />
        </div>
      </div>
    </div>
  )
}
