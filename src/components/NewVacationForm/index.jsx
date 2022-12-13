import style from './style.module.css'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Bars } from 'react-loader-spinner'

export default function NewVacationForm() {
    const navigate = useNavigate()
    const [newVacation, setNewVacation] = useState({})
    const [isSending, setIsSending] = useState(false)

    const handleOnChange = e => {
        const { value, name } = e.target
        setNewVacation({ ...newVacation, [name]: value })
    }

    const handleFile = e => {
        const file = e.target.files[0]
        setNewVacation({ ...newVacation, image: file })
    }

    const handleOnSubmit = e => {
        e.preventDefault()
        setIsSending(true)
        axios.post(`https://6388b351d94a7e5040a45fdf.mockapi.io/api/vacations`, newVacation)
            .then(res => {
                console.log(res.data);
                setIsSending(false)
                navigate('/')
            })
    }

    return (
        <form className={style.container} onSubmit={handleOnSubmit} >
            <input className={style.input} type="text" name="country" placeholder='Country' required onChange={handleOnChange} />
            <input className={style.input} type="text" name="cityName" placeholder='City' required onChange={handleOnChange} />
            <input className={style.input} type="text" name="vacationprice" placeholder='Vacation Cost' required onChange={handleOnChange} />
            <div className={style.flex}>
                <div className={style.container}>
                    <label>Start Date</label>
                    <input className={`${style.input} ${style.short_input}`} type="date" />
                </div>
                <div className={style.container}>
                    <label>End Date</label>
                    <input className={`${style.input} ${style.short_input}`} type="date" />
                </div>
            </div>
            <input type="file" name="image" onChange={handleFile} />
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
                <input className={`${style.input} ${style.btn}`} type="submit" value="Add Vacation" accept='image/jpeg' />
            }
        </form>
    )
}