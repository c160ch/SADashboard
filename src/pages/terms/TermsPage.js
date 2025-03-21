import React from "react";
import { Link } from "react-router-dom";
import errorImage from "../../assets/errorImage.svg"
import FooterIcon from "../../components/Icons/FooterIcon.js";
import {
  Col,
  Row, Button, ButtonGroup
} from "reactstrap";
import Widget from "../../components/Widget/Widget.js";
import s from "../error/ErrorPage.module.scss";

const TermsPage = () => {
  return (
          <div>
      <Row>
        <Col className="mb-4" xs={12}>
          <Widget className="widget-p-lg">
            <Row>
              <Col xs={12} sm={12} xl={12} className="mb-5 mb-sm-0">
			  <div className={s.footer}>
				<Link to="/template/dashboard">
				<Button>
					Back To Home
				</Button>
				</Link>
			  </div>
				<p className="headline-1 mb-4 text-muted">Terms and Condition</p>
                <p className="headline-2 mb-4 text-muted">1. User Eligibility:</p>
                <div className="mb-4">
                  <p className="body-3 text-muted mb-0">1.1. You must be at least 18 years old or have the consent of a legal guardian to use our website.</p>
				  <p className="body-3 text-muted mb-0">1.2. By using our website, you acknowledge that you have the legal capacity to enter into these Terms and Conditions.</p>
                </div>
                <p className="headline-2 mb-4 text-muted">2. User Conduct:</p>
                <div className="mb-4">
                  <p className="body-3 text-muted mb-0">2.1. Use website for lawful purposes only.</p>
				  <p className="body-3 text-muted mb-0">2.2. You are responsible for any content you contribute.</p>
				  <p className="body-3 text-muted mb-0">2.3. Do not upload unlawful, offensive, or infringing content.</p>
                </div>
				<p className="headline-2 mb-4 text-muted">3. Intellectual Property:</p>
                <div className="mb-4">
                  <p className="body-3 text-muted mb-0">3.1. Content on website is protected by intellectual property rights owned or licensed by Us.</p>
				  <p className="body-3 text-muted mb-0">3.2. You may not reproduce, distribute, or modify user-generated content without permission.</p>
				</div>
				<p className="headline-2 mb-4 text-muted">4. Privacy:</p>
                <div className="mb-4">
                  <p className="body-3 text-muted mb-0">4.1. We respects your privacy as described in our Privacy Policy.</p>
				  <p className="body-3 text-muted mb-0">4.2. By using our website, you consent to the collection, use, and disclosure of your personal information.</p>
                </div>
				<p className="headline-2 mb-4 text-muted">5. Limitation of Liability:</p>
                <div className="mb-4">
                  <p className="body-3 text-muted mb-0">5.1. We are not liable for any damages arising out of or in connection with the use of our website.</p>
				  <p className="body-3 text-muted mb-0">5.2. We do not guarantee the accuracy or completeness of the content on Forker.ai.</p>
                </div>
				<p className="headline-2 mb-4 text-muted">6. Modifications to the Terms and Conditions:</p>
                <div className="mb-4">
                  <p className="body-3 text-muted mb-0">6.1. We may revise these Terms and Conditions at any time.</p>
				  <p className="body-3 text-muted mb-0">6.2. It is your responsibility to review the most current version regularly.</p>
				  <p className="body-3 text-muted mb-0">6.3. By continuing to use our website after any modifications, you agree to be bound by the updated Terms and Conditions.</p>
                </div>
				<p className="headline-2 mb-4 text-muted">7. Termination:</p>
                <div className="mb-4">
                  <p className="body-3 text-muted mb-0">7.1. We reserves the right to terminate or suspend your access to the website at any time.</p>
				  <p className="body-3 text-muted mb-0">7.2. Upon termination, all provisions that should reasonably survive will remain in effect.</p>
                </div>
				<p className="headline-2 mb-4 text-muted">8. Governing Law:</p>
                <div className="mb-4">
                  <p className="body-3 text-muted mb-0">8.1. These Terms and Conditions shall be governed by the laws of Czech Republic.</p>
				  <p className="body-3 text-muted mb-0">8.2. Any dispute shall be subject to the exclusive jurisdiction of the courts of Czech Republic.</p>
                </div>
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
			  </Col>
			</Row>
		  </Widget>
		</Col>
	  </Row>
	  </div>

  );
}

export default TermsPage;
