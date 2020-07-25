import React, {ComponentType} from 'react';
import {ActionProvider} from './context/ActionContext';
import {KnobProvider, KnobBuilderParam} from './context/KnobContext';

type CreateStory = {
  actionNames: string[];
  knobs: KnobBuilderParam[];
  Component: ComponentType<any>;
};

export const createStory = ({actionNames, knobs, Component}: CreateStory) => {
  return () => (
    <ActionProvider actionNames={actionNames}>
      <KnobProvider knobs={knobs}>
        <Component />
      </KnobProvider>
    </ActionProvider>
  );
};
