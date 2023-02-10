import './styles.css';
import "./homeStyle.css";

import insta from './insta.png';
import facebook from './facebook.png';
import email from "./email.png";
import phone from "./phone_2.png";

const Footer = () => {
    return(
        <footer class="footers clearfix">
      <p> Company @say it Right. All rights are reserved.</p>
      <div class="footericons">
        <a href=""><img src={phone} class="imgsize"/></a>
        <a href="https://www.instagram.com/"><img src={insta} class="imgsize"/></a>
        <a href="https://www.facebook.com/"><img src={facebook} class="imgsize"/></a>
        <a href="https://mail.google.com"><img src={email} class="imgsize"/></a>
      </div>
    </footer>
    );
}
export default Footer;