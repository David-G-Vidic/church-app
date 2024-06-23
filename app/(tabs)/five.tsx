import { Button, StyleSheet} from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Dimensions } from "react-native";

import { useEffect, useState } from 'react';
import { Audio, Video } from 'expo-av';
import { WebView } from 'react-native-webview';

const screenWidth = Dimensions.get('window').width;


export default function TabFiveScreen() {
   /* const [sound, setSound] = useState();

    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync( require('./assets/Hello.mp3')
        );
        setSound(sound);
    
        console.log('Playing Sound');
        await sound.playAsync();
      }
    
      useEffect(() => {
        return sound
          ? () => {
              console.log('Unloading Sound');
              sound.unloadAsync();
            }
          : undefined;
      }, [sound]);
    
<Button title="Play Sound" onPress={playSound} />
*/

  return (
    //      <iframe src="http://89.142.193.133:8000/radio-sprejmi" name="embed-light" width="195px" height="90px" ></iframe>

    <View style={styles.container}>
      <Text style={styles.title}>Radijo Sprejmi</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Video
        source={{ uri: "http://89.142.193.133:8000/radio-sprejmi", type: "radio/mppeg"}}
        style={{ width: 300 , aspectRatio: 16 / 9 }}
        posterSource={{
          uri: "http://89.142.193.133:8000/radio-sprejmi",
        }}
        posterStyle={{
          resizeMode: "cover",
        }}
        usePoster={false}
        useNativeControls
        //resizeMode="contain"      <iframe src="http://89.142.193.133:8000/radio-sprejmi" name="embed-light" width="300px" height="200px" scrolling='false'></iframe>

      />
      
      <WebView style={styles.webView}  source={{uri: 'http://89.142.193.133:8000/radio-sprejmi'}}/>
      <WebView style={styles.iframe} scrollEnabled={false} source={{html: '<iframe src="http://89.142.193.133:8000/radio-sprejmi" name="embed-light" width="300px" height="200px" scrolling="no" ></iframe>'}}/>
      
    </View>
    
  );//style="border: 0px #FFFFFF none;"  frameborder="1" marginwidth="0px" marginheight="0px"  scrolling="no"
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  webView: {
    flex: 1,
    width: screenWidth,
    height: 20,
    backgroundColor: '#0553',
    margin: 5,  
  },
  iframe: {
    flex: 1,
    width: screenWidth -5,
    height: 20,
    backgroundColor: '#0995',
    margin: 5,  
    alignSelf: 'center',
  },
});
