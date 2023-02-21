import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { HomePage, HOME_PAGE_CONSTS } from "../pages/HomePage";
import { StorePage, STORE_PAGE_CONSTS } from "../pages/StorePage";
import { SettingsPage, SETTINGS_PAGE_CONSTS } from "../pages/SettingsPage";

import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

const TAB_BAR_COLORS = {
    ACTIVE: "tomato",
    INACTIVE: "gray",
}

const PAGES = {
    Home: HOME_PAGE_CONSTS,
    Store: STORE_PAGE_CONSTS,
    Settings: SETTINGS_PAGE_CONSTS,
}

export function TabBar() {
    return (
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (focused) {
                    iconName = PAGES[route.name].ICON_FOCUSED;
                } else {
                    iconName = PAGES[route.name].ICON_UNFOCUSED;
                }
                return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: TAB_BAR_COLORS.ACTIVE,
                tabBarInactiveTintColor: TAB_BAR_COLORS.INACTIVE,
            })}
            >
            <Tab.Screen name={PAGES.Home.ROUTE_NAME} component={HomePage} />
            <Tab.Screen name={PAGES.Store.ROUTE_NAME} component={StorePage} />
            <Tab.Screen name={PAGES.Settings.ROUTE_NAME} component={SettingsPage} />
        </Tab.Navigator>
    </NavigationContainer>
    )
}