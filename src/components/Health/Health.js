import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Health.css';

const Health = ({ text }) => {
    return (
        <Container fluid className="health_section layout_padding">
            <Container>
                <Card.Title className="health_taital fs-1">{text}</Card.Title>
                <Card.Text className="health_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis
                </Card.Text>
                <Card className="health_section layout_padding bg-transparent border-0">
                    <Row>
                        <Col sm={7}>
                            <Card.Text className="image_main">
                                <Card.Title className="main">
                                    <img
                                        src="static/img/img-2.png"
                                        alt="Avatar"
                                        className="image"
                                        style={{ width: '100%' }}
                                    />
                                </Card.Title>
                                <Card.Title className="middle">
                                    <Card.Subtitle className="text">
                                        <img
                                            src="static/img/icon-1.png"
                                            style={{ width: '40px' }}
                                            alt="icon1"
                                        />
                                    </Card.Subtitle>
                                </Card.Title>
                            </Card.Text>
                        </Col>
                        <Col sm={5}>
                            <Card.Text className="image_main_1">
                                <Card.Title className="main">
                                    <img
                                        src="static/img/img-3.png"
                                        alt="Avatar"
                                        className="image"
                                        style={{ width: '100%' }}
                                    />
                                </Card.Title>
                                <Card.Title className="middle">
                                    <Card.Subtitle className="text">
                                        <img
                                            src="static/img/icon-1.png"
                                            style={{ width: '40px' }}
                                            alt="icon1"
                                        />
                                    </Card.Subtitle>
                                </Card.Title>
                            </Card.Text>
                        </Col>
                    </Row>
                    <Card.Text className="getquote_bt_1">
                        <Card.Link href="/">
                            Read More{' '}
                            <span>
                                <img
                                    src="static/img/right-arrow.png"
                                    alt="rightarrow"
                                />
                            </span>
                        </Card.Link>
                    </Card.Text>
                </Card>
            </Container>
        </Container>
    );
};

export default Health;
