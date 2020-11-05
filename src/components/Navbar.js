import React, { useEffect, useState } from 'react';
import {
  Container, Row, Col, Collapse,
} from 'reactstrap';
import { useWindowWidth } from '@react-hook/window-size';
import { HamburgerSqueeze } from 'react-animated-burgers';
import { animateScroll, Link } from 'react-scroll';
import {
  ChevronUp, Hexagon,
} from 'react-feather';
import { useTranslation } from 'react-i18next';
import { logo } from '../assets/img';
import { LINK_PROPERTIES, LINKS, SCREEN_SIZES } from '../constants';
import LanguageDropdown from './LanguageDropdown';

const Navbar = () => {
  const { t } = useTranslation();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const screenWidth = useWindowWidth();

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    if (window.pageYOffset > 500) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  });

  useEffect(() => {
    if (screenWidth > SCREEN_SIZES.XS) { setDropdownOpen(false); }
  }, [screenWidth]);

  return (
  // Since design is different on different screen  logic has to be separated
    <Container
      className={
      screenWidth > SCREEN_SIZES.LG
        ? `navbar-container-lg ${scrolled ? 'navbar-container-scrolled pt-3 pb-3' : 'pt-lg-5'}`
        : `navbar-container ${scrolled ? 'navbar-container-scrolled' : ''}`
    }
    >
      <Row className="d-flex align-items-center cover-padding">
        <Col xs={6} lg={3} className="d-flex justify-content-start pl-sm-5">
          <img
            src={logo}
            alt=""
            className={
              screenWidth > SCREEN_SIZES.LG ? `logo-lg ${scrolled ? 'logo-scrolled' : ''}` : 'logo'
            }
          />
        </Col>
        <Col
          xs={6}
          lg={9}
          className="d-flex align-items-center justify-content-end pr-sm-5"
        >
          {screenWidth > SCREEN_SIZES.MD
            ? (
              <>
                {LINKS.map(({ id, title }) => (
                  <Link {...LINK_PROPERTIES} to={id} key={id} onClick={() => setDropdownOpen(false)}>
                    <span className="cursor-pointer mr-3 navbar-item-hover pb-2">
                      {t(title).toUpperCase()}
                    </span>
                  </Link>
                ))}
                <LanguageDropdown hideDropdown={() => setDropdownOpen(false)} />
              </>
            ) : (
              <>
                <LanguageDropdown hideDropdown={() => setDropdownOpen(false)} />
                <HamburgerSqueeze
                  barColor="#FFFFFF"
                  isActive={dropdownOpen}
                  toggleButton={() => setDropdownOpen(!dropdownOpen)}
                />
              </>
            ) }
        </Col>
      </Row>
      <Collapse isOpen={dropdownOpen && screenWidth <= SCREEN_SIZES.MD}>
        <Row className="cursor-pointer hamburger-dropdown d-flex justify-content-center pb-2">
          {LINKS.map(({ id, title }, index) => (
            <Col
              xs={10}
              className={`p-0 py-2 ${index < LINKS.length - 1 ? 'border-bottom-light-gray' : ''}`}
              key={id}
            >
              <Hexagon className="pr-2" color="#ff6b1f" />
              <Link {...LINK_PROPERTIES} to={id} onClick={() => setDropdownOpen(false)}>
                {t(title).toUpperCase()}
              </Link>
            </Col>
          ))}
        </Row>
      </Collapse>
      <ChevronUp
        color="#ffffff"
        size={screenWidth > SCREEN_SIZES.LG ? 70 : 60}
        className={showScrollToTop ? 'scroll-to-top-icon cursor-pointer' : 'scroll-to-top-icon-not-displayed'}
        onClick={() => animateScroll.scrollToTop()}
      />
    </Container>
  );
};

export default Navbar;
