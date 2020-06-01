import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';

// const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

export default function App() {
  const [dimensions, setDimensions] = useState({screen});

  const onChange = ({screens}) => {
    setDimensions({screen: screens});
  };

  useEffect(() => {
    Dimensions.addEventListener('change', onChange);
    return () => {
      Dimensions.removeEventListener('change', onChange);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.textDimension}>{`Screen Dimensions:\n height - ${
        dimensions.screen.height
      },\n width - ${dimensions.screen.width}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textDimension: {
    fontSize: 20,
    textAlign: 'center',
  },
});
