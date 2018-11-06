import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input } from './common';
import { employeeUpdate } from './../actions';

class EmployeeForm extends Component {
   render() {
     return (
      <View>
         <CardSection>
            <Input 
               label="Name" 
               placeholder="Jane" 
               value={this.props.name} 
               onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
            />
         </CardSection>

         <CardSection>
            <Input 
               label="Phone" 
               placeholder="(00) 00000-0000" 
               value={this.props.phone} 
               onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
            />
         </CardSection>

         <CardSection>
            <Text style={styles.pickerTextStyle}>Shift</Text>
            <View style={styles.pickerStyle}>
               <Picker 
                  selectedValue={this.props.shift}
                  onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
               >
                  <Picker.Item label="Monday" value="Monday" />
                  <Picker.Item label="Tuesday" value="Tuesday" />
                  <Picker.Item label="Wednesday" value="Wednesday" />
                  <Picker.Item label="Thursday" value="Thursday" />
                  <Picker.Item label="Friday" value="Friday" />
                  <Picker.Item label="Saturday" value="Saturday" />
                  <Picker.Item label="Sunday" value="Sunday" />
               </Picker>
            </View>
         </CardSection>
      </View>
     );
   }
}

const styles = StyleSheet.create({
   pickerTextStyle: {
      flex: 1,
      fontSize: 18,
      paddingLeft: 20,
      height: 40,
      textAlignVertical: 'center'
   },
   pickerStyle: {
      flex: 2,
      height: 40
   }
});

const mapStateToProps = state => {
   const { name, phone, shift } = state.employeeForm;
   return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
