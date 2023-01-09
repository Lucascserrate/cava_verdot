import s from '../Navbar/Navbar.module.css'
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import SearchBar from '../Searchbar/Searchbar';
/* import logo from '../../assets/copa_cavaverdot.svg' */
import Button3 from '../Button3/Button3';
import { getDrinks } from "../../redux/actions";

export default function NavBar({ searchbar }) {

    const dispatch=useDispatch()

    function handleClick(e) {
        e.preventDefault();
        dispatch(getDrinks())
    }

    return (
        <div className={s.bg}>
            <div className={s.container}>
                <div className={s.left}>
                    {/* <img className={s.img} src={logo} alt="logo" /> */}
                    <p className={s.title}>CAVA VERDOT</p>
                    <ul className={s.navButtons}>
                        <Link to='/store' onClick={(e)=>handleClick(e)}><li>Store</li></Link>
                    </ul>
                </div>
                {searchbar && <SearchBar />}
                <div className={s.right}>
                    <Link to='/login'><Button3 value='Sign In' /></Link>
                </div>

            </div>
        </div>
    )
}