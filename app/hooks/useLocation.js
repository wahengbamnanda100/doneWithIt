import GetLocation from 'react-native-get-location';
import {useEffect, useState} from 'react';

export default useLocation = () => {
  const [userLocation, setUserLocation] = useState({});

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        setUserLocation(location);
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  };

  return userLocation;
};
