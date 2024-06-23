import { StyleSheet, Text, Pressable, Alert, ScrollView } from "react-native";
import { View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";
import calendarTheme, { Agenda, AgendaEntry } from "react-native-calendars";
import events from "../../assets/data/events.json";
import event from "../../assets/data/event.json";
import Entypo from "@expo/vector-icons/Entypo";
import { Checkbox } from "react-native-paper";
import CustomButton from "@/components/CustomButton";



const timeToString = (time: string | number | Date) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};


export default function AgendaScreen({
  navigation,
}: RootTabScreenProps<"AgendaScreen">) {
  const renderItem = (reservation: AgendaEntry, isFirst: boolean) => {
    const fontSize = 16;//isFirst ? 16 : 14;
    const color = "black";
    let location: string | undefined = reservation.location;
    if (location == undefined) location = "(Ni lokacije)"


    const customAlert = () => {
        let adress = "(Ni naslova)";
        let contact = "(Ni kontacta)";
        if (location == "KCL" || location == "Ljubljana" || location == "KCLJ"){
            adress = "Zaloška cesta 54 ";
            contact = "kontakt: Uroš 051 316 090";
        }else if (location == "Šentjur" || location == "KCŠ"){
            adress = "Ljubljanska cesta 30";
            contact = "kontakt: Vida 070 620 206";
        }else if (location == "Novo Mesto" || location == "KCNM"){
            adress = "Podbevškova 28";
            contact = "Denis 031 398 481";
        }

        return `Full address: ${location + " " + adress}
Time of event: 9:00 PM
${contact}`
    };
    return (<View style={[styles.item, { height: reservation.height = 50}]} >
      <Pressable
     //   style={[styles.item, { height: reservation.height = 50 }]}
        onPress={() => Alert.alert(reservation.name, customAlert())}//() => navigation.navigate("Modal", { id: "1" })}//id: event.id
      >
        <Text style={{ fontSize, color }}>{reservation.name}</Text>
        <Text>{<Entypo name="location-pin" /> } {location}</Text>
      </Pressable>
      
      </View>
    );//<Text>{<Checkbox status="checked"/>}I'm going {}</Text><CustomButton text="Join the event" onPress={onJoin} />
  };


  const renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>This is an empty date.</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Agenda
        items={events}
        selected={timeToString(Date.now())}
        renderItem={renderItem}
        renderEmptyDate={renderEmptyDate}

        theme={{
            ...calendarTheme,
            agendaDayTextColor: 'black',
            agendaDayNumColor: 'green',
            agendaTodayColor: 'red',
            todayBackgroundColor: 'lightgrey',
          //calendarBackground: 'lightgrey',
          //backgroundColor: 'red',
          }}

          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={'2020-01-01'}
          // Max amount of months allowed to scroll to the past. Default = 50
          pastScrollRange={5}
          // Max amount of months allowed to scroll to the future. Default = 50
          futureScrollRange={12}
          showClosingKnob={true}
          onRefresh={() => console.log('refreshing...')}
          renderKnob={() => {
            return <Entypo name='chevron-down' size={25}/>;
          }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 150,
    flex: 1,
    paddingTop: 30,
  },
  checkBox: {
    
    paddingTop: 5,
  },
});




