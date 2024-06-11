import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Map from './components/Map/Map';
import List from './components/List/List';
import { getPlacesData } from './api';
import './tailwind.css';
import LanguageSelector from './components/LanguageSelector';

function App() {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({ lat: 5.6037, lng: -0.1870 });
  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating);
    setFilteredPlaces(filteredPlaces);
  }, [rating, places]);

  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      setIsLoading(true);
      getPlacesData(type, bounds.sw, bounds.ne)
        .then((data) => {
          setPlaces(data);
          setFilteredPlaces([]);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching places data:', error);
        });
    }
  }, [type, bounds]);

  return (
    <div className='container mx-auto'>
      <Header setCoordinates={setCoordinates} />
      <LanguageSelector />
      <div className='flex'>
        <List
          places={filteredPlaces.length ? filteredPlaces : places}
          childClicked={childClicked}
          isLoading={isLoading}
          type={type}
          setType={setType}
          rating={rating}
          setRating={setRating}
        />
        <Map
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          coordinates={coordinates}
          places={filteredPlaces.length ? filteredPlaces : places}
          setChildClicked={setChildClicked}
        />
      </div>
    </div>
  );
}

export default App;
