import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import './Health.css';

const Health = ({ text }) => {
    return (
        <Container fluid className="health_section layout_padding">
            <Container>
                <Card className="bg-transparent border-0">
                    <Card.Title className="health_taital fs-1">
                        {text}
                    </Card.Title>
                    <Card.Text className="health_text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis
                    </Card.Text>
                </Card>
                <Card className="health_section layout_padding bg-transparent border-0">
                    <Row>
                        <Col sm={7}>
                            <Card.Body className="image_main">
                                <Card.Title className="main">
                                    <Image
                                        src="static/img/img-2.png"
                                        alt="Avatar"
                                        className="image"
                                        style={{ width: '100%' }}
                                    />
                                </Card.Title>
                                <Card.Title className="middle">
                                    <Card.Subtitle className="text">
                                        <Image
                                            src="static/img/icon-1.png"
                                            style={{ width: '40px' }}
                                            alt="icon1"
                                        />
                                    </Card.Subtitle>
                                </Card.Title>
                            </Card.Body>
                        </Col>
                        <Col sm={5}>
                            <Card.Body className="image_main_1">
                                <Card.Title className="main">
                                    <Image
                                        src="static/img/img-3.png"
                                        alt="Avatar"
                                        className="image"
                                        style={{ width: '100%' }}
                                    />
                                </Card.Title>
                                <Card.Title className="middle">
                                    <Card.Subtitle className="text">
                                        <Image
                                            src="static/img/icon-1.png"
                                            style={{ width: '40px' }}
                                            alt="icon1"
                                        />
                                    </Card.Subtitle>
                                </Card.Title>
                            </Card.Body>
                        </Col>
                    </Row>
                    <Card.Body className="getquote_bt_1">
                        <Card.Link
                            href="/"
                            className="d-flex justify-content-around"
                        >
                            Read More
                            <Card.Text className="d-flex align-self-center m-2">
                                <Image
                                    src="static/img/right-arrow.png"
                                    alt="rightarrow"
                                />
                            </Card.Text>
                        </Card.Link>
                    </Card.Body>
                </Card>
            </Container>
        </Container>
    );
};

export default Health;
