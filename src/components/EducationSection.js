import React from 'react';
import {
  Card, CardBody, Container, Row, Col,
} from 'reactstrap';
import { Bounce } from 'react-reveal';
import { PORTFOLIO } from '../constants';
import EducationItem from './EducationItem';

const EducationSection = () => {
  const [title, content] = [PORTFOLIO.EDUCATION.title, PORTFOLIO.EDUCATION.content];

  return (
    <Bounce left>
      <Card className="ml-3 mt-5 section card-shadow" id="education">
        <div className="section-title d-flex align-items-center pl-2 pl-sm-4">{title}</div>
        <CardBody className="px-0">
          <Container>
            <Row className="w-100">
              {content.map(({
                title,
                educationalInstitution,
                location,
                website,
                date,
                startDate,
                startDateFormatter,
                endDate,
                endDateFormatter,
                avatar,
              }, index) => (
                <Col key={index} xs={12} className={index < content.length - 1 && 'pb-5'}>
                  <EducationItem
                    title={title}
                    educationalInstitution={educationalInstitution}
                    location={location}
                    website={website}
                    date={date}
                    startDate={startDate}
                    startDateFormatter={startDateFormatter}
                    endDate={endDate}
                    endDateFormatter={endDateFormatter}
                    avatar={avatar}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </CardBody>
        <div className="section-footer" />
      </Card>
    </Bounce>
  );
};

export default EducationSection;
