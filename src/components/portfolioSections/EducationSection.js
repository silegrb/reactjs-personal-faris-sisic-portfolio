import React from 'react';
import {
  Card, CardBody, Container, Row, Col,
} from 'reactstrap';
import { Fade } from 'react-reveal';
import { useTranslation } from 'react-i18next';
import {
  PORTFOLIO,
  PORTFOLIO_SECTION_PROPERTIES,
} from '../../constants';
import EducationItem from '../portfolioSectionItems/EducationItem';

const EducationSection = () => {
  const { t } = useTranslation();

  const [title, content] = [PORTFOLIO.EDUCATION.title, PORTFOLIO.EDUCATION.content];

  return (
    <Fade {...PORTFOLIO_SECTION_PROPERTIES}>
      <Card className="ml-3 mt-5 section card-shadow" id="education">
        <div className="section-title d-flex align-items-center pl-2 pl-sm-4">
          {t(title).toUpperCase()}
        </div>
        <CardBody className="px-0">
          <Container>
            <Row className="d-flex justify-content-center">
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
                <Col key={index} xs={12} className={index < content.length - 1 ? 'pb-5' : ''}>
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
    </Fade>
  );
};

export default EducationSection;
