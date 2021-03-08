import React from 'react';
import ReactDOM from 'react-dom';

class Cq extends React.Component {
	
    state={
            value:"",
            data:[
            {
                id:1,
                name:"Ramya",
                location:"Haryana"

            },
            {
                id:2,
                name:"Ada",
                location:"Assam"
            },
            {
                id:3,
                name:"Rita",
                location:"Gujrat"
            }
        ]
        }
        
        inputChange =(event) =>
        {
            // this.setState({
            //     value:
            // })
            let d=this.state.data.filter(function(el)
            {
                                      
                let searchValue = el.name;
                let eq = event.target.value;
                // console.log(searchValue+" "+eq+" ");
                return searchValue.indexOf(eq) !== -1;
            })
            this.setState({
                data:d
            })
        }
        
    render() {

		return (
            
			<div className="container row">
              <div className="p-4 col-xs-6">
              <input className="form-control" onChange ={this.inputChange} type="text" placeholder="Search user"/> 
              </div>
              <br/>
              
              <table className="table">
                 <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                    </tr>
                 </thead>
                 <tbody>
                    {
                        this.state.data.map((ele)=>{
                        
                        return(<tr>
                            <td>{ele.name}</td>
                            <td>{ele.location}</td>
                        </tr>);
                        })

                    }
                </tbody>
              </table>
            </div>
		)
	}
}

ReactDOM.render(
	<Cq />,
	document.getElementById('root')
);