//import { StyleSheet, Pressable, Alert } from 'react-native';
//
//import EditScreenInfo from '@/components/EditScreenInfo';
//import { Text, View } from '@/components/Themed';
//import calendarTheme, {Agenda, AgendaEntry, AgendaSchedule, DateData} from 'react-native-calendars';
//import {Calendar} from 'react-native-calendars';
//
//import React, { useState, useEffect } from 'react';
//import {TouchableOpacity } from 'react-native';
//import { Card, Avatar } from 'react-native-paper';
//
//import Entypo from '@expo/vector-icons/Entypo';
//import { RootTabScreenProps } from "../../types";
//import events from "../../assets/data/events.json";
//import event from "../../assets/data/event.json";
//
//
//export default function AgendaScreen({
//  navigation,
//}: RootTabScreenProps<"AgendaScreen">) {
//  const [items, setItems] = useState<AgendaSchedule>({});
//
//  const loadItems = (day: DateData) => {
//    setItems(events);
//  };
//
//const timeToString = (time: string | number | Date) => {
//const date = new Date(time);
//return date.toISOString().split('T')[0];
//};
//
//const renderEmptyDate = () => {
//  return (
//    <View style={styles.emptyDate}>
//      <Text>  This is an empty date</Text>
//    </View>
//  );
//};
//
//const Schedule = () => {
//  const [items, setItems] = useState({});
//  /*
//  useEffect(() => {
//      const today = timeToString(Date.now());
//      const newItems = { [today]: [{ name: ' Todays service', height: 50, padding: 10 }] };
//      setItems(newItems);
//  }, []);*/
//  
//  const loadItems = (day: any) => {
//      const today = timeToString(Date.now());
//      const newItems = { 
//        [today]: [{ name: ' Današnji dan', height: 50, padding: 10 }], 
//        ['2024-05-30']: [{ name: ' Trideseti', height: 50, padding: 10 }], 
//        ['2024-06-02']: [{ name: 'Nedelska Srečanja', height: 50, padding: 10 }]  
//      };
//      setItems(newItems);
//  };
//  
//  const labelR: string = "@";
//  /*
//  const renderItem = (item: any) => {
//      return (
//          <TouchableOpacity style={{ marginRight: 10, marginTop: 17 }}>
// 
//                      <View
//                          style={{
//                              flexDirection: 'row',
//                              justifyContent: 'space-between',
//                              alignItems: 'center',
//                          }}>
//                          <Text>{item.name}</Text>
//                          <Avatar.Text label={labelR} style={styles.avatar}/>
//                      </View>
//
//          </TouchableOpacity>
//      );
//  };*/
//  const renderItem = (reservation: AgendaEntry, isFirst: boolean) => {
//    const fontSize = isFirst ? 16 : 14;
//    const color = isFirst ? "black" : "#43515c";
//
//    return (
//      <Pressable
//        style={[styles.item, { height: reservation.height }]}
//        //onPress={() => Alert.alert(reservation.name)}
//        onPress={() => navigation.navigate("Modal", { id: event.id})}
//      >
//        <Text style={{ fontSize, color }}>{reservation.name}</Text>
//      </Pressable>
//    );
//  };
//
//  /*
//
//
//<TouchableOpacity style={{ marginRight: 10, marginTop: 17 }}>
//              <Card>
//                  <Card.Content>
//                      <View
//                          style={{
//                              flexDirection: 'row',
//                              justifyContent: 'space-between',
//                              alignItems: 'center',
//                          }}>
//                          <Text>{item.name}</Text>
//                          <Avatar.Text label="J" />
//                      </View>
//                  </Card.Content>
//              </Card>
//          </TouchableOpacity>
//
//
//  */
//
//          /*
//          <View style={{ flex: 1 }}>
//          <Agenda
//              items={items}
//              loadItemsForMonth={loadItems}
//              selected={timeToString(Date.now())}
//              renderItem={renderItem}
//              theme={{
//                  todayTextColor: 'red',
//                  selectedDayBackgroundColor: 'lightblue',
//                  dotColor: 'blue',
//              }}
//          />
//      </View>
//          
//          */
//  
//  return (
//      <View style={{ flex: 1 }}>
//          <Agenda
//            // The list of items that have to be displayed in agenda. If you want to render item as empty date
//            // the value of date key has to be an empty array []. If there exists no value for date key it is
//            // considered that the date in question is not yet loaded
//            items={{
//            ['2024-05-28']: [{
//              name: 'item 1 - any js object',
//              height: 80,
//              day: '2024-05-28'
//            }],
//            ['2024-05-31']: [{
//              name: 'item 2 - any js object', height: 80,
//              day: '2024-05-31'
//            }],
//            '2024-05-26': [],
//            ['2024-05-30']: [{
//              name: 'item 3 - any js object',
//              height: 80,
//              day: '2024-05-30'
//            }, {
//              name: 'any js object',
//              height: 80,
//              day: '2024-05-30'
//            }]
//          }}
//
//         // enableSwipeMonths={true}
//         //disableScrollViewPanResponder={true}
//          
//          // Callback that gets called when items for a certain month should be loaded (month became visible)
//          //loadItemsForMonth={month => {
//          //  console.log('trigger items loading');
//          //}}
//          // Callback that fires when the calendar is opened or closed
//          onCalendarToggled={calendarOpened => {
//            console.log(calendarOpened);
//          }}
//          // Callback that gets called on day press
//          onDayPress={day => {
//            console.log('day pressed');
//          }}
//          // Callback that gets called when day changes while scrolling agenda list
//          //onDayChange={day => {
//          //  console.log('day changed');
//          //}}
//          // Initially selected day
//          //selected={['today']}
//          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
//          minDate={'2020-01-01'}
//          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
//          maxDate={'2027-05-30'}
//          // Max amount of months allowed to scroll to the past. Default = 50
//          pastScrollRange={5}
//          // Max amount of months allowed to scroll to the future. Default = 50
//          futureScrollRange={12}
//          // Specify how each item should be rendered in agenda
//          //renderItem={(item, firstItemInDay) => {
//          //  return <View />;
//          //}}
//          // Specify how each date should be rendered. day can be undefined if the item is not first in that day
//        //  renderDay={(day, item) => {
//        //    return <View />;
//        //  }}
//          // Specify how empty date content with no items should be rendered
//          //  renderEmptyDate={() => {
//          //    return <View />;
//          //  }}
//          //  // Specify how agenda knob should look like
//          
//          renderKnob={() => {
//            return <Entypo name='chevron-down' size={25}/>;
//          }}
//          // Specify what should be rendered instead of ActivityIndicator
//          //  renderEmptyData={() => {
//          //    return <View />;
//          //  }}
//          // Specify your item comparison function for increased performance
//          //rowHasChanged={(r1, r2) => {
//          //  return r1.text !== r2.text;
//          //}}
//          // Hide knob button. Default = false
//          //hideKnob={true}
//          // When `true` and `hideKnob` prop is `false`, the knob will always be visible and the user will be able to drag the knob up and close the calendar. Default = false
//          showClosingKnob={true}
//          // By default, agenda dates are marked if they have at least one item, but you can override this if needed
//          //markedDates={{
//          //  '2024-05-30': {selected: true, marked: true},
//          //  '2024-05-29': {marked: true},
//          //  '2024-05-31': {disabled: true}
//          //}}
//          // If disabledByDefault={true} dates flagged as not disabled will be enabled. Default = false
//          //disabledByDefault={true}
//          // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly
//          onRefresh={() => console.log('refreshing...')}
//          // Set this true while waiting for new data from a refresh
//          //refreshing={false}
//          // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView
//        //  refreshControl={null}
//
//        renderEmptyDate={renderEmptyDate}
//
//
//        //renderItem={renderItem}
//          // Agenda theme
//          theme={{
//            ...calendarTheme,
//            agendaDayTextColor: 'black',
//            agendaDayNumColor: 'green',
//            agendaTodayColor: 'red',
//            todayBackgroundColor: 'lightgrey',
//            
//
//          //calendarBackground: 'lightgrey',
//          //backgroundColor: 'red',
//          }}
//          // Agenda container style
//          style={{}}
//        />
//      </View>
//  );
//  };
//}
//  const styles = StyleSheet.create({
//    container: {
//      flex: 1,
//      alignItems: 'center',
//      justifyContent: 'center',
//    },
//    avatar: {
//      backgroundColor: "green",
//      color:'red',
//      textDecorationColor: "red",
//     // font
//    },
//    item: {
//      backgroundColor: "white",
//      flex: 1,
//      borderRadius: 5,
//      padding: 10,
//      marginRight: 10,
//      marginTop: 17,
//    },
//    emptyDate: {
//      height: 15,
//      flex: 1,
//      paddingTop: 30,
//    },
//  });
//  
//  //export default Schedule;