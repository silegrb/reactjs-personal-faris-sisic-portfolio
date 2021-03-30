import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { useWindowWidth } from '@react-hook/window-size';
import cs from 'classnames';
import { connect } from 'react-redux';
import { FOOTER_LINKS, SCREEN_SIZES } from '../constants';
import { openInNewTab } from '../utils/openInNewTab';
import {
  facebookIcon, githubIcon, instagramIcon, linkedinIcon, youtubeIcon,
} from '../assets/img';
import { setScrolledToTop } from '../redux/actions/homeActions';

// TODO Translation
const Footer = ({ sidebarOpen, setScrolledToTop }) => {
  const screenWidth = useWindowWidth();
  const history = useHistory();
  const location = useLocation();

  return (
    <Container className={cs('footer d-flex flex-grow-1 align-items-end justify-content-center', {
      'width-100': screenWidth <= SCREEN_SIZES.SM || !sidebarOpen,
      'width-75': sidebarOpen && screenWidth > SCREEN_SIZES.SM,
    })}
    >
      <Row className="w-100 pb-4">
        <Col
          xs={12}
          className="d-flex justify-content-center lets-connect-container"
        >
          LET'S CONNECT
        </Col>
        <Col
          xs={12}
          className="pb-4 d-flex justify-content-center align-items-center"
        >
          <div className="footer-icon-container d-flex justify-content-center align-items-center">
            <img
              alt=""
              src={facebookIcon}
              className="footer-icon"
              onClick={() => openInNewTab(FOOTER_LINKS.FACEBOOK)}
            />
          </div>
          <div className="footer-icon-container d-flex justify-content-center align-items-center">
            <img
              alt=""
              src={instagramIcon}
              className="footer-icon"
              onClick={() => openInNewTab(FOOTER_LINKS.INSTAGRAM)}
            />
          </div>
          <div className="footer-icon-container d-flex justify-content-center align-items-center">
            <img
              alt=""
              src={youtubeIcon}
              className="footer-icon"
              onClick={() => openInNewTab(FOOTER_LINKS.YOUTUBE)}
            />
          </div>
          <div className="footer-icon-container d-flex justify-content-center align-items-center">
            <img
              alt=""
              src={linkedinIcon}
              className="footer-icon"
              onClick={() => openInNewTab(FOOTER_LINKS.LINKED_IN)}
            />
          </div>
          <div className="footer-icon-container d-flex justify-content-center align-items-center">
            <img
              alt=""
              src={githubIcon}
              className="footer-icon"
              onClick={() => openInNewTab(FOOTER_LINKS.GITHUB)}
            />
          </div>
        </Col>
        <Col
          className="p-0"
          xs={12}
          sm={{ offset: 3, size: 6 }}
        >
          <Row className="w-100 p-0 m-0 footer-links-container">
            <Col
              xs={3}
              className="cursor-pointer"
              onClick={() => {
                if (location.pathname !== '/') { history.push('/'); }
                setScrolledToTop();
              }}
            >
              HOME
            </Col>
            <Col xs={6} className="text-center cursor-pointer">INSTRUCTIONS</Col>
            <Col xs={3} className="text-right cursor-pointer">CONTACT</Col>
          </Row>
        </Col>
        <Col
          xs={{ offset: 1, size: 10 }}
          className="d-flex justify-content-center pt-2 text-center all-rights-reserved-container"
        >
          &copy;
          2021 Šišić Faris, All Rights Reserved
        </Col>
      </Row>
    </Container>
  );
};

Footer.propTypes = {
  sidebarOpen: PropTypes.bool.isRequired,
  setScrolledToTop: PropTypes.func.isRequired,
};

export default connect(null, { setScrolledToTop })(Footer);
