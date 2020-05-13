import React, { useRef, useState,useEffect } from 'react'
import './Login.css'
import twitterLogo from '../../assets/Twitter_Logo_WhiteOnImage.svg'
import { Link,useHistory } from 'react-router-dom'
import { login, logout, isAuthenticated } from '../../services/apiServices'
import ChargePage from '../ChargePage'
const Login = ({location}) => {

    /*Refs*/
    const emailRef = useRef()
    const passwordRef = useRef()

    /*State*/
    const [error, setError] = useState(false)
    const [show,setShow]=useState(false)

    /*History*/
    const history=useHistory()

    /*Effect*/

    useEffect(()=>{
        if(location.state!==undefined){
            setError(true)
        }
    },[])

    useEffect(()=>{
        const action= async ()=>{
            const response=await isAuthenticated()
            
            if(response){
                history.replace('/home')
            }else{
                setShow(true)
            }
        }

        action()
    },[])

    /*Functions*/ 
    const submitClick = async (event) => {
        const response = await login(emailRef.current.value, passwordRef.current.value)
        if (!response) {
            setError(true)
        } else {
            history.replace('/home')
        }
    }
    const logoutClick = async (event) => {
        const response = await logout()

        console.log(response)
    }

    const pruebaClick = async () => {
        const response = await isAuthenticated()

        console.log(response)
    }

    return (
        
        <div>
            {show && 
            <div className='login_container'>
                <img src={twitterLogo} className='login_logo'></img>
                <h1>Iniciar sesión en Twitter</h1>
                {error && <div className='login_span'><span>Email o Contraseña no validos</span></div>} 
                <div className="login_correo">
                    <div className="login_texto">Correo</div>
                    <div className="login_input_box"><input defaultValue={location.state!==undefined ? location.state.email : ''}  ref={emailRef} type='email' className='login_input' /></div>
                </div>
                <div className='login_contraseña'>
                    <div className="login_texto">Contraseña</div>
                    <div className="login_input_box"><input defaultValue={location.state!==undefined ? location.state.password : ''} ref={passwordRef} type='password' className='login_input' /></div>
                </div>
                <div onClick={(event) => { submitClick(event) }} className="login_button">Iniciar sesión</div>
                <button onClick={(event) => { logoutClick(event) }}>Logout</button>
                <button onClick={pruebaClick}>Prueba</button>
                <Link className='login_a' to='/'>Registrate en TwitterRed</Link>
            </div>
             }
             
             {(!show) && <ChargePage/>}
        </div>
    )
}

export default Login