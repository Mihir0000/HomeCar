import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import './News.css';

const News = ({ time }) => {
    return (
        <Container fluid className="news_section layout_padding">
            <Card className="container bg-transparent border-0">
                <Card.Title className="health_taital fs-1 pb-2">
                    Why choose {time} home care
                </Card.Title>
                <Card.Text className="health_text pb-3">
                    labore et dolore magna aliqua. Ut enim ad minim veniam
                </Card.Text>
                <Card.Body className="news_section_2 layout_padding">
                    <Row>
                        <Col lg={4} sm={6}>
                            <Card.Subtitle className="box_main">
                                <Card.Subtitle className="icon_1">
                                    <Image
                                        style={{ width: '50px' }}
                                        src="static/img/icon-2.png"
                                        alt="icon"
                                    />
                                </Card.Subtitle>
                                <Card.Text className="daily_text fs-4">
                                    Daily care experts
                                </Card.Text>
                            </Card.Subtitle>
                        </Col>
                        <Col lg={4} sm={6}>
                            <Card.Subtitle className="box_main active">
                                <Card.Subtitle className="icon_1">
                                    <Image
                                        style={{ width: '55px' }}
                                        src="static/img/icon-3.png"
                                        alt="icon"
                                    />
                                </Card.Subtitle>
                                <Card.Text className="daily_text_1 fs-4">
                                    Available 24/7
                                </Card.Text>
                            </Card.Subtitle>
                        </Col>
                        <Col lg={4} sm={6}>
                            <Card.Subtitle className="box_main">
                                <Card.Subtitle className="icon_1">
                                    <Image
                                        style={{ width: '40px' }}
                                        src="static/img/icon-4.png"
                                        alt="icon"
                                    />
                                </Card.Subtitle>
                                <Card.Text className="daily_text_1 fs-4">
                                    Balanced care
                                </Card.Text>
                            </Card.Subtitle>
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer className="getquote_bt bg-transparent border-0">
                    <Card.Link
                        href="/#"
                        className="d-flex justify-content-between"
                    >
                        Get A Quote
                        <Card.Subtitle className="d-flex align-self-center m-2">
                            <Image
                                src="static/img/right-arrow.png"
                                alt="right-arrow"
                            />
                        </Card.Subtitle>
                    </Card.Link>
                </Card.Footer>
            </Card>
        </Container>
    );
};

export default News;
