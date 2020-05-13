import React,{useEffect,useState} from 'react'
import './Home.css'
import {isAuthenticated } from '../../services/apiServices'
import { useHistory } from 'react-router-dom'

const Home=()=>{
    
    /*States*/
    const [show,setShow]=useState(false)

    /*History*/
    const history=useHistory()

    /*Effect*/
    useEffect(()=>{

        const action= async ()=>{
            const response=await isAuthenticated()
            if(!response){
                history.replace('/login')
            }else{
                setShow(true)
            }
        }
        action()
    },[])

    return (

        <div>

        </div>
    )
}

export default Home;