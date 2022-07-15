import React from 'react';
import { Col, Container, Nav, Row, Card, Image, Button } from 'react-bootstrap';
import './header.css';

const header = () => {
    const nav_toggler = () => {
        console.log('clicked');
    };

    return (
        <>
            <Container fluid className="header_section">
                <Container className="navbar navbar-expand-lg navbar-light bg-transparent">
                    <Card.Text className="logo bg-transparent">
                        <Card.Link href="/">
                            <Image src="static/img/logo.png" alt="logo_img" />
                        </Card.Link>
                    </Card.Text>
                    <Button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <Card.Subtitle
                            className="navbar-toggler-icon d-flex"
                            onClick={nav_toggler}
                        ></Card.Subtitle>
                    </Button>
                    <Container
                        className="collapse navbar-collapse justify-content-end"
                        id="navbarSupportedContent"
                    >
                        <Nav className="navbar-nav mr-auto">
                            <Nav.Item clasName="nav-item active">
                                <Nav.Link
                                    className="nav-link"
                                    href="index.html"
                                >
                                    Home
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="nav-item">
                                <Nav.Link
                                    className="nav-link"
                                    href="health.html"
                                >
                                    Health
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="nav-item">
                                <Nav.Link
                                    className="nav-link"
                                    href="medicine.html"
                                >
                                    Medicine
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="nav-item">
                                <Nav.Link className="nav-link" href="news.html">
                                    News
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="nav-item">
                                <Nav.Link
                                    className="nav-link"
                                    href="client.html"
                                >
                                    Client
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="nav-item">
                                <Nav.Link
                                    className="nav-link"
                                    href="contact.html"
                                >
                                    Contact Us
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="nav-item">
                                <Nav.Link className="nav-link" href="/">
                                    <Image
                                        src="static/img/search-icon.png"
                                        alt="search"
                                    />
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Container>
                </Container>

                <Container
                    fluid
                    id="main_slider"
                    className="carousel slide"
                    data-ride="carousel"
                >
                    <Container fluid className="carousel-inner">
                        <Card className="carousel-item active bg-transparent border-0">
                            <Card.Body className="banner_section">
                                <Container>
                                    <Row>
                                        <Col md={6}>
                                            <Card.Title className="banner_taital fs-1">
                                                <Card.Subtitle className="fs-1">
                                                    Health
                                                </Card.Subtitle>
                                                <Card.Subtitle
                                                    className="fs-1"
                                                    style={{ color: '#151515' }}
                                                >
                                                    Care
                                                </Card.Subtitle>
                                            </Card.Title>
                                            <Card.Text className="banner_text mb-3">
                                                There are many variations of
                                                passages of Lorem Ipsum
                                            </Card.Text>
                                            <Card.Subtitle className="btn_main">
                                                <Card.Subtitle className="more_bt">
                                                    <Card.Link href="/">
                                                        Contact Now
                                                    </Card.Link>
                                                </Card.Subtitle>
                                                <Card.Subtitle className="contact_bt">
                                                    <Card.Link href="/">
                                                        Get A Quote
                                                    </Card.Link>
                                                </Card.Subtitle>
                                            </Card.Subtitle>
                                        </Col>
                                        <Col md={6}>
                                            <Card.Subtitle className="image_1">
                                                <Image
                                                    src="static/img/img-1.png"
                                                    alt="img1"
                                                />
                                            </Card.Subtitle>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                        {/* <div className="carousel-item">
                            <div className="banner_section">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h1 className="banner_taital">
                                                Health <br />
                                                <span
                                                    style={{ color: '#151515' }}
                                                >
                                                    Care
                                                </span>
                                            </h1>
                                            <p className="banner_text">
                                                There are many variations of
                                                passages of Lorem Ipsum
                                            </p>
                                            <div className="btn_main">
                                                <div className="more_bt">
                                                    <a href="/">Contact Now</a>
                                                </div>
                                                <div className="contact_bt">
                                                    <a href="/">Get A Quote</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="image_1">
                                                <img
                                                    src="static/img/img-1.png"
                                                    alt="img1"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="banner_section">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h1 className="banner_taital">
                                                Health <br />
                                                <span
                                                    style={{ color: '#151515' }}
                                                >
                                                    Care
                                                </span>
                                            </h1>
                                            <p className="banner_text">
                                                There are many variations of
                                                passages of Lorem Ipsum
                                            </p>
                                            <div className="btn_main">
                                                <div className="more_bt">
                                                    <a href="/">Contact Now</a>
                                                </div>
                                                <div className="contact_bt">
                                                    <a href="/">Get A Quote</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="image_1">
                                                <img
                                                    src="static/img/img-1.png"
                                                    alt="img1"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </Container>
                    <Card.Link
                        className="carousel-control-prev"
                        href="#main_slider"
                        role="button"
                        data-slide="prev"
                    >
                        <i className="fa fa-long-arrow-left"></i>
                    </Card.Link>
                    <Card.Link
                        className="carousel-control-next"
                        href="#main_slider"
                        role="button"
                        data-slide="next"
                        style={{ fontSize: '24px', paddingTop: '4px' }}
                    >
                        <i
                            className="fa fa-long-arrow-right"
                            style={{ fontSize: '24px', paddingTop: '4px' }}
                        ></i>
                    </Card.Link>
                </Container>
            </Container>
        </>
    );
};

export default header;
