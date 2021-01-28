import React from 'react';
import { StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default class Hello extends React.Component {
  scanner: QRCodeScanner | null = null;

  onSuccess = (e: any) => {
    Linking.openURL(e.data).catch(err => {
      alert("Invalid QR Code");
    });
  };

  resetBtn = () => {
    if (this.scanner != null) this.scanner.reactivate();
  }

  render() {
    return (
      <View style={styles.root}>
        <QRCodeScanner
          ref={(node) => this.scanner = node}
          onRead={this.onSuccess}
        />
        <TouchableOpacity onPress={() => this.resetBtn()} style={styles.btnContainer}><Text style={styles.btnText}>Reset</Text></TouchableOpacity>
      </View>
    );
  }
}

// styles
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1
  },
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 45,
    backgroundColor: 'lightblue',
    marginTop: 50
  },
  btnText: {
    color: '#000',
    fontWeight: 'bold'
  }
});