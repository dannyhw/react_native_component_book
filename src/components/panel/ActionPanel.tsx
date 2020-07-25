import React from 'react';
import {Text} from 'react-native';
import {ActionsMap} from 'src/context/ActionContext';
import PanelRow from './PanelRow';

interface ActionPanelProps {
  actions: ActionsMap;
}

const ActionPanel = ({actions}: ActionPanelProps) => {
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
