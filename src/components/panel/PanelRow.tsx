import React, {ReactNode} from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface PanelRowProps {
  label: string;
  children: ReactNode;
}

const PanelRow = ({label, children}: PanelRowProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.labelColumn}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={styles.contentColumn}>{children}</View>
    </View>
  );
};

export default PanelRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 8,
    justifyContent: 'center',
  },
  label: {
    fontWeight: 'bold',
  },
  labelColumn: {
    flex: 1,
    justifyContent: 'center',
  },
  contentColumn: {
    flex: 1,
  },
});
