import React from 'react';
import {
  Card, CardBody, Container, Row, Col,
} from 'reactstrap';
import {
  IdcardOutlined,
  GlobalOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
  LaptopOutlined,
} from '@ant-design/icons';
import { useWindowWidth } from '@react-hook/window-size';
import { PORTFOLIO, SCREEN_SIZES } from '../constants';
import { formatDate } from '../utils/date';

const BasicInformationSection = () => {
  const [title, content] = [PORTFOLIO.BASIC_INFORMATION.title, PORTFOLIO.BASIC_INFORMATION.content];
  const screenWidth = useWindowWidth();

  return (
    <Card className="section card-shadow" id="basic-information">
      <div className="section-title d-flex align-items-center pl-1 pl-sm-4">{title}</div>
      <CardBody>
        <Container>
          <Row className="w-100">
            <Col
              xs={12}
              lg={5}
              className={
              `d-flex justify-content-center align-items-center pb-4 pb-lg-0 ${
                screenWidth > SCREEN_SIZES.MD ? 'border-right-aqua' : 'border-bottom-aqua'
              }`
              }
            >
              <Row className="d-flex align-items-center">
                <Col xs={7} className="d-flex justify-content-end align-items-center ">
                  <LaptopOutlined className="aqua-icon-big" />
                </Col>
                <Col xs={5}>
                  <Row className="w-100 m-0">
                    <Col xs={12} className="d-flex justify-content-center font-size-bigger">
                      {content.name.toUpperCase()}
                    </Col>
                    {/* TODO Remove style, add className */}
                    <Col xs={12} style={{ letterSpacing: '12px', marginLeft: '6px' }} className="d-flex justify-content-center text-justify">
                      {content.surname.toUpperCase()}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col xs={12} lg={7} className="pt-4 pt-lg-0">
              <Row className="w-100">
                <Col xs={12} className="d-flex align-items-center pb-3">
                  <CalendarOutlined className="aqua-icon pr-3" />
                  {formatDate(content.dateOfBirth)}
                </Col>
                <Col xs={12} className="d-flex align-items-center pb-3">
                  <IdcardOutlined className="aqua-icon pr-3" />
                  {content.gender}
                </Col>
                <Col xs={12} className="d-flex align-items-center pb-3">
                  <GlobalOutlined className="aqua-icon pr-3" />
                  {content.nationality}
                </Col>
                <Col xs={12} className="d-flex align-items-center pb-3">
                  <PhoneOutlined className="aqua-icon pr-3" />
                  {content.mobilePhone}
                </Col>
                <Col xs={12} className="d-flex align-items-center pb-3">
                  <MailOutlined className="aqua-icon pr-3" />
                  {content.emailAddress}
                </Col>
                <Col xs={12} className="d-flex align-items-center pb-3">
                  <EnvironmentOutlined className="aqua-icon pr-3" />
                  {content.address}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </CardBody>
      <div className="section-footer" />
    </Card>
  );
};

export default BasicInformationSection;
