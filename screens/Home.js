import React, {useState} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {View, Text, StyleSheet} from 'react-native';

const Home = () => {
  const [scannedData, setData] = useState('SCAN NOW!');

  return (
    <View style={styles.Wrapper}>
      <View style={styles.Container}>
        <Text style={styles.TopContext}>{scannedData}</Text>
        <QRCodeScanner
          onRead={({data}) => setData(data)}
          flashMode={RNCamera.Constants.FlashMode.torch}
          reactivate={true}
          showMarker={true}
          markerStyle={styles.border}
          reactivateTimeout={500} //0.5 second
          cameraStyle={styles.camera}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  Wrapper: {
    alignSelf: 'center',
  },
  Container: {
    flex: 1,
    left: 45,
  },
  TopContext: {
    flex: 1,
    top: 45,
    left: 65,
    fontSize: 18,
    padding: 32,
    color: 'black',
    fontWeight: 'bold',
  },
  border: {
    borderColor: 'white',
    borderWidth: 5,
    borderRadius: 15,
  },
  camera: {
    width: 300,
    bottom: 250,
    position: 'absolute',
  },
});
