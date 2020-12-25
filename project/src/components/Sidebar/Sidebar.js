import React from 'react';
import * as s from './Sidebar.styles';

const Sidebar = props => {
    const {
        menuItems = []
    } = props;

    // menu items
    const menuItemsJSX = menuItems.map((item, index) => {
        return(
            <s.MenuItem key = {index}>{item}</s.MenuItem>
        )
    })

    return ( 
        <s.SidebarContainer> 
            <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
        </s.SidebarContainer>
    );

}

export default Sidebar