import * as React from 'react';
import { TextInput } from 'react-native';

import { Text, View, AppButton } from '../components/Themed';
import { useState } from 'react';
import styles from '../constants/styles';
import { VerifyOtp } from "../api/api";

//screen to verify otp 
export default function OtpScreen(props : any) {

  const [otp, setotp] = useState("");
  const [error , seterror] = useState<any>(null);

  // verify if otp is a valid 6 digit number and sends it
  // to the our django rest api
  // if verification failed sets and error 
  // else replace screen with profile screen
  const submit = () => {
      seterror(null);
      if(otp.length!=6 || /\D/.test(otp)) {
          seterror("Invalid OTP");
          return;
      }
      let phone = props.route.params.phone;
      
      //returs a promise 
      // VerifyOtp(phone , otp)
      // .then(() => {
        props.navigation.replace('Profile' , { phone });
      // }) 
      // .catch(() =>  {
      //   seterror("An Error Occured");
      // });
  }

  return (
    <View style={styles.container}>
        <Text style = {styles.label}>Enter OTP</Text>
        <TextInput
         style = {styles.input} 
         keyboardType = {'phone-pad'}
         editable = {true}
         maxLength = {6}
         onChangeText = {(text) => {
                seterror(null);
                setotp(text);
         }}
         value = {otp}
        />
         { error && <Text style = {styles.error}>{error}</Text> }
        <AppButton onPress = {submit} title = {"Continue"} />
    </View>
  );
}