import s from '../Navbar/Navbar.module.css'
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import SearchBar from '../Searchbar/Searchbar';
import logo from '../../assets/Logo_cava-verdot_blanco.svg'
import Button3 from '../Button3/Button3';
import { getDrinks } from "../../redux/actions";

export default function NavBar({ searchbar }) {


    return (
        <div className={s.bg}>
            <div className={s.container}>
                <div className={s.left}>
                    <img className={s.img} src={logo} alt="logo" />
                    <Link to='/'>{/* <p className={s.title}>CAVA VERDOT</p> */}</Link>
                    <ul className={s.navButtons}>
                        <Link to='/store'><li>Store</li></Link>
                        <Link to='/about'><li>About Us</li></Link>
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