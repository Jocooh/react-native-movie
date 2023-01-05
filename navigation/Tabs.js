import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screen/Movies";
import My from "../screen/My";
import { MaterialIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { DARK_COLOR } from "../colors";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      //   sceneContainerStyle={{ backgroundColor: "green" }}
      screenOptions={{
        tabBarLabelPosition: "beside-icon",
        // headerStyle: { backgroundColor: DARK_COLOR },
        // tabBarStyle: { backgroundColor: DARK_COLOR },
      }}
      initialRouteName="Movies"
      sceneContainerStyle={{ backgroundColor: DARK_COLOR }} //페이지의 배경색깔
    >
      <Tab.Screen
        options={{
          title: "Movies",
          tabBarLabel: "Movies",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="local-movies" size={size} color={color} />
          ),
        }}
        name="Movies"
        component={Movies}
      />
      <Tab.Screen
        options={{
          title: "내가 작성한 댓글",
          //   tabBarBadge:"", : 알람 숫자 같은거
          tabBarIcon: ({ color, size }) => (
            <Foundation name="social-myspace" size={size} color={color} />
          ),
        }}
        name="My"
        component={My}
      />
    </Tab.Navigator>
  );
}
