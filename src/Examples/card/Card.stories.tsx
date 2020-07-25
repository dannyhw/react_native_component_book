import React, {ComponentType} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useActionUpdate} from '../../context/ActionContext';
import {
  KnobTypes,
  SelectOptions,
  useKnobState,
} from '../../context/KnobContext';
import {createStory} from '../../CreateStory';
import {Panel} from '../../components/panel/Panel';
import Card from './Card';

const cardAction = 'card-pressed';
const cardActionNames = [cardAction];
const contentOptions: SelectOptions<ComponentType<any>> = [
  {
    label: 'circle',
    value: () => <TouchableOpacity style={styles.circle} />,
  },
  {label: 'text', value: () => <Text>some content goes here</Text>},
  {
    label: 'square',
    value: () => <View style={styles.square} />,
  },
];

const cardKnobs = [
  {
    name: 'cardTitle',
    defaultValue: 'Card title',
    type: KnobTypes.text,
  },
  {
    name: 'Content',
    defaultValue: contentOptions[0].value,
    options: contentOptions,
    type: KnobTypes.select,
  },
];

const styles = StyleSheet.create({
  cardContent: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  square: {height: 50, width: 50, backgroundColor: 'cyan'},
  circle: {
    backgroundColor: 'hotpink',
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  container: {flex: 1, alignItems: 'center', marginTop: 56},
  text: {color: 'white'},
});

const CardPreview = () => {
  const updateAction = useActionUpdate();
  const knobs = useKnobState();
  const cardTitle: string = knobs.cardTitle?.value;
  const Content: ComponentType<any> = knobs.Content?.value;
  return (
    <View style={styles.container}>
      <Card
        onPress={() => updateAction(cardAction)}
        title={cardTitle}
        contentStyle={styles.cardContent}>
        {Content ? <Content /> : <></>}
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
