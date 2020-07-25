import React, {createContext, ReactNode, useState, useEffect} from 'react';

export type ActionsMap = {
  [key: string]: number;
};

const ActionContext = createContext<ActionsMap>({});

export type ActionUpdate = (actionName: string) => void;
const ActionUpdateContext = createContext<ActionUpdate>(
  (_actionName: string) => {},
);

export function useActionState() {
  const context = React.useContext(ActionContext);
  if (context === undefined) {
    throw new Error('useCountState must be used within a ActionProvider');
  }
  return context;
}
export function useActionUpdate() {
  const context = React.useContext(ActionUpdateContext);
  if (context === undefined) {
    throw new Error('useCountDispatch must be used within a ActionProvider');
  }
  return context;
}

type ActionProviderProps = {children: ReactNode; actionNames: string[]};
export function ActionProvider({children, actionNames}: ActionProviderProps) {
  const [actions, setActions] = useState<ActionsMap>({});
  useEffect(() => {
    const actionMap = actionNames.reduce((prev, currentValue) => {
      return {...prev, [currentValue]: 0};
    }, {});
    setActions(actionMap);
  }, [actionNames]);

  const updateAction = (name: string) => {
    if (actions[name] !== undefined) {
      setActions({...actions, [name]: actions[name] + 1});
    }
  };

  return (
    <ActionContext.Provider value={actions}>
      <ActionUpdateContext.Provider value={updateAction}>
        {children}
      </ActionUpdateContext.Provider>
    </ActionContext.Provider>
  );
}
