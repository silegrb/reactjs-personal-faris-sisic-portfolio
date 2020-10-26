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
import { Fade } from 'react-reveal';
import { useTranslation } from 'react-i18next';
import {
  PORTFOLIO,
  PORTFOLIO_SECTION_PROPERTIES,
  SCREEN_SIZES,
} from '../../constants';
import { formatDate } from '../../utils/date';

const BasicInformationSection = () => {
  const { t } = useTranslation();

  const [title, content] = [PORTFOLIO.BASIC_INFORMATION.title, PORTFOLIO.BASIC_INFORMATION.content];
  const screenWidth = useWindowWidth();

  return (
    <Fade {...PORTFOLIO_SECTION_PROPERTIES}>
      <Card className="section card-shadow ml-3" id="basic-information">
        <div className="section-title d-flex align-items-center pl-2 pl-sm-4">
          {t(title).toUpperCase()}
        </div>
        <CardBody>
          <Container>
            <Row className="w-100">
              <Col
                xs={12}
                lg={5}
                className={
              `d-flex justify-content-center align-items-center pb-4 pb-lg-0 ${
                screenWidth > SCREEN_SIZES.MD ? 'border-right-light-gray' : 'border-bottom-light-gray'
              }`
              }
              >
                <Row className="d-flex align-items-center">
                  <Col xs={7} className="d-flex justify-content-end align-items-center ">
                    <LaptopOutlined className="light-gray-icon-big" />
                  </Col>
                  <Col xs={5}>
                    <Row className="w-100 m-0">
                      <Col xs={12} className="d-flex justify-content-center font-size-bigger">
                        {content.name.toUpperCase()}
                      </Col>
                      <Col xs={12} className="d-flex justify-content-center text-justify letter-spacing">
                        {content.surname.toUpperCase()}
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} lg={7} className="pt-4 pt-lg-0">
                <Row className="w-100">
                  <Col xs={12} className="d-flex align-items-center pb-3">
                    <CalendarOutlined className="light-gray-icon pr-3" />
                    {formatDate(content.dateOfBirth)}
                  </Col>
                  <Col xs={12} className="d-flex align-items-center pb-3">
                    <IdcardOutlined className="light-gray-icon pr-3" />
                    {t(content.gender)}
                  </Col>
                  <Col xs={12} className="d-flex align-items-center pb-3">
                    <GlobalOutlined className="light-gray-icon pr-3" />
                    {t(content.nationality)}
                  </Col>
                  <Col xs={12} className="d-flex align-items-center pb-3">
                    <PhoneOutlined className="light-gray-icon pr-3" />
                    {content.mobilePhone}
                  </Col>
                  <Col xs={12} className="d-flex align-items-center pb-3">
                    <MailOutlined className="light-gray-icon pr-3" />
                    {content.emailAddress}
                  </Col>
                  <Col xs={12} className="d-flex align-items-center pb-3">
                    <EnvironmentOutlined className="light-gray-icon pr-3" />
                    {content.address}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </CardBody>
        <div className="section-footer" />
      </Card>
    </Fade>
  );
};

export default BasicInformationSection;
