import React, {useEffect, useState} from 'react';
import s from './DashboardClient.module.css';
import { parseJwt } from '../../functions/parseTokenJwt'

function DashboardClient() {
  return (
    <div className={s.dashboard}>
      <div className={`${s.dashboard__content} ${s.container}`}>
        
      </div>
    </div>
  )
}

export default DashboardClient