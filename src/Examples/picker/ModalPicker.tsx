import {
  View,
  Modal,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';

const styles = StyleSheet.create({
  itemContainer: {alignItems: 'center', width: '70%'},
  itemLabel: {fontSize: 16},
  notLastItem: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  lastItem: {
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
  },
  fistItem: {
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
  },
  overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    padding: '5%',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  item: {
    paddingVertical: 16,
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    padding: 5,
    margin: 10,
    borderColor: 'lightgrey',
    backgroundColor: 'white',
    borderRadius: 4,
  },
});

export type PickerOption<T> = {
  key: React.Key;
  label?: string;
  value: T;
};

type PickerProps<T> = {
  data: PickerOption<T>[];
  onChange: (option: PickerOption<T>) => void;
  initValue: T;
};

const ModalPicker = ({data, initValue, onChange}: PickerProps<any>) => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState(initValue);
  return (
    <View>
      <Modal transparent animationType="none" visible={visible}>
        <Pressable style={styles.overlay} onPress={() => setVisible(false)}>
          <View style={styles.itemContainer}>
            {data.map((item: PickerOption<any>, i) => (
              <TouchableOpacity
                key={item.label}
                activeOpacity={0.9}
                style={[
                  styles.item,
                  data.length - 1 !== i && styles.notLastItem,
                  i === data.length - 1 && styles.lastItem,
                  i === 0 && styles.fistItem,
                ]}
                onPress={() => {
                  setVisible(false);
                  onChange(item);
                  setValue(item.value);
                }}>
                <Text style={styles.itemLabel}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Pressable>
      </Modal>

      <TouchableOpacity onPress={() => setVisible(true)}>
        <View pointerEvents="none">
          <TextInput
            editable={false}
            value={value}
            autoCapitalize="none"
            underlineColorAndroid="transparent"
            style={styles.input}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ModalPicker;
