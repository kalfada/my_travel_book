import style from './style.module.css'
import NewVacationForm from "../../components/NewVacationForm"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function NewVacationPage() {
    return (
        <div className={style.container}>
            <Link className={style.link} to={'/'}>
                <FontAwesomeIcon icon={faArrowLeft} /> Go Back
            </Link>
            <h1 className={style.title}>Add Your Last Vacation!</h1>
            <NewVacationForm />
        </div>
    )
}