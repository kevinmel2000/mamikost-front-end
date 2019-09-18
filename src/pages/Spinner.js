import React,{ Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay';

export default class spinner extends Component {
    render() {
        return (
        <View style={styles.container}>
            <Spinner
                //visibility of Overlay Loading Spinner
                visible={true}
                //Text with the Spinner
                textContent={'Loading...'}
                //Text style of the Spinner Text
                textStyle={styles.spinnerTextStyle}
            />
        </View>

        )
    }

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      textAlign: 'center',
      paddingTop: 30,
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
    spinnerTextStyle: {
      color: '#FFF',
    },
  });
  