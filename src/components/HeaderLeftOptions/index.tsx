import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TouchableWithoutFeedback } from "react-native";
import { StackList } from "../../screens/Stack";

type ScreenProps = NativeStackNavigationProp<StackList, "Home">;

export function HeaderLeftOptions(): JSX.Element {
  const navigation = useNavigation<ScreenProps>();

  const onOpenFriends = () => {
    navigation.navigate("Friends");
  };

  return (
    <TouchableWithoutFeedback onPress={onOpenFriends}>
      <FontAwesome name="users" size={24} />
    </TouchableWithoutFeedback>
  );
}
