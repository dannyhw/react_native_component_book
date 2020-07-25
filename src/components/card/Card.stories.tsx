import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useActionUpdate} from '../../context/ActionContext';
import {KnobTypes, useKnobState} from '../../context/KnobContext';
import {Panel} from '../panel/Panel';
import Card from './Card';
import {createStory} from '../../CreateStory';

const cardAction = 'card-pressed';
const cardActionNames = [cardAction];
const cardKnobs = [
  {
    name: 'cardTitle',
    defaultValue: 'Card title',
    type: KnobTypes.text,
  },
];

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {color: 'white'},
});

const CardPreview = () => {
  const updateAction = useActionUpdate();
  const {cardTitle} = useKnobState();
  return (
    <View style={styles.container}>
      <Card onPress={() => updateAction(cardAction)} title={cardTitle?.value}>
        <Text>content</Text>
      </Card>
      <Panel />
    </View>
  );
};

export const CardStory = createStory({
  actionNames: cardActionNames,
  knobs: cardKnobs,
  Component: CardPreview,
});

export const CardStories = [{name: 'Card', component: CardStory}];
