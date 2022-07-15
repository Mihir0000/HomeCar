import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import './Knowledge.css';

const Knowledge = () => {
    return (
        <Container fluid className="knowledge_section layout_padding">
            <Container>
                <Row className="knowledge_main">
                    <Col className="left_main">
                        <Card.Title
                            className="knowledge_taital"
                            style={{ fontSize: '40px' }}
                        >
                            Knowledge of center
                        </Card.Title>
                        <Card.Text className="knowledge_text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam
                        </Card.Text>
                    </Col>
                    <Col className="right_main d-flex align-item-center justify-content-center">
                        <Card
                            className="play_icon bg-transparent"
                            style={{ border: 'none' }}
                        >
                            <Card.Link href="/#">
                                <Image
                                    src="/static/img/play-icon.png"
                                    alt="play"
                                />
                            </Card.Link>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Knowledge;
