import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Welcome, Properties, PropertyDetails, ThreeDView } from "screens";

export type AuthStackNavParams = {
  Welcome: undefined;
  Properties: undefined;
  "Property Details": { id: number };
  "ThreeDView": undefined;
};

const Stack = createNativeStackNavigator<AuthStackNavParams>();

const AuthStackNav: FC = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Properties"
          component={Properties}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Property Details"
          component={PropertyDetails}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ThreeDView"
          component={ThreeDView}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
};

export default AuthStackNav;
