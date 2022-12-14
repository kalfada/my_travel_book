import style from './style.module.css'
import { toCapital } from '../../functions/common'
import { useParams } from 'react-router-dom'
import { deleteVacationById, getVacationById } from '../../functions/API'
import { useEffect, useState } from 'react'
import { InfinitySpin } from 'react-loader-spinner'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import dayjs from 'dayjs'

export default function SingleVacation() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [vacation, setVacation] = useState({})
    const [isFetching, setIsFetching] = useState(true)

    const fetchData = async () => {
        setIsFetching(true)
        setVacation(await getVacationById(id))
        setIsFetching(false)
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

    const deleteVacation = async () => {
        setIsFetching(true)
        await deleteVacationById(id)
        setIsFetching(false)
        navigate('/')
    }

    return (
        <div className={style.container}>
            <div className={style.card}>
                <Link className={style.link} to={'/'}>
                    <FontAwesomeIcon icon={faArrowLeft} /> Go Back
                </Link>
                <div className={style.country} >{toCapital(vacation?.country)}</div>
                <div className={style.city_name} >{toCapital(vacation?.cityName)}</div>
                <div>
                    <span>{dayjs(vacation?.dates[0]).format('DD/MM/YYYY')}</span>
                    <span> - </span>
                    <span>{dayjs(vacation?.dates[1]).format('DD/MM/YYYY')}</span>
                </div>
                <div>In this vacation you traveled for {dayjs(vacation?.dates[1]).diff(dayjs(vacation?.dates[0]), 'day')} days</div>
                <div>In this vacation you spent ${vacation?.vacationprice}</div>
                <div className={style.image} style={{ backgroundImage: `url(${vacation?.image})` }}></div>
                <button
                    className={`${style.input} ${style.btn}`}
                    onClick={deleteVacation}
                >Delete Vacation</button>
            </div>
        </div>
    )
}