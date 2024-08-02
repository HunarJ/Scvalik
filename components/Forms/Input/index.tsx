import React, { useState } from "react";
import { TextInput, TextInputProps, StyleProp, ViewStyle } from "react-native";

import styles from "./Input.styles";

interface InputProps extends TextInputProps {
  style?: StyleProp<ViewStyle>;
}

const Input = (props: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      style={[styles.input, isFocused && styles.inputFocused, props.style]}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...props}
    />
  );
};

export default Input;
