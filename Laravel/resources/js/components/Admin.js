import './styles.css';
import './adminStyle.css';
import "./homeStyle.css";
import { Card, Col, Row, Table, Button, Modal, Input, Radio, Checkbox } from 'antd';
import React, { Component,useEffect, useRef  } from 'react';
import axios from 'axios';
// import Chartjs from 'chart.js';

class Myprofileadmin extends Component{
    constructor(props) {
        super(props);
        this.state = {
            courses:[],
            registration:[],
            deleted: '',
            cdeleted: '',
            editModel: false,
            editCourseModel:false,
            CourseModel:false,
            // isActive : true,
            // editCourseActive : true,
            // addCourseActive : false,
            count: []
        };
    }
    componentDidMount() {
        this.getData();
        this.getDataCourse();
    }

    getData() {
        let payload = {
            page:0,
            limit:5
        }
        const url = "http://localhost:8000/api/user";
        axios.post(url, payload, {headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        }).then((res) => {
            if (res) {
                console.log('res',res.data.users);
                const registration = res.data.users;
                this.setState({registration});
            } else {
                this.setState({
                    registration: [],
                });
            }
        }).catch(function (err) {
            if (err) {
                // this.setState({
                //     registration: [],
                // });
            } else {
                this.setState({ loader: false });
            }
            // this.setState({
            //     registration: [],
            // });
        });
    }

    getCount() {
        let payload = {
            page:0,
            limit:5
        }
        const url = "http://localhost:8000/api/count";
        axios.post(url, payload, {headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        }).then((res) => {
            if (res) {
                console.log('res',res.data.users);
                const count = res.data.users;
                this.setState({count});
            } else {
                this.setState({
                    count: [],
                });
            }
        }).catch(function (err) {
            if (err) {
                // this.setState({
                //     registration: [],
                // });
            } else {
                this.setState({ loader: false });
            }
            // this.setState({
            //     registration: [],
            // });
        });
    }





    getDataCourse() {
        let payload = {
            page:0,
            limit:5
        }
        const url = "http://localhost:8000/api/display";
        axios.post(url, payload, {headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        }).then((res) => {
            if (res) {
                console.log('res', res);
                const courses = res.data.users;
                this.setState({courses});
            } else {
                this.setState({
                    courses: [],
                });
            }
        }).catch(function (err) {
            if (err) {
                // this.setState({
                //     courses: [],
                // });
            } else {
                this.setState({ loader: false });
            }
            // this.setState({
            //     courses: [],
            // });
        });
    }


    



    deleteStudent = () => {
        let userID = this.state.deleted;
        console.log("userID,",userID);
        let payload = {
            id: userID
        }
        console.log("payload", payload);
        const url = "http://localhost:8000/api/delete";
        axios.post(url, payload, {headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        }).then((res) => {
            this.getData();
        }).catch(function (err) {
            if (err) {
                this.setState({
                    registration: [],
                });
            } else {
                this.setState({ loader: false });
            }
            this.setState({
                registration: [],
            });
        });

    }

    deleteCourse = () => {
        let courseID = this.state.cdeleted;
        console.log("courseID,",courseID);
        let payload = {
            id: courseID
        }
        console.log("payload", payload);
        const url = "http://localhost:8000/api/cdelete";
        axios.post(url, payload, {headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        }).then((res) => {
            this.getDataCourse();
        }).catch(function (err) {
            if (err) {
                this.setState({
                    courses: [],
                });
            } else {
                this.setState({ loader: false });
            }
            this.setState({
                courses: [],
            });
        });

    }

    editUser = (First_Name, Last_Name, email, gender,reg_role, phoneno) => {
        console.log('ha bhai')
        // let courses= this.state.courses;
        let registration= this.state.registration;

        let payload = {
            // courses:courses,
            registration: registration,
            First_Name: First_Name,
            Last_Name: Last_Name,
            email: email,
            gender: gender,
            reg_role: reg_role,
            phoneno: phoneno
        }
        console.log(payload);
        const url = "http://localhost:8000/api/update";
        axios.post(url, payload, {headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        }).then((res) => {
            console.log('updated');
            this.state.editModel=false;
            this.getData();
        }).catch(function (err) {
            if (err) {
                this.setState({
                    registration: [],
                });
            } else {
                this.setState({ loader: false });
            }
            this.setState({
                registration: [],
            });
        });
    }


