import React, {useState, useRef, ReactElement} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  Transitioning,
  Transition,
  TransitioningView,
} from 'react-native-reanimated';

interface PanelTabProps {
  tabs: Array<{title: string; component: ReactElement}>;
}

const PanelTab = ({tabs}: PanelTabProps) => {
  const [tabSelected, setTabSelected] = useState(0);

  const trView = useRef<TransitioningView>(null);
  return (
    <Transitioning.View
      ref={trView}
      transition={<Transition.Change durationMs={250} />}
      style={styles.container}>
      <View style={styles.tabButtonContainer}>
        {tabs.map(({title}, index) => (
          <TouchableOpacity
            style={styles.tabButton}
            key={title}
            onPress={() => {
              setTabSelected(index);
              if (trView) {
                trView.current?.animateNextTransition();
              }
            }}>
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
    </Transitioning.View>
  );
};

export default PanelTab;

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
