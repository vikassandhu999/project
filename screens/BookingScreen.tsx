import * as React from 'react';
import { TextInput, Platform } from 'react-native';
import DateTimePicker from "@react-native-community/datetimepicker";

import { View, PickerButton , AppButton , Text} from '../components/Themed';
import { useState } from 'react';
import styles from '../constants/styles';
import { MakeBooking } from '../api/api';
import ImagePicker from 'react-native-image-crop-picker';


//Screen to make bookings
export default function BookingScreen(props:any) {

  const [name, setname] = useState<string>("");
  const [address, setaddress] = useState<string>("");
  const [date, setdate] = useState<Date>(new Date(Date.now()));
  const [images , setimages] = useState("");
  const [misc, setmisc] = useState<string>("");
  const [reference,setreference] = useState(null);


  const [error , seterror] = useState<any>(null);

  const [show, setshow] = useState<boolean>(false);
  const [mode,setmode] = useState<'date' | 'time'>('date');


  const onChangePick = (_event : any , selectedDate : any) => { 
        const currentDate = selectedDate || date;
        setshow(Platform.OS === 'ios');
        setdate(currentDate);
  }

  //import
  const PickImages = () => {
      ImagePicker.openPicker({
        includeBase64: true,
        multiple: false,
    
      }).then(images => {
        console.log(images);
        setimages(images);
      });
  }

  const submit = () => {
    //console.log({ name , date : date.toLocaleDateString() , time : date.toLocaleTimeString() , address });
    MakeBooking(name , address , date.toLocaleDateString() , date.toLocaleTimeString() , images , props.route.params.phone , misc)
    .then((respose) => {
        setreference(response.data["refernce_id"]);
    }).catch( e => {
      seterror("Error Occured");
    })
  }

  return (
    <View style={styles.container}>
        <TextInput
         style = {[styles.input,styles.inLeft]} 
         keyboardType = {'email-address'}
         editable = {true}
         onChangeText = {(text) => {
                setname(text);
         }}
         placeholder = "Name"
         value = {name}
        />
        <TextInput
         style = {[styles.input,styles.inLeft]} 
         keyboardType = {'email-address'}
         editable = {true}
         onChangeText = {(text) => {
                setaddress(text);
         }}
         value = {address}
         placeholder = "Address"
        />
        <PickerButton
            onPress = {()=>{ setshow(true); setmode("date"); }}
            title = {"Select Date"}
        />
        <PickerButton
            onPress = {()=>{ setshow(true); setmode("time"); }}
            title = "Select Time"
        />
        {
            show &&  <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour = {true}
                display = "default"
                onChange = {onChangePick}
            />
        }
        <PickerButton
            onPress = {PickImages}
            title = "Select Images"
        />
         <TextInput
          style = {[styles.input,styles.inLeft]} 
          keyboardType = {'email-address'}
          editable = {true}
          onChangeText = {(text) => {
                  setmisc(text);
          }}
          value = {misc}
          placeholder = "Address"
        />
        <AppButton onPress = {submit} title = {"Submit"} />
        { reference && <Text style = {styles.label}>Your Refernce Id is {refernce}</Text> }
    </View>
  );
}

