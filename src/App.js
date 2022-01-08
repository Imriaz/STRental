import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Work from './components/Work/Work';
import Main from './components/Main/Main';
import ContactUs from './components/ContactUs/ContactUs';
import WhySavvy from './components/WhySavvy/WhySavvy';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/contactus">
            <ContactUs />
          </Route>
          <Route path="/WhySavvy">
            <WhySavvy />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
