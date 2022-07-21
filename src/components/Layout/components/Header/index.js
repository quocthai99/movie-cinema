import { Link} from 'react-router-dom'

import className from 'classnames/bind'
import styles from './Header.module.scss'

import Navbar from './Navbar/Navbar'


const cx = className.bind(styles)

export default function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src='https://www.pngplay.com/wp-content/uploads/1/Letter-T-PNG.png' alt='logo' />
        </div>
        <div className={cx('navbar')}>
          <Navbar />
        </div>
        <div className={cx('login-user')}>
          <ul>
            <li>
              <Link to='/'>Login</Link>
            </li>
            <span>/</span>
            <li>
              <Link to='/'>Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
