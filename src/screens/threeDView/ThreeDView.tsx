import React, { FC } from "react";
import { Text, View, SafeAreaView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { AuthStackNavParams } from "navigation/auth-stack/AuthStackNav";
import { Button } from "components/Button";
import styles from "./ThreeDView.styles";

const ThreeDView: FC<
  NativeStackScreenProps<AuthStackNavParams, "ThreeDView">
> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.bigText}>Welcome</Text>

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
