import React from 'react';
import {
  Card, CardBody, Container, Row, Col,
} from 'reactstrap';
import { PORTFOLIO } from '../constants';
import WorkExperienceItem from './WorkExperienceItem';

const WorkExperience = () => {
  const [title, content] = [PORTFOLIO.WORK_EXPERIENCE.title, PORTFOLIO.WORK_EXPERIENCE.content];

  return (
    <Card className="mt-5 section card-shadow" id="work-experience">
      <div className="section-title d-flex align-items-center pl-2 pl-sm-4">{title}</div>
      <CardBody className="px-0">
        <Container>
          <Row className="w-100">
            {content.map((item, index) => (
              <Col key={index} xs={12} className={index < content.length - 1 && 'pb-5'}>
                <WorkExperienceItem
                  position={item.position}
                  workplace={item.workplace}
                  location={item.location}
                  website={item.website}
                  startDate={item.startDate}
                  endDate={item.endDate}
                  avatar={item.avatar}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </CardBody>
      <div className="section-footer" />
    </Card>
  );
};

export default WorkExperience;
