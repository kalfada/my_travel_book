import style from './style.module.css'
import { addNewVacation } from '../../functions/API'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RangeCalendar } from '@mantine/dates'
import { Bars } from 'react-loader-spinner'
import dayjs from 'dayjs'

export default function NewVacationForm() {
    const navigate = useNavigate()
    const [newVacation, setNewVacation] = useState({ dates: [Date.now(), Date.now()] })
    const [dates, setDates] = useState([
        new Date(2021, 11, 1),
        new Date(2021, 11, 5),
    ])
    const [isSending, setIsSending] = useState(false)

    const handleOnChange = e => {
        const { value, name } = e.target
        setNewVacation({ ...newVacation, [name]: value })
    }

    const handleFile = async e => {
        const file = e.target.files[0]
        setNewVacation({ ...newVacation, image: await getBase64(file) })
    }

    const getBase64 = file => {
        return new Promise(resolve => {
            let baseURL = "";
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                baseURL = reader.result;
                resolve(baseURL);
            };
        });
    };

    const handleOnSubmit = async e => {
        e.preventDefault()
        setIsSending(true)
        const reqBody = { ...newVacation, dates: dates.map(date => dayjs(date).format('YYYY-MM-DD')) }
        await addNewVacation(reqBody)
        setIsSending(false)
        navigate('/')
    }

    return (
        <form className={style.container} onSubmit={handleOnSubmit} >
            <div className={style.subcontainer}>
                <input
                    className={style.input}
                    type="text"
                    name="country"
                    placeholder='Country'
                    onChange={handleOnChange}
                    required
                />
                <input
                    className={style.input}
                    type="text"
                    name="cityName"
                    placeholder='City'
                    onChange={handleOnChange}
                    required
                />
                <input
                    className={style.input}
                    type="text"
                    name="vacationprice"
                    placeholder='Vacation Cost'
                    onChange={handleOnChange}
                    required
                />
                <input
                    className={style.input}
                    type="file"
                    name="image"
                    onChange={handleFile}
                    required
                />
            </div>
            <div className={style.subcontainer}>
                <RangeCalendar
                    value={dates}
                    onChange={setDates}
                />
                {isSending ?
                    <div className={style.loader}>
                        <Bars
                            height="50"
                            width="50"
                            color="var(--fourth-color)"
                            ariaLabel="bars-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                    </div>
                    :
                    <input
                        className={`${style.input} ${style.btn}`}
                        type="submit"
                        value="Add Vacation"
                        accept='image/jpeg'
                    />
                }
            </div>
        </form>
    )
}