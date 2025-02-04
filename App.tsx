import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { AppleButton } from '@invertase/react-native-apple-authentication';

const App = () => {
  const onAppleButtonPress = () => {
    console.log("Apple sign-In Pressed");
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: 20,
        backgroundColor: '#fff'
      }}
      bounces={false}
    >
      <LinearGradient
        colors={['#fff', '#fafaff']}
        style={{ flex: 1, justifyContent: 'center' }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <View style={{ padding: 20 }}>
          
          {/* Social login */}
          <View style={{ alignItems: 'center' }}>

            {Platform.OS === 'ios' && (
              <AppleButton
                buttonStyle={AppleButton.Style.WHITE}
                buttonType={AppleButton.Type.SIGN_IN}
                style={{
                  width: 200,
                  height: 45,
                  marginBottom: 10
                }}
                onPress={onAppleButtonPress}
              />
            )}
            <TouchableOpacity style={{ backgroundColor: 'red', padding: 10 }}>
              <Text style={{ color: 'white' }}>Google Sign-In</Text>
            </TouchableOpacity>
          </View>


        </View>
      </LinearGradient>
    </ScrollView>

  );

};

export default App;