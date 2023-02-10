import './styles.css';
// import "./css/homeStyle.css";
import SayItRightLogo from './SayItRight-logo.png'
import React, { Component } from 'react';
import axios from 'axios';
class Header extends Component{
  constructor(props){
    super(props);
    this.state={
      loggedin:false
    }
  }
  logout = ()  => {
    sessionStorage.removeItem("userInfo");

  }
  // var sessiondata = sessionStorage.getItem('userInfo');
  componentDidMount(){
    const user = sessionStorage.getItem('userInfo');
    console.log(user);
    if(user){
        this.setState({loggedin:true});
    }else{
        this.setState({loggedin:false});
    }
  }



  render(){
    return(
      <>
      <div className="stickyMenu">
      <ul className="menubar">
        <li className="logo"><a href="/home">
          <img src={SayItRightLogo} alt="SAY IT RIGHT "/></a>
        </li>
        <li><a href="/home">
            <h5> HOME </h5>
          </a></li>
        <li><a href="/aboutus">
            <h5> ABOUT </h5>
          </a></li>
        <li><a href="/services">
            <h5> SERVICES </h5>
          </a></li>
        <li><a href="/ContactUs">
            <h5> CONTACT </h5>
          </a></li>
        <li><a href="https://blogs.hxp5102.uta.cloud/">
            <h5> BLOG </h5>
          </a></li>
        
          <li>
            {this.state.loggedin===false?
                            <a href="/login">
                            <h5> LOGIN/REGISTRATION </h5>
                          </a>
                        :<a onClick={this.logout} href="/" ><li>
            <h5>LOGOUT</h5></li></a>}
                    </li>
        
      </ul>
    </div>

      </>
  );
  }
}

export default Header;