import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ActionPanel from './ActionPanel';
import KnobPanel from './KnobPanel';

const tabs = [
  {
    component: <KnobPanel />,
    title: 'knobs',
  },
  {component: <ActionPanel />, title: 'actions'},
];

export const Panel = ({}) => {
  const [tabSelected, setTabSelected] = useState(0);
  const [xPos, setXPos] = useState(
    tabs.reduce((prev, {title}) => ({...prev, [title]: 0}), {}),
  );

  // TODO: improve tab thing

  return (
    <View style={styles.container}>
      <View style={styles.tabButtonContainer}>
        {tabs.map(({title}, index) => (
          <TouchableOpacity
            style={styles.tabButton}
            key={title}
            onLayout={({nativeEvent}) =>
              setXPos({...xPos, [title]: nativeEvent.layout.x})
            }
            onPress={() => setTabSelected(index)}>
            <Text
              style={[
                styles.tabTitle,
                tabSelected === index && styles.selectedTab,
              ]}>
              {title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {tabs[tabSelected]?.component}
    </View>
  );
};

const styles = StyleSheet.create({
  tabButton: {marginRight: 24},
  selectedTab: {
    color: '#ff6f00',
    textDecorationStyle: 'solid',
    textDecorationColor: '#ff6f00',
    textDecorationLine: 'underline',
  },
  tabTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    textTransform: 'capitalize',
  },
  container: {
    position: 'absolute',
    bottom: 0,

    backgroundColor: 'white',
    width: '100%',
    padding: 16,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  tabContainer: {},
  tabButtonContainer: {
    flexDirection: 'row',
    marginVertical: 8,
  },
});
