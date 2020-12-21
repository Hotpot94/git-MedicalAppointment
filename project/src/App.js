import './App.css';
import LoginUI from './User/LoginUI';
import RegisterUI  from './Patient/RegisterUI';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ResetPasswordUI from './User/ResetPasswordUI';
import myProfile from "./User/myProfilePage";
import ViewAllAccountUI from "./SystemAdmin/ViewAllAccountUI";
import CreateAccountUI from "./SystemAdmin/CreateAccountUI";

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
          <Route path="/createAccount" component={CreateAccountUI}/>
        </Switch>
      </Router>
        
    </div>
  );
}

export default App;
