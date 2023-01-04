import s from '../Navbar/Navbar.module.css'
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import SearchBar from '../Searchbar/Searchbar';
import icon from '../Navbar/cavaicon.jfif'

export default function NavBar() {
    
    function handleClick(e){
        e.preventDefault();
    }

    return(
        (<div>

            <div className={s.image}>
                    <img src={icon} alt="" width="100px" height="200px"/>
            </div>

            <div className={s.title}>
                <h1>CAVA VERDOT</h1>
            </div>          
                        
            <SearchBar/>

            <Link to='/home'><button>Home</button></Link>

            <Link to='/store'><button>Store</button></Link>

            <Link to='/login'><button>Sign In/Log In</button></Link>
        
        </div>)
    )
}