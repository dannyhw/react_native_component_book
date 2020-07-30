import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap'},
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 4,
    borderWidth: StyleSheet.hairlineWidth,
  },
  radioInner: {
    position: 'absolute',
    height: 16,
    width: 16,
    borderRadius: 8,
  },
  itemLabel: {fontSize: 16},

  item: {
    marginRight: 8,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 4,
  },
});

export type RadioOption<T> = {
  key: React.Key;
  label?: string;
  value: T;
};

type RadioProps<T> = {
  data: RadioOption<T>[];
  onChange: (option: RadioOption<T>) => void;
  initValue: T;
};

const Radio = ({data, initValue, onChange}: RadioProps<any>) => {
  const [value, setValue] = useState(initValue);
  return (
    <View style={styles.container}>
      {data.map((item: RadioOption<any>) => {
        const selected = value === item.value;
        const radioBackground = selected ? 'green' : 'white';
        const radioBorder = selected ? 'green' : 'lightgrey';
        return (
          <TouchableOpacity
            key={item.key}
            activeOpacity={0.7}
            style={styles.item}
            onPress={() => {
              onChange(item);
              setValue(item.value);
            }}>
            <View style={[styles.radio, {borderColor: radioBorder}]}>
              <View
                style={[styles.radioInner, {backgroundColor: radioBackground}]}
              />
            </View>
            <Text style={styles.itemLabel}>{item.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Radio;
