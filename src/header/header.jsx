import styles from './header.module.css'
import fourSquareIcon from '../assets/four-square.svg'
import bellIcon from '../assets/bell-outline.svg'
import pinIcon from '../assets/pin-outline.svg'
import {useState} from "react";

export default function Header() {
    const [mode, setMode] = useState('dark')

    function switchTheme() {
        setMode(mode === 'dark' ? 'light' : 'dark')
    }

    return <header className={styles.header}>
        <button className={styles.drawers}>
            <i className="fa-solid fa-bars"></i>
        </button>
        <button className={styles.navButton}>
            <img src={fourSquareIcon} alt=""/>
        </button>
        <button className={styles.navButton}>
            <img src={bellIcon} alt=""/>
        </button>
        <div className={styles.location}>
            <img src={pinIcon} alt=""/>
            <p>Hanoi, Vietnam</p>
        </div>
        <div className={styles.searchWrapper}>
            <div className={styles.inputContainer}>
                <i className="fa-solid fa-magnifying-glass"></i>
                <input className={styles.search} type="text" placeholder="Search More"/>
            </div>
        </div>
        <div className={styles.themeSwitcherWrapper}>
            <div className={styles.themeSwitcher} onClick={() => switchTheme()}>
                <div
                    className={`${styles.themeSwitcherCircle} ${mode === 'dark' ? styles['themeSwitcherCircle--dark'] : ''}`}>
                    {mode === 'light' ? <i className="fa-regular fa-moon"></i> : <i className="fa-regular fa-sun"></i>}
                </div>
            </div>
        </div>
        <div className={styles.avatarWrapper}>
            <img className={styles.avatar}
                 src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                 alt=""/>
        </div>
    </header>
}