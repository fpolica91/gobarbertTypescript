/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  View,
  ScrollView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Input from '../../components/Input';
import Button from '../../components/Button';
import LogoImage from '../../assets/logo.png';
import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountText,
} from './styles';

const Signin: React.FC = () => (
  <>
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{flex: 1}}>
        <Container>
          <Image source={LogoImage} />
          <View>
            <Title>Login</Title>
          </View>
          <Input name="email" icon="mail" placeholder="E-mail" />
          <Input name="password" icon="lock" placeholder="Password" />
          <Button onPress={() => console.log('hiii')}>Sign In</Button>
          <ForgotPassword>
            <ForgotPasswordText>Forgot password</ForgotPasswordText>
          </ForgotPassword>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
    <CreateAccountButton>
      <Icon name="log-in" size={20} color="#Ff9000" />
      <CreateAccountText>Create Account</CreateAccountText>
    </CreateAccountButton>
  </>
);

export default Signin;
