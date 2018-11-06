import React from 'react';
import { View } from 'react-native';

const CardSection = ({ style, children }) => (
   <View style={[styles.containerStyle, style]}>
      {children}
   </View>
);

const styles = {
   containerStyle: {
      borderBottomWidth: 1,
      padding: 5,
      backgroundColor: '#FFF',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      borderColor: '#DDD',
      position: 'relative'
   }
};

export { CardSection };
