import React from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
// import * as Permissions from 'expo-permissions';

export default class App extends React.Component {

  componentDidMount() {
    // this.manageLocation()
  }

  // manageLocation = async () => {
  //   let status = await Permissions.askAsync(Permissions.LOCATION);
  //   console.log(status);
  // };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <WebView source={{ uri: 'https://breathingdots.com/' }} style={{ flex: 1 }} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});
