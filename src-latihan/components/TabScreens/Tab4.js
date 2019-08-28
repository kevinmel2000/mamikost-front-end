import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { styles } from '../../styles/styles.js'
class Tab1 extends Component{
  constructor(props){
    super(props);

    this.state={
      kost:this.props.data
    }

  }
  
  render() {
    return (
      <View style={styles.center}>
        <Text>Tab4</Text>
      </View>
    );
  }
}

export default Tab1;