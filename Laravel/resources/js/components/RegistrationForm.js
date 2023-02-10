import './registrationStyle.css';
import './styles.css';
import "./homeStyle.css";

import { Component } from 'react/cjs/react.production.min';
import axios from 'axios';
import React, { useState, useRef } from "react";


class Signup extends Component{
    constructor(props) {
        super(props);
        this.state = {
            First_Name: "",
            Last_Name: "",
            email: "",
            fpassword: "",
            phoneno: "",
            gender: "",
            reg_role: "",
			reg_add:"",
			pincode:"",
            redirect: false
        };
    }
    handleAddData= async e =>{
        await this.setState({
            [e.target.name] : e.target.value,
        })
        console.log(this.state);
    }
    handleSubmitData = () =>{
        console.log('hey');
        let payload = {
            First_Name: this.state.First_Name,
			Last_Name: this.state.Last_Name,
            email:this.state.email,
            fpassword:this.state.fpassword,
            reg_add:this.state.reg_add,
            gender:this.state.gender,
            reg_role:this.state.reg_role,
			phoneno:this.state.phoneno,
			pincode:this.state.pincode,
        }
        console.log(payload);
        const url = "http://localhost:8000/api/regi";
        axios.post(url, payload, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            }).then(res=>{
            console.log("inside then",res.data.status);
			alert('REGISTERED IN SUCCESSFULLY');
            if(res.data.status == 200){
                console.log('registration successfull');
               
                this.setState({redirect: true});
            } 
			
        }).catch(err=> {
			console.log("inside catch",err)
			alert('Fields are empty!');
		});
    }

    render(){
        return (
			<>
			<div className="regbody">
		
	<div className="regwrapper">
		<div className="title">
			Registration Form
		</div>
		
		<div className="form">
			<div className="input_field">
				<label>First Name</label>
				<input type="text" className="input" name="First_Name" onChange={this.handleAddData}  required />
			</div>
			 <div className="input_field">
				<label>Last Name</label>
				<input type="text" className="input" name="Last_Name" onChange={this.handleAddData} required />
			</div>
			<div className="input_field">
				<label>Email Address</label>
				<input type="email" className="input" name="email" onChange={this.handleAddData} required />
			</div>
			<div className="input_field">
				<label>Password</label>
				<input type="Password" className="input" id="registrationPassword" name="fpassword" onChange={this.handleAddData}  required />
				
			</div>
			
			<div className="input_field">
				<label>Gender</label>
				<div className="custom_select">
					<select name="gender" onChange={this.handleAddData}>
						<option value="">Select</option>
						<option value="male">Male</option>
						<option value="female">Female</option>
						<option value="Other">Other</option>
						</select>
				</div>
			</div>
			<div className="input_field">
				<label>Role</label>
				<div className="custom_select">
					<select name="reg_role" onChange={this.handleAddData}>
						<option value="">Select</option>
						<option value="student">Student</option>
						<option value="professor">Professor</option>
						<option value="advisor">Advisor</option>
						</select>
				</div>
			</div>
			<div className="input_field">
				<label>Phone Number</label>
				<input type="number" size="10" className="input" name="phoneno" onChange={this.handleAddData}  required />
			</div>
			<div className="input_field">
				<label>Address</label>
				<textarea className="textarea" onChange={this.handleAddData} name="reg_add" required ></textarea>
			</div>
			<div className="input_field">
				<label>Pin Code</label>
				<input type="number" className="input" onChange={this.handleAddData} name="pincode" required />
			</div>
			<div className="input_field terms">
				
					<input type="checkbox" onChange={this.handleAddData} / >
					
				<p>Agreed to Terms & Conditions</p>
			</div>
			<div className="input_field">
				<input type="submit" value="Register" className="btn" onClick={this.handleSubmitData }/>
			</div>
		</div>
		
		</div>
	
		</div>
				
			</>
		);
	}
}

export default Signup;



