import React, { useEffect, useState, useRef } from 'react'
import './Home.css'
import { isAuthenticated } from '../../services/apiServices'
import { useHistory } from 'react-router-dom'
import ChargePage from '../ChargePage'
import MainNavbar from '../MainNavbar'
import userProfile from '../../assets/profile-user.svg'
import addPhotoLogo from '../../assets/logos/add_photo_logo.svg'
import emoticonLogo from '../../assets/logos/emoticon_logo.svg'
import inquestLogo from '../../assets/logos/inquest_logo.svg'
import gifLogo from '../../assets/logos/gif_logo.svg'
import { postTweet } from '../../services/apiServices'

const Home = (props) => {

    /*States*/
    const [show, setShow] = useState(false)

    /*History*/
    const history = useHistory()

    /*Effect*/
    useEffect(() => {

        const action = async () => {
            const response = await isAuthenticated()
            if (!response) {
                history.replace('/login')
            } else {
                setShow(true)
            }
        }
        action()


    }, [])
    if (props.location.state && props.location.state.direct) {
        return (
            <HomePage />
        )
    } else {
        return (
            <div>
                {show
                    ? <HomePage />
                    : <ChargePage />}
            </div>
        )
    }

}

const HomePage = () => {

    return (
        <div className='home_container'>
            <MainNavbar itemSelect='Inicio' />
            <div className="home_content_box">
                <div className="home_content_start">
                    <strong>Inicio</strong>
                </div>
                <TweetInput />
                <TweetListBox />
            </div>
            <div className="home_search_extra"></div>
        </div>
    )
}

const TweetInput = () => {
    const [inputClass, setInputClass] = useState('tweet_input')
    const [buttonClass, setButtonClass] = useState('tweet_input_button_button')
    const inputRef = useRef()

    const handleFocus = (event) => {
        setInputClass('tweet_input input_focus')
    }

    const handleBlur = (event) => {
        setInputClass('tweet_input')
    }

    const handleClick = async (event) => {
        const text = inputRef.current.value
        if (text) {
            try {
                const response = await postTweet(text)
                if (response.status === 200) {
                    console.log('Tweet Creado')
                    inputRef.current.value = ''
                }
            } catch (error) {
                console.log(error)
            }
        }

    }

    const handleChange = (event) => {
        if (event.target.value) {
            setButtonClass('tweet_input_button_button active')
        } else {
            setButtonClass('tweet_input_button_button')
        }
    }

    return (
        <div className='tweet_input_container'>
            <div className="tweet_input_profile"><img src={userProfile} /></div>
            <div className="tweet_input_input"><input ref={inputRef} onChange={(event) => { handleChange(event) }} onBlur={(event) => { handleBlur(event) }} onFocus={(event) => { handleFocus(event) }} className={inputClass} placeholder='¿Qué está pasando?' type='text' /></div>
            <div className="tweet_input_extras">
                <TweetExtras src={addPhotoLogo} />
                <TweetExtras src={gifLogo} />
                <TweetExtras src={inquestLogo} />
                <TweetExtras src={emoticonLogo} />
            </div>
            <div className='tweet_input_button' onClick={(event) => { handleClick(event) }}><div className={buttonClass}>Twittear</div></div>
        </div>
    )
}

const TweetExtras = ({ src }) => {

    return (
        <div className='tweet_extra_container'>
            <img className='tweet_extra_icon' src={src} />
        </div>
    )
}
const TweetListBox = () => {

    return (
        <div>

        </div>
    )
}


export default Home;