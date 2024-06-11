import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    console.log(`Changing language to: ${lng}`);
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-selector">
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('tw')}>Twi</button>
      <button onClick={() => changeLanguage('akan')}>Akan</button>
      <button onClick={() => changeLanguage('ewe')}>Ewe</button>
    </div>
  );
};

export default LanguageSelector;
