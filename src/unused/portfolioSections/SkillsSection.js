import React from 'react';
import {
  Card, CardBody,
} from 'reactstrap';
import { Fade } from 'react-reveal';
import { useTranslation } from 'react-i18next';
import {
  PORTFOLIO,
  PORTFOLIO_SECTION_PROPERTIES,
} from '../../constants';
import LanguageSkills from '../LanguageSkills';

const SkillsSection = () => {
  const { t } = useTranslation();

  const mainTitle = PORTFOLIO.SKILLS.title;

  return (
    <Fade {...PORTFOLIO_SECTION_PROPERTIES}>
      <Card className="ml-3 mt-5 section card-shadow" id="skills">
        <div className="section-title d-flex align-items-center pl-2 pl-sm-4">
          {t(mainTitle).toUpperCase()}
        </div>
        <CardBody className="px-0">
          <LanguageSkills />
        </CardBody>
        <div className="section-footer" />
      </Card>
    </Fade>
  );
};

export default SkillsSection;
