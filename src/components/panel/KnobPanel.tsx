import React from 'react';
import {KnobTypes, useKnobState} from '../../context/KnobContext';
import {Boolean, Number, Select, TextKnob} from './knobs';
import {Text} from 'react-native';

const KnobPanel = () => {
  const knobs = useKnobState();
  return (
    <>
      {Object.entries(knobs).map(
        ([name, {type, defaultValue, value, options}]) => {
          // TODO: improve this
          if (type === KnobTypes.text) {
            return <TextKnob key={name} {...{name, defaultValue}} />;
          }

          if (type === KnobTypes.number) {
            return <Number key={name} {...{name, defaultValue}} />;
          }

          if (type === KnobTypes.boolean) {
            return <Boolean key={name} {...{name, value}} />;
          }

          if (type === KnobTypes.select && options !== undefined) {
            return <Select key={name} {...{options, name, value}} />;
          }

          return <Text>knob invalid</Text>;
        },
      )}
    </>
  );
};

export default KnobPanel;
