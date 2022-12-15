import style from './style.module.css'
import VacationCard from "../VacationCard"
import { useEffect, useState } from "react"
import { InfinitySpin } from 'react-loader-spinner'
import { getVacations } from '../../functions/API'
import { searchByKeyWords } from '../../functions/common'

export default function VacationCardsList() {
    const [vacations, setVacations] = useState([])
    const [searchedList, setSearchedList] = useState([])
    const [isFetching, setIsFetching] = useState(false)

    const fetchData = async () => {
        setIsFetching(true)
        const res = await getVacations()
        console.log(res);
        setVacations(res)
        setSearchedList(res)
        setIsFetching(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleSearch = e => {
        const { value } = e.target
        if (value) {
            setSearchedList(searchByKeyWords(value, vacations))
        } else {
            setSearchedList(vacations)
        }
    }

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
            <input
                className={style.search}
                type="search"
                placeholder='Search'
                onChange={handleSearch}
            />
            <div className={style.container}>
                {searchedList?.map(vacation =>
                    <VacationCard
                        key={vacation.id}
                        vacation={vacation}
                    />
                )}
            </div>
        </>
    )
}