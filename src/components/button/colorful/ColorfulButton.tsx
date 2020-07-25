import React, {useRef, useState, useEffect, ReactNode} from 'react';
import {
  StyleSheet,
  Animated,
  Pressable,
  StyleProp,
  ViewStyle,
  PressableProps,
} from 'react-native';

type ColorfulButtonProps = {
  onPress: () => void;
  children: ReactNode;
  color?: string;
  activeColor?: string;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
} & PressableProps;

const ColorfulButton = ({
  onPress,
  children,
  color = 'rgb(69, 39, 160)',
  activeColor = 'rgb(61, 90, 254)',
  style = {},
  disabled,
  ...pressableProps
}: ColorfulButtonProps) => {
  const [buttonPressed, setButtonPressed] = useState(false);

  const animatedValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (buttonPressed) {
      Animated.spring(animatedValue, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.spring(animatedValue, {
        toValue: 1,
        useNativeDriver: false,
      }).start();
    }
  }, [buttonPressed, animatedValue]);

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [activeColor, color],
  });
  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => {
        setButtonPressed(true);
      }}
      onPressOut={() => {
        setButtonPressed(false);
      }}
      disabled={disabled}
      {...pressableProps}>
      <Animated.View
        style={[
          styles.button,
          {backgroundColor},
          disabled && styles.disabled,
          style,
        ]}>
        {children}
      </Animated.View>
    </Pressable>
  );
};

export default ColorfulButton;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 4,
  },
  disabled: {
    opacity: 0.6,
  },
});
