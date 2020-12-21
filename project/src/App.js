import './App.css';
import LoginUI from './LoginUI';
import RegisterUI  from './RegisterUI';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ResetPasswordUI from './ResetPasswordUI';
import myProfile from "./myProfilePage";
import ViewAllAccountUI from "./ViewAllAccountUI";
import SACreateAccountUI from "./SACreateAccountUI";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginUI}/>
          <Route path="/register" component={RegisterUI}/>
          <Route path="/resetPassword" component={ResetPasswordUI}/>
          <Route path="/myProfile" component={myProfile}/>
          <Route path="/viewAllAccount" component={ViewAllAccountUI}/>
          <Route path="/SACreateAccount" component={SACreateAccountUI}/>
        </Switch>
      </Router>
        
    </div>
  );
}

export default App;
