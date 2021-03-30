import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useWindowWidth } from '@react-hook/window-size';
import { Fade } from 'react-reveal';
import { useTranslation } from 'react-i18next';
import {
  PORTFOLIO_SECTION_PROPERTIES,
  SCREEN_SIZES,
} from '../constants';
import { profilePicture } from '../assets/img';

const Header = () => {
  const { t } = useTranslation();

  const screenWidth = useWindowWidth();

  return (
    <Fade {...PORTFOLIO_SECTION_PROPERTIES} />
  );
};

export default Header;
