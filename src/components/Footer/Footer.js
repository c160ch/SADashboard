import React,{ useState} from "react";
import FooterIcon from "../Icons/FooterIcon";
import s from "./Footer.module.scss";
import {
ButtonGroup,
Button
} from "reactstrap";
import { Link } from "react-router-dom";


const Footer = () => {
	
	
  return (
    <div className={s.footer}>
	<ButtonGroup >
  <Link to="/terms">
  <Button>
    Terms and Condition
  </Button>
  </Link>
  <Link to="/privacy">
  <Button>
    Privacy Policy
  </Button>
  </Link>
  <Link to="/disclaimer">
  <Button>
    Disclaimer
  </Button>
  </Link>
</ButtonGroup>
    </div>
  )
}

export default Footer;
