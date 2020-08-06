import GiveClasses from "../pages/GiveClasses";
import Landing from "../pages/Landing";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import StudyTabs from "./StudyTabs";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Landing" component={Landing} />
        <Screen name="GiveClasses" component={GiveClasses} />
        <Screen name="Study" component={StudyTabs} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
