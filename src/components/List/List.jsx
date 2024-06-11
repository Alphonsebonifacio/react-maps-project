import React, { createRef, useEffect, useState } from 'react';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import { useTranslation } from 'react-i18next';

function List({ places, childClicked, isLoading, type, rating, setType, setRating }) {
  const { t } = useTranslation();
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    const refs = Array(places?.length)
      .fill()
      .map((_, i) => elRefs[i] || createRef());

    setElRefs(refs);
  }, [places]);

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  return (
    <div className='p-4'>
      <h4 className='title-3d'>{t('restaurants_hotels_attractions')}</h4>
      {isLoading ? (
        <div className='flex items-center justify-center p-8'>
          <img src="/loading.gif" alt={t('loading')} />
        </div>
      ) : (
        <>
          <div className='select-container py-4'>
            <div className='select-dropdown'>
              <label>{t('type')}</label>
              <select onChange={handleTypeChange} value={type}>
                <option value="restaurants">{t('restaurants')}</option>
                <option value="hotels">{t('hotels')}</option>
                <option value="attractions">{t('attractions')}</option>
              </select>
            </div>
            <div className='select-dropdown'>
              <label>{t('rating')}</label>
              <select onChange={handleRatingChange} value={rating}>
                <option value="" disabled selected>{t('select_rating')}</option>
                <option value={3}>{t('above')} 3.0</option>
                <option value={4}>{t('above')} 4.0</option>
                <option value={4.5}>{t('above')} 4.5</option>
              </select>
            </div>
          </div>
          <div className='list-container flex flex-col gap-4 overflow-y-auto' style={{ maxHeight: '70vh' }}>
            {places.map((place, i) => (
              <div key={i} ref={elRefs[i]} className='list-item'>
                <PlaceDetails
                  place={place}
                  selected={Number(childClicked) === i}
                  refProp={elRefs[i]}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default List;
