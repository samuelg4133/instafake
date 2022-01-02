import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HeaderLeftOptions, HeaderRightOptions } from "../components";

import { Config, Friends, Home } from "../screens";

const Stack = createNativeStackNavigator();

export function Routes(): JSX.Element {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Config"
        component={Config}
        options={{
          headerTitle: "Configurações",
        }}
      />
      <Stack.Screen
        name="Friends"
        component={Friends}
        options={{
          headerTitle: "Amigos",
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleAlign: "center",
          headerLeft: () => {
            return <HeaderLeftOptions />;
          },
          headerRight: () => {
            return <HeaderRightOptions />;
          },
        }}
      />
    </Stack.Navigator>
  );
}
