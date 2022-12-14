import style from './style.module.css'
import VacationCardsList from "../../components/VacationCardsList"

export default function HomePage() {
    return (
        <>
            <div className={style.container}>
                <div className={style.title}>
                    <h1>Welcome to the Travel Book!</h1>
                    <div className={style.subtitle}>Here you can manage all your vacations and see where have you been around the world</div>
                </div>
                <VacationCardsList />
            </div>
        </>
    )
}