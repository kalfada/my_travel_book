import style from './style.module.css'
import { useParams } from 'react-router-dom'
import { getVacationById } from '../../functions/API'
import { useEffect, useState } from 'react'
import { InfinitySpin } from 'react-loader-spinner'

export default function SingleVacation() {
    const { id } = useParams()
    const [vacation, setVacation] = useState({})
    const [isFetching, setIsFetching] = useState(true)

    const fetchData = async () => {
        setIsFetching(true)
        setVacation(await getVacationById(id))
        setIsFetching(false)
        console.log(await getVacationById(id));
    }

    useEffect(() => {
        fetchData()
    }, [id])

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
        <div className={style.container}>
            <div>{vacation?.country}</div>
            <div>{vacation?.cityName}</div>
            <div>${vacation?.vacationprice}</div>
            <div className={style.image} style={{ backgroundImage: `url(${vacation?.image})` }}></div>
        </div>
    )
}