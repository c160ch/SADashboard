import React from "react";
import FooterIcon from "../Icons/FooterIcon";
import s from "./Footer.module.scss";
import {
ButtonGroup,
Button
} from "reactstrap";

const Footer = () => {
  return (
    <div className={s.footer}>
	<ButtonGroup >
  <Button >
    Terms and Condition
  </Button>
  <Button>
    Privacy Policy
  </Button>
  <Button>
    Disclaimer
  </Button>
</ButtonGroup>
    </div>
  )
}

export default Footer;
