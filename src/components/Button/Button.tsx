import React, { FC } from 'react';
import {
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

import { common, palette } from 'core/styles';
import styles from './Button.styles';

interface ButtonProps {
  title: string;
  opaque?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
}

const Button: FC<ButtonProps> = ({
  title,
  opaque = true,
  disabled = false,
  loading = false,
  onPress,
  style,
  containerStyle = {},
  textStyle,
  prefixIcon,
  suffixIcon,
}) => {
  return (
    <View style={containerStyle}>
      <TouchableOpacity
        activeOpacity={disabled ? 1 : 0}
        style={[
          styles.button,
          disabled && styles.disabled,
          loading && styles.loading,
          !opaque && styles.transparent,
          // !opaque && common.shadow,
          style,
        ]}
        onPress={onPress}
      >
        {prefixIcon}

        <Text
          style={[
            styles.buttonText,
            textStyle,
            !opaque && { color: "bluergb(0 110 255)" },
            disabled && { color: palette.GREY },
          ]}
        >
          {title}
        </Text>

        {suffixIcon}
      </TouchableOpacity>
    </View>
  );
};

export default Button;
