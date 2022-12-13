import style from './style.module.css'
import VacationCardsList from "../../components/VacationCardsList"

export default function HomePage(params) {
    return (
        <>
            <div className={style.container}>
                <VacationCardsList />
            </div>
        </>
    )
}