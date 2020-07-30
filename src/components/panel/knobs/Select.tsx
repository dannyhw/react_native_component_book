import React from 'react';
import {StyleSheet} from 'react-native';
import {SelectOptions, useKnobUpdateValue} from '../../../context/KnobContext';
import {Picker} from '@react-native-community/picker';
import PanelRow from '../PanelRow';

interface SelectProps {
  name: string;
  value: any;
  options: SelectOptions<any>;
}

const Select = ({name, value, options}: SelectProps) => {
  const selected = options.findIndex((v) => value === v.value);

  const knobUpdate = useKnobUpdateValue();
  return (
    <PanelRow label={name}>
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
};

export default Select;

const styles = StyleSheet.create({
  picker: {flex: 1},
});