    editCourse = (Course_Name, Course_Type, id, Time,Professor) => {
        console.log('edited')
        let course= this.state.course;
        // let registration= this.state.registration;

        let payload = {
            //course:course,
            // registration: registration,
            Course_Name: Course_Name,
            Course_Type: Course_Type,
            id: id,
            Time: Time,
            Professor: Professor,
            
        }
        console.log(payload);
        const url = "http://localhost:8000/api/updatecourse";
        axios.post(url, payload, {headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
           }
        }).then((res) => {
            console.log('updated');
         this.state.editCourseModel=false;
            this.getDataCourse();
        }).catch(function (err) {
            if (err) {
                this.setState({
                    courses: [],
                });
            } else {
                this.setState({ loader: false });
            }
            this.setState({
                courses: [],
            });
        });
    }




    DisplayCourse(Course_Name, Course_Type, id, Time,Professor){
       
        console.log('hey');

        let payload = {
            course:course,
            // registration: registration,
            Course_Name: Course_Name,
            Course_Type: Course_Type,
            id: id,
            Time: Time,
            Professor: Professor,
            
        }
        console.log(payload);
        const url = "http://localhost:8000/api/store";
        axios.post(url, payload, {headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
           }
        }).then((res) => {
            console.log('added');
         this.state.CourseModel=false;
            this.getDataCourse();
        }).catch(function (err) {
            if (err) {
                this.setState({
                    courses: [],
                });
            } else {
                this.setState({ loader: false });
            }
            this.setState({
                courses: [],
            });
        });
    }


    // handleShow = ()=>{
    //     this.setState({
    //         isActive: true
    //     })
    // }
  
    // handleHide = () =>{
    //     this.setState({
    //         isActive: false
    //     })
    // }

    // editCourseShow = ()=>{
    //     this.setState({
    //         editCourseActive: true
    //     })
    // }
  
    // editCourseHide = () =>{
    //     this.setState({
    //         editCourseActive: false
    //     })
    // }

    // addCourseShow = ()=>{
    //     this.setState({
    //         addCourseActive: true
    //     })
    // }
  
    // addCourseHide = () =>{
    //     this.setState({
    //         addCourseActive: false
    //     })
    // }

    

    handleUserInput = (e) => {  
        console.log(e.target.value)
        this.setState({[e.target.name]:e.target.value})
        console.log(this.state);
    }



    renderDataCourses = () => {
        return this.state.courses.map(course => {
            return (
                <tr key={course.id}>
                    <td>{course.id}</td>
                    <td>{course.Course_Name}</td>
                    <td>{course.Course_Type}</td>
                    <td>{course.Time}</td>
                    <td>{course.Professor}</td>
                    <th><i className="fa fa-edit editIcon" onClick={ () => this.setState({ id:course.id, Course_Name:course.Course_Name, Course_Type:course.Course_Type, Time:course.Time, Professor:course.Professor})}></i>
                    <i className="fa fa-trash deleteIcon" onClick={() => this.setState({cdeleted:course.id},()=>this.deleteCourse())}></i>
                    </th>
                </tr>
            )
        })
    }

    renderData = () => {
        
        return this.state.registration.map(registration => {
            return (   
                <tr key={registration.email}>
                    <td>{registration.First_Name}</td>
                    <td>{registration.Last_Name}</td> 
                    <td>{registration.email}</td> 
                    <td>{registration.gender}</td> 
                    <td>{registration.reg_role}</td>
                    <td>{registration.phoneno}</td>
                    <td><a href={registration.url} target="_blank">Sound</a></td>
                    <th><i className="fa fa-edit editIcon" onClick={ () => this.setState({ id:registration.id, First_Name:registration.First_Name ,Last_Name:registration.Last_Name ,email:registration.email, gender: registration.gender, reg_role: registration.reg_role, phoneno: registration.phoneno})}></i>
                    <i className="fa fa-trash deleteIcon" onClick={() => this.setState({deleted:registration.id},()=>this.deleteStudent())}></i>
                    {/* <i className="fa fa-plus plusIcon" onClick={this.handleShow}></i> */}
                    </th>
                </tr> 
            )
        })
    }
    rendercont= ()=> {
        return this.state.count.map(count => { 
            return(
                <section className="wrapper">
                    <div className="info clearfix">
                        <div className="infoBox">
                            <div className="infoBoxContent">
                                <p>300 students has enrolled to the class</p>
                            </div>
                        </div>
                    </div>
                </section>

        )
        })
    }



    
    render(){
        
        return(
            <>
            <section className="wrapper">
                <div className="info clearfix">
                    <div className="infoBox">
                        <div className="infoBoxContent">
                            <p> 11 Students enrolled {this.rendercont}</p>
                        </div>
                        
                    </div>
                    <div className="infoBox">
                        <div className="infoBoxContent">
                            <p>5 Professor Registered</p>
                        </div>
                        
                    </div>
                    <div className="infoBox">
                        <div className="infoBoxContent">
                            <p>2 Advisor are there</p>
                        </div>
                        
                    </div>
                    <div className="infoBox">
                        <div className="infoBoxContent">
                            <p>1 Admin can access this page</p>
                        </div>
                        
                    </div>
                </div>
                
    
                <div className="professorTable clearfix">
                    <div className="studentTable clearfix ">
                        <div className="StudentTableTitle">
                            <h3>Manage User</h3>
                        </div>
                        <div>
                            <table>
                                <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Gender</th>
                                    <th>User Role</th>
                                    <th>Phone No</th>
                                    <th>Recording</th>
                                    <th>Action</th>
                                </tr>  
                                </thead>
                                <tbody>
                                {this.renderData()}
                            
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
         
            <div className="form editUserForm">
                <div className="input_field">
                    <label>First Name</label>
                    <input type="text" className="input" name="First_Name" value={this.state.First_Name} onChange={(e)=>this.handleUserInput(e)}  required />
                </div>
                <div className="input_field">
                    <label>Last Name</label>
                    <input type="text" className="input" name="Last_Name"  value={this.state.Last_Name} onChange={(e)=>this.handleUserInput(e)}  required />
                </div>
                <div className="input_field">
                    <label>Email Address</label>
                    <input type="email" className="input" name="email"  value={this.state.email} onChange={(e)=>this.handleUserInput(e)}  required />
                </div>
			
                <div className="input_field">
                    <label>Gender</label>
                    <div className="custom_select">
                        <select name="gender"  value={this.state.gender} onChange={(e)=>this.handleUserInput(e)} >
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
                        <select name="reg_role"  value={this.state.reg_role} onChange={(e)=>this.handleUserInput(e)}>
                            <option value="">Select</option>
                            <option value="student">Student</option>
                            <option value="professor">Professor</option>
                            <option value="advisor">Advisor</option>
                        </select>
                    </div>
                </div>
                <div className="input_field">
                    <label>Phone Number</label>
                    <input type="number" size="10" className="input" name="phoneno"  value={this.state.phoneno} onChange={(e)=>this.handleUserInput(e)}   required />
                </div>
			
                <div className="input_field">
                    <button type="button" className="btn" onClick={this.handleHide, () => this.editUser(this.state.First_Name,this.state.Last_Name,this.state.email,this.state.gender,this.state.reg_role, this.state.phoneno)}>SUBMIT</button>
                    
                </div>
                <div className="input_field">
                    <button type="button" className="btn" onClick={this.handleHide}>CANCEL</button>
                    
                </div>
         
		    </div>

            

            {/* {this.state.isActive ?
            <div className="addCourseForm">
                <div className="cinput_field">
                    <label>Course Name</label>
                    <input type="text" className="input" name="Course_Name" value={this.state.Course_Name} onChange={(e)=>this.handleUserInput(e)}  required />
                </div>
                <div className="cinput_field">
                    <label>Course Type</label>
                    <input type="text" className="input" name="Course_Status" value={this.state.Course_Status} onChange={(e)=>this.handleUserInput(e)}  required />
                </div>

                <div className="cinput_field">
                    <label>Schedule</label>
                    <input type="time" className="input" name="Schedule" value={this.state.Schedule} onChange={(e)=>this.handleUserInput(e)}  required />
                </div>
                <div className="cinput_field">
                    <label>Professor</label>
                    <input type="text" className="input" name="Professor" value={this.state.Professor} onChange={(e)=>this.handleUserInput(e)}  required />
                </div>
                <div className="cinput_field">
                    <button type="button" className="btn" onClick={this.DisplayCourse(this.state.Course_Name, this.state.Course_Status, this.state.Schedule, this.state.Professor)}>SUBMIT</button>
                    
                </div>
                <div className="cinput_field">
                    <button  type="button" className="btn" onClick={this.addCourseHide}>CANCEL</button>
                </div>
            </div>: null } */}
               

                <div className="professorTable clearfix">
                    <div className="manageHomework clearfix">
                        <div className="manageHomeworkTitle">
                        <button type="button" className="btn" onClick={this.addCourseShow}>ADD COURSE</button>
                            <h3>Manage Courses</h3>
                        </div>
                        <div>
                            <table>
                                <thead>
                                <tr>
                                    <th>Cousre ID</th>
                                    <th>Cousre Name</th>
                                    <th>Course Status</th>
                                    <th>Schedule</th>
                                    <th>Professor</th>
                                    <th>Action</th>
                                </tr>  
                                </thead>
                                <tbody>
                                {this.renderDataCourses()}
                                
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            {/* {this.state.isActive ? */}
            <div className="cform">
                <div className="cinput_field">
                    <label>Course Name</label>
                    <input type="text" className="input" name="Course_Name" value={this.state.Course_Name} onChange={(e)=>this.handleUserInput(e)}  required />
                </div>
                <div className="cinput_field">
                    <label>Course Type</label>
                    <input type="text" className="input" name="Course_Status"  value={this.state.Course_Type} onChange={(e)=>this.handleUserInput(e)}  required />
                </div>
                <div className="cinput_field">
                    <label>ID</label>
                    <input type="text" className="input" name="id"  value={this.state.id} onChange={(e)=>this.handleUserInput(e)}  required />
                </div>


                {/* <div className="cinput_field">
                    <label>Schedule</label>
                    <input type="time" className="input" name="Schedule"  value={this.state.Time} onChange={(e)=>this.handleUserInput(e)}  required />
                </div> */}
                <div className="cinput_field">
                    <label>Professor</label>
                    <input type="text" className="input" name="Professor"  value={this.state.Professor} onChange={(e)=>this.handleUserInput(e)}  required />
                </div>
                <div className="cinput_field">
                    <button type="button" className="btn" onClick={() => this.editCourse(this.state.Course_Name,this.state.Course_Type,this.state.id,this.state.Time,this.state.Professor)}>SUBMIT</button>
                    
                </div>
                <div className="cinput_field">
                    <button  type="button" className="btn" onClick={this.handleHide}>CANCEL</button>
                </div>
            </div>
            {/* : null } */}
            </section>
            {/* <div>
                    <Modal title="Delete user Model" onOk={() => this.editUser()} onCancel={() => this.editUser()}>
                    <p className="model-text">Are you sure you want to Approve this User Suggestion ?</p>
                    <Input 
                        className=" form-contorl addmodalform"
                        value={this.state.registration}
                        name="First_Name"
                        onChange={(e)=>this.handleUserInput(e)}
                        placeholder="First Name">
                    </Input>
                    <Input 
                        className=" form-contorl addmodalform"
                        value={this.state.registration}
                        name="Last_Name"
                        onChange={(e)=>this.handleUserInput(e)}
                        placeholder="Last Name">
                    </Input>
                    <Input 
                        className=" form-contorl addmodalform"
                        value={this.state.registration}
                        name="email"
                        onChange={(e)=>this.handleUserInput(e)}
                        placeholder="email">
                    </Input>
                    <Input 
                        className=" form-contorl addmodalform"
                        value={this.state.registration}
                        name="gender"
                        onChange={(e)=>this.handleUserInput(e)}
                        placeholder="gender">
                    </Input>
                    <Input 
                        className=" form-contorl addmodalform"
                        value={this.state.registration}
                        name="reg_role"
                        onChange={(e)=>this.handleUserInput(e)}
                        placeholder="Role">
                    </Input>
                    <Input 
                        className=" form-contorl addmodalform"
                        value={this.state.registration}
                        name="phoneno"
                        onChange={(e)=>this.handleUserInput(e)}
                        placeholder="Phone no">
                    </Input>
                </Modal>
                </div>
             */}
            </>
        );
    }
    

}

export default Myprofileadmin;


