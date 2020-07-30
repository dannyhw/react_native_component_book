import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Panel} from '../../components/panel/Panel';
import Radio, {RadioOption} from './Radio';
import {createStory} from '../../CreateStory';
import {KnobTypes, useKnobState} from '../../context/KnobContext';

const RadioPreview = () => {
  //   const updateAction = useActionUpdate();
  const knobs = useKnobState();
  const list: RadioOption<string>[] = Array.from({
    length: !isNaN(knobs?.numberOfItems?.value)
      ? knobs?.numberOfItems?.value
      : 3,
  }).map((item, i) => ({label: `label${i}`, key: i, value: `value${i}`}));
  console.log(list);

  return (
    <View style={styles.container}>
      <View>
        <Radio data={list} initValue={0} onChange={(_option) => null} />
      </View>
      <Panel />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const RadioStory = createStory({
  actionNames: [],
  knobs: [{name: 'numberOfItems', defaultValue: 3, type: KnobTypes.number}],
  Component: RadioPreview,
});

export default [{name: 'radio', component: RadioStory}];
