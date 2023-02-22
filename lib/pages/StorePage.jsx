import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import { defaultStyle } from '../styles/default';
import { useScoreValue, usePowerCount, useBuyPower, usePowerPriceValue, useSuperPowerCount, useSuperPowerPriceValue, useBuySuperPower, useTotalPower, useClickerCount, useClickerPriceValue, useBuyClicker } from "../providers/GameProvider";
import { useErrorValue } from "../providers/ErrorProvider";
import { APP_PRIMARY_COLOR } from '../styles/colors';
import { usePlayBuy } from '../providers/SoundProvider';
import { Divider } from "@react-native-material/core";

export const STORE_PAGE_CONSTS = {
  ROUTE_NAME: "Store",
  ICON_FOCUSED: "ios-cart",
  ICON_UNFOCUSED: "ios-cart-outline",
};

export function StorePage () {
  const score = useScoreValue();
  const powerCount = usePowerCount();
  const powerPrice = usePowerPriceValue();
  const buyPower = useBuyPower();
  const clickerCount = useClickerCount();
  const clickerPrice = useClickerPriceValue();
  const buyClicker = useBuyClicker();
  const superPowerCount = useSuperPowerCount();
  const superPowerPrice = useSuperPowerPriceValue();
  const buySuperPower = useBuySuperPower();
  const totalPower = useTotalPower();
  const error = useErrorValue();
  const playBuy = usePlayBuy();

  return (
    <View style={defaultStyle.background}>
      <Text>{error}</Text>
      <Text
      style={defaultStyle.h1}
      >Score : {score}</Text>
      <Divider 
      color={APP_PRIMARY_COLOR}
      />
      <Text
      style={defaultStyle.h2}
      >Total Power : {totalPower}</Text>
      <Divider
      color={APP_PRIMARY_COLOR}
      />
      <Text>Power : {powerCount}</Text>
      <Button
      title={`Buy power for ${powerPrice} points`}
      onPress={() => {
        let succes = buyPower();
        if (succes) playBuy();
      }}
      color = {APP_PRIMARY_COLOR}
      />
      <Divider 
      color={APP_PRIMARY_COLOR}
      />
      <Text>Auto clickers : {clickerCount}</Text>
      <Button
      title={`Buy Autoclicker for ${clickerPrice} points`}
      onPress={() => {
        let succes = buyClicker();
        if (succes) playBuy();
      }}
      color = {APP_PRIMARY_COLOR}
      />
      <Divider
      color={APP_PRIMARY_COLOR}
      />
      <Text>Super Power : {superPowerCount}</Text>
      <Button
      title={`Buy Super power for ${superPowerPrice} points`}
      onPress={() => {
        let succes = buySuperPower();
        if (succes) playBuy();
      }}
      color = {APP_PRIMARY_COLOR}
      />
      <StatusBar style="auto" />
    </View>
  );
}
