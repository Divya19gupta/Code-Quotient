import React from 'react';
import ReactDOM from 'react-dom';

class Header5 extends React.Component {
	render() {
		return (
			<div class="bg-light p-5" style={{textAlign:"center"}}>
                <div class="container">
                <br/><br/><br/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSrSgRzvtUm1MHgoMbEFDnrs62RqwG95w6rGA&usqp=CAU" class="rounded" alt="Cinque Terre"/>
                <br/><br/><br/>
                <h1 class="display-5">Coupons</h1>
                <br/>
                <p>You can apply different coupons to get extra discount on selected courses.Certain internet providers exploit the fact that fill text cannot be recognized by automatic search engines - meaningful information cannot be distinguished from meaningless: Target-generated dummy text mixed with a certain combination of search terms can lead to an increased frequency of visits by search machine users. As a consequence, advertising revenues, which rely on website 'hits', are increased.

        Already have Coupon?</p><hr/>
        <input type="checkbox"/> Redeem
                </div>
        
            </div>
		)
	}
}

ReactDOM.render(
	<Header5 />,
	document.getElementById('root')
);
export default Header5;
