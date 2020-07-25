import React from 'react';
import {View, StyleSheet, Text, Switch, TextInput} from 'react-native';
import {useActionState} from '../../context/ActionContext';
import {
  useKnobState,
  KnobTypes,
  useKnobUpdateValue,
} from '../../context/KnobContext';
import {Picker, PickerIOS} from '@react-native-community/picker';

export const Panel = ({}) => {
  const actions = useActionState();
  const knobs = useKnobState();
  const knobUpdate = useKnobUpdateValue();
  return (
    <View style={styles.container}>
      {Object.entries(actions).map(([name, number]) => {
        return (
          <View style={styles.panelRow} key={name}>
            <View style={styles.actionContainer}>
              <View style={styles.actionColumn}>
                <Text style={styles.actionName}>{name}</Text>
              </View>
              <Text>{number}</Text>
            </View>
          </View>
        );
      })}
      {Object.entries(knobs).map(
        ([name, {type, defaultValue, value, options}]) => {
          const nameElement = (
            <View style={styles.actionColumn}>
              <Text style={styles.actionName}>{name}</Text>
            </View>
          );

          // TODO: make this use a component or something else that isn't a list a of ifs
          if (type === KnobTypes.text) {
            return (
              <View style={styles.panelRow} key={name}>
                <View style={styles.actionContainer}>
                  {nameElement}
                  <TextInput
                    defaultValue={defaultValue}
                    onChangeText={(text) => knobUpdate(name, text)}
                    style={styles.textInput}
                  />
                </View>
              </View>
            );
          }

          if (type === KnobTypes.boolean) {
            return (
              <View style={styles.panelRow} key={name}>
                <View style={styles.actionContainer}>
                  {nameElement}
                  <Switch
                    value={value}
                    onValueChange={() => knobUpdate(name, !value)}
                  />
                </View>
              </View>
            );
          }

          if (type === KnobTypes.select && options !== undefined) {
            const selected = options.findIndex((v) => value === v.value);

            return (
              <View style={styles.panelRow} key={name}>
                <View style={styles.actionContainer}>
                  {nameElement}
                  <PickerIOS
                    selectedValue={selected}
                    onValueChange={(_newValue, index) => {
                      knobUpdate(name, options[index].value);
                    }}
                    style={styles.picker}>
                    {options.map(({label}, index) => (
                      <Picker.Item key={label} label={label} value={index} />
                    ))}
                  </PickerIOS>
                </View>
              </View>
            );
          }
          return <></>;
        },
      )}
    </View>
  );
};

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
  panelRow: {
    flexDirection: 'row',
    marginVertical: 8,
    alignItems: 'center',
  },
  actionName: {fontWeight: 'bold'},
  actionColumn: {
    width: '50%',
    justifyContent: 'center',
  },
  actionContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  container: {
    position: 'absolute',
    bottom: 0,

    backgroundColor: 'white',
    width: '100%',
    padding: 16,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
