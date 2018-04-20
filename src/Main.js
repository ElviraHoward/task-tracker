import React from 'react';
import App from './App';
import Picture from './Picture';

import { HashRouter, Link } from 'react-router-dom'

import { Switch, Route } from 'react-router-dom'
const Main = () => (
    <HashRouter>
        <Switch>
            <div>
                <header>
                    <nav>
                        <ul>
                            <li><Link to='/table'>Table</Link></li>
                            <li><Link to='/picture'>Picture</Link></li>
                        </ul>
                    </nav>
                </header>
            <Route exact path='/table' component={App}/>
            <Route path='/picture' component={Picture}/>
            </div>
        </Switch>
    </HashRouter>
)

export default Main;