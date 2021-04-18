import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import { Fade } from 'react-reveal';
import { starIcon } from '../../assets/img';

const SkillSetItem = ({
  title,
  description,
  image,
  isTopSkill,
}) => (
  <Fade bottom>
    <Row className="w-100 m-0 p-0">
      <Col xs={12} className="d-flex justify-content-center">
        <div className="position-relative">
          {isTopSkill && <img alt="" src={starIcon} className="star-icon" />}
          <img alt={title} src={image} className="skill-set-icon" />
        </div>
      </Col>
      <Col xs={12} className="d-flex justify-content-center font-weight-bold pt-1 skill-set-item-title">{title}</Col>
      <Col xs={12} className="d-flex justify-content-center text-center skill-set-item-description">
        {description}
      </Col>
    </Row>
  </Fade>
);

SkillSetItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isTopSkill: PropTypes.bool,
};

export default SkillSetItem;
