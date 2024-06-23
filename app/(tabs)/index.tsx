import { ScrollView, StyleSheet, Image, ImageSourcePropType, Pressable, Alert } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { PropsWithChildren } from 'react';
import { Image as ExpoImage } from 'expo-image';
import { Link, Tabs } from 'expo-router';
import { ResizeMode } from 'expo-av';


//const dogodekImg: MyImgProm = {imageUrl:  "assets/images/Announcment 1.png"};
type MyImgProm = PropsWithChildren<{imageUrl: ImageSourcePropType}>
const F = {
  name: "Test Name",
  image: require( '../../assets/images/Announcment1.png' )
}
let gW: number;
let gH: number;

Image.getSize('../../assets/images/Announcment1.png', (width, height) => {gW = width; gH = height});

export default function TabOneScreen() {
  return (
    // <iframe src="http://89.142.193.133:8000/radio-sprejmi" name="embed-light" width="195px" height="90px" ></iframe>
    //      <View style={styles.list}>
//      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
//contentContainerStyle={styles.container} >
//       <Image style={styles.image} source={"assets/images/Announcment 1.png"} resizeMode='contain'/>
//source={require('/Users/david/my-app/assets/images/Announcment 1.PNG').default} style={styles.image} resizeMode='contain'/>
    <ScrollView style={styles.outerContainer} contentContainerStyle={styles.container}>
      <View style={{height: '100%', width: '100%',alignItems: 'center', flex:1}}>
        <Text style={styles.title}>Obvestila</Text>
        <Text style={styles.event}>Šola Ozdravljenja width = {gW}</Text>
        <Text style={styles.event}>Krst v vodi</Text>
        <Text style={styles.event}>Otvoritev nove zgradbe</Text>
        <Image source={F.image} style={styles.image} resizeMode='contain' />
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Image source={F.image} resizeMode='contain' width={'50%'} height={50}/>
        
        
        
        
        <Pressable onPress={() => Alert.alert('reservation.name', 'customAlert()')}>
          <ExpoImage style={styles.image} source={F.image} resizeMode='contain'/>
          <Text style={styles.event}>Press</Text>
        </Pressable>
        <ExpoImage source={F.image} width={'100%'}  height={undefined}/>
        
        <ExpoImage source={F.image} style= {{display: 'flex', width: '99%', resizeMode:'contain' }} />
        <Image source={F.image} style= {{ width: '99%', resizeMode:'contain' }} />
        
        <View style={styles.separator} lightColor="blue" darkColor="rgba(255,255,255,0.1)" />

        <ExpoImage source={F.image} style= {{ width: '99%', resizeMode:'contain', minHeight:50, maxHeight: 500, flex: 1 }} />
        <View style={styles.separator} lightColor="red" darkColor="red" />


        <Link href="/imgModal"  >
        <Image source={F.image} style= {{ width: '99%', resizeMode:'contain' }} />
        <Text style={styles.event}>Test</Text>

        </Link>


        <Link href="/modal" asChild></Link>
        <View style={styles.separator} lightColor="blue" darkColor="rgba(255,255,255,0.1)" />
              <Pressable onPress={() => Alert.alert('reservation.name', 'customAlert()')}>

                  <Image source={F.image} style= {{ width: '95%', resizeMode:'contain', aspectRatio: 3/2,backgroundColor: '#0552',}} />
                  <ExpoImage style={styles.image} source={F.image} resizeMode='contain'/>

              </Pressable>
              <View style={styles.separator} lightColor="blue" darkColor="rgba(255,255,255,0.1)" />

        <Text style={styles.event}>Krst v vodi</Text>
      </View>
      <View style={{margin: 0}} />
    </ScrollView>
  );//assets\images\Announcment 1.PNG/as ./assets/Announcment 1.png  C:\Users\david\my-app\assets\images\Announcment 1.PNG
} //style="border: 0px #FFFFFF none;" 
//Works:         <Image source={F.image} style= {{ width: '99%', resizeMode:'contain' }} />

const styles = StyleSheet.create({
  root:{

  },
  container: {
    //flex: 1,
    alignItems: 'center',
    flexGrow: 1 ,
    //height: '100%'
 //   justifyContent: 'center',
   // backgroundColor: 'black',
  },
  outerContainer: {
   // flex: 1,
  //  paddingLeft: 150,
   // alignItems: 'flex-start',
   // justifyContent: 'center',
  },
  list: {
    flex: 1,
    alignItems: 'flex-start',
    //justifyContent: 'flex-start',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  event: {
    fontSize: 20,
    textAlign: 'auto',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image: {
   // flex: 3,
   //display: 'flex',
   // width: '80%',
    //height: 0,
    //justifyContent: 'center',
    alignSelf: 'center',
    aspectRatio: 1,
    backgroundColor: '#0552',
    marginVertical: 30,
   // height: 1,
    width: '80%',
  },
});
