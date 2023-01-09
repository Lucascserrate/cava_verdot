import React, {useState, useEffect} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { PostProduct, getAllCategories } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import s from './PostProduct.module.css'


const PostProductForm = () => {
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false)

const dispatch = useDispatch()
const categories = useSelector((state) => state.categories.data)




useEffect(() => {
    dispatch(getAllCategories())
}, [dispatch])


    return (
        
        <div className={s.form}>
        <Formik
        initialValues={{
            name: '',
            description:'',
            stock: '',
            price: '',
            rating:'5',
            image: '',
          country: 'Mexico',
            category: "Wine",
        }}
        validate={(values) => {
            let errors = {}

            //Validación nombres
            if(!values.name){
                errors.name = 'Por favor ingresa un nombre a la bebida'
            } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)){
                errors.name = 'El nombre solo puede contener letras y espacios'
            }
               
               
            // Validación Description

            if (!values.description){
                errors.description = 'Por favor ingresa una descripción'
            }

            // Validación Stock

            if (!values.stock){
             errors.stock = 'Por favor ingresa un número de Stock'
            }
           else if (values.stock < 1){
                errors.stock = 'El número mínimo de Stock es 1'                
            }
            

            //Validación Precio
            
            if (!values.price){
                errors.price = 'Por favor ingresa un precio'
            }
            
            else if (values.price < 1){
                errors.price = 'El precio mínimo es $1'                
            }

            //Validación image
            
            if (!values.image){
                errors.image = 'Por favor ingresa un link de imagen'
            }

            //Validacion Country

            if (!values.country){
                errors.country = 'Por favor ingresa un país'
            }

            // Validación Categories

            if (!values.category){
                errors.category = 'La categoría no es válida'
            }
            return errors
        }}
        
        onSubmit={(values, {resetForm}) => {
            resetForm()
            axios.post('http://localhost:3001/products/', values)
            
            alert('Publicación enviada!')
            cambiarFormularioEnviado(true)
            setTimeout(() => cambiarFormularioEnviado(false), 5000)
        }}
        
        >
            {({errors}) => (
                <Form className={`${s.form__content} ${s.container}`}>
                    <h1 className={s.form__title}>Publica tu producto</h1>
                    <div className={s.form__inputs}>
                    <div className={s.form__group}>
                <label disabled htmlFor='name' className={s.form__lbl}>Bebida:</label>
                <Field 
                className={s.form__input}
                type='text' 
                id='name' 
                name='name' 
                place holder='Nombre de bebida...'/>
                <span className={s.form__bar}></span>

                <div className={s.form__message}>
                <ErrorMessage name='name' component={() => (<span className={s.error}>{errors.name}</span>)} />
                </div>

            </div>

            <div className={s.form__group}>
                <label htmlFor='description' className={s.form__lbl}>Descripción:</label>
                <Field 
                id='description'
                className={s.form__input} 
                as='textarea' 
                name='description' 
                place holder='Agrega tu descripción aquí...'/>
                <span className={s.form__bar}></span>

                  <div className={s.form__message}>
                <ErrorMessage name='description' component={() => (<span className={s.error}>{errors.description}</span>)} />
                 </div>

            </div>
            <div className={s.form__group}>
                <label htmlFor='stock' className={s.form__lbl}>Stock:</label>
                <Field
                type='number' 
                id='stock' 
                name='stock' 
                className={s.form__input}
                place holder='Número de Stock...'/>
                <span className={s.form__bar}></span>

               <div className={s.form__group}>
               <ErrorMessage name='Stock' component={() => (<span className={s.error}>{errors.stock}</span>)} />
               </div>

            </div>
            <div className={s.form__group}>
                <label htmlFor='price' className={s.form__lbl}>Precio:</label>
                <Field 
                type='number' 
                id='price' 
                className={s.form__input}
                name='price' 
                place holder='Ingresa el precio aquí...'/>
                <span className={s.form__bar}></span>

            <div>
               <ErrorMessage name='Price' component={() => (<span className={s.error}>{errors.price}</span>)} />
            </div>

            </div>
            <div className={s.form__group}>
                <label htmlFor='image' className={s.form__lbl}>Imagen:</label>
                <Field 
                type='url' 
                id='image' 
                className={s.form__input}
                name='image' 
                 
                 
                place holder='Explorar...'/>
                <span className={s.form__bar}></span>

            <div>
              <ErrorMessage name='image' component={() => (<span className={s.error}>{errors.image}</span>)} />
            </div>

            {/* </div>
            <div className={s.form__group}>
                <label htmlFor='country' className={s.form__lbl}>Pais:</label>
                <Field 
                type='text'
                className={s.form__input} 
                id='country' 
                name='country' 
                place holder='Ingresa el Pais Aquí...'/>
                <span className={s.form__bar}></span>

                <div>
                <ErrorMessage name='country' component={() => (<span className={s.error}>{errors.country}</span>)} />
                </div> */}

            </div>
            {/* <div className={s.form__group}>
                
                <select name = 'category' className={s.form__input} >
                    <option value = '' hidden> Seleccionar categoría </option>
                    {
                        categories?.map(categories => (
                            <option value = {categories.category}>{categories.category[0].toUpperCase() + categories.category.substring(1)}</option>
                        ))
                    }
                    </select>
                   

                <div><ErrorMessage name='Categories' component={() => (<span className={s.error}>{errors.categories}</span>)} /></div>
                
            </div>            */}
                <button  type='submit' className={s.form__submit}>Publicar</button> 
                {formularioEnviado && <p className='exito'>Publicado con exito!</p>}                            
                </div>
                </Form>
            )}
          </Formik>
        <>
        <Link to='/'>
            <button className={s.form__submit}>Back Home</button>
        </Link>
        </>
        </div>
    );
}

export default PostProductForm;