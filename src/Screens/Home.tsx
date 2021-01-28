import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, PermissionsAndroid } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Navigation/RootStackParamList';

type ReaderScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Reader'
>;

type Props = {
  navigation: ReaderScreenNavigationProp;
};

export default class Home extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount = () => {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "QRCode Camera Permission",
          message:
            "QR Code needs access to your camera " +
            "so you can take scan QR code.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  render() {
    return (
      <View style={styles.root}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Reader')} style={styles.btnContainer}>
          <Text style={styles.btnText}>
            Open QR Code Reader
            </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// styles
const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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