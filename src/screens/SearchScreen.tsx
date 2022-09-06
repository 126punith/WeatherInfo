import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, { useState } from 'react';
import Layout from '../constants/Layout';
import Colors from '../constants/Colors';
import { useAppDispatch } from '../hooks/hook';
import { getCountries } from '../store/CountriesSlice';

const { width } = Layout.window;

const SearchScreen = (props: any) => {
  const { navigation } = props;
  const [show, setShow] = useState(false);
  const [country, setCountry] = useState('');
  const dispatch = useAppDispatch();
  const onFocusHandler = () => {
    setShow(true);
  };

  const onFocusOutHandler = () => {
    setShow(false);
  };

  const inputHandler = (name: string) => {
    setCountry(name);
  };

  let placeholder = show ? '' : 'Enter Country Name';
  let data = [
    {
      id: 1,
      country: 'india',
    },
  ];
  const submitHandler = async () => {
    console.log(country, country.length, 'country');

    const countryName = country.length <= 3 ? country.toUpperCase() : country;
    await dispatch(getCountries(country));
    navigation.navigate('CountryDetails', {
      countryName: countryName,
    });
  };
  return (
    <>
      <SafeAreaView style={{ backgroundColor: Colors.white }} />
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior='height'
          enabled
          style={{ flex: 1, justifyContent: 'center' }}
        >
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}
            style={{
              flex: 1,
            }}
          >
            <View>
              <TextInput
                style={styles.textInput}
                placeholder={placeholder}
                placeholderTextColor={Colors.silver}
                onFocus={onFocusHandler}
                onEndEditing={onFocusOutHandler}
                onChangeText={(data) => {
                  inputHandler(data);
                }}
                autoCapitalize={'sentences'}
              />
              {show ? (
                <View style={styles.flowtingContainer}>
                  <Text style={styles.flowtingText}>
                    {show && 'Enter Country'}
                  </Text>
                </View>
              ) : null}

              <TouchableOpacity
                activeOpacity={0.5}
                style={[
                  styles.submitBtn,
                  {
                    backgroundColor: show ? Colors.lightSilver : Colors.purple,
                  },
                ]}
                onPress={submitHandler}
                disabled={country ? false : true}
              >
                <Text
                  style={[
                    styles.submitText,
                    {
                      color: show ? Colors.silver : Colors.white,
                    },
                  ]}
                >
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  textInput: {
    width: width * 0.75,
    padding: 20,
    borderWidth: 2,
    borderColor: Colors.silver,
    borderRadius: 5,
    fontWeight: 'bold',
  },
  flowtingContainer: {
    position: 'absolute',
    top: -10,
    left: 20,
    backfaceVisibility: 'hidden',
    backgroundColor: 'white',
    padding: 5,
  },
  flowtingText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.silver,
  },
  submitBtn: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    alignSelf: 'center',
    padding: 15,
    borderRadius: 10,
  },
  submitText: {
    fontSize: 16,
    fontWeight: '800',
  },
});
