import React from 'react'
import {Form, Button, Card, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import NaviBar from "../components/Sidebar/Navigationbar";

class CreateAccountUI extends React.Component
{
   render()
   {
      return (
         <div style={{backgroundColor: '#98AFC7'}}>
            <NaviBar/>
         </div>
      );
   }
}

export default CreateAccountUI

