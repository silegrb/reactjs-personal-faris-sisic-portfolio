import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useWindowWidth } from '@react-hook/window-size';
import { ArrowUpCircle } from 'react-feather';
import { animateScroll } from 'react-scroll';
import { PORTFOLIO, SCREEN_SIZES } from '../constants';
import packageJson from '../../package.json';
import { redirect } from '../utils/redirect';
import {
  facebookIcon, githubIcon, instagramIcon, linkedinIcon, youtubeIcon,
} from '../assets/img';

const Footer = () => {
  const screenWidth = useWindowWidth();
  const { content } = PORTFOLIO.BASIC_INFORMATION;

  return (
    <Container className="card-shadow footer d-flex flex-grow-1 align-items-end position-relative justify-content-center">
      <Row className="w-100 pt-5 pb-4">
        <Col
          xs={{ offset: 3, size: 6 }}
          className={`d-flex justify-content-center ${screenWidth > SCREEN_SIZES.LG ? 'lets-connect-container-lg' : 'lets-connect-container'}`}
        >
          Let's connect
        </Col>
        <Col
          xs={{ offset: 2, size: 8 }}
          lg={{ offset: 4, size: 4 }}
          className="pt-3 pb-4 border-bottom-white d-flex justify-content-center align-items-center"
        >
          <img alt="" src={facebookIcon} className="footer-icon mr-2" onClick={() => redirect(content.facebookLink)} />
          <img alt="" src={instagramIcon} className="footer-icon mr-2" onClick={() => redirect(content.instagramLink)} />
          <img alt="" src={youtubeIcon} className="footer-icon mr-2" onClick={() => redirect(content.youtubeLink)} />
          <img alt="" src={linkedinIcon} className="footer-icon mr-2" onClick={() => redirect(content.linkedInLink)} />
          <img alt="" src={githubIcon} className="footer-icon" onClick={() => redirect(content.githubLink)} />
        </Col>
        <Col xs={12} className="d-flex justify-content-center pt-2">
          {`Version ${packageJson.version}`}
        </Col>
        <Col xs={{ offset: 2, size: 8 }} className="d-flex justify-content-center pt-2 text-center">
          &copy;
          {` 2020 ${content.name} ${content.surname}, All Rights Reserved`}
        </Col>
      </Row>
      <div className="position-absolute scroll-to-top-container">
        <ArrowUpCircle color="#ff6b1f" size={70} className="cursor-pointer scroll-to-top-icon" onClick={() => animateScroll.scrollToTop()} />
      </div>
    </Container>
  );
};

export default Footer;
