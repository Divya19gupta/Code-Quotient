import React from 'react';
import ReactDOM from 'react-dom';

class Header2 extends React.Component {
	render() {
		return (
			<div class="text-light p-5 text-center" style={{backgroundColor: "#679b9b"}}>
        <div>
           <div class="container">
        <br/><br/><br/>
        <h1 class="display-5"><b>Documentation</b></h1>
        <br/>
        <h3 class="display-6">All geniune Documentation at one place.</h3>
        <br/>
        <p>Being Geeky helps the viewer to find all the required documentation at one place so that they need not waste time to find offical documentation. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.</p>
        <br/>
        <button type="button" class="btn btn-primary">Start Your Trial Now</button><br/><br/>
        <p style={{fontSize:"16px"}}>You can download Being Geeky from app store or playstore.</p>
        <br/>
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlGHKmwXPfeChVWOwEqZ1bVsydbF-2NslqcQ&usqp=CAU" class="rounded" alt="Cinque Terre"/>
        </div> 
        </div>
    </div>
		)
	}
}

ReactDOM.render(
	<Header2 />,
	document.getElementById('root')
);
export default Header2;
