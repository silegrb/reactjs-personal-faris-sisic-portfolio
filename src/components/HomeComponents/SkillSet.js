import React from 'react';
import { Fade } from 'react-reveal';
import { Row, Col } from 'reactstrap';
import { SKILLSET_ITEMS } from '../../constants';
import { screwIcon } from '../../assets/img';
import SkillSetItem from './SkillSetItem';

const SkillSet = () => (
  <div className="skill-set-container" id="skill-set">
    <div className="w-100 text-center skill-set-title">
      <Fade bottom>
        SKILL SET
      </Fade>
    </div>
    <div className="skill-set-note-container w-100 d-flex align-items-center flex-row position-relative">
      <div className="skill-set-screws-container">
        <img alt="" src={screwIcon} className="skill-set-screw" />
        <img alt="" src={screwIcon} className="skill-set-screw-2" />
      </div>
      <Fade right>
        <div className="text-center flex-grow-1 d-flex justify-content-center">
          <div className="w-75">
            Mainly focused on delivering & developing quality front-end,
            which is also known as client-side development.
            <br />
            <br />
            JavaScript Framework React, Vanilla JavaScript, HTML5 & CSS3 are
            <span className="my-top-skills-font"> my top skills </span>
            used to improve user experience and develop what you see.
          </div>
        </div>
      </Fade>
    </div>
    <div className="w-100 d-flex justify-content-center" style={{ marginTop: 100 }}>
      <Row className="skill-set-items-container m-0 p-0">
        {SKILLSET_ITEMS.map(({
          title,
          description,
          image,
          isTopSkill = false,
        }, index) => (
          <Col key={index} xs={12} sm={4} className="d-flex justify-content-center pb-3 pb-sm-5">
            <SkillSetItem
              title={title}
              description={description}
              image={image}
              isTopSkill={isTopSkill}
            />
          </Col>
        ))}
      </Row>
    </div>
  </div>
);

export default SkillSet;
