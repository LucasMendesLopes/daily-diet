import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Meal } from "@screens";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="home" component={Home} />
            <Screen name="meal" component={Meal} />
        </Navigator>
    )
}