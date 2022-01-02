import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TouchableWithoutFeedback } from "react-native";
import { StackList } from "../../screens/Stack";

type ScreenProps = NativeStackNavigationProp<StackList, "Home">;

export function HeaderRightOptions(): JSX.Element {
  const navigation = useNavigation<ScreenProps>();

  const onOpenConfig = () => {
    navigation.navigate("Config");
  };

  return (
    <TouchableWithoutFeedback onPress={onOpenConfig}>
      <FontAwesome name="cog" size={24} />
    </TouchableWithoutFeedback>
  );
}
