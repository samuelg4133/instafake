import { NavigationContainer } from "@react-navigation/native";
import { ProfileProvider } from "./src/hooks/contexts/profile";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <ProfileProvider>
        <Routes />
      </ProfileProvider>
    </NavigationContainer>
  );
}
