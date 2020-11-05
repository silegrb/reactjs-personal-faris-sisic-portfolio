import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Dropdown, DropdownItem, DropdownMenu, DropdownToggle,
} from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '../constants';

const LanguageDropdown = ({ hideDropdown }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (isOpen) { hideDropdown(); }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <Dropdown
      isOpen={isOpen}
      toggle={() => setIsOpen(!isOpen)}
    >
      <DropdownToggle
        tag="div"
        data-toggle="dropdown"
        aria-expanded={isOpen}
      >
        <img
          alt=""
          src={LANGUAGES.find(({ code }) => code === i18n.language).flag}
          className="lang-icon cursor-pointer"
        />
      </DropdownToggle>
      <DropdownMenu right className="languages-menu mt-0 p-0 mt-1">
        {LANGUAGES.map(({ code, flag }) => (
          <DropdownItem
            key={code}
            className="px-3 py-1"
            onClick={() => {
              i18n.changeLanguage(code);
              localStorage.setItem('language', code);
            }}
          >
            <img
              alt=""
              src={flag}
              className="lang-icon cursor-pointer"
            />
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

LanguageDropdown.propTypes = {
  hideDropdown: PropTypes.func.isRequired,
};

export default LanguageDropdown;
