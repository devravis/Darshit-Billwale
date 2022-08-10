import React from 'react'
import {  Route, Switch } from 'react-router'
import Home from './home/Home'



const Index = () => {
    return (
       
        <Switch>
            <Route exact path="/" component={Home}/>

        </Switch>
       
    )
}

export default Index
