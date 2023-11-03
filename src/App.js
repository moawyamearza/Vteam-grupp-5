import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/index';
import About from './components/about';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/about" component={About} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    );
}

export default App;