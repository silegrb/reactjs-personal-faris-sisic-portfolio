import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import {
  Container, Row, Col, Collapse,
} from 'reactstrap';
import cs from 'classnames';
import {
  ChevronDown, ChevronRight,
} from 'react-feather';
import { useWindowWidth } from '@react-hook/window-size';
import { Link } from 'react-scroll';
import { connect } from 'react-redux';
import { LINK_PROPERTIES, SCREEN_SIZES } from '../constants';
import { setScrolledToBasicInfo } from '../redux/actions/homeActions';

const Sidebar = ({ isOpen, handleSidebar, setScrolledToBasicInfo }) => {
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [instructionsDropdownOpen, setInstructionsDropdownOpen] = useState(false);
  const screenWidth = useWindowWidth();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (!isOpen) { setHomeDropdownOpen(false); }
  }, [isOpen]);

  return (
    <Container className={cs('sidebar-container m-0 p-0  d-flex align-items-center', {
      'width-0': !isOpen,
      'width-25': isOpen && screenWidth >= SCREEN_SIZES.SM,
    })}
    >
      <Row className="p-0 m-0">
        <Col
          xs={12}
          className="sidebar-item d-flex align-items-center justify-content-between pl-lg-5 pr-lg-5"
          onClick={() => setHomeDropdownOpen(!homeDropdownOpen)}
        >
          HOME
          {homeDropdownOpen
            ? <ChevronDown color="white" size={36} />
            : <ChevronRight color="white" size={36} />}
        </Col>
        <Collapse isOpen={homeDropdownOpen} className="w-100">
          <Col
            xs={12}
            className="sidebar-sub-item d-flex align-items-center pl-lg-5 pr-lg-5"
          >
            <Link
              {...LINK_PROPERTIES}
              to="basic-info"
              spy
              smooth
              className="w-100"
              onClick={() => {
                if (location.pathname !== '/') { history.push('/'); }
                setScrolledToBasicInfo();
                if (screenWidth < SCREEN_SIZES.SM) { handleSidebar(); }
              }}
            >
              BASIC INFO
            </Link>
          </Col>
          <Col xs={12} className="sidebar-sub-item d-flex align-items-center pl-lg-5 pr-lg-5">
            EDUCATION
          </Col>
          <Col xs={12} className="sidebar-sub-item d-flex align-items-center pl-lg-5 pr-lg-5">SKILLS</Col>
          <Col xs={12} className="sidebar-sub-item d-flex align-items-center pl-lg-5 pr-lg-5">WORK EXPERIENCE</Col>
        </Collapse>
        <Col
          xs={12}
          className="sidebar-item d-flex justify-content-between align-items-center pl-lg-5 pr-lg-5"
          onClick={() => setInstructionsDropdownOpen(!instructionsDropdownOpen)}
        >
          INSTRUCTIONS
          {instructionsDropdownOpen
            ? <ChevronDown color="white" size={36} />
            : <ChevronRight color="white" size={36} />}
        </Col>
        <Collapse isOpen={instructionsDropdownOpen} className="w-100">
          <Col xs={12} className="sidebar-sub-item d-flex align-items-center pl-lg-5 pr-lg-5">INFO</Col>
          <Col xs={12} className="sidebar-sub-item d-flex align-items-center pl-lg-5 pr-lg-5">CLIENT FEEDBACK</Col>
        </Collapse>
        <Col xs={12} className="sidebar-item d-flex align-items-center pl-lg-5 pr-lg-5">
          CONTACT
        </Col>
      </Row>
    </Container>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleSidebar: PropTypes.func.isRequired,
  setScrolledToBasicInfo: PropTypes.func.isRequired,
};

export default connect(null, { setScrolledToBasicInfo })(Sidebar);
