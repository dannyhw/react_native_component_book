import React from 'react';
import ActionPanel from './ActionPanel';
import KnobPanel from './KnobPanel';
import PanelTab from './PanelTab';

const tabs = [
  {
    component: <KnobPanel />,
    title: 'knobs',
  },
  {component: <ActionPanel />, title: 'actions'},
];

export const Panel = () => {
  return <PanelTab tabs={tabs} />;
};
