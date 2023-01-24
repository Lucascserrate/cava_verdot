import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAddressById } from '../../../redux/actions'
import s from './ViewAddress.module.css'

function ViewAddress() {
  const stateUser = useSelector(state => state.user);
  const stateAddress = useSelector(state => state.addressUser);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAddressById(stateUser.id));
  },[stateAddress]);

  return (
    <div className={s.viewaddress}>
      <h2 className={s.viewaddress__title}>You Address</h2>
      <div className={s.viewaddress__content}>
        <div className={s.viewaddress__data}>
          <p>Country,</p>
          <p>State,</p>
          <p>City,</p>
        </div>

        <div className={s.viewaddress__data}>
          <p>Cod. Postal,</p>
          <p>Telefono.</p>
        </div>

        <div className={s.viewaddress__data}>
          <p>Nombre calle</p>
          <p>Numero calle</p>
        </div>

        <div className={s.viewaddress__data}>
          <p>Referencia</p>
        </div>

        <div className={s.viewaddress__edit}>

        </div>
      </div>
    </div>
  )
}

export default ViewAddress