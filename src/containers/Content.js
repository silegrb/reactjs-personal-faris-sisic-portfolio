import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Portfolio from '../components/Portfolio';
import Header from '../components/Header';

const Content = () => (
  <Container>
    <Row>
      <Col xs={12}>
        <Header />
      </Col>
    </Row>
    <Row>
      <Col xs={12} lg={8}>
        <Portfolio />
      </Col>
    </Row>
  </Container>
);

export default Content;
