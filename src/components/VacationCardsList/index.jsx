import style from './style.module.css'
import VacationCard from "../VacationCard"
import { useEffect, useState } from "react"
import axios from "axios"

export default function VacationCardsList() {
    const [vacations, setVacations] = useState([])

    useEffect(() => {
        axios.get('https://6388b351d94a7e5040a45fdf.mockapi.io/api/vacations')
            .then(res => {
                console.log(res.data);
                setVacations(res.data)
            })
    }, [vacations.length])

    return (
        <>
            <div className={style.container}>
                {vacations?.map(vacation =>
                    <VacationCard key={vacation.id} vacation={vacation} />
                )}
            </div>
        </>
    )
}