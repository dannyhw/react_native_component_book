import React, {
  createContext,
  ComponentType,
  useState,
  useEffect,
  ReactNode,
} from 'react';

export enum KnobTypes {
  boolean = 'boolean',
  number = 'number',
  text = 'text',
}

export type KnobData = {
  type: KnobTypes;
  name: string;
  defaultValue: any;
};

type KnobItem = {
  type: string;
  defaultValue: any;
  value: any;
};
type KnobsMap = {
  [key: string]: KnobItem;
};

const KnobContext = createContext<KnobsMap>({});
type UpdateKnobValue = (name: string, value: any) => void;
const KnobUpdateValueContext = createContext<UpdateKnobValue>(
  (_name: string, _value: any) => null,
);

type KnobComponentMap = {
  [type in KnobTypes]: ComponentType<any>;
};

export function useKnobState() {
  const context = React.useContext(KnobContext);
  if (context === undefined) {
    throw new Error('useCountState must be used within a ActionProvider');
  }
  return context;
}
export function useKnobUpdateValue() {
  const context = React.useContext(KnobUpdateValueContext);
  if (context === undefined) {
    throw new Error('useCountDispatch must be used within a ActionProvider');
  }
  return context;
}

type KnobProviderProps = {children: ReactNode; knobs: KnobData[]};

export function KnobProvider({children, knobs}: KnobProviderProps) {
  const [knobsMap, setKnobsMap] = useState<KnobsMap>({});
  useEffect(() => {
    const knobMap: KnobsMap = knobs.reduce(
      (prev: KnobsMap, {type, defaultValue, name}: KnobData) => {
        return {...prev, [name]: {type, defaultValue, value: defaultValue}};
      },
      {},
    );
    setKnobsMap(knobMap);
  }, [knobs]);

  const updateKnobValue = (name: string, value: any) => {
    if (knobsMap[name]) {
      setKnobsMap({...knobsMap, [name]: {...knobsMap[name], value}});
    }
  };

  return (
    <KnobContext.Provider value={knobsMap}>
      <KnobUpdateValueContext.Provider value={updateKnobValue}>
        {children}
      </KnobUpdateValueContext.Provider>
    </KnobContext.Provider>
  );
}
