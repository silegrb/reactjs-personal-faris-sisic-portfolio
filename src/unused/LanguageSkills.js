import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { useWindowWidth } from '@react-hook/window-size';
import { PORTFOLIO, SCREEN_SIZES } from '../constants';
import LanguageItem from './portfolioSectionItems/LanguageItem';

const LanguageSkills = () => {
  const { t } = useTranslation();
  const screenWidth = useWindowWidth();

  const [
    title,
    content,
  ] = [
    PORTFOLIO.SKILLS.content.LANGUAGE_SKILLS.title,
    PORTFOLIO.SKILLS.content.LANGUAGE_SKILLS.content,
  ];

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col
          xs={12}
          lg={12}
          className="skills-title d-flex pb-3 mx-2 mx-lg-0"
        >
          {title}
        </Col>
        {content.map(({
          language,
          icon,
          overallGrade,
          grades,
        },
        index) => (
          <Col xs={12}>
            <LanguageItem
              title={language}
              icon={icon}
              overallGrade={overallGrade}
              grades={grades}
              className={
              `${!index && screenWidth < SCREEN_SIZES.LG ? 'pt-5' : ''} 
              ${index !== content.length - 1 ? 'pb-5' : ''}`
              }
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LanguageSkills;
