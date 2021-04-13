import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { Fade } from 'react-reveal';
import { ExternalLink, MapPin } from 'react-feather';
import { useWindowWidth } from '@react-hook/window-size';
import { formatDate } from '../../utils/date';
import { openInNewTab } from '../../utils/openInNewTab';
import { SCREEN_SIZES } from '../../constants';

// TODO Translation
const BrainTrainingItem = ({
  image,
  title,
  startDate,
  endDate,
  educationalInstitution,
  website,
  type,
  locationCoordinates,
  handleMapIconClick,
}) => {
  const screenWidth = useWindowWidth();
  return (
    <div className="d-flex justify-content-center align-items-center text-white position-relative">
      <Fade right>
        <Row className="w-100 h-100 m-0 p-0">
          <Col xs={12} className="m-0 p-0">
            <div className="education-item-type">
              <div className="d-flex justify-content-center align-items-center w-100 h-100">
                {type}
              </div>
            </div>
            <div
              className="education-item"
              style={{ backgroundImage: `url("${image}")` }}
            />
          </Col>
          <Col xs={12} className="p-0 pt-2 d-flex justify-content-between align-items-center text-white">
            <span>
              {`${formatDate(startDate, 'YYYY')} 
               ${!endDate || startDate.getFullYear() !== endDate.getFullYear() ? ' - ' : ''}
               ${endDate
                ? startDate.getFullYear() === endDate.getFullYear() ? '' : formatDate(endDate, 'YYYY')
                : 'Present'}`}
            </span>
            <span>
              {!!locationCoordinates
              && (
              <MapPin
                size={screenWidth >= SCREEN_SIZES.SM ? 18 : 16}
                className="mr-2 cursor-pointer"
                onClick={handleMapIconClick}
              />
              )}
              <ExternalLink
                size={screenWidth >= SCREEN_SIZES.SM ? 18 : 16}
                onClick={() => openInNewTab(website)}
                className="cursor-pointer"
              />
            </span>
          </Col>
          <Col
            xs={12}
            className="d-flex justify-content-center text-center p-0 education-title"
          >
            {title}
          </Col>
          <Col
            xs={12}
            className="d-flex justify-content-center p-0 education-subtitle"
          >
            {educationalInstitution}
          </Col>
        </Row>
      </Fade>
    </div>

  );
};

BrainTrainingItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  startDate: PropTypes.object.isRequired,
  endDate: PropTypes.object,
  educationalInstitution: PropTypes.string.isRequired,
  website: PropTypes.string,
  type: PropTypes.string.isRequired,
  handleMapIconClick: PropTypes.func.isRequired,
  locationCoordinates: PropTypes.array,
};

export default BrainTrainingItem;
