import React, { useEffect, useState } from 'react'
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter, Route, useHistory } from 'react-router-dom'
import { isAuthenticated } from './services/apiServices'
import Explore from './components/Explore'
import Login from './components/Login'
import Home from './components/Home'
import regeneratorRuntime from "regenerator-runtime";


const App = () => {
    return (

        <Provider store={store}>
            <BrowserRouter>
                <Route
                    path='/'
                    exact
                    component={Render} />
                <Route
                    path='/explore'
                    component={Explore} />
                <Route
                    path='/home'
                    component={Home} />
                <Route
                    path='/login'
                    component={Login} />

            </BrowserRouter>

        </Provider>
    )
}

const Render = () => {
    const history = useHistory();
    useEffect(() => {
        const action = async () => {
            const isAuth = await isAuthenticated()
            isAuth ? history.replace('/home') : history.replace('/explore')
        }
        action()
    }, [])

    return (
        <div style={{ background: 'white' }}>

        </div>
    )
}


export default App;