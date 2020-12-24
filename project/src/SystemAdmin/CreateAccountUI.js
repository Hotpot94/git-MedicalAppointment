import React from 'react'
import {Form, Button, Card, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import NaviBar from "../components/Navbar/NavigationbarSA";
import Sidebar from "../components/Sidebar/Sidebar";

class CreateAccountUI extends React.Component
{
   // display UI
   render()
   {
      return (
         <div style={{backgroundColor: '#98AFC7'}}>
            <NaviBar/>
            <Sidebar/>

            <h2 className= "text-center mb-4">My Profile</h2>
         </div>
      );
   }
}

export default CreateAccountUI

