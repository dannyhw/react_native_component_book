import React from 'react';
import {Switch} from 'react-native';
import {useKnobUpdateValue} from '../../../context/KnobContext';
import PanelRow from '../PanelRow';

interface BooleanProps {
  name: string;
  value: any;
}

const Boolean = ({name, value}: BooleanProps) => {
  const knobUpdate = useKnobUpdateValue();
  return (
    <PanelRow label={name}>
      <Switch value={value} onValueChange={() => knobUpdate(name, !value)} />
    </PanelRow>
  );
};

export default Boolean;
