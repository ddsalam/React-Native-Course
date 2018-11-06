import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const Input = props => {
   const { label, value, onChangeText, placeholder, secureTextEntry } = props;
   const { containerStyle, labelStyle, inputStyle } = styles;
   
   return (
      <View style={containerStyle}>
         <Text style={labelStyle}>{label}</Text>
         <TextInput 
            value={value}
            placeholder={placeholder}
            autoCorrect={false}
            secureTextEntry={secureTextEntry}
            onChangeText={onChangeText}
            style={inputStyle}
         />
      </View>
   );
};

const styles = StyleSheet.create({
   containerStyle: {
      height: 40,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center'
   },
   labelStyle: {
      fontSize: 18,
      paddingLeft: 20,
      flex: 1,
   },
   inputStyle: {
      color: '#000',
      paddingRight: 5,
      paddingLeft: 5,
      fontSize: 18,
      lineHeight: 23,
      flex: 2
   }
});

export { Input };
