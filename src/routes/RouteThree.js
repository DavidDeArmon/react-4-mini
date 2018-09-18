import React from 'react';
import {Route,Switch,NavLink} from'react-router-dom';
import logo from '../logo.svg'
import '../App.css'

export default function(){
    return (
    <div>
    <h1>Route Three</h1>
            <NavLink to='/three/one'>One</NavLink>
            <NavLink to='/three/two'>Two</NavLink>
        <Switch>
            <Route path = '/three/one' render={()=><div><h2>Three and One!</h2><img src={logo}/></div>}/>
            <Route path = '/three/two' render={()=><h2>Three and Two!</h2>}/>
        </Switch>
    </div>
    )
}