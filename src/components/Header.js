import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useWindowWidth } from '@react-hook/window-size';
import { Bounce } from 'react-reveal';
import { SCREEN_SIZES } from '../constants';
import { profilePicture } from '../assets/img';

const Header = () => {
  const screenWidth = useWindowWidth();

  return (
    <Bounce left>
      <Container className="d-flex justify-content-center">
        <Row className="w-100">
          <Col xs={12} lg={7} className="d-flex justify-content-lg-start justify-content-center">
            <img src={profilePicture} alt="" className={screenWidth > SCREEN_SIZES.LG ? 'profile-picture-lg' : 'profile-picture'} />
          </Col>
          <Col
            xs={12}
            lg={5}
            className="d-lg-flex align-items-center pt-3 pr-0 pr-lg-5 pb-4 pb-lg-0"
          >
            <Row className="w-100 ">
              <Col
                xs={12}
                className={`d-flex justify-content-center ${screenWidth > SCREEN_SIZES.LG ? 'software-developer-lg' : 'software-developer'}`}
              >
                {'<software-developer />'}
              </Col>
              <Col
                xs={{ offset: 1, size: 10 }}
                sm={{ offset: 4, size: 4 }}
                md={{ offset: 3, size: 6 }}
                lg={{ offset: 2, size: 8 }}
                className={`d-flex justify-content-center text-center pt-3 ${screenWidth > SCREEN_SIZES.LG ? 'software-developer-subtitle-lg' : 'software-developer-subtitle'}`}
              >
                Welcome to the official website and online portfolio of Faris Šišić, Software Developer based in Bosnia and Herzegovina. Feel free to scroll down for more info.
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Bounce>
  );
};

export default Header;
