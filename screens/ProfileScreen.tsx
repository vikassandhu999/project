import * as React from 'react';
import { StyleSheet , TextInput, Button , TouchableOpacity } from 'react-native';

import { Text, View, AppButton } from '../components/Themed';
import styles from '../constants/styles';
import axios from "axios";

//profile screen :  shows phone number 
// contains book now button to make booking
export default function ProfileScreen(props : any) {
  const phone =  props.route.params.phone;
  return (
    <View style={styles.container}>
        <Text style = {styles.label}>Hello , {phone.substring(0,6)+"****"}</Text>
        <View style = {styles.sized}></View>
        <AppButton onPress = {()=>{props.navigation.navigate("Book" ,{ phone : phone } )}} title = {"Book Now"} />
    </View>
  );
}