import React from 'react';
import { Col, Row } from 'reactstrap';
import Tilt from 'react-tilt/dist/tilt';
import { useWindowWidth } from '@react-hook/window-size';
import { Fade } from 'react-reveal';
import { getNumberOfYears } from '../../utils/date';
import { SCREEN_SIZES, TILT_PROPERTIES } from '../../constants';
import SpaceParticles from '../ThreeJS/Space';

// TODO Translation
const BasicInfo = () => {
  const screenWidth = useWindowWidth();

  const rightBox = (
    <Row className="w-100 p-0 m-0">
      <Col
        xs={12}
        className="black-box right-black-box d-flex justify-content-center align-items-center p-0 m-0"
      >
        <div className="w-75 text-center">
          Currently working as a full-time Software Development Engineer. Graduated from Faculty
          of Electrical engineering earlier & currently seeking Master's degree at Faculty of Economics and Business
          - Department of Management and Informational Systems.
        </div>
      </Col>
    </Row>
  );

  const leftBox = (
    <Row className="w-100 p-0 m-0">
      <Col
        xs={12}
        className="black-box left-black-box m-0 mb-4 mb-sm-0 d-flex justify-content-center align-items-center p-0"
      >
        <div className="w-75 text-center">
          {`${getNumberOfYears()} year old Software Engineering Developer, 
            from Bosnia and Herzegowina, Sarajevo. Focused on constant and never-ending self-improvement.`}
        </div>
      </Col>
    </Row>
  );

  return (
    <div className="d-flex justify-content-center w-100 position-relative" id="basic-info">
      <div className="basic-info-container d-flex flex-column">
        <SpaceParticles />
        <span className="background-text-basic-info">BASIC INFO</span>
        <span className="background-text-basic">BASIC</span>
        <span className="background-text-info">INFO</span>
        <Row>
          <Col xs={12} className="d-flex justify-content-center who-am-i pt-5 pb-3 pb-sm-0">WHO AM I?</Col>
        </Row>
        <Row className="flex-grow-1 d-flex align-items-center pb-0 pb-sm-5">
          <Col xs={2} sm={1} />
          <Col
            xs={8}
            sm={4}
            className="p-0 m-0 mb-4 mb-sm-0"
          >
            <Fade bottom>
              {screenWidth >= SCREEN_SIZES.SM
                ? <Tilt options={TILT_PROPERTIES}>{leftBox}</Tilt> : leftBox}
            </Fade>
          </Col>
          <Col xs={2} />
          <Col xs={{ offset: 2, size: 8 }} sm={{ offset: 0, size: 4 }} className="p-0">
            <Fade bottom>
              {screenWidth >= SCREEN_SIZES.SM
                ? <Tilt options={TILT_PROPERTIES}>{rightBox}</Tilt> : rightBox}
            </Fade>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default BasicInfo;
