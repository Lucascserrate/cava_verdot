import React, { useState, useEffect } from "react";
import s from "./PostProduct.module.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories, getCountries } from "../../redux/actions";
import Alert from "../Alert/Alert";

export default function PostProductForm({ setDisplay }) {
  const stateCountries = useSelector((state) => state.countries);
  const stateCategories = useSelector((state) => state.categories);

  const [timeAlert, setTimeAlert] = useState(false);
  const [viewAlert, setViewAlert] = useState();

  const dispatch = useDispatch();

  //Guarda los datos de los inputs
  const [data, setData] = useState({
    name: "",
    description: "",
    stock: "",
    price: "",
    image: "",
    country: "",
    category: "",
  });

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getCountries());
  }, [dispatch]);

  const handleImage = async (e) => {
    const files = e.target.files;
    console.log(files);
    const datas = new FormData();
    datas.append("file", files[0]);
    datas.append("upload_preset", "CAVA-verdot");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dcxiks4ku/upload",
      {
        method: "POST",
        body: datas,
      }
    );
    const file = await res.json();
    setData({
      ...data,
      image: file.secure_url,
    });
  };

  //Registra los cambios en los inputs en el FORM
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  //Registra los values de los selects
  const handleSelectCategories = (e) => {
    e.preventDefault();
    setData({
      ...data,
      category: e.target.value,
    });
  };

  const handleSelectCountries = (ev) => {
    ev.preventDefault();
    setData({
      ...data,
      country: ev.target.value,
    });
  };

  // Envia los datos del FORM al back, actualiza, resetea estado y captura errores
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const { name, description, stock, price, image, country, category } = data;

    if (
      !name ||
      !description ||
      !stock ||
      !price ||
      !image ||
      !country ||
      !category
    ) {
      setViewAlert(<Alert type="error" message="Campos vacios" />);
      setTimeAlert(true);
      setTimeout(() => {
        setTimeAlert(false);
      }, 1500);
    } else {
      setViewAlert(<Alert type="ok" message="Producto creado" />);
      setTimeAlert(true);
      setTimeout(() => {
        setTimeAlert(false);
        setDisplay(false);
      }, 1500);
      await axios.post(`/products`, data);
      setData({
        name: "",
        description: "",
        stock: "",
        price: "",
        image: "",
        country: "",
        category: "",
      });
    }
  };

  return (
    <div className={s.form}>
      <form
        className={`${s.form__content} ${s.container}`}
        onSubmit={handleSubmit}
      >
        <p onClick={() => setDisplay(false)} className={s.close}>
          ✖
        </p>
        <h1 className={s.form__title}>Add a product</h1>
        <div className={s.form__inputs}>
          <div className={s.form__elements}>
            <div className={s.form__group}>
              <label htmlFor="name" className={s.form__lbl}>
                Drink:
              </label>
              <input
                className={s.form__input}
                type="text"
                id="name"
                name="name"
                placeholder="Name..."
                value={data.name}
                onChange={handleChange}
              />
            </div>

            <div className={s.form__group}>
              <label htmlFor="description" className={s.form__lbl}>
                Description
              </label>
              <input
                id="description"
                className={s.form__input}
                as="textarea"
                name="description"
                placeholder="Description..."
                onChange={handleChange}
                value={data.description}
              />
            </div>

            <div className={s.form__group}>
              <label htmlFor="stock" className={s.form__lbl}>
                Stock:
              </label>
              <input
                type="number"
                id="stock"
                name="stock"
                className={s.form__input}
                placeholder="Stock..."
                onChange={handleChange}
                value={data.stock}
              />
            </div>

            <div className={s.form__group}>
              <label htmlFor="price" className={s.form__lbl}>
                Price:
              </label>
              <input
                type="number"
                id="price"
                className={s.form__input}
                name="price"
                placeholder="Price..."
                onChange={handleChange}
                value={data.price}
              />
            </div>

            <div className={s.form__group}>
              <select
                className={s.form__input}
                onChange={handleSelectCategories}
              >
                <option value="default" selected disabled>
                  Seleccione Categoria
                </option>
                {stateCategories &&
                  stateCategories.map((e) => (
                    <option key={e.id} value={e.category}>
                      {e.category}
                    </option>
                  ))}
              </select>
            </div>

            <div className={s.form__group}>
              <select
                className={s.form__input}
                onChange={handleSelectCountries}
              >
                <option value="default" disabled selected>
                  Seleccione pais
                </option>
                {stateCountries &&
                  stateCountries.map((e) => (
                    <option key={e.id} value={e.country}>
                      {e.country}
                    </option>
                  ))}
              </select>
            </div>

            <div className={s.form__group}>
              <label htmlFor="img" className={s.form__lbl}>
                Image:
              </label>
              <input
                type="file"
                name="image"
                id="img"
                onChange={handleImage}
                required
                className={s.form__input}
              />
            </div>
          </div>

          <div className={s.form__elements}>
            <div className={s.imgSide}>
              {<img src={data.image} alt="" className={s.form__viewimg} />}
            </div>

            <button type="submit" className={s.btn}>
              Add
            </button>
            <div className={s.form__alert}>{timeAlert && viewAlert}</div>
          </div>
        </div>
      </form>
    </div>
  );
}
