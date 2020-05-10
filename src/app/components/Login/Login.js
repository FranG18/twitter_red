import React from 'react'
import './Login.css'
import twitterLogo from '../../assets/Twitter_Logo_WhiteOnImage.svg'

const Login = () => {

    return (
        <div className='login_container'>
            <img src={twitterLogo} className='login_logo'></img>
            <h1>Iniciar sesión en Twitter</h1>
            <div className="login_correo">
                <div className="login_texto">Correo</div>
                <div className="login_input_box"><input className='login_input' /></div>
            </div>
            <div className='login_contraseña'>
                <div className="login_texto">Contraseña</div>
                <div className="login_input_box"><input className='login_input' /></div>
            </div>
            <div className="login_button">Iniciar sesión</div>
            <a className='login_a' href="#">Registrate en TwitterRed</a>
        </div>
    )
}

export default Login