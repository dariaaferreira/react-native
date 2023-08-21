import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Bar } from 'react-native-progress';

const Loader = () => {
  return (
    <View style={styles.container}>
      <Bar indeterminate={true} color="#FF6C00" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader;
