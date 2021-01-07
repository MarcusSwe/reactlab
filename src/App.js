import React, { Component } from 'react';
import './style.css';
import Employee from './Employee';




class App extends Component {

  render(){

    return (      
      <div>
        <h3>Employee List</h3>                   
        <EmployeeList/>
      </div>  
    )
  }
}

export default App;

let vtest = [
  {
      xAvatar: "https://i.imgur.com/Q9qFt3m.png",
      xName: "Gisten Osten",
      xEmail: "GostaOsten@omega.com",
      xPhone: "23424234234",
      xSkills: "questionable",
  }
]


class EmployeeList extends Component {

    constructor(props) {
     
    super(props);
    this.state = {
       
       employess: [
          {              
            xAvatar: "https://i.imgur.com/t9HFQvX.png",
            xName: "Gösta Osten",
            xEmail: "GostaOsten@omega.com",
            xPhone: "23424234234",
            xSkills: "questionable",
          },
          {
            xAvatar: "https://i.imgur.com/ebHfuth.png",
            xName: "Gista Osten",
            xEmail: "GostaOsten@omega.com",
            xPhone: "23424234234",
            xSkills: "questionable",
          }, 
          {
            xAvatar: "https://i.imgur.com/TUhCrsY.png",
            xName: "Ly Osten",
            xEmail: "GostaOsten@omega.com",
            xPhone: "23424234234",
            xSkills: "questionable",
          }
        ]
       };

       this.setEmployess = this.setEmployess.bind(this);
    }
     
    setEmployess () {
      this.setState(state => {
        const employess = state.employess.concat(vtest);
        return{
          employess
        }
      })
    }

        render() {     
        const xPrint = this.state.employess.map(xInput => <Employee EmployeesData={xInput}/>)
        
        return (
          <div>
          <button className="button" onClick={this.setEmployess}>Add Employee</button>
          <div>{xPrint}</div>       
          </div>
        )

     }      
}



