import React from 'react';
import {StyleSheet, TextInput, Switch} from 'react-native';
import PanelRow from './PanelRow';
import {Picker} from '@react-native-community/picker';
import {
  KnobTypes,
  useKnobState,
  useKnobUpdateValue,
} from '../../context/KnobContext';

const KnobPanel = () => {
  const knobs = useKnobState();
  const knobUpdate = useKnobUpdateValue();
  return (
    <>
      {Object.entries(knobs).map(
        ([name, {type, defaultValue, value, options}]) => {
          // TODO: change to a dynamic component thing or similar
          if (type === KnobTypes.text) {
            return (
              <PanelRow key={name} label={name}>
                <TextInput
                  defaultValue={defaultValue}
                  onChangeText={(text) => knobUpdate(name, text)}
                  style={styles.textInput}
                />
              </PanelRow>
            );
          }

          if (type === KnobTypes.boolean) {
            return (
              <PanelRow key={name} label={name}>
                <Switch
                  value={value}
                  onValueChange={() => knobUpdate(name, !value)}
                />
              </PanelRow>
            );
          }

          if (type === KnobTypes.select && options !== undefined) {
            const selected = options.findIndex((v) => value === v.value);

            return (
              <PanelRow key={name} label={name}>
                <Picker
                  selectedValue={selected}
                  onValueChange={(_newValue, index) => {
                    knobUpdate(name, options[index].value);
                  }}
                  style={styles.picker}>
                  {options.map(({label}, index) => (
                    <Picker.Item key={label} label={label} value={index} />
                  ))}
                </Picker>
              </PanelRow>
            );
          }
          return <></>;
        },
      )}
    </>
  );
};

export default KnobPanel;

const styles = StyleSheet.create({
  picker: {flex: 1},
  textInput: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#b0bec5',
  },
});
