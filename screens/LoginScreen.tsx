import * as React from 'react';
import { TextInput } from 'react-native';

import { Text, View, AppButton } from '../components/Themed';
import { useState } from 'react';
import styles from '../constants/styles';
import { RegisterWithPhone } from '../api/api';


//Screen to register user with phone number
export default function LoginScreen(props : any) {

  const [phone, setphone] = useState<string>("");
  const [error , seterror] = useState<any>(null);

  // veify if entered number is valid 10 digit number
  // make post request to django rest api
  // if otp successfully sent replace screen with otp screen
  // else set error
  const submit = () => {
    //reset error message
    seterror(null);
    //check
    if(phone.length!=10 || /\D/.test(phone)) {
        seterror("Invalid Phone Number");
        return;
    }
    
    //returns a promise 
   /* RegisterWithPhone(phone)
      .then(() => {
        props.navigation.replace("Otp" , { phone });
      }) 
      .catch(() => {
        seterror("An Error Occured, try again");
      });
    */
   props.navigation.replace("Otp" , { phone });
  }
  return (
    <View style={styles.container}>
        <Text style = {styles.label}>Phone Number</Text>
        <TextInput
         style = {styles.input} 
         keyboardType = {'phone-pad'}
         editable = {true}
         maxLength = {10}
         onChangeText = {(text) => {
                seterror(null);
                setphone(text);
         }}
         value = {phone}
        />
        { error && <Text style = {styles.error}>{error}</Text> }
        <AppButton onPress = {submit} title = {"Continue"} />
    </View>
  );
}
