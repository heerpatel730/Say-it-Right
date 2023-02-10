import './servicesStyle.css';
import './styles.css';
import "./homeStyle.css";

import createProfile from './create_profile.png';
import voiceImage from './voice-image.jpg';
import management from './managemnet.jpg';
import pronoun from './Pronoun.png';
import interect from './interact.jpg';
import chat from './chat.jpg';

const Services = () => {
    return(
        <>
        <section class="services">
            <div class="wrapper clearfix">
                <div class="grid-item clearfix floatLeft"> 
                    <div class="service-grid">
                        <div class="grid-image">
                            <img src={createProfile} alt="services"/>
                        </div>
                        <div class="grid-title"> 
                            <h3>View your courses</h3>
                        </div>
                        <div class="grid-content">
                            <p>View the courses that you have registered for and keep track of all the course work posted by your professor and enhance your learning. Advisor can edit all the course.
                               
                            </p>
                        </div>
                    </div>   
                </div>
                <div class="grid-item clearfix floatLeft">
                    <div class="service-grid">
                        <div class="grid-image">
                            <img src={voiceImage} alt="services"/>
                        </div>
                        <div class="grid-title"> 
                            <h3>Grades</h3>
                        </div>
                        <div class="grid-content">
                            <p>The most important thing for students is grades and we have a separate column for Grades where you can easily watch how well you are doing in the class and exams. 
                               
                            </p>
                        </div>
                    </div>
                </div>
                <div class="grid-item clearfix floatLeft">
                    <div class="service-grid">
                        <div class="grid-image">
                            <img src={management}alt="services"/>
                        </div>
                        <div class="grid-title"> 
                            <h3>Say It right</h3>
                        </div>
                        <div class="grid-content">
                            <p>Our very new feature where you no longer have to suffer blunders with pronouncing someones name wrong. It is specially made for helping people communicate better.
                               
                            </p>
                        </div>
                    </div>
                </div>
                <div class="grid-item clearfix floatLeft"> 
                    <div class="service-grid">
                        <div class="grid-image">
                            <img src={pronoun} alt="services"/>
                        </div>
                        <div class="grid-title"> 
                            <h3>Pronounce it</h3>
                        </div>
                        <div class="grid-content">
                            <p>You can also add the pronunciation of your name in the chats so whenever someone clicks on your name they can call out your name without mistakes.
                               
                            </p>
                        </div>
                    </div>   
                </div>
                <div class="grid-item clearfix floatLeft"> 
                    <div class="service-grid">
                        <div class="grid-image">
                            <img src={interect} alt="services"/>
                        </div>
                        <div class="grid-title"> 
                            <h3> Interact with your mates</h3>
                        </div>
                        <div class="grid-content">
                            <p> With us you can interact with your fellow classmates without any hesitation.And get along with other with better pronouncance and get along better.

                              
                            </p>
                        </div>
                    </div>   
                </div>
                <div class="grid-item clearfix floatLeft"> 
                    <div class="service-grid">
                        <div class="grid-image">
                            <img src={chat} alt="services"/>
                        </div>
                        <div class="grid-title"> 
                            <h3>Mingle and Chat</h3>
                        </div>
                        <div class="grid-content">
                            <p>Contact your professor, ask doubts, solve your fellow classmates doubts and mingle with your class! 
                                You can chat with your proffesor.
                             
                            </p>
                        </div>
                    </div>   
                </div>
            </div>
        </section>
        </>
    );
}
export default Services;