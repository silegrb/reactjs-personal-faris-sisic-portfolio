import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import {
  EnvironmentOutlined,
  ChromeOutlined,
  CalendarOutlined,
} from '@ant-design/icons';
import { useWindowWidth } from '@react-hook/window-size';
import { useTranslation } from 'react-i18next';
import { Fade } from 'react-reveal';
import { formatDate } from '../../utils/date';
import { PORTFOLIO_SECTION_PROPERTIES, SCREEN_SIZES } from '../../constants';

const EducationItem = ({
  title,
  educationalInstitution,
  date,
  startDate,
  startDateFormatter,
  endDate,
  endDateFormatter,
  location,
  website,
  avatar,
}) => {
  const { t } = useTranslation();

  const screenWidth = useWindowWidth();

  const dateColumn = (
    <Col
      xs={12}
      lg={3}
      className={`d-flex align-items-center justify-content-start justify-content-lg-end pb-lg-0 ${website || location ? 'pb-2' : ''}`}
    >
      {screenWidth <= SCREEN_SIZES.MD && <CalendarOutlined className="light-gray-icon pr-3" />}
      {date ? formatDate(date)
        : `${formatDate(startDate, startDateFormatter)} - ${endDate ? formatDate(endDate, endDateFormatter) : 'Present'}`}
    </Col>
  );
  const lineColumn = (
    <Col xs={1} className="p-0">
      <Row className="w-100 h-50 border-bottom m-0" />
    </Col>
  );
  const avatarColumn = <Col xs={2} md={1} className="p-0"><img alt="" src={avatar} className="items-avatar" /></Col>;
  const positionColumn = (
    <Col xs={10} md={7} className="d-flex justify-content-start align-items-center items-title">
      {t(title)}
    </Col>
  );

  return (
    <Fade {...PORTFOLIO_SECTION_PROPERTIES}>
      <Container>
        <Row className="w-100">
          {screenWidth >= SCREEN_SIZES.MD ? (
            <>
              {dateColumn}
              {lineColumn}
              {avatarColumn}
              {positionColumn}
            </>
          ) : (
            <>
              {avatarColumn}
              {positionColumn}
              {screenWidth >= SCREEN_SIZES.LG && dateColumn}
            </>
          )}
          <Col
            xs={12}
            lg={{ offset: 5, size: 7 }}
            className={`pt-3 pt-lg-0 d-flex justify-content-start align-items-center items-subtitle ${location || website ? 'pb-2' : ''}`}
          >
            {t(educationalInstitution)}
          </Col>
          {screenWidth <= SCREEN_SIZES.MD && dateColumn}
          {location && (
            <Col
              xs={12}
              lg={{ offset: 5, size: 7 }}
              className={`item-hover cursor-pointer d-flex justify-content-start align-items-center ${website ? 'pb-2' : ''}`}
            >
              <EnvironmentOutlined className="light-gray-icon pr-3" />
              {location}
            </Col>
          )}
          {website && (
            <Col
              xs={12}
              lg={{ offset: 5, size: 7 }}
              className="item-hover cursor-pointer d-flex justify-content-start align-items-center"
            >
              <ChromeOutlined className="light-gray-icon pr-3" />
              <a href={`https://${website}`}>
                {website}
              </a>
            </Col>
          )}
        </Row>
      </Container>
    </Fade>
  );
};

EducationItem.propTypes = {
  title: PropTypes.string.isRequired,
  educationalInstitution: PropTypes.string.isRequired,
  date: PropTypes.object,
  startDate: PropTypes.object,
  startDateFormatter: PropTypes.string,
  endDate: PropTypes.object,
  endDateFormatter: PropTypes.string,
  location: PropTypes.string,
  website: PropTypes.string,
  avatar: PropTypes.string,
};

export default EducationItem;
