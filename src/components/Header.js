import React from 'react';
import styled from 'styled-components';
import img1 from '../img/img1.png';

const Headerr = styled.header`
    width:100%;
    background: #43C6AC;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #191654, #43C6AC);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #191654, #43C6AC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */




    margin-top:0;
    & div{
       text-align:center;
    }
    & div img{
        width:50px;
        margin-bottom:-10px;
    }
    & div h1{
        display:inline-block;
        color:white;
    }`

function Header() {
    return (
        <Headerr>
            <div>
               <h1 >Books Search</h1>
               <img src={img1} alt=""/>
            </div>
        </Headerr>
    )
}

export default Header
