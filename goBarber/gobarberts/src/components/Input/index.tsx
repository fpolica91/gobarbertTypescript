/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {TextInputProperties} from 'react-native';
import {Container, TextInput, Icon} from './styles';

export interface InputProps extends TextInputProperties {
  name: string;
  icon: string;
}

const Input: React.FC<InputProps> = ({name, icon, ...rest}) => {
  return (
    <Container>
      <Icon name={icon} size={20} color="#666360" />
      <TextInput
        keyboardAppearance="dark"
        {...rest}
        placeholderTextColor="#666360"
      />
    </Container>
  );
};

export default Input;
