import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import { defaultStyle } from '../styles/default';
import { useIncrementScore, useScoreValue, usePowerValue, useBuyPower, usePowerPriceValue } from "../providers/GameProvider";
import { useErrorValue } from "../providers/ErrorProvider";

export const HOME_PAGE_CONSTS = {
  ROUTE_NAME: "Home",
  ICON_FOCUSED: "ios-home",
  ICON_UNFOCUSED: "ios-home-outline",
};

export function HomePage () {
  const score = useScoreValue();
  const power = usePowerValue();
  const powerPrice = usePowerPriceValue();
  const incrementScore = useIncrementScore();
  const buyPower = useBuyPower();
  const error = useErrorValue();

  return (
    <View style={defaultStyle.container}>
      <Text>{error}</Text>
      <Text>Score : {score}</Text>
      <Button 
      title={`Add ${power}`} 
      onPress={() => incrementScore() } 
      />
      <StatusBar style="auto" />
    </View>
  );
}
