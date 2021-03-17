import React, { useState } from 'react';
import {
  Dropdown, DropdownItem, DropdownMenu, DropdownToggle,
} from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '../constants';

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

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
        {LANGUAGES.map(({ code, flag }, index) => (
          <DropdownItem
            key={code}
            className={`px-3 py-1 ${!index ? 'pt-2' : ''} ${index === LANGUAGES.length - 1 ? 'pb-2' : ''}`}
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

export default LanguageDropdown;
