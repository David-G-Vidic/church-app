import { StyleSheet } from 'react-native';
import React, { useState, useCallback, useRef, Component } from "react";
import { Button,  Alert } from "react-native";
import {YoutubeIframeProps, YoutubeIframeRef} from "react-native-youtube-iframe";
import YoutubePlayer from "react-native-youtube-iframe";
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Image } from 'expo-image';
import Constants from 'expo-constants';
import { Dimensions } from "react-native";
import { WebView } from 'react-native-webview';


const screenWidth = Dimensions.get('window').width;

//const playerRef = useRef<YoutubeIframeRef>(null);

//<Image style={styles.image} source={"assets/icons/home.png"} />
export default function TabTwoScreen() {
  return (
    /*<iframe id="player"  width="100%" height="390"
  src="https://www.youtube.com/embed/cukTSIcG1BI?si=Hozs_HctgW_VFfoI"
  ></iframe>
  
  
  
  
  
  <YoutubeIframeProps
        height={400}
        videoId={'AVAc1gYLZK0'}
        
      ></YoutubeIframeProps>
  
  
  <YoutubePlayer
        ref={playerRef}
        height={400}
        width={400}
        videoId={'AVAc1gYLZK0'}
      />
  */

  //          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
  
   // const yt YoutubeIframeProps = new 
    <View style={styles.container}>
      <Text style={styles.title}>Video</Text>
      <YoutubePlayer
        //ref={playerRef}
        height={400}
        width={400}
        videoId={'hSnC7OHIlag'}
      />

       <WebView style={styles.webView}  source={{uri: 'http://89.142.193.133:8000/radio-sprejmi'}}/>
      
    </View>
  );
}/*urls
    http://89.142.193.133:8000/radio-sprejmi
    https://www.youtube.com/@sprejmi
    https://sprejmi.blogspot.com/

*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
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
  image: {
    flex: 1,
    width: '100%',
    backgroundColor: '#0553',
  },
  webView: {
    flex: 1,
    width: screenWidth,
    backgroundColor: '#0553',    
  },
});
