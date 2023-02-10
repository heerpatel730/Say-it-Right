import './studentStyle.css';
import './styles.css';
import "./homeStyle.css";
import React, { Component } from 'react';
import axios from 'axios';
import ReactS3 from 'react-s3';

const config = {
    bucketName: 'sayitright1112',
    region: 'us-east-2',
    accessKeyId:'AKIAYBJMEIX3YVZR4KOG',
    secretAccessKey:'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',
  }

class Advisor extends Component{
    constructor(props) {
        super(props);
        this.state = {
            courses:[],
            registration:[],
            deleted: '',
            cdeleted: '',
            student:[]
        };
    }


    getStudent() {
        let payload = {
            
        }
        const url = "http://localhost:8000/api/userstudent";
        axios.post(url, payload, {headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        }).then((res) => {
            if (res) {
                console.log('res',res.data.users);
                const student = res.data.users;
                this.setState({student});
            } else {
                this.setState({
                    student: [],
                });
            }
        }).catch(function (err) {
            if (err) {
                this.setState({
                    student: [],
                });
            } else {
                this.setState({ loader: false });
            }
            this.setState({
                student: [],
            });
        });
    }




    upload(e){
        console.log(e.target.files[0]);
        var sessiondata = sessionStorage.getItem('userInfo');
        var jsonsession = JSON.parse(sessiondata);
        var email = jsonsession.user.email;
        ReactS3.uploadFile( e.target.files[0] , config)
        .then((data)=> {
        let payload = {
        email:email,
        url: e.target.files[0].name

        
         }
         console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
         console.log(payload);
            const url = "http://localhost:8000/api/recording";
            axios.post(url, payload, {headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
               }
            }).then((res) => {
                console.log(res);
                console.log('updated');
            //  this.state.editCourseModel=false;
                // this.getDataCourse();
            }).catch(function (err) {
            if (err) {
                    // this.setState({
                    //     courses: [],
                    // });
                } else {
                    // this.setState({ loader: false });
                }
                // this.setState({
                //     courses: [],
                // });
            });
          console.log(data);
  
      })
      .catch( (err)=>{
        alert(err);
      })
    }



    uploadimage(e){
        console.log(e.target.files[0]);
        var sessiondata = sessionStorage.getItem('userInfo');
        var jsonsession = JSON.parse(sessiondata);
        var email = jsonsession.user.email;
        ReactS3.uploadFile( e.target.files[0] , config)
        .then((data)=> {
        let payload = {
        email:email,
        image: e.target.files[0].name

        
         }
         console.log("imageeeeeeeeeee");
         console.log(payload);
            const url = "http://localhost:8000/api/uploadimage";
            axios.post(url, payload, {headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
               }
            }).then((res) => {
                console.log(res);
                console.log('updated');
            //  this.state.editCourseModel=false;
                // this.getDataCourse();
            }).catch(function (err) {
            if (err) {
                    // this.setState({
                    //     courses: [],
                    // });
                } else {
                    // this.setState({ loader: false });
                }
                // this.setState({
                //     courses: [],
                // });
            });
          console.log(data);
  
      })
      .catch( (err)=>{
        alert(err);
      })
    }



    componentDidMount() {
       
        this.getDataCourse();
        this.getStudent();
        
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


getRecording() {
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
                const student = res.data.users;
                this.setState({student});
            } else {
                this.setState({
                    student: [],
                });
            }
        }).catch(function (err) {
            if (err) {
                this.setState({
                    student: [],
                });
            } else {
                this.setState({ loader: false });
            }
            this.setState({
                student: [],
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
        const url = "http://localhost:8000/api/delete";
        axios.post(url, payload, {headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        }).then((res) => {
            this.getDataCourse();
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
        course:course,
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
       },
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

handleUserInput = (e) => {  
    console.log(e.target.value)
    this.setState({[e.target.name]:e.target.value})
    console.log(this.state);
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

renderDataCourses = () => {
    return this.state.courses.map(course => {
        return (
            <tr key={course.id}>
                <td>{course.Course_Name}</td>
                <td>{course.Course_Type}</td>
                <td>{course.Time}</td>
                <td>{course.Professor}</td>
                <td><i className="fa fa-edit editIcon" onClick={() => this.setState({id:course.id,Course_Name:course.Course_Name,Course_Type:course.Course_Type,Time:course.Time,Professor:course.Professor})}></i>
                <i className="fa fa-trash deleteIcon" onClick={() => this.setState({cdeleted:course.id},()=>this.deleteCourse())}></i></td>
            </tr>
        )
    })
}

renderStudent = () => {
        
    return this.state.student.map(registration => {
        return (
            <tr key={registration.id}>
                 <td>{registration.id}</td>
                <td>{registration.First_Name}</td>
                <td>{registration.Last_Name}</td> 
                <td><a href={registration.url} target="_black">sound</a></td>
                <td><a href={registration.image} target="_black">Student Image</a></td>
            </tr> 
        )
    })
}

// renderRecording = () => {
//     return this.state.student.map(student => {
//         return (
//             <tr key={student.id}>
//                 <td>{student.Course_Name}</td>
//                 <td>{student.Course_Type}</td>
//                 <td>{student.Time}</td>
//                 <td>{student.Professor}</td>
//                 <td><i className="fa fa-edit editIcon" onClick={() => this.setState({id:course.id,Course_Name:course.Course_Name,Course_Type:course.Course_Type,Time:course.Time,Professor:course.Professor})}></i>
//                 <i className="fa fa-trash deleteIcon" onClick={() => this.setState({cdeleted:course.id},()=>this.deleteCourse())}></i></td>
//             </tr>
//         )
//     })
// }





render() {
    return(
        <>
        <section className="studentbody">
            



         
            {/* <div className="studentwrapper clearfix">
                <div className="student-item col333 clearfix floatLeft"> 
                    <a href="/classSchedule">
                        <div className="student-grid">
                            <div className="student-title"> 
                                <h3>See Schedule</h3>    
                            </div>
                        </div>  
                    </a> 
                </div>
            </div> */}


            






            <div className="studentwrapper clearfix">
                <div className="student-item col333 clearfix floatLeft"> 
                    <div className="student-grid">
                        <div className="student-title">
                            <div className="studentdropdown">
                            <span className="uploadRecording">UPLOAD RECORDING</span>
                            <input type="file" id="myFile" name="filename" onChange={this.upload}/>
                            <span className="uploadRecording">UPLOAD Image Of yourself</span>
                            <input type="file" id="myFile" name="filename2" onChange={this.uploadimage}/>
                            <button type="submit" name="upoad" >Upload</button>
                              </div> 
                                
                        </div>
                    </div>   
                </div>
            </div>


            <div className="professorTable clearfix">
                <div className="studentRecording clearfix">
                    <div className="studentRecordingTitle">
                        <h3>Student recording</h3>
                    </div>
                    <div>
                        <table>
                            <thead>
                            <tr>
                               
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Recording</th>
                                <th>Image</th>
                            </tr>  
                            </thead>
                            <tbody>
                            {this.renderStudent()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            <div className="professorTable clearfix">
                <div className="manageHomework clearfix">
                    <div className="manageHomeworkTitle">
                        <h3>Manage course submission</h3>
                    </div>
                    <div>
                        <table>
                            <thead>
                            <tr>
                                <th>Course Name</th>
                                <th>Course Type</th>
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
            
            <div className="cform">
                <div className="cinput_field">
                    <label>Course Name</label>
                    <input type="text" className="input" name="Course_Name" value={this.state.Course_Name} onChange={(e)=>this.handleUserInput(e)}  required />
                </div>
                <div className="cinput_field">
                    <label>Course Status</label>
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
            </div>

            <div className="chatroom"><a href = "http://localhost:5000/index.html">Join Chatroom</a></div>


            {/* <div className="chat" id="myForm">
                <form className="studentcontainer">
                  <h1>Chat</h1>
              
                  <label for="msg"><b>Message</b></label>
                  <textarea placeholder="Type message.." name="msg" required></textarea>
              
                </form>
              </div>  */}
        </section>
        </>
    );
}
}
export default Advisor;