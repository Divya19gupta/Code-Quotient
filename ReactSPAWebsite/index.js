import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Navbar/Nav';
import Header1 from './Header1/Header1';
import Header2 from './Header2/Header2';
import Header3 from './Header3/Header3';
import Header4 from './Header4/Header4';
import Header5 from './Header5/Header5';

class Cq extends React.Component {
	render() {
		return (
            <div>
                <Nav/>
                <Header1/>
                <Header2/>
                <Header3/>
                <Header4/>
                <Header5/>
            </div>
		)
	}
}

ReactDOM.render(
	<Cq />,
	document.getElementById('root')
);
