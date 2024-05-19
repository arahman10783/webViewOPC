import React, {useContext} from 'react';
import {Button, View, Text} from 'react-native';
import {AuthContext} from '../context/contextprovider';

export default function Home({navigation}) {
  const {authData, setAuthData} = useContext(AuthContext);

  return (
    <View style={{marginTop: 24}}>
      {authData ? (
        <View style={{paddingLeft: 30, textAlign: 'center'}}>
          <Text>{authData.accessToken}</Text>
          <Text>{authData.refreshToken}</Text>
          <Button title="Logour" onPress={() => setAuthData(null)} />
        </View>
      ) : (
        <Button
          title="Login"
          onPress={() => navigation.navigate('Playground')}
        />
      )}
    </View>
  );
}
