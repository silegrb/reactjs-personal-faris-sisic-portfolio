import React from 'react';
import {
  Card, CardBody, Container, Row, Col,
} from 'reactstrap';
import { Fade } from 'react-reveal';
import {
  PORTFOLIO,
  PORTFOLIO_SECTION_PROPERTIES,
} from '../../constants';
import WorkExperienceItem from '../portfolioSectionItems/WorkExperienceItem';

const WorkExperienceSection = () => {
  const [title, content] = [PORTFOLIO.WORK_EXPERIENCE.title, PORTFOLIO.WORK_EXPERIENCE.content];

  return (
    <Fade {...PORTFOLIO_SECTION_PROPERTIES}>
      <Card className="ml-3 mt-5 section card-shadow" id="work-experience">
        <div className="section-title d-flex align-items-center pl-2 pl-sm-4">{title}</div>
        <CardBody className="px-0">
          <Container>
            <Row className="w-100">
              {content.map(({
                position,
                workplace,
                location,
                website,
                startDate,
                endDate,
                avatar,
              }, index) => (
                <Col key={index} xs={12} className={index < content.length - 1 ? 'pb-5' : ''}>
                  <WorkExperienceItem
                    position={position}
                    workplace={workplace}
                    location={location}
                    website={website}
                    startDate={startDate}
                    endDate={endDate}
                    avatar={avatar}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </CardBody>
        <div className="section-footer" />
      </Card>
    </Fade>
  );
};

export default WorkExperienceSection;
