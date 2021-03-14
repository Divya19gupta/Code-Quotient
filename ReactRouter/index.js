import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Switch,
    Link
}
from "react-router-dom";
import Home from "./pages/Home/Home.js";
import About from "./pages/About/About.js";

class Cq extends React.Component {
	render() {
		return (
            <>
            <div>
                <Link to="home">Home</Link>
                <Link to="about">About</Link>
            </div>
            <Switch>
			<Route path="/home" component={Home}/>
            <Route path="/about" component={About}/>
            </Switch>
            </>
		)
	}
}

ReactDOM.render(
    <BrowserRouter>
	<Cq />
    </BrowserRouter>,
	document.getElementById('root')
);
