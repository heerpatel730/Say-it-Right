import './aboutStyle.css';
import './styles.css';
import "./homeStyle.css";

import aboutus1 from './aboutus1.jpg';
import aboutus2 from './aboutus2.jpg';
import aboutus3 from './aboutus3.jpg';

const About = () => {
    return(
        <>
        <section className="aboutContent clearfix">
            <div className="wrapper">
                <div className="aboutHeading">
                    <h3>ABOUT US</h3>
                </div>
                <div className="aboutusItem clearfix">
                    <div className="aboutLeft">
                        <img src={aboutus1}/>
                    </div>
                    <div className="aboutRight">
                        <p>We are people who were scared to talk to our classmates as in a diverse culture with diversity in names it is very difficult to pronounce names. Our vision is that nobody should be scared to start a conversation just because of a name. Also, pronouncing people's names correct makes a good impression and with SAY IT RIGHT, you can do that.</p>
                    </div>
                </div>
                <div className="aboutusItem clearfix">
                    <div className="aboutLeft">
                        <img src={aboutus2}/>
                    </div>
                    <div className="aboutRight">
                        <p>View the courses that you have registered for and keep track of all the course work posted by your professor and enhance your learning.Our very new feature where you no longer have to suffer blunders with pronouncing someones name wrong. It is specially made for helping people communicate better.</p>
                    </div>
                </div>
                <div className="aboutusItem clearfix">
                    <div className="aboutLeft">
                        <img src={aboutus3}/>
                    </div>
                    <div className="aboutRight">
                        <p>The most important thing for students is grades and we have a separate column for Grades where you can easily watch how well you are doing in the class.With us you can interact with your fellow classmates without any hesitation.Contact your professor, ask doubts, solve your fellow classmates doubts and mingle with your class! 
                            You can chat with your proffesor and your classmates through this.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
export default About;