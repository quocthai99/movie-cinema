import { Link } from 'react-router-dom'

import classNames from "classnames/bind"
import styles from './Navbar.module.scss'

const cx = classNames.bind(styles)

export default function Navbar() {
  return (
    <nav className={cx('wrapper')}>
      <div className={cx('inner')}>
        <ul>
          <li>
            <Link to='/'  >Home</Link>
          </li>
          <li>
            <Link to='/news' >News</Link>
          </li>
          <li>
            <Link to='/contact' >Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
