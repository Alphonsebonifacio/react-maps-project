import React, { useEffect } from 'react';
import { FaPhone } from 'react-icons/fa';
import { IoLocationSharp } from "react-icons/io5";
import { useTranslation } from 'react-i18next';

function PlaceDetails({ place, selected, refProp }) {
  const { t } = useTranslation();

  useEffect(() => {
    if (selected && refProp && refProp.current) {
      refProp.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selected, refProp]);

  return (
    <div className='p-4 border rounded shadow-lg'>
      <img src={place.photo ? place.photo.images.large.url : 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D'} alt="" className='w-full h-48 object-cover' />
      <p className='text-xl font-bold'>{place?.name ? place?.name : t('restaurants')}</p>
      <div className='flex justify-between my-2'>
        <p>{place?.rating ? Number(place?.rating) : 4.3}</p>
        <p>{t('rating')} {place.num_reviews}</p>
      </div>
      <div className='flex justify-between my-2'>
        <p>{t('price')}</p>
        <p>{place?.price_level ? place.price_level : '$$ - $$$'}</p>
      </div>
      <div className='flex justify-between my-2'>
        <p>{t('ranking')}</p>
        <p>{place?.ranking ? place.ranking : '#418 of 418 Restaurants in Accra'}</p>
      </div>
      <div className='flex flex-wrap gap-2'>
        {place?.cuisine?.map(({ name }) => (
          <span key={name} className='bg-gray-200 p-1 rounded'>{name}</span>
        ))}
      </div>
      {place.address && (
        <div className='flex items-center my-2'>
          <IoLocationSharp />
          <span className='text-sm'>{t('address')}: {place.address}</span>
        </div>
      )}
      {place.phone && (
        <div className='flex items-center my-2'>
          <FaPhone />
          <span className='text-sm'>{t('phone')}: <a href={`tel:${place.phone}`} className='underline'>{place.phone}</a></span>
        </div>
      )}
      <div className='flex gap-4'>
        <button onClick={() => window.open(place.web_url, '_blank')} className='button-3d'>{t('trip_advisor')}</button>
        <button onClick={() => window.open(place.website, '_blank')} className='button-3d'>{t('website')}</button>
      </div>
    </div>
  );
}

export default PlaceDetails;
