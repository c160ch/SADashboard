import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { connect } from "react-redux";

import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  InputGroupAddon,
  InputGroup,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  FormGroup,
} from "reactstrap";

import { logoutUser } from "../../actions/auth";
import { closeSidebar, openSidebar } from "../../actions/navigation";
import MenuIcon from "../Icons/HeaderIcons/MenuIcon";
import SearchBarIcon from "../Icons/HeaderIcons/SearchBarIcon";
import SearchIcon from "../Icons/HeaderIcons/SearchIcon";

import ProfileIcon from "../../assets/navbarMenus/pfofileIcons/ProfileIcon";
import MessagesIcon from "../../assets/navbarMenus/pfofileIcons/MessagesIcon";
import TasksIcon from "../../assets/navbarMenus/pfofileIcons/TasksIcon";

import logoutIcon from "../../assets/navbarMenus/pfofileIcons/logoutOutlined.svg";
import basketIcon from "../../assets/navbarMenus/basketIcon.svg";
import calendarIcon from "../../assets/navbarMenus/calendarIcon.svg";
import envelopeIcon from "../../assets/navbarMenus/envelopeIcon.svg";
import mariaImage from "../../assets/navbarMenus/mariaImage.jpg";
import notificationImage from "../../assets/navbarMenus/notificationImage.jpg";
import userImg from "../../assets/user.svg";
import gymIcon from "../../assets/dashboard/gymIcon.svg";
import s from "./Header.module.scss";
import "animate.css";
import {auth} from "../../actions/register.js";

const Header = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const toggleNotifications = () => {
    setNotificationsOpen(!notificationsOpen);
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const toggleSidebar = () => {
    if (props.sidebarOpened) {
      props.dispatch(closeSidebar());
    } else {
      const paths = props.location.pathname.split('/');
      paths.pop();
      props.dispatch(openSidebar());
    }
  }

  const doLogout = () => {
    props.dispatch(logoutUser());
  }
  
  const [name, setName] = useState("No name");
  
  const getUser=()=>{
	  console.log("this is the auth=>",auth);
	  
	  if(auth===null){
		  console.log(" auth is null:");
		  //should redirect
	  }else{
		  if(auth.currentUser===null){
			  console.log(" current user is  null: remain No name");
			  // should redirect
		  }else{
			  if(auth.currentUser.displayName===null){
				  console.log(" displayName user is  null:");
				  if(auth.currentUser.email===null){
					  console.log("email is  null:");
					  
				  }else{
					  setName(auth.currentUser.email);
				  }
			  }else{
				  console.log("displaying displayName",auth.currentName.displayName);
				  setName(auth.currentName.displayName);
			  }
		  }
	  }
  }
  
   useEffect(() => {
	  console.log("load once");
      getUser();
  }, []);

  console.log("outside everythng>",auth.currentUser);
  return (
    <Navbar className={`${s.root} d-print-none`}>
      <div>
        <NavLink
          onClick={() => toggleSidebar()}
          className={`d-md-none mr-3 ${s.navItem}`}
          href="#"
        >
          <MenuIcon className={s.menuIcon} />
        </NavLink>
      </div>
      <Nav className="ml-auto">
        <NavItem className="d-sm-none mr-4">
          <NavLink
            className=""
            href="#"
          >
            <SearchIcon />
          </NavLink>
        </NavItem>
 
        <Dropdown isOpen={notificationsOpen} toggle={() => toggleNotifications()} nav id="basic-nav-dropdown" className="ml-3">
          <DropdownToggle nav caret className="navbar-dropdown-toggle">
            <span className={`${s.avatar} rounded-circle float-left mr-2`}>
              <img src={gymIcon} alt="User"/>
            </span>
            <span className="small d-none d-sm-block ml-1 mr-2 body-1">{name}</span>
          </DropdownToggle>
          <DropdownMenu className="navbar-dropdown profile-dropdown" style={{ width: "194px" }}>
            <DropdownItem onClick={() => getUser()} className={s.dropdownProfileItem}><ProfileIcon/><span>Profile</span></DropdownItem>
            <NavItem>
              <NavLink onClick={() => doLogout()} href="#">
                <button className="btn btn-primary rounded-pill mx-auto logout-btn" type="submit"><img src={logoutIcon} alt="Logout"/><span className="ml-1">Logout</span></button>
              </NavLink>
            </NavItem>
          </DropdownMenu>
        </Dropdown>
      </Nav>
    </Navbar>
  )
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
  sidebarOpened: PropTypes.bool,
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarStatic: store.navigation.sidebarStatic,
  };
}

export default withRouter(connect(mapStateToProps)(Header));

