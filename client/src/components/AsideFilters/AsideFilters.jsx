import React from 'react';
import s from './AsideFilters.module.css'

const AsideFilters = () => {
    return (
        <aside className={s.container}>
            <p className={s.label}>
                CATEGORIES
            </p>
            <ul className={s.list}>
                <li>Cervezas</li>
                <li>Rones</li>
                <li>Whiskys</li>
                <li>Vinos</li>
                <li>Tequilas</li>
                <li>Vodkas</li>
                <li>Champagne</li>
            </ul>
        </aside>
    )
}

export default AsideFilters