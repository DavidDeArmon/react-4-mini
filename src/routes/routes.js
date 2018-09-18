import React from 'react'
import {Route,Switch} from 'react-router-dom';
import RouteOne from './RouteOne'
import RouteTwo from './RouteTwo';
import RouteThree from './RouteThree';

export default (
    <Switch>
        <Route exact path = '/' component = {RouteOne}/>
        <Route path = '/two' component = {RouteTwo}/>
        <Route path = '/three' component = {RouteThree}/>
        <Route path = '*' render={()=><div>404 Error! Turn Back!</div>}/>
    </Switch>
)