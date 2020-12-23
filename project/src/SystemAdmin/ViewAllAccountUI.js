import React from 'react'
import {Form, Button, Card, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import NaviBar from "../components/Navbar/NavigationbarSA";
//import SideBar from "../components/Sidebar/Sidebar";

class ViewAllAccountUI extends React.Component
{

   // display UI
   render()
   {
      return (
         <div style={{backgroundColor: '#98AFC7'}}> 
            <NaviBar/>
         </div>
     );
   }
}

export default ViewAllAccountUI