import { Text, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
// navigation 구조분해할당을 이용함
const One = ({ route: { params }, navigation: { navigate } }) => {
  console.log(params);
  return (
    <TouchableOpacity onPress={() => navigate("two")}>
      <Text>One</Text>
    </TouchableOpacity>
  );
};
const Two = ({ navigation: { navigate, setOptions } }) => {
  return (
    <>
      <TouchableOpacity onPress={() => navigate("three")}>
        <Text>Two</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          setOptions({
            title: "변경된 제목",
          })
        }
      >
        <Text>Set Options</Text>
      </TouchableOpacity>
    </>
  );
};
const Three = ({ navigation: { goBack, reset } }) => {
  return (
    <>
      <TouchableOpacity onPress={() => goBack()}>
        <Text>Three</Text>
      </TouchableOpacity>
      {/* //reset은 객체를 인자로 받는다.index , routes[배열]가 있다. */}
      <TouchableOpacity
        onPress={() =>
          reset({ index: 1, routes: [{ name: "three" }, { name: "two" }] })
        }
      >
        <Text>reset Navigation</Text>
      </TouchableOpacity>
    </>
  );
};

export default function Stacks() {
  return (
    <Stack.Navigator initialRouteName="three">
      <Stack.Screen name="one" component={One}></Stack.Screen>
      <Stack.Screen name="two" component={Two}></Stack.Screen>
      <Stack.Screen
        options={{ presentation: "modal" }}
        name="three"
        component={Three}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
