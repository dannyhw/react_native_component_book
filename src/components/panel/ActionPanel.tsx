import React from 'react';
import {Text} from 'react-native';
import {useActionState} from '../../context/ActionContext';
import PanelRow from './PanelRow';

const ActionPanel = () => {
  const actions = useActionState();
  return (
    <>
      {Object.entries(actions).map(([name, number]) => {
        return (
          <PanelRow key={name} label={name}>
            <Text>{number}</Text>
          </PanelRow>
        );
      })}
    </>
  );
};

export default ActionPanel;
