import { StatusBar } from "expo-status-bar";
import { Text, View, Button } from "react-native";
import { defaultStyle } from "../styles/default";
import { useGameState, useGameDispatch } from "../providers/GameProvider";
import { useErrorValue } from "../providers/ErrorProvider";
import { APP_PRIMARY_COLOR } from "../styles/colors";
import { Divider } from "@react-native-material/core";

export const STORE_PAGE_CONSTS = {
  ROUTE_NAME: "Store",
  ICON_FOCUSED: "ios-cart",
  ICON_UNFOCUSED: "ios-cart-outline",
};

export function StorePage() {
  const gameState = useGameState();
  const dispatch = useGameDispatch();

  const error = useErrorValue();

  return (
    <View style={defaultStyle.background}>
      <Text>{error}</Text>
      <Text style={defaultStyle.h1}>Score : {gameState.score}</Text>
      <Divider color={APP_PRIMARY_COLOR} />
      <Text style={defaultStyle.h2}>Total Power : {gameState.totalPower}</Text>
      <Divider color={APP_PRIMARY_COLOR} />
      <Text>Power : {gameState.powerCount}</Text>
      <Button
        title={`Buy power for ${gameState.powerPrice} points`}
        onPress={() => {
          dispatch("buyPower");
        }}
        color={APP_PRIMARY_COLOR}
      />
      <Divider color={APP_PRIMARY_COLOR} />
      <Text>Auto clickers : {gameState.clickerCount}</Text>
      <Button
        title={`Buy Autoclicker for ${gameState.clickerPrice} points`}
        onPress={() => {
          dispatch("buyAutoClicker");
        }}
        color={APP_PRIMARY_COLOR}
      />
      <Divider color={APP_PRIMARY_COLOR} />
      <Text>Super Power : {gameState.superPowerCount}</Text>
      <Button
        title={`Buy Super power for ${gameState.superPowerPrice} points`}
        onPress={() => {
          dispatch("buySuperPower");
        }}
        color={APP_PRIMARY_COLOR}
      />
      <StatusBar style="auto" />
    </View>
  );
}
