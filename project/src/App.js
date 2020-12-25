import './App.css';
import LoginUI from './User/LoginUI';
import RegisterUI  from './Patient/RegisterUI';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ResetPasswordUI from './User/ResetPasswordUI';
import myProfileUI from "./User/myProfilePageUI";
import ViewAllAccountUI from "./SystemAdmin/ViewAllAccountUI";
import CreateAccountUI from "./SystemAdmin/CreateAccountUI";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          // User Login Page
          <Route exact path="/" component={LoginUI}/>
          // Patient Create New Account Page
          <Route path="/register" component={RegisterUI}/>
          // User Reset Password PAge
          <Route path="/resetPassword" component={ResetPasswordUI}/>
          // User view / edit profile page
          <Route path="/myProfile" component={myProfileUI}/>
          // Sys admin view all account page
          <Route path="/viewAllAccount" component={ViewAllAccountUI}/>
          // Sys admin create account page
          <Route path="/createAccount" component={CreateAccountUI}/>
        </Switch>
      </Router>
        
    </div>
  );
}

export default App;
