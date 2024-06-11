import GoogleMapReact from 'google-map-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

const mapStyles = [
  {
    "featureType": "all",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "all",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 13
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#144b53"
      },
      {
        "lightness": 14
      },
      {
        "weight": 1.4
      }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [
      {
        "color": "#08304b"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#0c4152"
      },
      {
        "lightness": 5
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#0b434f"
      },
      {
        "lightness": 25
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#0b3d51"
      },
      {
        "lightness": 16
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "all",
    "stylers": [
      {
        "color": "#146474"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "all",
    "stylers": [
      {
        "color": "#021019"
      }
    ]
  },
  {
    "featureType": "all",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#00ff00"
      }
    ]
  }
];

function Map({ setCoordinates, setBounds, coordinates, places, setChildClicked }) {
  const { t } = useTranslation();

  return (
    <div className='w-full h-screen'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAtmxCY-HXH8XTSGoFMUqXDKGwMXLNX0ao' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyles
        }}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places.map((place, i) => (
          <div
            className='bg-white p-1 rounded-lg shadow-lg text-black flex flex-col items-center'
            style={{ width: '100px', height: 'auto' }}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            <p className='text-xs font-bold text-center mb-1'>{place?.name ? place?.name : t('restaurants')}</p>
            <img src={place.photo ? place.photo.images.large.url : 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D'} alt="" className='w-10 h-10 object-cover rounded-full' />
            <span className='text-xs mt-1'>{Number(place?.rating ? place.rating : 4.8)}</span>
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
}

export default Map;
