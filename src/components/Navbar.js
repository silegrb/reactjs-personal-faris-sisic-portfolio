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
        <Col xs={12} sm={3} className="d-flex justify-content-center justify-content-sm-start pl-sm-5">
          <img src={logo} alt="" className="logo" />
        </Col>
        <Col
          xs={12}
          sm={9}
          className="d-flex align-items-center justify-content-between justify-content-sm-end pr-sm-5"
        >
          {screenWidth > SCREEN_SIZES.XS
            ? (
              <>
                <Link spy smooth to="basic-information">
                  <span className="cursor-pointer pr-3">BASIC INFORMATION</span>
                </Link>
                <Link spy smooth to="work-experience">
                  <span className="cursor-pointer pr-3">WORK EXPERIENCE</span>
                </Link>
                <Link spy smooth to="education">
                  <span className="cursor-pointer pr-3">EDUCATION</span>
                </Link>
                <Link spy smooth to="skills">
                  <span className="cursor-pointer pr-3">SKILLS</span>
                </Link>
                <Link spy smooth to="projects-and-awards" activeClass="section-active">
                  <span className="cursor-pointer pr-3">PROJECTS & AWARDS</span>
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
      <Collapse isOpen={dropdownOpen && screenWidth <= SCREEN_SIZES.XS}>
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
      <div className={screenWidth > SCREEN_SIZES.XS ? 'profile-picture-container-sm' : 'profile-picture-container'}>
        <img src={profilePicture} alt="" className="profile-picture" />
      </div>
    </Container>
  );
};

export default Navbar;
