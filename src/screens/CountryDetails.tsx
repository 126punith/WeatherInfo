import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Layout from '../constants/Layout';
import Colors from '../constants/Colors';
import { useAppDispatch, useAppSelector } from '../hooks/hook';
import { getWeather } from '../store/WeatherSlice';
const { window } = Layout;

const CountryDetails = (props: any) => {
  const { data, loading } = useAppSelector((state) => state.countries);
  const { navigation, route } = props;
  const { countryName } = route.params;

  const dispatch = useAppDispatch();

  console.log(data, countryName, 'my fetched Data');

  let population: number,
    capital: string,
    latitude: number,
    longitude: number,
    flag: string;

  if (data.length >= 0) {
    const filterdData = data.filter(
      (item) =>
        item.name.common == countryName ||
        item.altSpellings.includes(countryName)
    );
    console.log(filterdData, 'filtered');
    filterdData.map((item) => {
      console.log(item.population, item.name.common, 'population');
      population = item.population;
      capital = item.capital[0];
      flag = item.flags.png;
      latitude = item.latlng[0];
      longitude = item.latlng[1];
    });
  }
  let weatherData = {};
  const weatherHandler = async () => {
    await dispatch(getWeather(capital));
    navigation.navigate('WeatherDetail');
  };
  return (
    <>
      <SafeAreaView />
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Country Details</Text>
      </View>
      <Image
        source={{
          uri: flag,
        }}
        style={styles.flagImage}
        resizeMode='contain'
      />
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>
          {capital ? `Capital : ${capital}` : 'Capital :'}
        </Text>
        <Text style={styles.contentText}>
          Country Propulation : {population}
        </Text>
        <Text style={styles.contentText}>Latitude : {latitude} deg</Text>
        <Text style={styles.contentText}>Longitude : {longitude} deg</Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.weatherBtn}
        onPress={weatherHandler}
      >
        <Text style={styles.weatherBtnText}>Capital Weather</Text>
      </TouchableOpacity>
    </>
  );
};

export default CountryDetails;

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },
  titleText: {
    fontSize: 22,
    fontWeight: '800',
    lineHeight: 26,
    letterSpacing: 0.3,
  },
  contentContainer: {
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    marginLeft: 20,
    marginTop: 20,
    height: window.width / 3,
  },
  contentText: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.grey,
    letterSpacing: 0.5,
  },
  weatherBtn: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginLeft: 20,
    padding: 15,
    borderRadius: 5,
    backgroundColor: Colors.purple,
  },
  weatherBtnText: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.white,
  },
  flagImage: {
    height: '40%',
    width: '60%',
    marginLeft: 20,
    marginTop: 30,
  },
});
