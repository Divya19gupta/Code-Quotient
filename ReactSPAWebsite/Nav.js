import React from 'react';
import ReactDOM from 'react-dom';

class Nav extends React.Component {
	render() {
		return (
			<nav class="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
                <a class="navbar-brand" href="#">Being Geeky</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Tutorials</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Video</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Coupons</a>
                    </li>    
                    </ul>
                </div>  
            </nav>
		)
	}
}

ReactDOM.render(
	<Nav />,
	document.getElementById('root')
);
export default Nav;
