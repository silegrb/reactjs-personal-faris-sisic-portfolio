import React from 'react';
import {
  Container, Row, Col, Button,
} from 'reactstrap';
import { useWindowWidth } from '@react-hook/window-size';
import { useHistory } from 'react-router-dom';
import { SCREEN_SIZES } from '../constants';

const PageNotFound = () => {
  const screenWidth = useWindowWidth();
  const history = useHistory();

  return (
    <Container className="d-flex justify-content-center pt-5">
      <Row className="w-100">
        <Col
          xs={12}
          className={`d-flex justify-content-center align-items-center ${screenWidth > SCREEN_SIZES.LG ? 'four-o-four-lg' : 'four-o-four'}`}
        >
          404
        </Col>
        <Col
          xs={12}
          className={`d-flex justify-content-center ${screenWidth > SCREEN_SIZES.LG ? 'page-not-found-lg' : 'page-not-found'}`}
        >
          {'<page-not-found />'}
        </Col>
        <Col
          xs={{ offset: 1, size: 10 }}
          sm={{ offset: 2, size: 8 }}
          md={{ offset: 3, size: 6 }}
          lg={{ offset: 4, size: 4 }}
          className={`d-flex justify-content-center text-center pt-2 
          ${screenWidth > SCREEN_SIZES.LG ? 'page-not-found-instructions-lg' : 'page-not-found-instructions'}`}
        >
          Sorry, but page you are looking for does not exist or has been removed. You probably entered the wrong URL or something.
        </Col>
        <Col
          xs={{ offset: 1, size: 10 }}
          sm={{ offset: 2, size: 8 }}
          md={{ offset: 3, size: 6 }}
          lg={{ offset: 4, size: 4 }}
          className=" pt-4 pt-lg-5 border-bottom-white"
        />
        <Col
          xs={12}
          className="d-flex justify-content-center pt-4 pt-lg-5"
        >
          <Button
            onClick={() => history.push('/')}
            className={`font-weight-light px-4 py-2 ${screenWidth > SCREEN_SIZES.LG ? 'go-back-button-lg' : 'go-back-button'}`}
          >
            GO BACK HOME
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PageNotFound;
