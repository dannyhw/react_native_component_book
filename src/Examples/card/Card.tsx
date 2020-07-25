import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 4,
    width: 300,
    height: 300,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  lightCard: {
    backgroundColor: 'white',
  },
  darkCard: {
    backgroundColor: '#37474f',
  },
  content: {},
  title: {
    marginBottom: 16,
    fontSize: 18,
    fontWeight: 'bold',
  },
  lightText: {
    color: 'white',
  },
  darkText: {
    color: 'black',
  },
});

type CardProps = {
  children: React.ReactNode;
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  dark?: boolean;
};

const Card = ({
  children,
  title,
  onPress,
  style,
  dark,
  contentStyle,
}: CardProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.container,
        dark ? styles.darkCard : styles.lightCard,
        style,
      ]}>
      <Text style={[styles.title, dark ? styles.lightText : styles.darkText]}>
        {title}
      </Text>
      <View style={[styles.content, contentStyle]}>{children}</View>
    </TouchableOpacity>
  );
};

export default Card;
