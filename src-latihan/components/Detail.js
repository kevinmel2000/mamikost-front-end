import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from '../styles/styles.js'

class Detail extends Component {
  render() {
    return (
      <View style={styles.center}>
        <Text>Detail Screen in Stack Navigator</Text>
        
        <Button title='Go to tabs'
         onPress={() => this.props.navigation.navigate('TabRoute')} />
      </View>
    );
  }
}

export default Detail;