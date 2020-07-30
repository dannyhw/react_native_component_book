import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import PanelRow from '../PanelRow';
import {useKnobUpdateValue} from '../../../context/KnobContext';

interface TextProps {
  name: string;
  defaultValue: any;
}

const TextKnob = ({name, defaultValue}: TextProps) => {
  const knobUpdate = useKnobUpdateValue();
  return (
    <PanelRow label={name}>
      <TextInput
        defaultValue={defaultValue.toString()}
        onChangeText={(text) => knobUpdate(name, text)}
        style={styles.textInput}
        keyboardType="numeric"
      />
    </PanelRow>
  );
};

export default TextKnob;

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#b0bec5',
  },
});
