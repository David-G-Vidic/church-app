import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Dimensions, ScrollView, Image } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Link } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';
import { Image as ExpoImage } from 'expo-image';


const screenWidth = Dimensions.get('window').width;

const F = {
  name: "Test Name",
  image: require( '../assets/images/Announcment1.png' )// ./assets/images/Announcment1.png')
}


export default function KontaktiScreen() {
  return (// >
    <View style={styles.container}>
                <ExpoImage style={styles.image} source={F.image} resizeMode='contain'/>
                <Text style={styles.title}>width </Text>

    </View >
  );
  
}//<WebView style={styles.webView}  source={{uri: 'https://sprejmi.blogspot.com/p/kontakt.html'}}/>
//<Link href={"https://us17.list-manage.com/contact-form?u=edea4d68fd06f8c966006bc28&form_id=0948e3a564aeac96ecfe813dcdfec9af"} style={styles.link}><Text>obrazec</Text></Link>
//<Link href={"https://www.youtube.com/@sprejmi"} style={styles.link}><Entypo size={20} name="youtube" color='red'/><Text> YouTube</Text></Link>
//<Link href={"https://www.facebook.com/groups/44273681298/"} style={styles.link}><Entypo size={20} name="facebook" color='lightblue'/><Text> FaceBook skupina</Text></Link>
//

//    https://www.youtube.com/@sprejmi
//    https://www.facebook.com/groups/44273681298/
//    https://us17.list-manage.com/contact-form?u=edea4d68fd06f8c966006bc28&form_id=0948e3a564aeac96ecfe813dcdfec9af

/*Original
<Text style={styles.title}>Modal</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/modal.tsx" />

     // { Use a light status bar on iOS to account for the black space above the modal }
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingLeft: 15,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contacts: {
    fontSize: 20,
   // fontWeight: 'bold',
    marginBottom: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  webView: {
    flex: 1,
    width: screenWidth,
    
    backgroundColor: '#0553',    
  },
  link: {
    fontSize: 20,
   // fontWeight: 'bold',
   // marginBottom: 10,
  },
  linkText: {
    fontSize: 20,
   // fontWeight: 'bold',
   // marginBottom: 10,
  },
  image: {
    // flex: 10,
    //display: 'flex',
    // width: '80%',
     //height: 0,
     //justifyContent: 'center',
     
     alignSelf: 'center',
     aspectRatio: 1/2,
    //backgroundColor: '#0555',
     //marginVertical: 30,
    // height: 1,
     width: '100%',
     height: '100%',
   },
});
