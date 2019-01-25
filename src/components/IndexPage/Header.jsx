import { NavBar } from 'antd-mobile';
import styles from './Header.css';

function Header() {
    return (
        <NavBar
        mode="light"
        className={styles['single-top-nav-bar']}
        >
            <p className={styles['am-navbar-title']}>发现</p>
        </NavBar>
    )
}

export default Header;
