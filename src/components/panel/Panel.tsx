import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useActionState} from '../../context/ActionContext';
import {useKnobState, useKnobUpdateValue} from '../../context/KnobContext';
import ActionPanel from './ActionPanel';
import KnobPanel from './KnobPanel';

export const Panel = ({}) => {
  const actions = useActionState();
  const knobs = useKnobState();
  const knobUpdate = useKnobUpdateValue();

  // TODO: make a tabs component to use here and show actions in a separate tab
  return (
    <View style={styles.container}>
      <ActionPanel actions={actions} />
      <KnobPanel knobs={knobs} knobUpdate={knobUpdate} />
    </View>
  );
};

const styles = StyleSheet.create({
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
