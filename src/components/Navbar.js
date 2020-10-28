import React, { useEffect, useState } from 'react';
import {
  Container, Row, Col, Collapse,
} from 'reactstrap';
import { useWindowWidth } from '@react-hook/window-size';
import FlipBox from 'react-card-flip';
import { HamburgerSqueeze } from 'react-animated-burgers';
import { animateScroll, Link } from 'react-scroll';
import {
  ChevronUp, Hexagon,
} from 'react-feather';
import { useTranslation } from 'react-i18next';
import {
  bhLangIcon, enLangIcon, logo,
} from '../assets/img';
import { LINK_PROPERTIES, SCREEN_SIZES } from '../constants';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const [mainLanguageSelected, setMainLanguageSelected] = useState(localStorage.getItem('language') === 'en');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const screenWidth = useWindowWidth();

  const flipBoxLanguages = (
    <FlipBox isFlipped={mainLanguageSelected} flipDirection="vertical">
      <img
        src={bhLangIcon}
        alt=""
        className="lang-icon cursor-pointer"
        onClick={() => setMainLanguageSelected(!mainLanguageSelected)}
      />
      <img
        src={enLangIcon}
        alt=""
        className="lang-icon cursor-pointer"
        onClick={() => setMainLanguageSelected(!mainLanguageSelected)}
      />
    </FlipBox>
  );

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

  useEffect(() => {
    (async () => {
      await i18n.changeLanguage(mainLanguageSelected ? 'en' : 'bh');
      localStorage.setItem('language', mainLanguageSelected ? 'en' : 'bh');
    })();

    // eslint-disable-next-line
  }, [mainLanguageSelected]);

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
                <Link {...LINK_PROPERTIES} to="basic-information">
                  <span className="cursor-pointer mr-3 navbar-item-hover pb-2">
                    {t('components.basicInformation').toUpperCase()}
                  </span>
                </Link>
                <Link {...LINK_PROPERTIES} to="work-experience">
                  <span className="cursor-pointer mr-3 navbar-item-hover pb-2">
                    {t('components.workExperience').toUpperCase()}
                  </span>
                </Link>
                <Link {...LINK_PROPERTIES} to="education">
                  <span className="cursor-pointer mr-3 navbar-item-hover pb-2">
                    {t('components.education').toUpperCase()}
                  </span>
                </Link>
                <Link {...LINK_PROPERTIES} to="skills">
                  <span className="cursor-pointer mr-3 navbar-item-hover pb-2">
                    {t('components.skills').toUpperCase()}
                  </span>
                </Link>
                <Link {...LINK_PROPERTIES} to="projects-and-awards" activeClass="section-active">
                  <span className="cursor-pointer mr-3 navbar-item-hover pb-2">
                    {t('components.projectsAndAwards').toUpperCase()}
                  </span>
                </Link>
                {flipBoxLanguages}
              </>
            ) : (
              <>
                {flipBoxLanguages}
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
          <Col xs={10} className="p-0 py-2 border-bottom-light-gray">
            <Hexagon className="pr-2" color="#ff6b1f" />
            <Link {...LINK_PROPERTIES} to="basic-information">
              {t('components.basicInformation').toUpperCase()}
            </Link>
          </Col>
          <Col xs={10} className="p-0 py-2 border-bottom-light-gray">
            <Hexagon className="pr-2" color="#ff6b1f" />
            <Link {...LINK_PROPERTIES} to="work-experience">
              {t('components.workExperience').toUpperCase()}
            </Link>
          </Col>
          <Col xs={10} className="p-0 py-2 border-bottom-light-gray">
            <Hexagon className="pr-2" color="#ff6b1f" />
            <Link {...LINK_PROPERTIES} to="education">
              {t('components.education').toUpperCase()}
            </Link>
          </Col>
          <Col xs={10} className="p-0 py-2 border-bottom-light-gray">
            <Hexagon className="pr-2" color="#ff6b1f" />
            <Link {...LINK_PROPERTIES} to="skills">
              {t('components.skills').toUpperCase()}
            </Link>
          </Col>
          <Col xs={10} className="p-0 py-2">
            <Hexagon className="pr-2" color="#ff6b1f" />
            <Link {...LINK_PROPERTIES} to="projects-and-awards">
              {t('components.projectsAndAwards').toUpperCase()}
            </Link>
          </Col>
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
