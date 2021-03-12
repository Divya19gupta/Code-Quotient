import React from 'react';
import ReactDOM from 'react-dom';

class Header4 extends React.Component {
	render() {
		return (
			<div class="text-light p-5" style={{backgroundColor: "#679b9b",textAlign:"center"}}>
                <div>
                <div class="container">
                <br/><br/><br/>
                <h3 class="display-6">Lectures available anywhere anytime.</h3>
                <br/>
                <p>You can watch the lecture anytime from anywhere and ask doubts.The phrasal sequence of the Lorem Ipsum text is now so widespread and commonplace that many DTP programmes can generate dummy text using the starting sequence "Lorem ipsum". Fortunately, the phrase 'Lorem Ipsum' is now recognized by electronic pre-press systems and, when found, an alarm can be raised. This avoids a publication going to print with overlooked dummy text.</p>
                <br/>
                </div> 
                </div>
            </div>
		)
	}
}

ReactDOM.render(
	<Header4 />,
	document.getElementById('root')
);
export default Header4;
