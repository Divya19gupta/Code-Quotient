import React from 'react';
import ReactDOM from 'react-dom';

class Header1 extends React.Component {
	render() {
		return (
			<div class="bg-light p-5" style={{textAlign:"center"}}>
                <div class="container">
                <br/><br/><br/>
                <h1 class="display-4 "><b>Being Geeky</b></h1>
                <br/>
                <h3 class="display-6">Your own video and theortical study place.</h3>
                </div>
            </div>
		)
	}
}

ReactDOM.render(
	<Header1 />,
	document.getElementById('root')
);
export default Header1;
