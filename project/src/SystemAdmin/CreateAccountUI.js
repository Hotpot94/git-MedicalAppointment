import React from 'react'
import {Form, Button, Card, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import NaviBar from "../components/Navbar/NavigationbarSA";
import Sidebar from "../components/Sidebar/Sidebar";
import * as s from './App.styles';

class CreateAccountUI extends React.Component
{
   // display UI
   render()
   {
      return (
         <div style={{backgroundColor: '#98AFC7'}}>
            <NaviBar/>
            <s.AppS>
               <Sidebar/>
               <h2>My Profile</h2>
               <h2> test </h2>
            </s.AppS>
         </div>
      );
   }
}

export default CreateAccountUI

