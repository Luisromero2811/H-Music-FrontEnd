import React, { useEffect, useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './Playlist.css';
import logo from '../../../img/logo.png';
import userimg from '../../../img/user.png';
import Reproductor from '../audio.js';
import tocar from '../../../icons/tocar.png';
import { Link, useLocation } from "react-router-dom";
import Cookies from 'universal-cookie';
import cerrarSesion from '../../../js/redirect.js';
import { useParams } from 'react-router-dom';

const Player = (caller, canciones) => {
    
    if(caller){
        return <Reproductor music={canciones} calling={caller}/>
    }else{
        return
    }
}
const Playlist = (props) => {
    
    const [canciones, setcanciones] = useState();
    const [call,setCall] = useState();
    
    useEffect((props) => {
        
        const cookies = new Cookies();
        const config = {
            headers: { Authorization: 'Bearer '+cookies.get('token') }
        }

        user.nombre =cookies.get('user')
        user.email = cookies.get('email')

        axios.get('http://127.0.0.1:8000/api/cancion/genero/4', config).then((res) => { //4 es el id del genero de las canciones
            console.log(res.data);
            setcanciones(res.data.canciones);
        });
    }, []);

    const user ={
        nombre:'',
        email: ''
    }

    function _handleGetPlayer() {
        setCall(true)
    }

    function _hadleDropPlayer() {
        setCall(false)
    }
    return (
        <div className="overflow bg-black">
            {/* Navbar User */}
            <div className="container-fluid">
                            <div className="row bg-black p-3 text-white ">
                                    <div className="col text-start"><h5><a className="link" href="/inicio">H-Music</a></h5></div>
                            <div className="col text-end"> 
                            <Link to="/perfil">
                                <button  className="btn btn-primary btn-sm rounded-pill px-3 me-3" type="button" >
                                <img src={userimg} alt={user.nombre} className="g-0 pe-2 pb-1" width={25}></img>
                                    {user.nombre}
                                    </button>
                            </Link>
                            <button  className="btn  btn-light btn-sm rounded-pill px-3" type="button" onClick={cerrarSesion} >Cerrar sesion</button>
                            </div>
                        </div>
                    </div>


            <div className="my-5">{
                !canciones ? ("No se encontraron canciones") : (

                    <div>
                        <div className="container">
                            <div class="row">
                                <div className="play m-4 col-5">
                                    <button className="btn_player" width="20%" height="20%" onClick={() => { _handleGetPlayer(); console.log(call) }}>
                                        <img src={tocar} width="45%" height="45%" />
                                    </button>
                                </div>
                                <div class="col-5 m-4">
                                    <p class="text-light fw-bold fs-4"> {canciones.length} canciones en esta playlist </p>
                                </div>
                            </div>
                            <table className="Table">
                                <thead>
                                    <div className="line"></div>
                                    <tr className="Head">
                                        <th>#</th>
                                        <th>Titulo</th>
                                        <th>Artista</th>
                                        <th>Duración</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        canciones.map((cancion, index) => (
                                            <tr key={index} className="Info">
                                                <td>{index + 1}</td>
                                                <td>{cancion.Nombre}</td>
                                                <td>{cancion.Autor}</td>
                                                <td>{cancion.Duracion}</td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>

                        </div>
                        {Player(call, canciones)}
                    </div>
                )
            }</div>

            {/* Footer  */}
            <div className="container-fluid justifiy-content-center bg-black">
                    <div className="row pt-5">
                        <div className="col-lg-5 col-md-4 col-sm-12">
                            <div className="line"></div>
                        </div>
                    </div>
    
                    <div className="row p-5 pb-5 justifiy-content-center">
                        <div className="col">
                        <Link to="/">
                            <img src={logo} alt="H-Music" className="img-fluid "></img>
                        </Link>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Playlist;