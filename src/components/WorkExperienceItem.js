import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import {
  EnvironmentOutlined,
  ChromeOutlined,
  CalendarOutlined,
} from '@ant-design/icons';
import { useWindowWidth } from '@react-hook/window-size';
import { formatDate } from '../utils/date';
import { SCREEN_SIZES } from '../constants';

const WorkExperienceItem = ({
  position,
  workplace,
  startDate,
  endDate,
  location,
  website,
  avatar,
}) => {
  const screenWidth = useWindowWidth();

  const dateColumn = (
    <Col
      xs={12}
      lg={3}
      className={`d-flex align-items-center justify-content-start justify-content-lg-end pb-lg-0 ${website || location ? 'pb-2' : ''}`}
    >
      {screenWidth <= SCREEN_SIZES.MD && <CalendarOutlined className="aqua-icon pr-3" />}
      {`${formatDate(startDate)} - ${endDate ? formatDate(endDate) : 'Present'}`}
    </Col>
  );
  const lineColumn = (
    <Col xs={1} className="p-0">
      <Row className="w-100 h-50 border-bottom m-0" />
    </Col>
  );
  const avatarColumn = <Col xs={2} md={1} className="p-0"><img alt="" src={avatar} className="items-avatar" /></Col>;
  const positionColumn = <Col xs={10} md={7} className="d-flex justify-content-start align-items-center items-title">{position}</Col>;

  return (
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
            {screenWidth > SCREEN_SIZES.LG && dateColumn}
          </>
        )}
        <Col
          xs={12}
          lg={{ offset: 5, size: 7 }}
          className={`pt-3 pt-lg-0 d-flex justify-content-start align-items-center items-subtitle ${location || website ? 'pb-2' : ''}`}
        >
          {workplace}
        </Col>
        {screenWidth <= SCREEN_SIZES.MD && dateColumn}
        {location && (
          <Col
            xs={12}
            lg={{ offset: 5, size: 7 }}
            className={`item-hover cursor-pointer d-flex justify-content-start align-items-center ${website ? 'pb-2' : ''}`}
          >
            <EnvironmentOutlined className="aqua-icon pr-3" />
            {location}
          </Col>
        )}
        {website && (
          <Col
            xs={12}
            lg={{ offset: 5, size: 7 }}
            className="item-hover cursor-pointer d-flex justify-content-start align-items-center"
          >
            <ChromeOutlined className="aqua-icon pr-3" />
            <a href={`https://${website}/`}>
              {website}
            </a>
          </Col>
        )}
      </Row>
    </Container>
  );
};

WorkExperienceItem.propTypes = {
  position: PropTypes.string.isRequired,
  workplace: PropTypes.string.isRequired,
  startDate: PropTypes.object.isRequired,
  endDate: PropTypes.object,
  location: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  avatar: PropTypes.string,
};

export default WorkExperienceItem;
