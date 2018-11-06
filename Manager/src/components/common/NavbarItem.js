import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const NavbarItem = ({ onPress, text }) => {
   const { containerStyle, textStyle } = styles;
   
   return (
      <TouchableOpacity onPress={onPress} style={containerStyle}>
         <Text style={textStyle}>{text}</Text>
      </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
   containerStyle: {
      marginHorizontal: 10
   },
   textStyle: {
      fontSize: 17,
      fontWeight: '500',
      color: '#007AFF'
   }
});

export { NavbarItem };
