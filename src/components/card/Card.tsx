import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';

interface CardProps {
  children: React.ReactNode;
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

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
  content: {},
  title: {
    marginBottom: 16,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const Card = ({children, title, onPress, style}: CardProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.content}>{children}</View>
    </TouchableOpacity>
  );
};

export default Card;
