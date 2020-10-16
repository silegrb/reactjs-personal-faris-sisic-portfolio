import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Portfolio from '../components/Portfolio';

const Content = () => (
  <div className="portfolio-container">
    <Container>
      <Row>
        <Col xs={12} lg={8}>
          <Portfolio />
        </Col>
      </Row>
    </Container>
  </div>
);

export default Content;
