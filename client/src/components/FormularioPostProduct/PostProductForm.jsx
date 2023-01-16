import React, {useState, useEffect} from 'react'
// import { PostProduct, getAllCategories, getCountries } from '../../redux/actions';
// import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import s from './PostProduct.module.css'
import axios from 'axios';

const initialForm = {
    name: "",
    description: "",
    stock: "",
    price: "",
    rating: "5",
    image: "",
    country: "",
    category: "",
    subCategory:""
}

export default function PostProductForm ({products, setProducts}) {
 
    function Validate(currentInput){
        let currentErrors = {}

        //Validación nombres
        if (!currentInput.name) {
            currentErrors.name = "Por favor ingresa un nombre a la bebida";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(currentInput.name)) {
            currentErrors.name = "El nombre solo puede contener letras y espacios";
          }

          // Validación Description

          if (!currentInput.description) {
            currentErrors.description = "Por favor ingresa una descripción";
          }

          // Validación Stock

          if (!currentInput.stock) {
            currentErrors.stock = "Por favor ingresa un número de Stock";
          } else if (currentInput.stock < 1) {
            currentErrors.stock = "El número mínimo de Stock es 1";
          }

          //Validación Precio

          if (!currentInput.price) {
            currentErrors.price = "Por favor ingresa un precio";
          } else if (currentInput.price < 1) {
            currentErrors.price = "El precio mínimo es $1";
          }

          //Validación image

          if (!currentInput.image) {
            currentErrors.image = "Por favor ingresa una imagen";
          }

          //Validacion Country

          if (!currentInput.country) {
            currentErrors.country = "Por favor ingresa un país";
          }

          // Validación Categories

          if (!currentInput.category) {
            currentErrors.category = "Por favor ingresa una categoría";
          }
          
          return currentErrors;
    }


    //Guarda todas las categorias
     const [categories, setCategories] = useState("")

    //Guarda todos los Paises
     const [countries, setCountries] = useState("")

    //Guarda los Usuarios
    // const [users, setUsers] = useState("")

    //Guarda los datos de los inputs
    const [data, setData] = useState(initialForm)

    //Captura los errores del axios
    const [error, setError] = useState("")

    //Captura errores de validación
    const [currentErrors, setCurrentErrors] = useState({})

    //trae todas las Categorias
    const getCategory = async () => {
        const url = 'http://localhost:3001/categories'
        const res = await axios.get(url, data);
        console.log(categories);
        setCategories(...categories, res.data);
        
    }

    const getCountries = async () => {
        const url = 'http://localhost:3001/countries'
        const res = await axios.get(url, data)
        setCountries(...countries, res.data)
    }

    //Trae todos los Usuarios
    // const getUsers = async () => {
    //     const url = 'http://localhost:3001/users'
    //     const res = await axios.get(url, data)
    //     setUsers(...users, res.data)
    // }

    //Carga Categorias y Usuarios
    useEffect(() =>{
        getCategory();
        // getUsers();
         getCountries()
    }, []);

//Registra los cambios en los inputs en el FORM
const handleChange = ({currentTarget: input}) => {
    setData({...data, [input.name]: input.value});
    setCurrentErrors(Validate({...data, [input.name]: input.value}))
}

// Envia los datos del FORM al back, actualiza, resetea estado y captura errores
const handleSubmit = async (ev) => {
    ev.preventDefault();

    try{
        const url = 'http://localhost:3001/products'
        const res = await axios.post(url, data)
        setProducts(products.concat(res.data))
        setData(initialForm)
        alert('Producto creado con exito!')
    } catch (err) {
        setError(error.response)
    }
}

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
    })
}

// const handleSelectUsers = (e) => {
//     e.preventDefault();
//     setData({
//       ...data,
//       user: e.target.value,
//     });
//   };

//Este handler convierte la imagen en base64
const handleImage = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setFileToBase(file)
    
  }

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setData({
        ...data,
        image: reader.result
      })
    }
}


    

    return (
        <div className={s.form}>
            <form className={`${s.form__content} ${s.container}`} onSubmit={handleSubmit}>
            <h1 className={s.form__title}>Publica tu producto</h1>
            <div className={s.form__inputs}>
            <div className={s.form__group}>
                <input
                  className={s.form__input}
                  type="text"
                  id="name"
                  name="name"
                  placeholder=" "
                  value = {data.name}
                  onChange = {handleChange}
                />
                <label disabled htmlFor="name" className={s.form__lbl}>
                  Bebida:
                </label>
                <span className={s.form__bar}></span>
              </div>
              <div className={s.form__message}>
              {
                        currentErrors.name && (<p className={s.error}>{currentErrors.name}</p>)
                    }
              </div>

              <div className={s.form__group}>
                <input
                  id="description"
                  className={s.form__input}
                  as="textarea"
                  name="description"
                  placeholder=" "
                  onChange = {handleChange}
                  value = {data.description}
                />
                <label htmlFor="description" className={s.form__lbl}>
                  Descripción:
                </label>
                <span className={s.form__bar}></span>
              </div>
              <div className={s.form__message}>
              {
                        currentErrors.description && (<p className={s.error}>{currentErrors.description}</p>)
                    }
              </div>

              

              <div className={s.form__group}>
                <input
                  type="number"
                  id="stock"
                  name="stock"
                  className={s.form__input}
                  placeholder=" "
                  onChange = {handleChange}
                  value = {data.stock}
                />
                <label htmlFor="stock" className={s.form__lbl}>
                  Stock:
                </label>
                <span className={s.form__bar}></span>

              </div>
              <div className={s.form__message}>
              {
                        currentErrors.stock && (<p className={s.error}>{currentErrors.stock}</p>)
                    }
              </div>

              <div className={s.form__group}>
                <input
                  type="number"
                  id="price"
                  className={s.form__input}
                  name="price"
                  placeholder=" "
                  onChange = {handleChange}
                  value = {data.price}
                />
                <label htmlFor="price" className={s.form__lbl}>
                  Precio:
                </label>
                <span className={s.form__bar}></span>

                <div className={s.form__message}>
                {
                        currentErrors.stock && (<p className={s.error}>{currentErrors.stock}</p>)
                    }
                </div>
              </div>

              <div className={s.form__group}>
                <input
                  type="file"
                  placeholder='Image'
                  name='image'
                  onChange = {handleImage}
                  required
                  className={s.form__input}
                  />
                  
                  
                <label htmlFor="image" className={s.form__lbl}>
                  Imagen:
                </label>
                <span className={s.form__bar}></span>
              </div>
              <div className={s.form__message}>
              {
                        currentErrors.image && (<p className={s.error}>{currentErrors.image}</p>)
                    }
              </div>

              <div className={s.form__group}>
              <label htmlFor="category" className={s.form__lbl}>Categoria:</label>
               { <select
                  className={s.form__input}
                  placeholder=" "
                  
                  onChange = {handleSelectCategories}
                >
                
                {categories && (categories.map(item => {
 
                   return (<option key={item.id} value={item.category}>{item.category}</option>)

                }))}
                </select>
            }
                <span className={s.form__bar}></span>

                <div className={s.form__message}>
                {
                        currentErrors.category && (<p className={s.error}>{currentErrors.category}</p>)
                    }
                </div>


                
              </div>

              

              <button type='submit' className={s.form__submit} >Publicar</button> 
                

            </div>
            </form>

            <Link to='/'>
            <button className={s.form__submit}  type='button'>Back Home</button>
        </Link>
        </div>
    )
}