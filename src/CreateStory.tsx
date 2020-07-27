import React, {ComponentType} from 'react';
import {ActionProvider} from './context/ActionContext';
import {KnobProvider, KnobBuilderParam} from './context/KnobContext';
import {
  Pressable,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import {getStatusBarHeight} from './StatusBarHeight';

type CreateStory = {
  actionNames: string[];
  knobs: KnobBuilderParam[];
  Component: ComponentType<any>;
};

export const createStory = ({actionNames, knobs, Component}: CreateStory) => {
  return () => (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.flexone}
      keyboardVerticalOffset={getStatusBarHeight(true)}>
      <Pressable style={styles.flexone} onPress={Keyboard.dismiss}>
        <ActionProvider actionNames={actionNames}>
          <KnobProvider knobs={knobs}>
            <Component />
          </KnobProvider>
        </ActionProvider>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  flexone: {
    flex: 1,
  },
});
