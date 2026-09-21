import { StyleSheet, View } from 'react-native';
import React from 'react';

const Separator = () => <View style={styles.separator} />;

export default Separator;

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#EEF1F5',
    marginVertical: 10,
  },
});
