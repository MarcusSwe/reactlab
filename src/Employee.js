import React, { Component } from 'react';
import './style.css';

class Employee extends Component{   

    render() {

        let {xAvatar, xName, xEmail, xPhone, xSkills} = this.props.EmployeesData;

        return (
                    <div className="EmployeeDiv">
                        <img className="avatar" src={xAvatar} alt="avatar"/>
                        <div>
                            <h2>{xName}</h2>
                            <div><b>Email:</b>{xEmail}</div><br/>                            
                            <div><b>Phone:</b>{xPhone}</div><br/>
                            <div><b>Skills:</b>{xSkills}</div><br/>
                        </div>
                    </div>      
                )
        }         
}

export default Employee;

