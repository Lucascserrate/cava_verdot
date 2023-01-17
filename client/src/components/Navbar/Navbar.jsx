import s from "../Navbar/Navbar.module.css";
import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../Searchbar/Searchbar";
import logo from "../../assets/Logo_cava-verdot_blanco.svg";
import Button3 from "../Button3/Button3";
import ButtonArrow from '../ButtonArrow/ButtonArrow';

export default function NavBar({ searchbar }) {
  const getToken = window.localStorage.getItem("token");

  const navigate = useNavigate()

  const cerrarSesion = () => {
    window.localStorage.removeItem("token");
    navigate('/login')
  };

  const [vistaBtnLogin, setVistaBtnLogin] = useState();

  useEffect(() => {
    setVistaBtnLogin(
      getToken ? (
        <Button3 value="Sign Out" handler={cerrarSesion} />
      ) : (
        <Link to="/login">
          <Button3 value="Sign In" />
        </Link>
      )
    );
  }, [getToken]);

  return (
    <div className={s.bg}>
      <div className={s.container}>
        <div className={s.left}>
          <Link to="/">
            {" "}
            <img className={s.img} src={logo} alt="logo" />
          </Link>
          <div className={s.navButtons}>
            <Link to="/store">
              <ButtonArrow value='Store' />
            </Link>
            <Link to="/about">
              <ButtonArrow value='About Us' />
            </Link>
          </div>
        </div>
        {searchbar && <SearchBar />}
        <div className={s.right}>
          {vistaBtnLogin}
        </div>
      </div>
    </div>
  );
}
