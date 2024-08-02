import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

import styles from "./Button.styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button = ({ title, ...props }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
