import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import { defaultStyle } from '../styles/default';
import { useReset } from "../providers/GameProvider";

export const SETTINGS_PAGE_CONSTS = {
    ROUTE_NAME: "Settings",
    ICON_FOCUSED: "ios-settings",
    ICON_UNFOCUSED: "ios-settings-outline",
};


export function SettingsPage () {
    const resetGame = useReset();
  return (
    <View style={defaultStyle.container}>
        <Text>Settings</Text>
        <Button
            title="Reset Game"
            onPress={() => resetGame()}
        />
      <StatusBar style="auto"/>
    </View>
  );
}
