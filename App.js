import { NavigationContainer } from "@react-navigation/native";
import { TabBar } from "./lib/navigation/TabBar";
import { SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GameProvider } from "./lib/providers/GameProvider";
import { ErrorProvider } from "./lib/providers/ErrorProvider";
import { SoundProvider } from "./lib/providers/SoundProvider";

export default function App() {
  return (
    <SoundProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <ErrorProvider>
            <GameProvider>
              <TabBar />
            </GameProvider>
          </ErrorProvider>
        </SafeAreaView>
      </SafeAreaProvider>
    </SoundProvider>
  );
}
