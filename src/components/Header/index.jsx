import style from './style.module.css'
import { Link } from 'react-router-dom'

export default function Header() {

    return (
        <header className={style.header}>
            <Link className={style.link} to={'/'}>
                <div className={style.logo} >My Travel Book</div>
            </Link>
            <Link className={style.link} to={'/new_vacation'}>
                <button className={style.btn} >New Vacation</button>
            </Link>
        </header>
    )
}