import React from 'react';
import ReactDOM from 'react-dom';

class Header3 extends React.Component {
	render() {
		return (
			<div class="bg-light p-5" style={{textAlign: "center"}}>
                <div class="container">
                <br/><br/><br/>
                <h1 class="display-5">The video lecture you shouldn't miss</h1>
                <br/>
                <p>With one of the best content available online.And one of the best instructors it makes Being Geeky one of the best available learing platform available.he spread of computers and layout programmes thus made dummy text better known. While in earlier times several lines of the Lorem Ipsum text were repeated in the creation of dummy texts, today the full text of Cicero's 'De finibus' serves as the basis for many dummy text or Lorem Ipsum generators. Based on 'De finibus', these generators automatically create longer sections of the Lorem Ipsum text or various other filler texts.</p>
                </div>
                <button type="button" class="btn btn-primary">Read More</button><br/><br/>
                <img src="https://www.w3schools.com/w3css/img_lights.jpg" height="200px" width="200px" class="rounded" alt="Cinque Terre"/>
            </div>
		)
	}
}

ReactDOM.render(
	<Header3 />,
	document.getElementById('root')
);
export default Header3;
