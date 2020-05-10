import React from 'react'
import {useHistory} from 'react-router-dom'
import './Navbar.css'
import twitterIcon from '../../assets/Twitter_Logo_WhiteOnImage.svg'
import twitterSearch from '../../assets/tools-and-utensils.svg'
import infoIcon from '../../assets/mark.svg'

const Navbar = () => {
    const history=useHistory();

    const handleClick=(event)=>{
        history.push('/login')
    }

    return (
        <nav className='navbar_container'>
            <div className='navbar_container_flexbox'>
                <div className='navbar_search'>
                    <img src={twitterIcon} className='navbar_icon' alt=""/>
                    <div className='navbar_search_box'>
                        <img src={twitterSearch} className='navbar_search_icon'></img>
                        <input placeholder='Buscar en TwitterRed' className='navbar_search_text'/>
                    </div>
                </div>
                <div className='navbar_buttons'>
                    <div onClick={(event)=>{handleClick(event)}} className="navbar_button_login">Iniciar sesión</div>
                    <div className="navbar_button_registrer">Registrate</div>
                </div>
            </div>    
            <img src={infoIcon} className='navbar_info_icon'/>
        </nav>
    )
}

export default Navbar