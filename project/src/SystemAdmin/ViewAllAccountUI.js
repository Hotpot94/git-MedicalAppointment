import React from 'react'
import {Form, Button, Card, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import NaviBar from "../components/Navbar/NavigationbarSA";
import Sidebar from '../components/Sidebar/Sidebar';
import * as s from './App.styles';

class ViewAllAccountUI extends React.Component
{
   // display UI
   render()
   {
      // sidebar items
      const menuItems = [
         {name: 'My Profile', to: '/myProfile', icon: '', subMenuItems: []},
         {name: 'Manage Account', to: '/viewAllAccount', icon: '', subMenuItems: []}
      ];

      return (
         <s.AppS>
            <Sidebar
               menuItems={menuItems}
            />
            <s.MainS>
               <NaviBar/>
               <h2>My Profile</h2>
            </s.MainS>
         </s.AppS>
      );
   }
}

export default ViewAllAccountUI