import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Image } from "react-native";

import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../types";
import CustomButton from "../components/CustomButton";
import users from "../assets/data/users.json";
import event from "../assets/data/event.json";

export default function ModalScreen({
  route,
  navigation,
}: RootStackScreenProps<"Modal">) {
  const id = route.params.id;
  console.log("Rendering event ", id);

  const onJoin = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{event.name}</Text>
      <Text style={styles.time}>
        <AntDesign name="calendar" size={24} color={"black"} />
        {"  | "}
        {new Date(event.date).toDateString()}
      </Text>

      <View style={styles.footer}>
        <Text style={styles.subtitle}>Attendees</Text>
        <View style={styles.users}>
          {users?.map((user, i) => (
            <Image
              source={{ uri: user.avatarUrl }}
              style={[
                styles.userAvatar,
                { transform: [{ translateX: -15 * i }] },
              ]}
              key={user.id}
            />
          ))}
          <View
            style={[
              styles.userAvatar,
              {
                transform: [{ translateX: -15 * users.length }],
              },
            ]}
          >
            <Text>+{users.length}</Text>
          </View>
        </View>

        <CustomButton text="Join the event" onPress={onJoin} />
      </View>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  time: {
    fontSize: 20,
  },
  footer: {
    marginTop: "auto",
  },
  users: {
    flexDirection: "row",
    marginVertical: 10,
  },
  userAvatar: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 30,
    margin: 2,
    borderColor: "white",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gainsboro",
  },
});