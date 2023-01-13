import React from 'react'
import s from './Alert.module.css'

// El componente Alert es reutilizable y recibira 2 propiedades: 
// type: error ó ok -> puede recibir alguna de estas 2 opciones que definiran si se cumplio o no
// message: -> recibira el mensaje que se le mostrara al usuario y se pintara de un color diferente segun el type enviado
function Alert({type, message}) {
  return (
    <>
      {
        type === 'error' ?
        <div className={`${s.alert} ${s.error}`}>
          <p className={s.error__red}>{message}</p>
        </div>
        :
        <div className={`${s.alert} ${s.ok}`}>
          <p className={s.ok__green}>{message}</p>
        </div>
      }
    </>
  )
}

export default Alert