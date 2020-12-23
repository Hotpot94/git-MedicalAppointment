import React from 'react'
import {Form, Button, Card, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import NaviBar from "../components/Sidebar/NavigationbarSA";

class CreateAccountUI extends React.Component
{
   // display UI
   render()
   {
      return (
         <div style={{backgroundColor: '#98AFC7'}}>
            <NaviBar/>
            <h2 className= "text-center mb-4">My Profile</h2>
         </div>
      );
   }
}

export default CreateAccountUI

