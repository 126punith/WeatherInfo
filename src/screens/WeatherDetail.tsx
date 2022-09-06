import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import { useAppSelector } from '../hooks/hook';

const { window } = Layout;

const WeatherDetail = () => {
  const { weatherData } = useAppSelector((state) => state.weather);

  console.log(weatherData, 'weatherData');

  let temperature, percipitation, wind_speed, weather_icons;

  if (weatherData) {
    temperature = weatherData.current.temperature;
    percipitation = weatherData.current.precip;
    wind_speed = weatherData.current.wind_speed;
    weather_icons = weatherData.current.weather_icons[0];
  }

  console.log(temperature, 'punith');
  return (
    <>
      <SafeAreaView />
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Weather Details</Text>
      </View>
      <View
        style={{
          justifyContent: 'space-around',
          marginLeft: '25%',
          marginTop: '35%',
        }}
      >
        <Image
          source={{
            uri: weather_icons,
          }}
          style={{
            width: '50%',
            height: 100,
          }}
          resizeMode='contain'
        />
        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>
            Temperarture : {temperature} ºC
          </Text>
          <Text style={styles.contentText}>
            Precipitation : {percipitation} %
          </Text>
          <Text style={styles.contentText}>wind Speed : {wind_speed} kmph</Text>
        </View>
      </View>
    </>
  );
};

export default WeatherDetail;

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },
  titleText: {
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: 0.3,
  },
  contentText: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.grey,
    letterSpacing: 0.5,
  },
  contentContainer: {
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    // marginLeft: 20,
    marginTop: 20,
    height: window.width / 2,
  },
});
