import React,{ useState} from "react";
import FooterIcon from "../Icons/FooterIcon";
import s from "./Footer.module.scss";
import {
ButtonGroup,
Button, Modal, ModalHeader, ModalBody, ModalFooter,  Col,
  Row
} from "reactstrap";
import Widget from "../../components/Widget/Widget.js";


const Footer = () => {
  const [modal, setModal] = useState(false);
  const [ppModal, setPpModal]=useState(false);
  const [discModal, setDiscModal]=useState(false);

  const toggle = () => setModal(!modal);
  
  const togglePP = ()=>setPpModal(!ppModal);
  
  const toggleDisc=()=>setDiscModal(!discModal);
	
	
  return (
    <div className={s.footer}>
	<ButtonGroup >
  <Button onClick={toggle}>
    Terms and Condition
  </Button>
  <Button onClick={togglePP}>
    Privacy Policy
  </Button>
  <Button onClick={toggleDisc}>
    Disclaimer
  </Button>
</ButtonGroup>
      <Modal isOpen={modal} toggle={toggle} fullscreen scrollable>
        <ModalHeader toggle={toggle}>Terms and Condition</ModalHeader>
        <ModalBody>
          <div>
      <Row>
        <Col className="mb-4" xs={12}>
          <Widget className="widget-p-lg">
            <Row>
              <Col xs={12} sm={12} xl={12} className="mb-5 mb-sm-0">
                <p className="headline-1 mb-4 text-muted">1. User Eligibility:</p>
                <div className="mb-4">
                  <p className="body-3 text-muted mb-0">1.1. You must be at least 18 years old or have the consent of a legal guardian to use our website.</p>
				  <p className="body-3 text-muted mb-0">1.2. By using our website, you acknowledge that you have the legal capacity to enter into these Terms and Conditions.</p>
                </div>
                <p className="headline-1 mb-4 text-muted">2. User Conduct:</p>
                <div className="mb-4">
                  <p className="body-3 text-muted mb-0">2.1. Use website for lawful purposes only.</p>
				  <p className="body-3 text-muted mb-0">2.2. You are responsible for any content you contribute.</p>
				  <p className="body-3 text-muted mb-0">2.3. Do not upload unlawful, offensive, or infringing content.</p>
                </div>
				<p className="headline-1 mb-4 text-muted">3. Intellectual Property:</p>
                <div className="mb-4">
                  <p className="body-3 text-muted mb-0">3.1. Content on website is protected by intellectual property rights owned or licensed by Us.</p>
				  <p className="body-3 text-muted mb-0">3.2. You may not reproduce, distribute, or modify user-generated content without permission.</p>
				</div>
				<p className="headline-1 mb-4 text-muted">4. Privacy:</p>
                <div className="mb-4">
                  <p className="body-3 text-muted mb-0">4.1. We respects your privacy as described in our Privacy Policy.</p>
				  <p className="body-3 text-muted mb-0">4.2. By using our website, you consent to the collection, use, and disclosure of your personal information.</p>
                </div>
				<p className="headline-1 mb-4 text-muted">5. Limitation of Liability:</p>
                <div className="mb-4">
                  <p className="body-3 text-muted mb-0">5.1. We are not liable for any damages arising out of or in connection with the use of our website.</p>
				  <p className="body-3 text-muted mb-0">5.2. We do not guarantee the accuracy or completeness of the content on Forker.ai.</p>
                </div>
				<p className="headline-1 mb-4 text-muted">6. Modifications to the Terms and Conditions:</p>
                <div className="mb-4">
                  <p className="body-3 text-muted mb-0">6.1. We may revise these Terms and Conditions at any time.</p>
				  <p className="body-3 text-muted mb-0">6.2. It is your responsibility to review the most current version regularly.</p>
				  <p className="body-3 text-muted mb-0">6.3. By continuing to use our website after any modifications, you agree to be bound by the updated Terms and Conditions.</p>
                </div>
				<p className="headline-1 mb-4 text-muted">7. Termination:</p>
                <div className="mb-4">
                  <p className="body-3 text-muted mb-0">7.1. We reserves the right to terminate or suspend your access to the website at any time.</p>
				  <p className="body-3 text-muted mb-0">7.2. Upon termination, all provisions that should reasonably survive will remain in effect.</p>
                </div>
				<p className="headline-1 mb-4 text-muted">8. Governing Law:</p>
                <div className="mb-4">
                  <p className="body-3 text-muted mb-0">8.1. These Terms and Conditions shall be governed by the laws of Czech Republic.</p>
				  <p className="body-3 text-muted mb-0">8.2. Any dispute shall be subject to the exclusive jurisdiction of the courts of Czech Republic.</p>
                </div>
			  </Col>
			</Row>
		  </Widget>
		</Col>
	  </Row>
	  </div>
		 </ModalBody>
		 <ModalFooter>
		 <Button color="primary" onClick={toggle}>
            OK
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
		 </ModalFooter>
		 </Modal>
      <Modal isOpen={ppModal} toggle={togglePP} fullscreen scrollable>
        <ModalHeader toggle={togglePP}>Privacy Policy</ModalHeader>
        <ModalBody>
          <div>
      <Row>
        <Col className="mb-4" xs={12}>
          <Widget className="widget-p-lg">
            <Row>
              <Col xs={12} sm={12} xl={12} className="mb-5 mb-sm-0">
                <p className="headline-1 mb-4 text-muted">Introduction</p>
                <div className="mb-4">
                  <p className="body-3 text-muted mb-0">.com (operated by  s.r.o.) is committed to protecting the privacy of its users. T his Privacy Policy outlines how we collect, use, and safeguard your personal information when you interact with our website <a href="https://">https://</a> website. By using our website, you agree to the terms of this Privacy Policy.</p>
                </div>
                <p className="headline-1 mb-4 text-muted">Information We Collect</p>
                <div className="mb-4">
                  <p className="body-3 text-muted mb-0">Personal Information: We may collect personal information such as your name, email address, contact details, and any other information you provide voluntarily.</p>
				  <p className="body-3 text-muted mb-0">Usage Information: We automatically collect non-personal information about your interactions with our website, including IP address, device information, browser type, and operating system.</p>
                </div>
				<p className="headline-1 mb-4 text-muted">Sharing of Information</p>
                <div className="mb-4">
                  <p className="body-3 text-muted mb-0">With Third Parties: We may share personal information with trusted third-party service providers that assist us in operating our website and conducting our business. These third-party providers are obligated to maintain the confidentiality of your information.</p>
				  <p className="body-3 text-muted mb-0">Legal Requirements: We may disclose personal information if required to do so by law or in response to valid requests by public authorities.</p>
				</div>
				<p className="headline-1 mb-4 text-muted">Data Security</p>
                <div className="mb-4">
                  <p className="body-3 text-muted mb-0">We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.</p>
                </div>
				<p className="headline-1 mb-4 text-muted">Third-Party Links</p>
                <div className="mb-4">
                  <p className="body-3 text-muted mb-0">Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of such websites or services. We encourage you to review the privacy policies of those third parties.</p>
                </div>
				<p className="headline-1 mb-4 text-muted">Children's Privacy</p>
                <div className="mb-4">
                  <p className="body-3 text-muted mb-0">Our service is not intended for children under the age of 18. We do not knowingly collect or solicit personal information from children. If you are under 13, please do not use our website or provide any personal information.</p>
                </div>
				<p className="headline-1 mb-4 text-muted">Changes to This Privacy Policy</p>
                <div className="mb-4">
                  <p className="body-3 text-muted mb-0">We reserve the right to update or modify this Privacy Policy at any time. We will notify you of any changes by posting the revised Privacy Policy on our website here. Your continued use of our website/service following the posting of changes constitutes your acceptance of such changes.</p>
                </div>
				<p className="headline-1 mb-4 text-muted">Compliance with Applicable Laws</p>
                <div className="mb-4">
                  <p className="body-3 text-muted mb-0">Forker s.r.o. is committed to complying with applicable privacy laws and regulations. This Privacy Policy is designed to be in compliance with laws of Czech Republic, where we are located, General Data Protection Regulation (GDPR) in Europe and California Consumer Privacy Act (CCPA) in the United States. If there is any conflict between this Privacy Policy and the provisions of any applicable legislation, the relevant legislation will prevail.</p>
                </div>
				<p className="headline-1 mb-4 text-muted">Your Rights</p>
                <div className="mb-4">
                  <p className="body-3 text-muted mb-0">Access and Rectification: You have the right to access and update your personal information held by us. If you believe that any information, we hold about you is incorrect or incomplete, please contact us using the information provided in the "Contact Us" section below.</p>
				  <p className="body-3 text-muted mb-0">Data Portability: You have the right to request a copy of your personal information in a structured, commonly used, and machine-readable format.</p>
				  <p className="body-3 text-muted mb-0">Erasure: You have the right to request the erasure of your personal information under certain circumstances.</p>
				  <p className="body-3 text-muted mb-0">Objection and Restriction: You have the right to object to the processing of your personal information and request restriction of processing under certain circumstances.</p>
				  <p className="body-3 text-muted mb-0">Consent Withdrawal: If we rely on your consent for the processing of your personal information, you have the right to withdraw that consent at any time.</p>
                </div>
				<p className="headline-1 mb-4 text-muted">International Data Transfers</p>
                <div className="mb-4">
                  <p className="body-3 text-muted mb-0">If you are accessing our website from outside the jurisdiction in which our servers are located, your personal information may be transferred to and stored on servers located in that jurisdiction or other locations. By using https://copatent.com , you consent to the transfer of your personal information to jurisdictions that may have different data protection laws than your country of residence.</p>
                </div>
				<p className="headline-1 mb-4 text-muted">Contact Us</p>
                <div className="mb-4">
                  <p className="body-3 text-muted mb-0">If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at contact.us@copatent.com. Thanks for using Copatent.</p>
                </div>
			  </Col>
			</Row>
		  </Widget>
		</Col>
	  </Row>
	  </div>
		 </ModalBody>
		 <ModalFooter>
		 <Button color="primary" onClick={togglePP}>
            OK
          </Button>{' '}
          <Button color="secondary" onClick={togglePP}>
            Cancel
          </Button>
		 </ModalFooter>
		 </Modal>
      <Modal isOpen={discModal} toggle={toggleDisc} fullscreen scrollable>
        <ModalHeader toggle={toggleDisc}>Privacy Policy</ModalHeader>
        <ModalBody>
          <div>
      <Row>
        <Col className="mb-4" xs={12}>
          <Widget className="widget-p-lg">
            <Row>
              <Col xs={12} sm={12} xl={12} className="mb-5 mb-sm-0">
                <div className="mb-4">
                  <p className="body-3 text-muted mb-0">1. Copatent is a platform designed for structural preparation of your patent applications using this website’s tools and AI prompts. Although, we created this platform for your entertainment and educational purposes, it can be extremely useful for SMEs and entrepreneurs.</p>
				  <p className="body-3 text-muted mb-0">2. While we strive to ensure that all content posted on our website is accurate and up-to-date, we cannot guarantee the completeness or reliability of any information or content provided by other users.</p>
				  <p className="body-3 text-muted mb-0">3. The prompts and responses on our platform are generated by large language models, which are trained on third-party datasets and may contain biases or errors. As such, we cannot be held responsible for any consequences that may arise from the use of Copatent generated. We advise users to exercise caution and independently verify any information before acting on it. Especially we advise to rely on lawyers and IP attorneys advise during your journey of patenting.</p>
				  <p className="body-3 text-muted mb-0">4. By using our website, you agree to hold Copatent and its affiliates harmless from any claims, damages, or losses arising from your use of our website.</p>
				  <p className="body-3 text-muted mb-0">5. Your information is safe with us as we are not collecting or analyzing any of your data. Copatent is not responsible for human-to-human interactions. We urge all users to be respectful and polite to each other. While Copatent strives to make your human-to-AI interactions as smooth as possible, please note that the generative AI models used by us are operated by third-party entities, and such interactions are covered by their respective terms of use.</p>
				  <p className="body-3 text-muted mb-0">6. Please note that your work will become be visible to other users if you choose to share it.</p>
				  <p className="body-3 text-muted mb-0">7. This is an early version of our terms of use, which may be updated by Copatent in the future without notice.</p>
				  <p className="body-3 text-muted mb-0">Thanks for using Copatent.</p>
				</div>
			  </Col>
			</Row>
		  </Widget>
		</Col>
	  </Row>
	  </div>
		 </ModalBody>
		 <ModalFooter>
		 <Button color="primary" onClick={toggleDisc}>
            OK
          </Button>{' '}
          <Button color="secondary" onClick={toggleDisc}>
            Cancel
          </Button>
		 </ModalFooter>
		 </Modal>
		 
    </div>
  )
}

export default Footer;
