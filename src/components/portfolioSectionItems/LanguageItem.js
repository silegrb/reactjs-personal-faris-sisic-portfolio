import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { Donut, DonutValue, DonutLabel } from 'react-donut-component';
import { Steps } from 'antd';
import { Fade } from 'react-reveal';
import { useWindowWidth } from '@react-hook/window-size';
import {
  getLanguageSkillCodeFromGrade,
  getLanguageSkillPercentage,
} from '../../utils/languageSkills';
import 'antd/dist/antd.css';
import { PORTFOLIO_SECTION_PROPERTIES, SCREEN_SIZES } from '../../constants';

// TODO Translation
const LanguageItem = ({
  title,
  icon,
  overallGrade,
  grades,
  className,
}) => {
  const { t } = useTranslation();
  const screenWidth = useWindowWidth();
  const { Step } = Steps;

  const titleColumn = (
    <Col xs={10} lg={3} className="d-flex align-items-center justify-content-start justify-content-lg-end language-item-title text-left text-lg-right">
      {title}
    </Col>
  );

  const lineColumn = (
    <Col xs={1} className="p-0">
      <Row className="w-100 h-50 border-bottom m-0" />
    </Col>
  );

  const avatarColumn = (
    <Col xs={2} lg={1} className="p-0 d-flex align-items-center">
      <img alt="" src={icon} className="items-avatar" />
    </Col>
  );

  return (
    <Fade {...PORTFOLIO_SECTION_PROPERTIES}>
      <Container className={className}>
        <Row className={screenWidth >= SCREEN_SIZES.LG ? 'w-100' : 'd-flex justify-content-center'}>
          {screenWidth >= SCREEN_SIZES.LG
            ? (
              <>
                {titleColumn}
                {lineColumn}
                {avatarColumn}
              </>
            ) : (
              <>
                {avatarColumn}
                {titleColumn}
              </>
            )}
          <Col xs={12} lg={3} className="d-flex align-items-center justify-content-center justify-content-lg-start">
            <Donut
              size={screenWidth >= SCREEN_SIZES.LG ? 200 : 150}
              styleTrack={{ strokeWidth: 9, stroke: 'rgba(127, 127, 127, 0.3)' }}
              asfaaaaa
              styleIndicator={{ stroke: '#ff6b1f', strokeLinecap: 'round' }}
            >
              <DonutValue
                symbol=" "
                styleSymbol={{ fontWeight: 'bold', fontSize: '18px' }}
                showValue={false}
              >
                {getLanguageSkillPercentage(overallGrade)}
              </DonutValue>
              <DonutLabel style={{ color: 'white', fontSize: '26px', margin: '0' }}>
                {getLanguageSkillCodeFromGrade(overallGrade)}
              </DonutLabel>
            </Donut>
          </Col>
          <Col xs={12} lg={3} className="d-flex align-items-center ml-4 ml-lg-3 mt-0 mt-lg-4 p-0">
            <Steps progressDot current={5} direction="vertical">
              {grades.map(({ title, grade }) => (
                <Step
                  className={screenWidth >= SCREEN_SIZES.LG ? 'language-item-grades-lg-title' : 'language-item-grades-title'}
                  title={`${title}: ${getLanguageSkillCodeFromGrade(grade)}`}
                />
              ))}
            </Steps>
          </Col>
        </Row>
      </Container>
    </Fade>
  );
};

LanguageItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  overallGrade: PropTypes.number.isRequired,
  grades: PropTypes.array.isRequired,
  className: PropTypes.string,
};

export default LanguageItem;
