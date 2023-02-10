import './styles.css';
import "./homeStyle.css";

import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'

const Home = () => {
    return(
        <>
       
        <section>
      
      <div>
        <p id="blink">SAY IT RIGHT</p>
      </div>

      <div>
        <div id="slideshow">
          <div className="slide-wrapper">
            <div className="slide">
              <h1 className="slide-number">
                Welcome to Say it Right!
              </h1>
            </div>
            <div className="slide">
              <h1 className="slide-number">
                You will no longer have to worry about your Mis-pronounced names!
              </h1>
            </div>
            <div className="slide">
              <h1 className="slide-number">
                Help your fellow students and faculty members to pronouce your name prefectly.
              </h1>
            </div>
            <div className="slide">
              <h1 className="slide-number">
                Pronounce your name without mistakes with "Say It Right"
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="team">
        <h2>Our Team</h2>
        <div className="row">
          <div className="teamColumn">
            <div className="teamCard">
              <img src={img1} alt="Jane" style={{width:"100%"}}/>
              <div className="teamContainer">
                <h2>Jane Doe</h2>
                <p className="teamTitle">CEO & Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>jane@example.com</p>
                <p><button className="button">Contact</button></p>
              </div>
            </div>
          </div>

          <div className="teamColumn">
            <div className="teamCard">
              <img src={img2} alt="Mike" style={{width:"100%"}}/>
              <div className="teamContainer">
                <h2>Mike Ross</h2>
                <p className="teamTitle">Art Director</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>mike@example.com</p>
                <p><button className="button">Contact</button></p>
              </div>
            </div>
          </div>

          <div className="teamColumn">
            <div className="teamCard">
              <img src={img3} alt="John" style={{width:"100%"}}/>
              <div className="teamContainer">
                <h2>John Doe</h2>
                <p className="teamTitle">Designer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>john@example.com</p>
                <p><button className="button">Contact</button></p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  </>
    );
}
export default Home;