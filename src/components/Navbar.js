import React, { useEffect, useState } from 'react';
import {
  Container, Row, Col, Collapse,
} from 'reactstrap';
import { useWindowWidth } from '@react-hook/window-size';
import FlipBox from 'react-card-flip';
import { HamburgerSqueeze } from 'react-animated-burgers';
import { Link } from 'react-scroll';
import {
  bhLangIcon, enLangIcon, logo, profilePicture,
} from '../assets/img';
import { SCREEN_SIZES } from '../constants';

const Navbar = () => {
  const [mainLanguageSelected, setMainLanguageSelected] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const screenWidth = useWindowWidth();

  useEffect(() => {
    if (screenWidth > SCREEN_SIZES.XS) { setDropdownOpen(false); }
  }, [screenWidth]);

  return (
  // Since design is different on different screen  logic has to be separated
    <Container className="navbar-container">
      <Row className="d-flex align-items-center pt-5 cover-padding">
        <Col xs={12} lg={3} className="d-flex justify-content-center justify-content-lg-start pl-sm-5">
          <img src={logo} alt="" className="logo" />
        </Col>
        <Col
          xs={12}
          lg={9}
          className="d-flex align-items-center justify-content-between justify-content-lg-end pr-sm-5"
        >
          {screenWidth > SCREEN_SIZES.MD
            ? (
              <>
                <Link spy smooth to="basic-information">
                  <span className="cursor-pointer mr-3 navbar-item-hover pb-2">BASIC INFORMATION</span>
                </Link>
                <Link spy smooth to="work-experience">
                  <span className="cursor-pointer mr-3 navbar-item-hover pb-2">WORK EXPERIENCE</span>
                </Link>
                <Link spy smooth to="education">
                  <span className="cursor-pointer mr-3 navbar-item-hover pb-2">EDUCATION</span>
                </Link>
                <Link spy smooth to="skills">
                  <span className="cursor-pointer mr-3 navbar-item-hover pb-2">SKILLS</span>
                </Link>
                <Link spy smooth to="projects-and-awards" activeClass="section-active">
                  <span className="cursor-pointer mr-3 navbar-item-hover pb-2">PROJECTS & AWARDS</span>
                </Link>
              </>
            ) : (
              <HamburgerSqueeze
                barColor="#FFFFFF"
                isActive={dropdownOpen}
                toggleButton={() => setDropdownOpen(!dropdownOpen)}
                className="ml-4"
              />
            ) }
          <FlipBox isFlipped={mainLanguageSelected} flipDirection="vertical">
            <img
              src={bhLangIcon}
              alt=""
              className="lang-icon cursor-pointer mr-4 mr-sm-0"
              onClick={() => setMainLanguageSelected(!mainLanguageSelected)}
            />
            <img
              src={enLangIcon}
              alt=""
              className="lang-icon cursor-pointer mr-4 mr-sm-0"
              onClick={() => setMainLanguageSelected(!mainLanguageSelected)}
            />
          </FlipBox>
        </Col>
      </Row>
      <Collapse isOpen={dropdownOpen && screenWidth <= SCREEN_SIZES.MD}>
        <Row className="cursor-pointer hamburger-dropdown d-flex justify-content-center ml-4">
          <Col xs={12} className="pt-3">
            <Link spy smooth to="basic-information">BASIC INFORMATION</Link>
          </Col>
          <Col xs={12} className="pt-3">
            <Link spy smooth to="work-experience">WORK EXPERIENCE</Link>
          </Col>
          <Col xs={12} className="pt-3">
            <Link spy smooth to="education">EDUCATION</Link>
          </Col>
          <Col xs={12} className="pt-3">
            <Link spy smooth to="skills">SKILLS</Link>
          </Col>
          <Col xs={12} className="pt-3">
            <Link spy smooth to="projects-and-awards">PROJECTS & AWARDS</Link>
          </Col>
        </Row>
      </Collapse>
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
  );
};

export default Navbar;
