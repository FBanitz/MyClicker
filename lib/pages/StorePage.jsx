import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import { defaultStyle } from '../styles/default';
import { useScoreValue, usePowerValue, useBuyPower, usePowerPriceValue } from "../providers/GameProvider";
import { useErrorValue } from "../providers/ErrorProvider";

export const STORE_PAGE_CONSTS = {
  ROUTE_NAME: "Store",
  ICON_FOCUSED: "ios-cart",
  ICON_UNFOCUSED: "ios-cart-outline",
};

export function StorePage () {
  const score = useScoreValue();
  const power = usePowerValue();
  const powerPrice = usePowerPriceValue();
  const buyPower = useBuyPower();
  const error = useErrorValue();

  return (
    <View style={defaultStyle.container}>
      <Text>{error}</Text>
      <Text>Score : {score}</Text>
      <Text>Power : {power}</Text>
      <Button
      title={`Buy power for ${powerPrice} points`}
      onPress={() => buyPower()}
      />
      <StatusBar style="auto" />
    </View>
  );
}
