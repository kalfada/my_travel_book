import style from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'


export default function Footer() {
    return (
        <footer className={style.footer}>
            <div>©Created by Daniel Kalfa</div>
            <a className={style.link} href='https://github.com/kalfada/my_travel_book' target='_blank' rel='noreferrer' >
                <button className={style.btn}>
                    <FontAwesomeIcon icon={faCodeBranch} />
                    <span> Go To Repo</span>
                </button>
            </a>
        </footer>
    )
}