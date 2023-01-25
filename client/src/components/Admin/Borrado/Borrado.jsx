import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {getAllUser} from '../../../redux/actions';
import s from './Borrado.module.css';
import axios from 'axios'

function Borrado() {
  const [userId, setUserId] = useState(0);
  const [status, setStatus] = useState("");

  const stateUsers = useSelector(state => state.allUsers);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllUser())
  },[dispatch])

  const handleRadio = (e) => {
    setUserId(e.target.value)
    setStatus(e.target.name)
  }

  const onClickDisable = async () => {
    if(!userId){
      console.log("seleccione un usuario");
    }else{
      const res = await axios.delete(`/users/${userId}`, {status:status});
      dispatch(getAllUser());
      console.log(res);
    }
  }

  return (
    <div className={s.borrado}>
      <div className={s.borrado__content}>
        <div className={s.borrado__delete}>
          <button onClick={onClickDisable} className={s.borrado__btn}>Disabled</button>
        </div>
        <div className={s.borrado__users}>
          <div className={s.borrado__cabeceras}>
            <p>Id</p>
            <p>Name</p>
            <p>Surname</p>
            <p>Status</p>
            <p>Disabled</p>
          </div>
          {
            stateUsers.length && 
            stateUsers.map(e => (
              e.name === "def" ? "" :
              <div key={e.id} className={s.borrado__items}>
                <p>{e.name === "def" ? "" : e.id}</p>
                <p>{e.name === "def" ? "" : e.name}</p>
                <p>{e.name === "def" ? "" : e.surname ? e.surname : ""}</p>
                { e.name === "def" ? "" : <p>{e.status ? "true" : "false"}</p>}
                { e.name === "def" ? "" : <input type="radio" value={e.id} name={ e.name === "def" ? "" : e.status ? "true" : "false"} onChange={handleRadio} />}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Borrado