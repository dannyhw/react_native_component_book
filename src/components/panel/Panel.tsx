import React from 'react';
import {View, StyleSheet, Text, Switch} from 'react-native';
import {useActionState} from '../../context/ActionContext';
import {
  useKnobState,
  KnobTypes,
  useKnobUpdateValue,
} from '../../context/KnobContext';
import {TextInput} from 'react-native-gesture-handler';

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
      {Object.entries(knobs).map(([name, {type, defaultValue, value}]) => {
        // TODO: make this use a component or something else that isn't a list a of ifs
        if (type === KnobTypes.text) {
          return (
            <View style={styles.panelRow} key={name}>
              <View style={styles.actionContainer}>
                <View style={styles.actionColumn}>
                  <Text style={styles.actionName}>{name}</Text>
                </View>
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
                <View style={styles.actionColumn}>
                  <Text style={styles.actionName}>{name}</Text>
                </View>
                <Switch
                  value={value}
                  onValueChange={() => knobUpdate(name, !value)}
                />
              </View>
            </View>
          );
        }
        return <></>;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
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
    height: 200,
    backgroundColor: 'white',
    width: '100%',
    padding: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#b0bec5',
  },
});
