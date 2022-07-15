import React from 'react';
import { Card, Container } from 'react-bootstrap';
import './Client.css';

const Client = () => {
    return (
        <Container fluid className="client_section layout_padding">
            <Container
                id="my_slider"
                className="carousel slide"
                data-ride="carousel"
            >
                <Container className="carousel-inner">
                    <Container className="carousel-item active">
                        <Card className="bg-transparent border-0">
                            <Card.Title className="client_taital fs-1">
                                What People Say
                            </Card.Title>
                            <Card.Text className="client_text">
                                It is a long established fact that a reader will
                                be distracted{' '}
                            </Card.Text>
                            <Card.Body className="client_section_2">
                                <Card.Text className="client_left">
                                    <Card.Img
                                        src="static/img/client-img.png"
                                        className="client_img p-3"
                                        alt="client-img"
                                    />
                                </Card.Text>
                                <Card.Title className="client_right">
                                    <Card.Subtitle className="distracted_text fs-2">
                                        Distracted by
                                    </Card.Subtitle>
                                    <Card.Text className="lorem_text">
                                        It is a long established fact that a
                                        reader will be distracted by the
                                        readable content of a page when looking
                                        at its layout. The point of using Lorem
                                        Ipsum is that it has a more-or-less
                                        normal distribution of letters
                                    </Card.Text>
                                    <Card.Text className="quote_icon">
                                        <Card.Img
                                            style={{ width: '8%' }}
                                            src="static/img/quote-icon.png"
                                            alt="img"
                                        />
                                    </Card.Text>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Container>
                    {/* <div className="carousel-item">
                        <div className="container">
                            <h1 className="client_taital">What People Say</h1>
                            <p className="client_text">
                                It is a long established fact that a reader will
                                be distracted{' '}
                            </p>
                            <div className="client_section_2">
                                <div className="client_left">
                                    <div>
                                        <img
                                            src="static/img/client-img.png"
                                            className="client_img"
                                            alt="client_img"
                                        />
                                    </div>
                                </div>
                                <div className="client_right">
                                    <h3 className="distracted_text">
                                        Distracted by
                                    </h3>
                                    <p className="lorem_text">
                                        It is a long established fact that a
                                        reader will be distracted by the
                                        readable content of a page when looking
                                        at its layout. The point of using Lorem
                                        Ipsum is that it has a more-or-less
                                        normal distribution of letters
                                    </p>
                                    <div className="quote_icon">
                                        <img
                                            src="static/img/quote-icon.png"
                                            alt="quote"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <h1 className="client_taital">What People Say</h1>
                            <p className="client_text">
                                It is a long established fact that a reader will
                                be distracted{' '}
                            </p>
                            <div className="client_section_2">
                                <div className="client_left">
                                    <div>
                                        <img
                                            src="static/img/client-img.png"
                                            className="client_img"
                                            alt="client_img"
                                        />
                                    </div>
                                </div>
                                <div className="client_right">
                                    <h3 className="distracted_text">
                                        Distracted by
                                    </h3>
                                    <p className="lorem_text">
                                        It is a long established fact that a
                                        reader will be distracted by the
                                        readable content of a page when looking
                                        at its layout. The point of using Lorem
                                        Ipsum is that it has a more-or-less
                                        normal distribution of letters
                                    </p>
                                    <div className="quote_icon">
                                        <img
                                            src="static/img/quote-icon.png"
                                            alt="quote"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </Container>
                <Card.Link
                    className="carousel-control-prev"
                    href="#my_slider"
                    role="button"
                    data-slide="prev"
                >
                    <i
                        className="fa fa-long-arrow-left"
                        style={{ fontSize: '24px', paddingTop: '4px' }}
                    ></i>
                </Card.Link>
                <Card.Link
                    className="carousel-control-next"
                    style={{ marginLeft: '-1px' }}
                    href="#my_slider"
                    role="button"
                    data-slide="next"
                >
                    <i
                        className="fa fa-long-arrow-right"
                        style={{ fontSize: '24px', paddingTop: '4px' }}
                    ></i>
                </Card.Link>
            </Container>
        </Container>
    );
};

export default Client;
