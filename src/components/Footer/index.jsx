import style from './style.module.css'

export default function Footer() {
    return (
        <footer className={style.footer}>
            <div>©Created by Daniel Kalfa</div>
            <a href='https://github.com/kalfada/my_travel_book' target='_blank'>Link to Github</a>
        </footer>
    )
}