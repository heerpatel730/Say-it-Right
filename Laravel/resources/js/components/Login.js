import './loginStyle.css';
import './styles.css';
import "./homeStyle.css";
// import ScriptTag from 'react-script-tag';

import React, { useState, useRef } from "react";
import { Component } from 'react/cjs/react.production.min';
import axios from 'axios';

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            fpassword: "",
            redirect: false
        };
    }
    handleAdd= async e =>{
        await this.setState({
            [e.target.name] : e.target.value,
        })
        console.log(this.state.email)
    }
    handleSubmit = () =>{
        let payload = {
            email:this.state.email,
            fpassword:this.state.fpassword
        }
        
        const url = "http://localhost:8000/api/login";
        axios.post(url, payload, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            }).then(function (res){
            console.log("inside then",res.data);
            alert('LOGGED IN SUCCESSFULLY');
            if(res.data.status =='200'){
                if(res.data.user.reg_role === "student"){
                    // console.log('Login successfull');
                    JSON.stringify(res.data);
                    sessionStorage.setItem('userInfo',JSON.stringify(res.data));
                    window.location= "/student";
                }if(res.data.user.reg_role === "professor"){
                    // console.log('Login successfull');
                    JSON.stringify(res.data);
                    sessionStorage.setItem('userInfo',JSON.stringify(res.data));
                    window.location= "/professor";
                }if(res.data.user.reg_role === "advisor"){
                    // console.log('Login successfull');
                    JSON.stringify(res.data);
                    sessionStorage.setItem('userInfo',JSON.stringify(res.data));
                    window.location= "/advisor";
                }if(res.data.user.reg_role === "admin"){
                    // console.log('Login successfull');
                    JSON.stringify(res.data);
                    sessionStorage.setItem('userInfo',JSON.stringify(res.data));
                    window.location= "/admin";
                }
                console.log('Login successfull');
                // if ()    
                // this.setState({redirect: true});
            }else{
                console.log('login failed');
                alert('LOGGED IN SUCCESSFULLY');
            }
        }).catch(err=> console.log("inside catch",err));
    }

    render() {
        return (
         <>
         <section className='loginbody'>
          <div className="loginwrapper">
             <div className="title">
                <span>Login Form</span>
             </div>
             
                <div className="field">
                   <input type="email" id="loginEmail" name="email" onChange={this.handleAdd} placeholder="email ID" required/>
                </div>
                <div className="field">
                   <input type="password" id="loginPassword" name="fpassword" onChange={this.handleAdd} placeholder="password" required/>  
                </div>
        
                <div className="field">
                   <a id='loginButton' class="loginButton" onClick={this.handleSubmit}><span>Login</span></a>
                </div>
                <div className="signup-link">
                   <span> Not a member?</span><a href="/registrationForm"><span>Sign Up now</span></a>
                </div>
             
          </div>
      </section>
     
         </>
        );
    }
}
export default Login;

