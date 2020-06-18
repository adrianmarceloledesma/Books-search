import React, {useState, useContext, Fragment} from 'react';
import styled from 'styled-components';
import MostrarResultados from './MostrarResultados';

import {FormContext} from '../context/FormContext';

const Form = styled.form`
    width:50%;
    margin:auto;
    & input{
        width:100%;
        padding:9px;
        margin-top:15px;
        box-sizing:border-box;
        font-size:22px;
        border-radius:5px 5px 5px;
    }
    & input:nth-of-type(2){
        background-color:rgb(25, 97, 97);
        color:white;
    }
    @media screen and (max-width:600px){
        width:85%;
    }
    @media screen and (max-width:450px){
        width:90%;
    }
`

function Section() {
    // pasar lo que escribo en el form al context
    const {setBusquedaContext, setConsultar} = useContext(FormContext);

    const [busqueda, setBusqueda] = useState('');

    const handleChange = (e) => {
        // si es un solo state fijarse como controlarlo no es igual a con un objeto
        setBusqueda(e.target.value)
    }
    const handleClick = (e) =>{
// fijarme como ordenar las funciones porque para que 'setBusquedaContext' se conecte, 1ero tiene que estar el true
        e.preventDefault();
        setConsultar(true);
        setBusquedaContext(busqueda);
        
    }
    return (
        <Fragment>
            <Form onSubmit={handleClick}>
                <input type="text" placeholder="Autor, libro" name="busqueda" onChange={handleChange}/>
                <input type="submit" value="Buscar"/>
    
               
            </Form>
            <MostrarResultados/>
        </Fragment>
    )
}    
export default Section 