import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TouchableHighlight} from 'react-native';
import { defaultStyle } from '../styles/default';
import { useIncrementScore, useScoreValue, usePowerCount, useBuyPower, usePowerPriceValue, useTotalPower } from "../providers/GameProvider";
import { useErrorValue } from "../providers/ErrorProvider";
import { usePlayClick } from '../providers/SoundProvider';

export const HOME_PAGE_CONSTS = {
  ROUTE_NAME: "Home",
  ICON_FOCUSED: "ios-home",
  ICON_UNFOCUSED: "ios-home-outline",
};

export function HomePage () {
  const score = useScoreValue();
  const totalPower = useTotalPower();
  const incrementScore = useIncrementScore();
  const error = useErrorValue();
  const playClick = usePlayClick();

  return (
    <View style={defaultStyle.background}>
      <Text>{error}</Text>
      <TouchableHighlight
        onPress={() => {
          incrementScore();
          playClick();
        }}
        style= {defaultStyle.touchZone}
      >
        <View
        style= {defaultStyle.touchZoneView}
        >
          <Text
          style={defaultStyle.h1}
          >Score : {score}</Text>
          <Text
          style= {defaultStyle.h2}
          >Add {totalPower}</Text>
        </View>

      </TouchableHighlight>
      <StatusBar style="auto" />
    </View>
  );
}
