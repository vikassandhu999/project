import * as React from 'react';
import { Text as DefaultText, View as DefaultView, TouchableOpacity, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}




export const AppButton = ({ onPress ,  title } : any) => {
    return (
      <TouchableOpacity style = {style.container} onPress = {onPress}>
        <Text style = {style.text}>{title}</Text>
      </TouchableOpacity>
    )
}


export const PickerButton = ({ onPress , title } : any) => {
  return (
    <TouchableOpacity style = {p_style.container} onPress = {onPress}>
      <Text style = {p_style.text}>{title}</Text>
    </TouchableOpacity>
  )
}



const p_style =  StyleSheet.create({
  container : {
    width : "100%",
    justifyContent : "center" , 
    padding  : 16 , 
    elevation : 8 , 
    backgroundColor : "#fff" ,
    borderRadius : 8 , 
    paddingVertical : 10, 
    paddingHorizontal : 30 , 
    marginTop : 20,
    shadowOffset : {  width : 0 , height : 0 } ,
    shadowColor : "#fff" , 
    shadowRadius : 0 , 
    shadowOpacity : 0 , 
    borderWidth : 1,
    borderColor:"black",
  } , 
  text : {
    fontSize : 16 , 
    color : "black" , 
    fontWeight : "400" , 
   // alignSelf : "center" ,
    textAlign : "left" 
  }
});

const style =  StyleSheet.create({
  container : {
    justifyContent : "center" , 
    padding  : 16 , 
    elevation : 8 , 
    backgroundColor : "blue" ,
    borderRadius : 8 , 
    paddingVertical : 10, 
    paddingHorizontal : 30 , 
    marginTop : 20,
  } , 
  text : {
    fontSize : 16 , 
    color : "#fff" , 
    fontWeight : "bold" , 
    alignSelf : "center" , 
  }
});