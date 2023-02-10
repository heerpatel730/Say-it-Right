import './contactusStyle.css';
import './styles.css';
import "./homeStyle.css";
import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component{

    
        constructor(props) {
            super(props);
            this.state = {
                first_name: "",
                last_name: "",
                email: "",
                comments: "",
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
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email:this.state.email,
                comments: this.state.comments
            }
            console.log(payload);
            const url = "http://localhost/WDM/contactus_email.php";
            axios.post(url, payload, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                }).then(res=>{
                console.log("inside then",res.data);
                
            }).catch(err=> console.log("inside catch",err));
        }
    render(){
        return (
            <>
        <section className="aboutusSection">
    
            <div className="row body">
    
                <div className="centered">
                    <h3>CONTACT US</h3>
                </div>
                
                    <ul className="ull">
    
                        <li>
                            <p className="leftConatct">
                                <label for="first_name">First name</label>
                                <input type="text" name="first_name" onChange={this.handleAddData}/>
                            </p>
                        </li>
                        <li>
                            <p className="leftConatct">
                                <label for="last_name">Last name</label>
                                <input type="text" name="last_name"  onChange={this.handleAddData}/>
                            </p>
                        </li><br></br>
    
                            <li>
                                <p  className="leftConatct">
                                    <label for="email" >Email <span className="req" required>*</span></label>
                                    <input type="email" name="email"  onChange={this.handleAddData}/>
                                </p><br></br>
                            </li>
                            <li>
                                <div className="divider"></div>
                            </li><br></br>
                                <li  className="leftConatct">
                                    <label for="comments"   >Comments</label>
                                    <textarea cols="46" rows="3" name="comments"  onChange={this.handleAddData}></textarea>
                                </li><br></br>
    
                                    <li>
                                       
                                        <button className="btn btn-submit" type="button" onClick={this.handleSubmitData}>SUBMIT</button>
    
                                    </li>
    
                                </ul>
                             
                            </div>
    
    
    
                        </section>
                    </>
                            );
    }
    
}
export default Signup;