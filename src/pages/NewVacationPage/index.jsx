import style from './style.module.css'
import NewVacationForm from "../../components/NewVacationForm"

export default function NewVacationPage() {
    return (
        <div className={style.container}>
            <h1 className={style.title}>Add Your Last Vacation!</h1>
            <NewVacationForm />
        </div>
    )
}