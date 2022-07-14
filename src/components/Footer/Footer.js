import React from 'react';
import { Card, Col, Container, Form, Nav, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = ({ email, phone, address }) => {
    return (
        <>
            <Container fluid className="footer_section layout_padding">
                <Container>
                    <Row>
                        <Col lg={3} sm={6}>
                            <Card
                                className="footer_logo bg-transparent"
                                style={{ border: 'none' }}
                            >
                                <Card.Link href="index.html">
                                    <img
                                        src="static/img/footer-logo.png"
                                        alt="footer"
                                    />
                                </Card.Link>
                            </Card>
                            <Card.Title className="adderss_text fs-2">
                                Contact Us
                            </Card.Title>
                            <Card.Text className="map_icon">
                                <img src="static/img/map-icon.png" alt="map" />
                                <span className="paddlin_left_0">
                                    {address}
                                </span>
                            </Card.Text>
                            <Card.Text className="map_icon">
                                <img
                                    src="static/img/call-icon.png"
                                    alt="call"
                                />
                                <span className="paddlin_left_0">{phone}</span>
                            </Card.Text>
                            <Card.Text className="map_icon">
                                <img
                                    src="static/img/mail-icon.png"
                                    alt="mail"
                                />
                                <span className="paddlin_left_0">{email}</span>
                            </Card.Text>
                        </Col>
                        <Col lg={3} sm={6}>
                            <Card.Text className="adderss_text fs-2">
                                Doctors
                            </Card.Text>
                            <Card.Text className="hiphop_text_1">
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour,
                            </Card.Text>
                        </Col>
                        <Col lg={3} sm={6}>
                            <Card.Text className="adderss_text fs-2">
                                Useful Links
                            </Card.Text>
                            <Card.Text className="Useful_text">
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                ,
                            </Card.Text>
                        </Col>
                        <Col lg={3} sm={6}>
                            <Card.Text className="adderss_text fs-2">
                                Newsletter
                            </Card.Text>
                            <Form.Control
                                className="Enter_text"
                                placeholder="Enter Your Email"
                                aria-label="Enter Your Email"
                                aria-describedby="basic-addon2"
                            />

                            <Card.Text className="subscribe_bt">
                                <a href="/#">Subscribe</a>
                            </Card.Text>
                            <Card
                                className="social_icon py-3 bg-transparent"
                                style={{ border: 'none' }}
                            >
                                <Nav>
                                    <Nav.Item>
                                        <Nav.Link href="/#" className="p-1 m-0">
                                            <img
                                                src="static/img/fb-icon.png"
                                                alt="fb"
                                            />
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="/#" className="p-1 m-0">
                                            <img
                                                src="static/img/twitter-icon.png"
                                                alt="twitter"
                                            />
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="/#" className="p-1 m-0">
                                            <img
                                                src="static/img/linkedin-icon.png"
                                                alt="linkedin"
                                            />
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="/#" className="p-1 m-0">
                                            <img
                                                src="static/img/instagram-icon.png"
                                                alt="instagram"
                                            />
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <div className="copyright_section">
                <Container>
                    <Card className="copyright_text align-self-center bg-transparent flex-row justify-content-center fs-5">
                        2022 All Rights Reserved. Design by
                        <Card.Link href="https://html.design">
                            Free html Templates
                        </Card.Link>
                    </Card>
                </Container>
            </div>
        </>
    );
};

export default Footer;
