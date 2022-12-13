import axios from "axios";
import style from './style.module.css'

export default function VacationCard({ vacation }) {

    return (
        <>
            <div className={style.card}>
                {/* <div className={style.img} style={{ backgroundImage: `url(${vacation.image})` }}></div> */}
                <div className={`${style.details} ${style.bold}`} >{vacation.cityName}</div>
                <div className={style.details} >{vacation.country}</div>
                {/* <div className={style.details} >{Number(vacation.vacationprice)} USD</div> */}
                {/* <div className={style.details} >{vacation.dates}</div> */}
                {/* <button onClick={() => axios.delete(`https://6388b351d94a7e5040a45fdf.mockapi.io/api/vacations/${vacation.id}`)}>delete</button> */}
            </div>
        </>
    )
}