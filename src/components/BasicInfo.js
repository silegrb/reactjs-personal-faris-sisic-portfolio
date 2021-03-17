import React from 'react';
import { Col, Row } from 'reactstrap';
import Tilt from 'react-tilt/dist/tilt';
import { useWindowWidth } from '@react-hook/window-size';
import { getNumberOfYears } from '../utils/date';
import { SCREEN_SIZES } from '../constants';

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
    <div className="d-flex justify-content-center w-100" id="basic-info">
      <div className="basic-info-container d-flex flex-column">
        <span className="background-text-basic">BASIC</span>
        <span className="background-text-info">INFO</span>
        <Row>
          <Col xs={12} className="d-flex justify-content-center who-am-i pt-5">WHO AM I?</Col>
        </Row>
        <Row className="flex-grow-1 d-flex align-items-center pb-0 pb-sm-5">
          <Col xs={2} sm={1} />
          <Col
            xs={{ offset: 2, size: 8 }}
            sm={{ offset: 0, size: 4 }}
            className="p-0 m-0 mb-4 mb-sm-0"
          >
            {screenWidth >= SCREEN_SIZES.SM
              ? <Tilt options={{ reverse: true, scale: 1, max: 25 }}>{leftBox}</Tilt> : leftBox}
          </Col>
          <Col xs={2} />
          <Col xs={{ offset: 2, size: 8 }} sm={{ offset: 0, size: 4 }} className="p-0">
            {screenWidth >= SCREEN_SIZES.SM
              ? <Tilt options={{ reverse: true, scale: 1, max: 25 }}>{rightBox}</Tilt> : rightBox}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default BasicInfo;
