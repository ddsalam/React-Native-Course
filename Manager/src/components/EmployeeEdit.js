import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { text } from 'react-native-communications';
import { employeeUpdate, employeeSave, employeeDelete } from './../actions';
import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button, Confirm } from './common';

class EmployeeEdit extends Component {
   static navigationOptions = {
      title: 'Edit Employee'
   }
   
   state = { showModal: false }

   componentDidMount() {
      const employee = this.getEmployee();
      _.each(employee, (value, prop) => this.props.employeeUpdate({ prop, value }));
   }

   onButtonPress() {
      const { name, phone, shift } = this.props;
      const uid = this.getEmployee().uid;

      this.props.employeeSave({ name, phone, shift, uid });
   }

   onTextPress() {
      const { phone, shift } = this.props;
      text(phone, `Your upcoming shift is on ${shift}.`);
   }

   onAccept() {
      const uid = this.getEmployee().uid;
      this.props.employeeDelete({ uid });
      this.setState({ showModal: false });
   }

   onDecline() {
      this.setState({ showModal: false });
   }

   getEmployee() {
      return this.props.navigation.getParam('employee');
   }

   render() {
      return (
         <Card>
            <EmployeeForm />

            <CardSection>
               <Button onPress={this.onButtonPress.bind(this)}>
                  Save Changes
               </Button>
            </CardSection>
            
            <CardSection>
               <Button onPress={this.onTextPress.bind(this)}>
                  Text Schedule
               </Button>
            </CardSection>

            <CardSection>
               <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                  Fire Employee
               </Button>
            </CardSection>

            <Confirm 
               visible={this.state.showModal}
               onAccept={this.onAccept.bind(this)}
               onDecline={this.onDecline.bind(this)}
            >
               Are you sure you want to fire this employee?
            </Confirm>
         </Card>
      );
   }
}

const mapStateToProps = state => {
   const { name, phone, shift } = state.employeeForm;
   return { name, phone, shift };
};

const actions = { employeeUpdate, employeeSave, employeeDelete };

export default connect(mapStateToProps, actions)(EmployeeEdit);
