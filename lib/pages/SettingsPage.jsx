import { StatusBar } from "expo-status-bar";
import { Text, View, Button, Alert } from "react-native";
import { defaultStyle } from "../styles/default";
import { APP_PRIMARY_COLOR } from "../styles/colors";
import { useGameDispatch } from "../providers/GameProvider";

export const SETTINGS_PAGE_CONSTS = {
  ROUTE_NAME: "Settings",
  ICON_FOCUSED: "ios-settings",
  ICON_UNFOCUSED: "ios-settings-outline",
};

export function SettingsPage() {
  const dispatch = useGameDispatch();
  const confirmReset = () => {
    Alert.alert(
      "Reset Game",
      "Are you sure you want to reset the game?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Reset Game", onPress: () => dispatch("reset") },
      ],
      { cancelable: false },
    );
  };
  return (
    <View style={defaultStyle.background}>
      <Text>Settings</Text>
      <Button title="Reset Game" onPress={() => confirmReset()} style={defaultStyle.button} color={APP_PRIMARY_COLOR} />
      <StatusBar style="auto" />
    </View>
  );
}
