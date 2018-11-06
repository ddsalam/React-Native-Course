/* eslint max-len: 0 */
import _ from 'lodash';
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { NavbarItem } from './common';
import { employeesFetch } from './../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
   static navigationOptions = ({ navigation }) => ({
      title: 'Employees',
      headerRight: <NavbarItem text="Add" onPress={() => navigation.navigate('EmployeeCreate')} />      
   })

   componentDidMount() {
      this.props.employeesFetch();
   }

   renderItem(employee) {
      return <ListItem employee={employee} />;
   }

   render() {
      return (
         <FlatList 
            data={this.props.employees}
            renderItem={this.renderItem.bind(this)}
            keyExtractor={(employee, index) => index.toString()}
         />
      );
   }
}

const mapStateToProps = state => {
   const employees = _.map(state.employees, (val, uid) => ({ ...val, uid }));
   return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
