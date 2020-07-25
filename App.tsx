import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  DrawerActions,
  NavigationContainer,
  useNavigation,
} from '@react-navigation/native';
import React, {ComponentType} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ButtonStories} from './src/components/button/Buttons.stories';
import {CardStories} from './src/components/card/Card.stories';

const Drawer = createDrawerNavigator();

function getScreen({component: Component}: {component: ComponentType<any>}) {
  return () => (
    <View style={styles.container}>
      <Component />
    </View>
  );
}

const screens = [...ButtonStories, ...CardStories];

const Home = ({}) => {
  const navigation = useNavigation();
  const openNav = () => navigation.dispatch(DrawerActions.openDrawer());
  return (
    <>
      <Text>Open drawer to see components</Text>
      <TouchableOpacity style={styles.button} onPress={openNav}>
        <Text style={styles.buttonText}>Open Drawer</Text>
      </TouchableOpacity>
    </>
  );
};

const App = () => {
  return (
    <SafeAreaView style={StyleSheet.absoluteFill}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={getScreen({component: Home})} />
          {screens.map(({name, component}) => (
            <Drawer.Screen
              key={name}
              name={name}
              options={{}}
              component={component}
            />
          ))}
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonText: {color: 'white'},
  button: {
    backgroundColor: 'rgb(124, 77, 255)',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 8,
    margin: 8,
  },
  container: {alignItems: 'center', flex: 1, justifyContent: 'center'},
});

export default App;
