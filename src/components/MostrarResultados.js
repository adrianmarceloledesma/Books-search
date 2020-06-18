import React, {useContext} from 'react'
import Info from './Info'
import styled from 'styled-components';
import {FormContext} from '../context/FormContext';

const Div = styled.div`
    margin-top:50px;
    width:100%;
    box-sizing:border-box;
    text-align:center;
    cursor:pointer;`

function MostrarResultados() {
    const {resultados} = useContext(FormContext)
    return (
        
        <Div>
            {
                resultados.map( resultado =>
                <Info
                   resultado={resultado}
                   key={resultado.id}/>)
            }
        </Div>
    )
}

export default MostrarResultados;
