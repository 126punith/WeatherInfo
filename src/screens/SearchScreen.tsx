import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Layout from '../constants/Layout';
import Colors from '../constants/Colors';

const { width } = Layout.window;

const SearchScreen = (props: any) => {
  const { navigation } = props;
  const [show, setShow] = useState(false);
  const onFocusHandler = () => {
    setShow(true);
  };

  const onFocusOutHandler = () => {
    setShow(false);
  };

  let placeholder = show ? '' : 'Enter Country Name';
  let data = [
    {
      id: 1,
      country: 'india',
    },
  ];
  const submitHandler = () => {
    navigation.navigate('CountryDetails', data);
  };
  return (
    <>
      <SafeAreaView style={{ backgroundColor: Colors.white }} />

      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior='padding'
          enabled
          style={styles.container}
        >
          <View>
            <TextInput
              style={styles.textInput}
              placeholder={placeholder}
              placeholderTextColor={Colors.silver}
              onFocus={onFocusHandler}
              onEndEditing={onFocusOutHandler}
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
              style={{
                width: '50%',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 50,
                alignSelf: 'center',
                padding: 15,
                borderRadius: 10,
                backgroundColor: show ? Colors.lightSilver : Colors.purple,
              }}
              onPress={submitHandler}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '800',
                  color: show ? Colors.silver : Colors.white,
                }}
              >
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
});
