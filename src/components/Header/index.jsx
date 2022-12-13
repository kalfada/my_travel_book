import style from './style.module.css'
import { Link } from 'react-router-dom'

export default function Header() {

    return (
        <header className={style.header}>
            <div className={style.logo} >My Travel Book</div>
            <Link to={'/new_vacation'}>
                <button className={style.btn} >New Vacation</button>
            </Link>
        </header>
    )
}