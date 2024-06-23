import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Dimensions, ScrollView } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Link } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';

const screenWidth = Dimensions.get('window').width;


export default function KontaktiScreen() {
  return (// >
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Kontakti</Text>
      <Text style={styles.contacts}>{`
KONTAKTNA OSEBA za KC Ljubljana: 

Uroš Turnšek 051 316 090 turnsekuros1@gmail.com

Carol Vidic 041 842 800 verujem@gmail.com (angleško, in english)



KONTAKTNA OSEBA za KC Novo mesto: 

Denis Turk, 031 398 481, turk.md@gmail.com



KONTAKTNA OSEBA za KC Šentjur: 

Vida Špilak, 070 620 206, spilak.vida@gmail.com



KONTAKTNA OSEBA za KC Koroška:

Marjeta Ročnik, 040 465 900, mihaela.rocnik@gmail.com



ODGOVORNA OSEBA za KRŠČANSKI CENTER:


Klemen Vidic, info@sprejmi.si
`}</Text>
      <Text style={styles.title}>Lokacije</Text>
      <Text style={styles.contacts}>{`
Ljubljana, nedelja 17h, Zaloška cesta 54 (kontakt: Uroš 051 316 090)

Šentjur, četrtek 19h, Ljubljanska cesta 30 (kontakt: Vida 070 620 206)

Novo mesto, nedelja 9h, Podbevškova 28 (kontakt: Denis 031 398 481)

Prevalje, prva nedelja v mesecu 10h (kontakt: Marjeta 040 465 900, DD)
`}</Text>
<Text style={styles.title}>Pomoč in Molitev</Text>
      <Text style={styles.contacts}>{`
- Če želite, da kdo moli za vas: 041-276-684 (Nataša, pecarnatasa@gmail.com)
- Če potrebujete psihološko pomoč: 051 316 040 (Ines, inesturnsek@gmail.com) ali 
051 316 090 ( Uroš, turnsekuros1@gmail.com)

- Za vprašanja, kontakt in duhovno rast: pišite na info@sprejmi.si
ali nam pošljite sporočilo preko tega obrazca
- Prijava na e-mail obvestila: email.sprejmi.si
- Spremljajte nas na FB: fb.sprejmi.si
- Všečkajte nas in se naročite na youtube: tv.sprejmi.si
- Poslušajte naš RADIO na radio.sprejmi.si
`}</Text> 
<Link href={"https://us17.list-manage.com/contact-form?u=edea4d68fd06f8c966006bc28&form_id=0948e3a564aeac96ecfe813dcdfec9af"} style={styles.link}><Text>obrazec</Text></Link>
<Link href={"https://www.youtube.com/@sprejmi"} style={styles.link}><Entypo size={20} name="youtube" color='red'/><Text> YouTube</Text></Link>
<Link href={"https://www.facebook.com/groups/44273681298/"} style={styles.link}><Entypo size={20} name="facebook" color='lightblue'/><Text> FaceBook skupina</Text></Link>

    </ScrollView >
  );
  
}//<WebView style={styles.webView}  source={{uri: 'https://sprejmi.blogspot.com/p/kontakt.html'}}/>


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
    paddingLeft: 15,
   // alignItems: 'flex-start',
   // justifyContent: 'center',
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
});
