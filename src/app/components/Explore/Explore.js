import React,{useState,useEffect,useRef} from 'react'
import './Explore.css'
import {useHistory} from 'react-router-dom'
import {isAuthenticated,login} from '../../services/apiServices'
import Navbar from '../Navbar'
import ChargePage from '../ChargePage'
import {tendences} from '../../data/exampleData'

const Explore=()=>{

    const [show,setShow]=useState(false)
    const [auth,setAuth]=useState(false);

  
    
    /*Effect*/
    useEffect(()=>{
        const action= async ()=>{
            const response=await isAuthenticated()
            
            if(response) {
                setAuth(true)
            }

            setTimeout(() => {
                setShow(true)
            }, 500);


        }
        action()
    },[])

    return (
        <div>
            {(show) 
            ? <ExplorePage auth={auth}/> 
            : <ChargePage/>
        } 
        </div>
        
    )
}


const ExplorePage=({auth})=>{

    return(
        <div>
             { (!auth) 
                ? <ExploreDontAuth/>
                : <ExploreAuth/> }        
        </div>
    )
}

const ExploreAuth=()=>{
    
    return(
        <div>
            Auth
        </div>
    )
}

const ExploreDontAuth=()=>{

    /*Refs*/ 
    const emailRef=useRef()
    const passwordRef=useRef()

    /*History*/
    const history=useHistory()

    const submitClick = async (event) => {
        const response = await login(emailRef.current.value, passwordRef.current.value)
        if (!response) {
            history.push({
                pathname: '/login',
                state: { 
                  email:emailRef.current.value,
                  password:passwordRef.current.value
                },
            })
        
        } else {
            history.replace('/home')
        }
    }

    return(
      <div className='explore_container'> 
        <Navbar/> 
        <div className='explore_content'>
            <div className="explore_box">
                <div className='explore_box_title'><h3>Explorar</h3></div>
                <div className='explore_main_tendences'>
                    <div style={{color:'white',fontSize:'13px',userSelect:'none'}}>COVID-19 - Hace 4 horas</div>
                    <div style={{color:'white',fontSize:'24px',userSelect:'none'}}><strong>Coronavirus: Rusia ya es el segundo país con más casos del mundo</strong></div>
                    <div style={{color:'white',fontSize:'13px',userSelect:'none'}}>200 mil personas estan twitteando sobre esto</div>
                </div>
                <div className="explore_tendences_box">
                    {tendences.map(({id,type,title,nTweets})=>(
                        <TendencesBox key={id} type={type} title={title} nTweets={nTweets}/>
                    ))}
                   
                </div>
            </div>
            <div style={{position:'relative'}}>
                <div className="explore_login_box">
                    <div className="explore_login_image"></div>
                    <div className="explore_login_text"><strong>Mira lo que está pasando en el mundo en este momento</strong></div>
                    <div className="explore_login_email">
                        <div className="explore_login_title">Correo</div>
                        <div className="explore_input_box"><input ref={emailRef} type='email' className='explore_input' /></div>
                    </div>
                    <div className="explore_login_password">
                        <div className="explore_login_title">Contraseña</div>
                        <div className="explore_input_box"><input ref={passwordRef} type='password' className='explore_input' /></div>
                    </div>
                    <div onClick={(event)=>{submitClick(event)}} className="explore_button_login">Iniciar Sesión</div>
                    <div className="explore_login_o">O</div>
                    <div className="explore_button_registrer">Registrarse</div>
                </div>
            </div>   
        </div>
      </div>
    )
    
}

const TendencesBox=({type,title,nTweets})=>(
    <div className='tendences_box'>
        <div style={{color:'whitesmoke',fontSize:'11px'}}>{type}</div>
        <div style={{color:'white',fontSize:'17px'}}><strong>{title}</strong></div>
        <div style={{color:'whitesmoke',fontSize:'13px'}}>{(nTweets===0) ? '' : `${nTweets} Tweets`}</div>
    </div>
)

export default Explore