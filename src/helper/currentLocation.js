import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Geolocation from 'react-native-geolocation-service';
import {currentLocation} from '../store/action';
import {Alert, Linking, PermissionsAndroid} from 'react-native';

const useCurrentLocation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCurrentLocation = async () => {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          position => {
            dispatch(currentLocation(position.coords));
          },
          error => {
            console.log('locationError', error.code, error.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      } else {
        Alert.alert('Location is denied', 'Open settings to enable location?', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => Linking.openSettings()},
        ]);
      }
    };

    getCurrentLocation();
  }, [dispatch]);

  // You can return any additional values or state you need
  return null;
};

export default useCurrentLocation;
