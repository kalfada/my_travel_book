import style from './style.module.css'
import NewVacationForm from "../../components/NewVacationForm"
import { Link } from 'react-router-dom'

export default function NewVacationPage() {
    return (
        <div className={style.container}>
            <h1 className={style.title}>Add Your Last Vacation!</h1>
            <NewVacationForm />
            <Link className={style.link} to={'/'}>
                <div>Cancel</div>
            </Link>
        </div>
    )
}