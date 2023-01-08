import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getAllCategories, getCategoryProduct } from '../../redux/actions';
import s from "./AsideFilters.module.css";

const AsideFilters = () => {
  const state = useSelector(state => state.categories.data);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getAllCategories())
  },[dispatch])

  return (
    <aside className={s.container}>
      <p className={s.label}>CATEGORIES</p>
      <ul className={s.list}>
        {
          state?.map(e => (
            <li key={e.id} ><button className={s.aside__btn} onClick={()=> dispatch(getCategoryProduct(e.category))} value={e.category}>{e.category}</button></li>
          ))
        }
      </ul>
    </aside>
  );
};

export default AsideFilters;
