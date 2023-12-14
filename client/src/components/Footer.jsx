import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import medify from "../assets/medify.svg";

const Footer = () => {
	return (
		<Container>
			<div className="d-flex flex-row ps-5 pt-4">
				<img src={medify} alt="Medify" style={{ height: "3rem", marginRight: "0.5rem" }}/>
      	<span style={{ marginTop: "5px", fontSize: "1.5rem", fontWeight: "400" }}>Medify</span>
			</div>
			<div class="footer" className="px-5 py-2">
				<Row>
					<Col>
						<h5 className="fw-bold">Site Map</h5>
						<Link class="d-flex flex-column text-decoration-none">
							<Link class="text-decoration-none text-dark" to="aboutus">About Us</Link>
							<Link class="text-decoration-none text-dark" to="articles">Articles</Link>
							<Link class="text-decoration-none text-dark" to="">Terms & Condition</Link>
							<Link class="text-decoration-none text-dark" to="">Security</Link>
							<Link class="text-decoration-none text-dark" to="">Privacy Policy</Link>
						</Link>
					</Col>
					<Col class="d-flex flex-column col-lg-5">
						<h5 className="fw-bold">Customer Complaint Service</h5>
							<h6 className="desc">Springfield, United States</h6>
								<p>742 Evergreen Terrace
								<br></br>help@nama.com | (021)-123456</p>
							<h6>DITJEN PKTN, Ministry of Commerce</h6>
								<p>contact.us@kemendag.go.id | (021)-3858171</p>
					</Col>
					<Col className="ms-4 col-lg-3">
						<div>
							<h4>Download App</h4>
								<div >
									<button type="button" class="btn btn-secondary me-2">Play Store</button>
									<button type="button" class="btn btn-secondary">App Store</button>
								</div>
						</div>
						<div>
							<h4>Are you a Doctor?</h4>
								<button type="button" class="btn btn-secondary">Register</button>
						</div>
					</Col>
				</Row>
			</div>
			<div className="d-flex flex-row ps-5">
				<p>© 2023 All rights reserved.</p>
			</div>
		</Container>
	);
};

export default Footer;