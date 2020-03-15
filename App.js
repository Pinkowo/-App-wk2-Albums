import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import Albumlist from './AlbumList';

const App = () => {
  return (
    <View>
      <Header />
      <Albumlist />
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default App;