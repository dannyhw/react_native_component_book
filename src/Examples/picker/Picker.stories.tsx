import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Panel} from '../../components/panel/Panel';
import ModalPicker, {PickerOption} from './ModalPicker';
import {createStory} from '../../CreateStory';

const options: PickerOption<string>[] = [
  {label: 'one', key: 1, value: 'one1'},
  {label: 'two', key: 2, value: 'two2'},
  {label: 'three', key: 3, value: 'three3'},
  {label: 'four', key: 4, value: 'four4'},
];
const PickerPreview = () => {
  //   const updateAction = useActionUpdate();
  //   const knobs = useKnobState();

  return (
    <View style={styles.container}>
      <View>
        <ModalPicker
          data={options}
          initValue={options[0].value}
          onChange={(_option) => null}
        />
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

export const PickerStory = createStory({
  actionNames: [],
  knobs: [],
  Component: PickerPreview,
});

export default [{name: 'picker', component: PickerStory}];
