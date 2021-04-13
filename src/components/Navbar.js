import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container, Row, Col,
} from 'reactstrap';
import { useWindowWidth } from '@react-hook/window-size';
import { HamburgerSqueeze } from 'react-animated-burgers';
import { animateScroll } from 'react-scroll';
import { ArrowUp } from 'react-feather';
import cs from 'classnames';
import { logo } from '../assets/img';
import { EVENT_LISTENERS, SCREEN_SIZES } from '../constants';
import LanguageDropdown from './LanguageDropdown';

const Navbar = ({ sidebarOpen, handleSidebar }) => {
  const [scrolled, setScrolled] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const screenWidth = useWindowWidth();

  window.addEventListener(EVENT_LISTENERS.SCROLL, () => {
    if (window.pageYOffset > 150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    if (window.pageYOffset > 300 && window.pageYOffset + window.innerHeight + 50 < document.body.offsetHeight) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  });

  return (
    <Container
      className={cs({
        'navbar-container-lg': screenWidth >= SCREEN_SIZES.LG,
        'navbar-container': screenWidth < SCREEN_SIZES.LG,
        'pt-lg-5': screenWidth >= SCREEN_SIZES.LG && !scrolled,
        'navbar-container-scrolled': scrolled,
        'navbar-container-dropdown-open': screenWidth < SCREEN_SIZES.LG,
        'width-75': screenWidth >= SCREEN_SIZES.SM && sidebarOpen,
        'width-100': screenWidth < SCREEN_SIZES.SM || !sidebarOpen,
      })}
    >
      <Row className="d-flex align-items-center cover-padding">
        <Col xs={6} lg={3} className="d-flex justify-content-start pl-sm-5">
          <img
            src={logo}
            alt=""
            className={
              screenWidth >= SCREEN_SIZES.LG ? `logo-lg ${scrolled ? 'logo-scrolled' : ''}` : 'logo'
            }
          />
        </Col>
        <Col
          xs={6}
          lg={9}
          className="d-flex align-items-center justify-content-end pr-sm-5"
        >
          <LanguageDropdown />
          <HamburgerSqueeze
            barColor="#FFFFFF"
            isActive={sidebarOpen}
            toggleButton={handleSidebar}
          />
        </Col>
      </Row>
      <ArrowUp
        strokeWidth={1}
        color="lightgray"
        size={screenWidth >= SCREEN_SIZES.LG ? 70 : 60}
        className={cs({
          'scroll-to-top-icon cursor-pointer': showScrollToTop && ((screenWidth < SCREEN_SIZES.SM && !sidebarOpen) || screenWidth >= SCREEN_SIZES.SM),
          'scroll-to-top-icon-not-displayed': !showScrollToTop,
          'scroll-to-top-icon-padding': sidebarOpen && screenWidth >= SCREEN_SIZES.SM,
          'scroll-to-top-icon-padding-sm': screenWidth < SCREEN_SIZES.SM,
          'scroll-to-top-display-none': sidebarOpen && screenWidth < SCREEN_SIZES.SM,
        })}
        onClick={() => animateScroll.scrollToTop()}
      />
    </Container>
  );
};

Navbar.propTypes = {
  sidebarOpen: PropTypes.bool.isRequired,
  handleSidebar: PropTypes.func.isRequired,
};

export default Navbar;
