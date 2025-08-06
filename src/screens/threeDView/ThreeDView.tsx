import React, { FC } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Platform,
  useWindowDimensions,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { AuthStackNavParams } from "navigation/auth-stack/AuthStackNav";
import GlbViewerView from "../../../modules/glb-viewer/src/GlbViewerView";
// import { Button } from "components/Button";
import styles from "./ThreeDView.styles";

export const scenes = [
  {
    path: "models/house1.glb",
    mainColor: "#c0ffe1",
    name: "Modern Villa with Pool",
    description:
      "A modern urban house with sleek design and efficient use of space, perfect for city living.",
    targetProfitability: 10.3,
    roi: 7.2,
    valuation: "425 ETH",
  },
];

const ThreeDView: FC<
  NativeStackScreenProps<AuthStackNavParams, "ThreeDView">
> = ({ navigation }) => {
  const { width, height } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.bigText}>GoldenCity</Text>

        <GlbViewerView
          animation={Platform.OS === "android" ? "0" : "Animation"}
          style={{ width, height }}
        />

        {/* 
        <Button
          title="Go To Properties"
          onPress={() => navigation.navigate("Properties")}
        /> */}
      </View>
    </SafeAreaView>
  );
};

export default ThreeDView;
