import React from 'react'
import s from './Store.module.css'
import AsideFilters from '../AsideFilters/AsideFilters'
import Cards from '../Cards/Cards'
import NavBar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function Store() {
  return (
    <div className={s.store}>
      <div className={s.container}>
        <NavBar searchbar='true' />
        <div className={s.store__components}>
            <AsideFilters/>
            <Cards/>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default Store