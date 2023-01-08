import React from 'react'
import s from './Store.module.css'
import AsideFilters from '../AsideFilters/AsideFilters'
import Cards from '../Cards/Cards'

function Store() {
  return (
    <div className={s.store}>
      <div>
        <AsideFilters/>
      </div>
      <div>
        <Cards/>
      </div>
    </div>
  )
}

export default Store