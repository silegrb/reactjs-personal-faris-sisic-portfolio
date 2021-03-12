import React from 'react';
import BasicInformationSection from './portfolioSections/BasicInformationSection';
import WorkExperienceSection from './portfolioSections/WorkExperienceSection';
import EducationSection from './portfolioSections/EducationSection';
import SkillsSection from './portfolioSections/SkillsSection';

const Portfolio = () => (
  <>
    <BasicInformationSection />
    <WorkExperienceSection />
    <EducationSection />
    <SkillsSection />
  </>
);

export default Portfolio;
