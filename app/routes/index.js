import React,{Component} from 'react';
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import Home from '../container/Home'
export default class RouterMap extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path='/' exact component={Home}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}