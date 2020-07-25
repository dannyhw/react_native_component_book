import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useActionUpdate} from '../../context/ActionContext';
import {KnobTypes, useKnobState} from '../../context/KnobContext';
import {Panel} from '../panel/Panel';
import ColorfulButton from './colorful/ColorfulButton';
import {createStory} from '../../CreateStory';

const pressedActionKey = 'pressed';

const knobs = [
  {
    name: 'buttonText',
    defaultValue: 'colorful',
    type: KnobTypes.text,
  },
  {
    name: 'disabled',
    defaultValue: false,
    type: KnobTypes.boolean,
  },
];

const ColorfulButtonPreview = () => {
  const updateAction = useActionUpdate();
  const {buttonText, disabled} = useKnobState();
  const colorfulText = buttonText?.value;
  return (
    <View style={styles.container}>
      <ColorfulButton
        onPress={() => updateAction(pressedActionKey)}
        disabled={disabled?.value}>
        <Text style={styles.text}>{colorfulText}</Text>
      </ColorfulButton>
      <Panel />
    </View>
  );
};

const actionNames = [pressedActionKey];

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {color: 'white'},
});

export const ColorfulButtonStory = createStory({
  actionNames,
  knobs,
  Component: ColorfulButtonPreview,
});

export const ButtonStories = [
  {name: 'Colorful Button', component: ColorfulButtonStory},
];
