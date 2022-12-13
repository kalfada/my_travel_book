import style from './style.module.css'
import VacationCard from "../VacationCard"
import { useEffect, useState } from "react"
import { InfinitySpin } from 'react-loader-spinner'
import { getVacations } from '../../functions/API'

export default function VacationCardsList() {
    const [vacations, setVacations] = useState([])
    const [isFetching, setIsFetching] = useState(false)

    const fetchData = async () => {
        setIsFetching(true)
        setVacations(await getVacations())
        setIsFetching(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (isFetching) {
        return (
            <div className={style.loader}>
                <InfinitySpin
                    width='200'
                    color="var(--fourth-color)"
                />
            </div>
        )
    }

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