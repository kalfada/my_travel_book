import style from './style.module.css'

export default function Header() {
    return (
        <header className={style.header}>
            <div className={style.logo}>My Travel Book</div>
        </header>
    )
}