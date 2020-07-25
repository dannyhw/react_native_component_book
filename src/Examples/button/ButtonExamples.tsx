import React from 'react';
import {Text, View, StyleSheet, Button, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ColorfulButton from './colorful/ColorfulButton';

interface ButtonExamplesProps {}

const ButtonExamples = ({}: ButtonExamplesProps) => {
  return (
    <>
      {/* Simple button with some text,
       not much to customize uses native button */}

      <Button
        title="Native button"
        color="black"
        onPress={() => Alert.alert('button')}
      />

      {/* Wrap any content with a touchable container, much more customization */}

      <TouchableOpacity style={styles.pressableContent}>
        <View style={styles.dot} />
        <Text style={styles.pressableText}>text</Text>
      </TouchableOpacity>

      <ColorfulButton
        onPress={() => null}
        activeColor="#4a148c"
        color="#7b1fa2">
        <Text style={styles.colorfulText}>text</Text>
      </ColorfulButton>

      <TouchableOpacity
        onPress={() => console.log('do something')}
        activeOpacity={0.8}
        style={styles.card}>
        <Text style={styles.cardContent}>content</Text>
      </TouchableOpacity>
    </>
  );
};

export default ButtonExamples;

const styles = StyleSheet.create({
  colorfulText: {color: 'white'},
  container: {flex: 1},
  dot: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#536dfe',
    marginRight: 8,
  },
  pressableContent: {
    flexDirection: 'row',
    margin: 8,
    justifyContent: 'space-between',
    backgroundColor: '#546e7a',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 4,
    alignItems: 'center',
  },
  pressableText: {
    color: 'white',
  },
  card: {
    width: 300,
    height: 200,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#b0bec5',
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 16,
    margin: 16,
  },
  cardContent: {
    color: 'black',
  },
});
