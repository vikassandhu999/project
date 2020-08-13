import { StyleSheet } from 'react-native';

const styles =  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding:30,
      paddingTop:100 ,
   
    //  boxSizing : "border-box",
    },
    label: {
      fontSize: 30,
      fontWeight: "600",
    },
    input : {
          height:46,
          minWidth:"100%",
          fontSize:16,
          borderRadius:8,
          marginTop:18,
          padding:15,
          borderWidth:1,
          borderColor:"black",
          marginBottom:4,
          textAlign : "center",
    } ,
    inLeft : {
        textAlign : "left",
    },
    error : {
      fontSize:12 , 
      color : 'red',
      margin : 6 , 
    } ,
    sized : {
        height : 60 , 
        width : "100%" ,
   }
});
  

export default styles;