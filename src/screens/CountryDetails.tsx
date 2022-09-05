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
const { window } = Layout;

const CountryDetails = (props: any) => {
  const { navigation } = props;
  let data = {};
  const weatherHandler = () => {
    navigation.navigate('WeatherDetail', data);
  };
  return (
    <>
      <SafeAreaView />
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Country Details</Text>
      </View>
      <Image
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALwAAAB9CAMAAAAvI/mIAAAAsVBMVEXyaCf///8ChUMBhUPxZBl6n3gAgjwChUH0jHkAAADx8fH6+vv7+/rZ2tp4e4AAAB8AABmcoKXDxsgAACPAwMADJzjp7e4AABCoqqvQ0dOBg4mUl5tXWWMAABRobXEjMkIAECY8QUXi4+YNFjAwNEK0tbcAGDETHicAFjNhYWEGHjA9P0kACiVrb3iMjJElLEAVJzsmKjEAAypSVlgwNTtFRlRFUFpNTVJ0c3NiZnIVHjLgwzcmAAAD80lEQVR4nO2ZbXeiOhCAnb2vvAUSU0yAxZZr3GIhS+2uVf//D7sJ2tbuuR/DBc6Zp6/iOZ3HOJ1MhsUCQRAEQRAEQRAEQRAEQRAEQRAEQRAEccrvM2bx94xZwIwZUN6PevzhIgwiHwKk9Fjsmq+rZlcQmg4RBAaSD6LyPm6ekjUh6/jpPo5LGQ4RZwj5lCSrpmWpZgAsS3m7XCUk7d8Qtwwgz9fxhj5EldGNIpP6VfRAN/F3NQd55e3bKjDrLwGk/apMHlXt0hPOQzmXz5PumYIyq5ybpGH9j0ABfe7i3HUs1/LK+8esNkTGmvrAOfjUvAaTPSDPztfesbw8L5Vv8iQ05VEKKy+k8Q8DqHy130m30dzKB5t9p0CaZY80hKWVL0PQZuGZBL7bPwdOw7mVF16RBiEoBZBJaFOl0hIkgf5KmJ486jScU/n0x1raCglUgP/iayYE00Hhg7DSaRR9/1G5jOdUXjXrymdmkYHmkFGeKaG5yCC3dUaxtFrHymU8l/Jhsfxp0js6ch80qR6ikrE6eqiIhoATs+bR0/LgMutdyvveulcLRM3hqJUmjLWa6RJYKS7PPHkum0yX8szTFZO2B/bLV0kFzXWeC5HLn6W9FklW5Z7LvHEpn3utaSg5zXIJsqSKHJrmQARtzcPc/AvIAMhX7TCgS/ni8ZstJoGv2teWiWy767rtMhPcPFS+zRv/2+OLw4BO5Xfs7deKKU62d4Yt4Yq9F0i2nax8VzGaneq6fnmpj8furqc7Hu3jui4zyqJz4TCgU/ntx8rLj5Vnn1Z+svLXnA/U6Zrzd91jQwRrX8tLzlfTzXm9+lRtxLXaiJMMpLnITU9JVlOtNvymzh9snTdlXlNT5w+na52Pplvn+x02tDtswcwOy/sdNr/ssPSyw24mu8OGxb7vbQgLLr1NzXhpexsCISP2mdflweUp3G1XGZuu0rbukOtrV5n1XaVNdMX9KXeVtp+Povd+PjT9PGVZUKRv/bxcT7ifB7E6pQHcnKREero5SdWOj+DOz7A71U9rbs+w+WWCo3bNZspn2Jvpgf9pehDa6cHyPOnpwdvcJriZ2+SXuU0gz6bGT3rl3ydmpt6/T8xC6CdmyeQnZv2s8jTXWeV/TIkrOyV+5u4jDTOfv18tW1Zp48t0ytv9qsnMS3Gb8DDcnZEk+bgzkiSl4zJzZRh5kyyCFF2TJPddQcQQd0UsQ94NrGZ5N/D/YvHHjFn8OWMWf82YxW9fzMfl85dvg1xx+kcXX2YMyo8Fyo/FvOWxVI4Eyo8Fyo/FvOWxVI4Eyo8Fyo/FvOWxVI4Eyo8Fyo/FvOWxVI4Eyo8Fyo/FvOWxVI4Eyo/Fv1OLzlOcnxvCAAAAAElFTkSuQmCC',
        }}
        style={styles.flagImage}
        resizeMode='cover'
      />
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>Capital : Delhi</Text>
        <Text style={styles.contentText}>Country Propulation : 6783915</Text>
        <Text style={styles.contentText}>Latitude : 46 deg</Text>
        <Text style={styles.contentText}>Longitude : 2 deg</Text>
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
    height: window.width / 2,
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
    height: 300,
    width: '60%',
    marginLeft: 20,
    marginTop: 30,
  },
});
