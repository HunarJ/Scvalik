import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

import styles from "./SmallButton.styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const SmallButton = ({ title, ...props }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SmallButton;
