import React, {useState, useEffect} from 'react';
import axios from 'axios';

export const FormContext = React.createContext();

const FormProvider = (props) => {
    const [busquedaContext, setBusquedaContext] = useState('');
    const [resultados, setResultados] = useState([]);

    const [consultar, setConsultar] = useState(false);
    useEffect(() =>{
        // si hay un click en el formulario, 'consultar' se vuelve true y se ejecuta la funcion. es para que no haga
        // nada si no hay datos, sino se hace esto habrá problemas con el State
        if (consultar){
            const peticionGoogle= async () =>{
                const url = `https://www.googleapis.com/books/v1/volumes?q=${busquedaContext}`
                const resultadopeticion = await axios.get(url);
                setResultados(resultadopeticion.data.items)
                console.log(resultados)
            }
            peticionGoogle()
        }

    
    },[busquedaContext])
    return(
        <FormContext.Provider value={{setBusquedaContext, setConsultar, resultados}}>
            {props.children}
        </FormContext.Provider>
    )

}
export default FormProvider;