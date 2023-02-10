
import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import About from './AboutUs';
import Admin from './Admin';
import Advisor from './Advisor';
import ClassSchedule from './ClassSchedule';
import ConatctUs from './ContactUs';
import Login from './Login';
import MyCourses from './MyCourses';
import Professor from './Professor';
import Services from './Sevices';
import Student from './Student';
import RegistrationForm from './RegistrationForm';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Header/>

      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/advisor">
            <Advisor />
          </Route>
          <Route path="/aboutus">
            <About />
          </Route>
          <Route path="/ClassSchedule">
            <ClassSchedule/>
          </Route>
          <Route path="/ContactUs">
            <ConatctUs/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/MyCourses">
            <MyCourses/>
          </Route>
          <Route path="/professor">
            <Professor/>
          </Route>
          <Route path="/registrationForm">
            <RegistrationForm/>
          </Route>
          <Route path="/services">
            <Services/>
          </Route>
          <Route path="/student">
            <Student/>  
          </Route>
          <Route path="/services">
            <Services/>
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
