import React from 'react';
import { Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import './Contact.css';

const Contact = ({ author }) => {
    return (
        <Container fluid className="contact_section layout_padding">
            <Container>
                <h1 className="contact_taital">What we do, {author}</h1>
                <div className="news_section_2">
                    <Row>
                        <Col md={6}>
                            <Card
                                className="icon_main bg-transparent flex-row"
                                style={{ border: 'none' }}
                            >
                                <Card.Body className="icon_7 p-0">
                                    <Card.Img
                                        style={{ width: '40%' }}
                                        src="static/img/icon-7.png"
                                        alt="icon"
                                    />
                                </Card.Body>
                                <Card.Title className="diabetes_text fs-2">
                                    Diabetes and obesity Counselling{' '}
                                </Card.Title>
                            </Card>
                            <Card
                                className="icon_main bg-transparent flex-row"
                                style={{ border: 'none' }}
                            >
                                <Card.Body className="icon_7">
                                    <Card.Img
                                        style={{ width: '40%' }}
                                        src="static/img/icon-5.png"
                                        alt="icon"
                                    />
                                </Card.Body>
                                <Card.Title className="diabetes_text fs-2">
                                    Obstetrics and Gynsecology
                                </Card.Title>
                            </Card>
                            <Card
                                className="icon_main bg-transparent flex-row"
                                style={{ border: 'none' }}
                            >
                                <Card.Body className="icon_7">
                                    <Card.Img
                                        style={{ width: '40%' }}
                                        src="static/img/icon-6.png"
                                        alt="icon"
                                    />
                                </Card.Body>
                                <Card.Title className="diabetes_text fs-2">
                                    Surgical and medical Oncology
                                </Card.Title>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <InputGroup className="contact_box d-flex flex-column">
                                <InputGroup.Text className="book_text fs-2 justify-content-center bg-transparent border-0">
                                    Book Appoinment
                                </InputGroup.Text>
                                <Card
                                    className="bg-transparent"
                                    style={{ border: 'none' }}
                                >
                                    <Form.Control
                                        className="Email_text"
                                        placeholder="Name"
                                        aria-label="Name"
                                        aria-describedby="basic-addon2"
                                    />
                                    <Form.Control
                                        className="Email_text"
                                        placeholder="Email"
                                        aria-label="Email"
                                        aria-describedby="basic-addon2"
                                    />
                                </Card>
                                <Form.Control
                                    className="massage-bt"
                                    rows="5"
                                    id="comment"
                                    name="Massage"
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px', width: '100%' }}
                                />
                                <Card
                                    className="send_bt bg-transparent"
                                    style={{ border: 'none' }}
                                >
                                    <a href="/#">SEND</a>
                                </Card>
                            </InputGroup>
                        </Col>
                    </Row>
                </div>
            </Container>
        </Container>
    );
};

export default Contact;
