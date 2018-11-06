import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

export default class LoginForm extends Component {
   state = { email: '', password: '', error: '', loading: false }

   onButtonPress() {
      const { email, password } = this.state;
      this.setState({ error: '', loading: true });
      
      firebase.auth().signInWithEmailAndPassword(email, password)
         .then(this.onLoginSuccess.bind(this))
         .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
               .then(this.onLoginSuccess.bind(this))
               .catch(this.onLoginFailed.bind(this));
         });
   }

   onLoginSuccess() {
      this.setState({ 
         email: '',
         password: '',
         loading: false 
      });
   }

   onLoginFailed() {
      this.setState({
         error: 'Authentication failed.',
         loading: false
      });
   }

   renderButton() {
      if (this.state.loading) {
         return <Spinner />;
      }

      return (
         <Button onPress={this.onButtonPress.bind(this)}>
            Log in
         </Button>
      );
   }

   render() {
      return (
         <Card>
            <CardSection>
               <Input 
                  label={'Email'}
                  placeholder={'user@example.com'}
                  value={this.state.email}
                  onChangeText={email => this.setState({ email })}
               />
            </CardSection>
            
            <CardSection>
               <Input
                  label={'Password'}
                  placeholder={'password'}
                  value={this.state.password}
                  onChangeText={password => this.setState({ password })}
                  secureTextEntry
               />
            </CardSection>

            <Text style={styles.errorTextStyle}>
               {this.state.error}
            </Text>

            <CardSection>
               {this.renderButton()}
            </CardSection>
         </Card>
      );
   }
}

const styles = StyleSheet.create({
   errorTextStyle: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
   }
});
