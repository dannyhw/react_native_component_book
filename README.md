# React native component book

The idea is to create an alternative for storybook made specifically for react native. Currently this acts more as a POC and an experiment to explore ideas, this is in no way ready to use :).


# Usage example (early experiment)

In this example a folder with different button components has a "buttons" story file


```
// Buttons.stories.tsx

// placeholder for an npm package that could exist
import {createStory, useActionUpdate, useKnobState, Panel} from 'rn-component-book';

const colorfulButtonAction = 'pressed';

const colorfulButtonKnobs = [
  {
    name: 'buttonText',
    defaultValue: 'colorful',
    type: KnobTypes.text,
  },
  {
    name: 'disabled',
    defaultValue: false,
    type: KnobTypes.boolean,
  },
];

const colorfulButtonActionNames = [colorfulButtonAction];


// this will show on the story screen as defined here
// the panel component is the current approach for showing actions/knobs
const ColorfulButtonPreview = () => {
  const updateAction = useActionUpdate();
  const {buttonText, disabled} = useKnobState();
  const colorfulText = buttonText?.value;
  return (
    <View style={styles.container}>
      <ColorfulButton
        onPress={() => updateAction(colorfulButtonAction)}
        disabled={disabled?.value}>
        <Text style={styles.text}>{colorfulText}</Text>
      </ColorfulButton>
      <Panel />
    </View>
  );
};

// wraps the component with the knobs and actions context and sets them up with the initial values
export const ColorfulButtonStory = createStory({
  colorfulButtonActionNames,
  colorfulButtonKnobs,
  Component: ColorfulButtonPreview,
});

// each item in the list will become a screen
export const ButtonStories = [
  {name: 'Colorful Button', component: ColorfulButtonStory},
];

```

![example](https://media.giphy.com/media/TJguR1LloqSAdzpguK/giphy.gif)


# TODO

- Tests
- Make actions more generic and instead of having a counter, do something like the storybook actions
- Improve knobs implementation in panel component
- separate componentbook specific code into one section of the codebase that will enable imports of the main things all from the same place
- add more knobs
- add styling
- convert panel into something more useful, maybe have it extend out further on drag and add a scroll view inside it
- reduce boilerplate
