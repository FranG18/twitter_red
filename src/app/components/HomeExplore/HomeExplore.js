import React from 'react'
import './HomeExplore.css'
import MainNavbar from '../MainNavbar'

const HomeExplore=()=>{

    return(
        <div className='home_container'>
            <MainNavbar itemSelect='Explorar'/>
            <div className="home_content_box"></div>
            <div className="home_search_extra"></div>
        </div>
    )
}

export default HomeExplore