import React from 'react';
import {
  Container, Row, Col, Button,
} from 'reactstrap';
import { useWindowWidth } from '@react-hook/window-size';
import { useHistory } from 'react-router-dom';
import { Fade } from 'react-reveal';
import { useTranslation } from 'react-i18next';
import { PORTFOLIO_SECTION_PROPERTIES, SCREEN_SIZES } from '../constants';

const PageNotFound = () => {
  const { t } = useTranslation();

  const screenWidth = useWindowWidth();
  const history = useHistory();

  return (
    <Fade {...PORTFOLIO_SECTION_PROPERTIES}>
      <Container className="d-flex justify-content-center pt-5 page-not-found-container">
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
            {`<${t('components.pageNotFound')} />`}
          </Col>
          <Col
            xs={{ offset: 1, size: 10 }}
            sm={{ offset: 2, size: 8 }}
            md={{ offset: 3, size: 6 }}
            lg={{ offset: 4, size: 4 }}
            className={`d-flex justify-content-center text-center pt-2 
          ${screenWidth > SCREEN_SIZES.LG ? 'page-not-found-instructions-lg' : 'page-not-found-instructions'}`}
          >
            {`${t('components.pageNotFoundMessage')}.`}
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
              {t('button.goBackHome').toUpperCase()}
            </Button>
          </Col>
        </Row>
      </Container>
    </Fade>
  );
};

export default PageNotFound;
