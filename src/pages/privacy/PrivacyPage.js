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

const PrivacyPage = () => {
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
			    <p className="headline-1 mb-4 text-muted">Privacy Policy</p> 
                <p className="headline-2 mb-4 text-muted">Introduction</p>
                <div className="mb-4">
                  <p className="body-3 text-muted mb-0">.com (operated by  s.r.o.) is committed to protecting the privacy of its users. T his Privacy Policy outlines how we collect, use, and safeguard your personal information when you interact with our website <a href="https://">https://</a> website. By using our website, you agree to the terms of this Privacy Policy.</p>
                </div>
                <p className="headline-2 mb-4 text-muted">Information We Collect</p>
                <div className="mb-4">
                  <p className="body-3 text-muted mb-0">Personal Information: We may collect personal information such as your name, email address, contact details, and any other information you provide voluntarily.</p>
				  <p className="body-3 text-muted mb-0">Usage Information: We automatically collect non-personal information about your interactions with our website, including IP address, device information, browser type, and operating system.</p>
                </div>
				<p className="headline-2 mb-4 text-muted">Sharing of Information</p>
                <div className="mb-4">
                  <p className="body-3 text-muted mb-0">With Third Parties: We may share personal information with trusted third-party service providers that assist us in operating our website and conducting our business. These third-party providers are obligated to maintain the confidentiality of your information.</p>
				  <p className="body-3 text-muted mb-0">Legal Requirements: We may disclose personal information if required to do so by law or in response to valid requests by public authorities.</p>
				</div>
				<p className="headline-2 mb-4 text-muted">Data Security</p>
                <div className="mb-4">
                  <p className="body-3 text-muted mb-0">We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.</p>
                </div>
				<p className="headline-2 mb-4 text-muted">Third-Party Links</p>
                <div className="mb-4">
                  <p className="body-3 text-muted mb-0">Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of such websites or services. We encourage you to review the privacy policies of those third parties.</p>
                </div>
				<p className="headline-2 mb-4 text-muted">Children's Privacy</p>
                <div className="mb-4">
                  <p className="body-3 text-muted mb-0">Our service is not intended for children under the age of 18. We do not knowingly collect or solicit personal information from children. If you are under 13, please do not use our website or provide any personal information.</p>
                </div>
				<p className="headline-2 mb-4 text-muted">Changes to This Privacy Policy</p>
                <div className="mb-4">
                  <p className="body-3 text-muted mb-0">We reserve the right to update or modify this Privacy Policy at any time. We will notify you of any changes by posting the revised Privacy Policy on our website here. Your continued use of our website/service following the posting of changes constitutes your acceptance of such changes.</p>
                </div>
				<p className="headline-2 mb-4 text-muted">Compliance with Applicable Laws</p>
                <div className="mb-4">
                  <p className="body-3 text-muted mb-0">Forker s.r.o. is committed to complying with applicable privacy laws and regulations. This Privacy Policy is designed to be in compliance with laws of Czech Republic, where we are located, General Data Protection Regulation (GDPR) in Europe and California Consumer Privacy Act (CCPA) in the United States. If there is any conflict between this Privacy Policy and the provisions of any applicable legislation, the relevant legislation will prevail.</p>
                </div>
				<p className="headline-2 mb-4 text-muted">Your Rights</p>
                <div className="mb-4">
                  <p className="body-3 text-muted mb-0">Access and Rectification: You have the right to access and update your personal information held by us. If you believe that any information, we hold about you is incorrect or incomplete, please contact us using the information provided in the "Contact Us" section below.</p>
				  <p className="body-3 text-muted mb-0">Data Portability: You have the right to request a copy of your personal information in a structured, commonly used, and machine-readable format.</p>
				  <p className="body-3 text-muted mb-0">Erasure: You have the right to request the erasure of your personal information under certain circumstances.</p>
				  <p className="body-3 text-muted mb-0">Objection and Restriction: You have the right to object to the processing of your personal information and request restriction of processing under certain circumstances.</p>
				  <p className="body-3 text-muted mb-0">Consent Withdrawal: If we rely on your consent for the processing of your personal information, you have the right to withdraw that consent at any time.</p>
                </div>
				<p className="headline-2 mb-4 text-muted">International Data Transfers</p>
                <div className="mb-4">
                  <p className="body-3 text-muted mb-0">If you are accessing our website from outside the jurisdiction in which our servers are located, your personal information may be transferred to and stored on servers located in that jurisdiction or other locations. By using https://copatent.com , you consent to the transfer of your personal information to jurisdictions that may have different data protection laws than your country of residence.</p>
                </div>
				<p className="headline-2 mb-4 text-muted">Contact Us</p>
                <div className="mb-4">
                  <p className="body-3 text-muted mb-0">If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at contact.us@copatent.com. Thanks for using Copatent.</p>
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

export default PrivacyPage;
