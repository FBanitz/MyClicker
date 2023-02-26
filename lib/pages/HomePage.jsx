import { StatusBar } from "expo-status-bar";
import { Text, View, Button, TouchableHighlight } from "react-native";
import { defaultStyle } from "../styles/default";
import { useGameState, useGameDispatch } from "../providers/GameProvider";
import { useErrorValue } from "../providers/ErrorProvider";
import { usePlaySound } from "../providers/SoundProvider";

export const HOME_PAGE_CONSTS = {
  ROUTE_NAME: "Home",
  ICON_FOCUSED: "ios-home",
  ICON_UNFOCUSED: "ios-home-outline",
};

export function HomePage() {
  const gameState = useGameState();
  const dispatch = useGameDispatch();
  const error = useErrorValue();
  const playSound = usePlaySound();
  
  return (
    <View style={defaultStyle.background}>
      <Text>{error}</Text>
      <TouchableHighlight
        onPress={() => {
          dispatch("incrementScore");
          playSound("click")
        }}
        style={defaultStyle.touchZone}
      >
        <View style={defaultStyle.touchZoneView}>
          <Text style={defaultStyle.h1}>Score : {gameState.score}</Text>
          <Text style={defaultStyle.h2}>Add {gameState.totalPower}</Text>
        </View>
      </TouchableHighlight>
      <StatusBar style="auto" />
    </View>
  );
}
