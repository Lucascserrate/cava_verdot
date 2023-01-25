import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDrinks, putDrink, getAllCategories } from "../../../redux/actions";
import s from "./Stock.module.css";

const Stock = ({ setDisplay }) => {
  const dispatch = useDispatch();
  const drinks = useSelector((state) => state.drinks);
  const categories = useSelector((state) => state.categories);
  const [edit, setEdit] = useState({
    editable: false,
    id: 0,
  });

  const [errors, setError] = useState({});

  const validation = (input) => {
    let errors = {};
    if (
      drinks.find(
        (d) =>
          d.id === input.previewid && input.previewid !== parseInt(input.id)
      )
    ) {
      errors.previewid = "";
    }
    if (isNaN(input.previewid)) {
      errors.previewid = "";
    }
    if (
      drinks.find((d) => d.id !== parseInt(input.id) && d.name === input.name)
    ) {
      console.log(
        drinks.find((d) => d.id !== parseInt(input.id) && d.name === input.name)
      );
      errors.name = "";
    }
    return errors;
  };
  const [newValue, setNewValue] = useState({
    previewid: 0,
    id: 0,
    name: "",
    stock: 0,
    category: "",
  });
  function editable(e) {
    if (edit.editable === true) {
      setEdit({
        editable: false,
        id: e.target.id,
      });
    }
    if (edit.editable === false) {
      setEdit({
        editable: true,
        id: e.target.id,
      });
    }
  }
  function cancele() {
    setEdit({
      editable: false,
    });
  }
  async function changed(e) {
    e.preventDefault();
    dispatch(putDrink(newValue));
    dispatch(getDrinks());
    setEdit({
      editable: false,
    });
  }
  const handleBlur = (e) => {
    setNewValue({
      ...newValue,
      [e.target.name]: isNaN(parseInt(e.target.value))
        ? e.target.value
        : parseInt(e.target.value),
      id: e.target.id,
    });
    setError(
      validation({
        ...newValue,
        [e.target.name]: isNaN(parseInt(e.target.value))
          ? e.target.value
          : parseInt(e.target.value),
      })
    );
  };

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getDrinks());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <h2 className={s.title}>Stock</h2>
      <h3 className={s.subtitle}>All our products are here</h3>
      <div className={s.stockTitles}>
        <div className={s.bold}>ID</div>
        <div className={s.bold}>Name</div>
        <div className={s.bold}>Category</div>
        <div className={s.bold}>Stock</div>
      </div>
      <div className={s.stockContainer}>
        {drinks.length
          ? drinks.map((e) =>
            edit.editable === true && e.id === parseInt(edit.id) ? (
              <div
                key={e.id}
                id={e.id}
                onBlur={(e) => handleBlur(e)}
                className={s.stockEdit}
              >
                <div className={s.text} id={e.id}>
                  {e.id}
                </div>
                {errors.previewid && <span>{errors.previewid}</span>}
                <input
                  type="text"
                  className={s.inputName}
                  id={e.id}
                  name="name"
                  defaultValue={e.name}
                />
                {errors.name && <p>{errors.name}</p>}
                <select name="category" id={e.id} className={s.inputCategory}>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.category}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  className={s.inputStock}
                  id={e.id}
                  name="stock"
                  defaultValue={e.stock}
                />
                <div className={s.botones}>
                  <input
                    type="submit"
                    className={s.boton}
                    onClick={(e) => changed(e)}
                    value="✔"
                  />
                  <input
                    type="submit"
                    className={s.boton}
                    onClick={cancele}
                    value="✖"
                  />
                </div>
              </div>
            ) : (
              <div
                onClickCapture={(e) => editable(e)}
                key={e.id}
                id={e.id}
                className={s.stockItems}
              >
                <div className={s.text} id={e.id}>
                  {e.id}
                </div>
                <div className={s.text} id={e.id}>
                  {e.name}
                </div>
                <div className={s.text} id={e.id}>
                  {e.category?.category}{" "}
                </div>
                <div className={s.text} id={e.id}>
                  {e.stock}
                </div>
              </div>
            )
          )
          : undefined}
      </div>
      <div className={s.buttons}>
        <button onClick={() => setDisplay(true)} className={s.btn}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Stock;
