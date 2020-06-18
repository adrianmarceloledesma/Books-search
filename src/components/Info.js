import React,{useState} from 'react'
import styled from 'styled-components';
import './infoModal.css';

// importar el MOdal de material ui (no toda la libreria); 
import Modal from '@material-ui/core/Modal';



const Div = styled.div`
    width:15%;

    display:inline-block;
    margin:10px;
    padding:5px;
    border:1px solid gray;
    box-shadow:4px 4px 5px gray;
    
    & img{
        width:100%;
    }
    & .span1{
        font-size:18px;
        color:rgb(161, 160, 61);
        font-weight:bold;
    }
    @media screen and (max-width:900px){
        width:20%;
    }
    @media screen and (max-width:650px){
        width:25%;
    }
    @media screen and (max-width:500px){
        width:40%;
    }
    @media screen and (max-width:400px){
        width:45%;
        margin:10px 3px;
        padding:3px;
        font-size:16px;
  
    }`




// Material UI
const ContModal = styled.div`
    background-color: white;
    position: absolute;
    right: 0;
    top:0;
    left:0;
    bottom: 0;
    width: 70%;
    height: 500px;
    box-sizing:border-box;
    padding: 20px;
    overflow:scroll;
    margin-top:10px;
    
    & .modal{
        display:inline-block;
        margin:0 0 0 40px;
  

    }
    
    & a{
        background-color:rgb(42, 124, 124);
        padding:5px 25px;
        text-decoration:none;
        border-radius:5px 5px 5px;
        color:white;
    }
    & a:hover{
        background-color:rgba(42, 124, 124, 0.671);
    }
    & h4{
        color:rgb(60, 100, 209)
    }
    & .x{
        position:absolute;
        right:10px;
        top:5px;
        font-size:50px;
        color:red;
        cursor:pointer;
        border-radius:50% ;
        
    }
    & .x:hover{
        color:rgb(245, 96, 96);
    }
    @media screen and (max-width:900px){
        & {
            width:80%;
        }
    }
    @media screen and (max-width:800px){
        & .modal h2{
            font-size:18px;
        }
    }
    @media screen and (max-width:650px){
        & {
            width:70%;
            padding:10px;
            
        }
        & .modal{
            margin:0 0 0 15px;
        }
        & .modal h2{
            font-size:14px;
        }
        & .modal h4{
            font-size:12px;
        }
        & .modal p{
            font-size:12px;
        }
    }
    @media screen and (max-width:580px){
        & {
            width:85%;
            
            
        }
    }
    @media screen and (max-width:480px){
        &{
            width:97%;
        }
        & .modal{
            display:block;
            margin:0;
            
        }
        & .x{
            font-size:70px;
            top:0;
        }
    }
`

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}


// ------------



function Info(props) {

        // configuracion del Modal de Material UI
        const [modalStyle] = useState(getModalStyle);
        const [open,setOpen] = useState(false);
    
        
        
        const handleOpen = () => {
            setOpen(true)
        } 
        const handleClose= () => {
            setOpen(false)
        }
        
        // cuando se haga click se va a mostrar el Modal de Material UI
        const mostrarInfo= (e) =>{
            handleOpen();
        }
 
    return (
        <Div >
            <img src={props.resultado.volumeInfo.imageLinks.thumbnail} alt={props.resultado.volumeInfo.imageLinks}
            onClick={mostrarInfo} />
            <figcaption>{props.resultado.volumeInfo.title}</figcaption>
            <span className="span1">{props.resultado.volumeInfo.averageRating} /5</span>

            {/* Material UI Modal ( onClose es una funcion como 'onClick') */}
            <Modal open={open} 
                   onClose={()=>{
                     handleClose(); }}
            >
                <ContModal style={modalStyle} >
                  <img src={props.resultado.volumeInfo.imageLinks.thumbnail}alt=""/>
                  <span className="x" onClick={() =>  handleClose()}>&times;</span>
                  <div className="modal">
                    <h2>{props.resultado.volumeInfo.title}</h2>
                    <h4>{props.resultado.volumeInfo.authors}</h4>
                    <p>{props.resultado.volumeInfo.pageCount} Páginas</p>
                    <p>{props.resultado.volumeInfo.publisher} ({props.resultado.volumeInfo.publishedDate})</p>
                    
                    <a href={props.resultado.volumeInfo.previewLink}>Leer</a>

                  </div>
                  <h3>Reseña </h3>
                  <p >{props.resultado.volumeInfo.description}</p>
                </ContModal>
            </Modal>

       
        </Div>
    )
}

export default Info
