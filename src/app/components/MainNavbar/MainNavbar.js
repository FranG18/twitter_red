import React, { useEffect, useState } from 'react'
import './MainNavbar.css'
import { getUserData } from '../../services/apiServices'
import { useHistory } from 'react-router-dom'
import twiiterLogo from '../../assets/Twitter_Logo_WhiteOnImage.svg'
import profileFoto from '../../assets/profile-user.svg'
import downArrow from '../../assets/down_arrow.svg'
import { home, explore, notifications, messages, save, list, moreOptions, profile } from './exportAssets'
import { connect } from 'react-redux'
import { setUser } from '../../redux/actions/userActions'

const itemData = [
    {
        span: 'Inicio',
        logo: home
    },
    {
        span: 'Explorar',
        logo: explore
    },
    {
        span: 'Notificaciones',
        logo: notifications
    },
    {
        span: 'Mensajes',
        logo: messages
    },
    {
        span: 'Guardados',
        logo: save
    },
    {
        span: 'Listas',
        logo: list
    },
    {
        span: 'Perfil',
        logo: profile
    },
    {
        span: 'Mas Opciones',
        logo: moreOptions
    },
]

const MainNavbar = ({ itemSelect, setUser, user }) => {

    const [userData, setUserData] = useState({})

    useEffect(() => {
        const action = async () => {
            const { data } = await getUserData()
            setUserData({
                name: data.user.name,
                userName: data.user.userName
            })
            setUser({
                data: true,
                name: data.user.name,
                userName: data.user.userName
            })
        }
        if (!user.data) {
            action()
            console.log('primero')
        } else {
            setUserData({
                name: user.name,
                userName: user.userName
            })
            console.log('segundo')
        }

    }, [])

    return (
        <div className='mainnav_container'>
            <div className='mainnav_navegation_box'>
                <div className='mainnav_logo'> <img src={twiiterLogo} /></div>
                {itemData.map(({ span, logo }) => {
                    if (itemSelect === span) {
                        return <NavItem select key={span} span={span} logo={logo} />
                    }
                    return (
                        <NavItem key={span} span={span} logo={logo} />
                    )
                })}
                <div className="mainnav_button">Twittear</div>
            </div>
            <div className="mainnav_user_box">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img className='mainnav_user_box_profile' src={profileFoto} />
                    <div className="mainnav_user_box_texts">
                        <span>{userData.name}</span>
                        <span style={{ color: 'gray' }}>{userData.userName}</span>
                    </div>
                </div>
                <img className='mainnav_user_box_arrow' src={downArrow} />
            </div>

        </div>
    )
}

const NavItem = ({ span, logo, select }) => {
    const history = useHistory()

    const handleClick = (event) => {
        switch (span) {
            case 'Inicio':
                history.push('/home', { direct: true })
                break
            case 'Explorar':
                history.push('/explore', { direct: true })
                break
            default:
                break
        }
    }

    return (
        <div onClick={(event) => { handleClick(event) }} className="mainnav_item">
            <img src={logo} />
            <span style={{ color: (select) ? '#F6BAC4' : 'white' }}><strong>{span}</strong></span>
        </div>
    )
}

const mapStateToProps = (state) => ({ user: state.user })

const mapDispatchToProps = (dispatch) => {
    return {
        setUser: (user) => { dispatch(setUser(user)) }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainNavbar)