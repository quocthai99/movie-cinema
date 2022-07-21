import classNames from 'classnames/bind';
import styles from './ListFilms.module.scss'

const cx = classNames.bind(styles)


export default function ListFilms({ film }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('img-film')}>
                    <img src={film.hinhAnh} width='300px' />
                    <button>Buy Ticket</button>
                </div>
            </div>
        </div>
    )
}
