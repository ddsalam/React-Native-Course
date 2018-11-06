import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, Text, StyleSheet } from 'react-native';
import { CardSection } from './common';
import NavigationService from './../NavigationService';

export default class ListItem extends Component {
   onRowPrees() {
      const employee = this.props.employee.item;
      NavigationService.navigate('EmployeeEdit', { employee });
   }

   render() {
      const { name } = this.props.employee.item;

      return (
         <TouchableWithoutFeedback onPress={this.onRowPrees.bind(this)}>
            <View>
               <CardSection>
                  <Text style={styles.titleStyle}>{name}</Text>
               </CardSection>
            </View>
         </TouchableWithoutFeedback>
      );
   }
}

const styles = StyleSheet.create({
   titleStyle: {
      fontSize: 18,
      paddingLeft: 15
  }
});
