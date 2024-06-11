import { Autocomplete } from '@react-google-maps/api';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function Header({ setCoordinates }) {
  const [autoComplete, setAutoComplete] = useState(null);
  const { t, i18n } = useTranslation();

  const onLoad = (autoC) => setAutoComplete(autoC);

  const onPlaceChanged = () => {
    const lat = autoComplete.getPlace().geometry.location.lat();
    const lng = autoComplete.getPlace().geometry.location.lng();
    setCoordinates({ lat, lng });
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='header'>
      <h4>{t('title')}</h4>
      <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
        <div className='search-bar'>
          <FaSearch />
          <input type="text" placeholder={t('search_placeholder')} />
        </div>
      </Autocomplete>
      <div>
        <button onClick={() => changeLanguage('en')} className='button-3d secondary'>EN</button>
        <button onClick={() => changeLanguage('tw')} className='button-3d secondary'>TW</button>
      </div>
    </div>
  );
}

export default Header;
