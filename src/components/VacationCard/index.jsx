import style from './style.module.css'
import { toCapital } from '../../functions/common'
import { Link } from 'react-router-dom'

export default function VacationCard({ vacation }) {

    return (
        <Link className={style.link} to={`/vacation/${vacation.id}`}>
            <div className={style.card} style={{ backgroundImage: `url(${vacation.image})` }}>
                <div className={`${style.details} ${style.bold}`} >{toCapital(vacation.cityName)}</div>
                <div className={style.details} >{toCapital(vacation.country)}</div>
            </div>
        </Link>
    )
}