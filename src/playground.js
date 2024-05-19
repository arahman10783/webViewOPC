import React, {useContext, useState} from 'react';
import {WebView} from 'react-native-webview';
import {Platform} from 'react-native';
import {AuthContext} from '../context/contextprovider';

export default function Playground({navigation}) {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setLoaded] = useState(false);
  const {setAuthData} = useContext(AuthContext);

  const source =
    Platform.OS === 'ios'
      ? require('./assets/sample.html')
      : {uri: 'file:///android_asset/sample.html'};

  return (
    <>
      {/* {!isLoaded ? (
        <Progress.Bar
          progress={progress}
          width={null}
          borderWidth={0}
          borderRadius={0}
          color="#ff8300"
        />
      ) : null} */}
      <WebView
        // source={{
        //   uri: 'https://google.com',
        //   headers: { 'key': 'value' }
        // }}
        // source={{ html: '<h1>This is a statsampleic HTML source!</h1>' }}
        source={source}
        onError={event =>
          console.log(`Webview error: ${event.nativeEvent.description}`)
        }
        // injectedJavaScript={javascript}
        onMessage={event => {
          setAuthData(JSON.parse(event.nativeEvent.data));
          console.log(event.nativeEvent.data);
          setTimeout(() => {
            navigation.navigate('Webviews');
          }, 200);
        }}
        onLoadProgress={({nativeEvent}) => setProgress(nativeEvent.progress)}
        onLoadEnd={() => setLoaded(true)}
      />
    </>
  );
}
