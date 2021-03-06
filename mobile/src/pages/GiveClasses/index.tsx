import { ImageBackground, Text, View } from "react-native";

import GiveClassesBgImages from "../../assets/images/give-classes-background.png";
import React from "react";
import { RectButton } from "react-native-gesture-handler";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

function GiveClasses() {
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={GiveClassesBgImages}
        style={styles.content}
      >
        <Text style={styles.title}>Want to be a Proffy?</Text>
        <Text style={styles.description}>
          To start, you need to register as a teacher in our web platform.
        </Text>
      </ImageBackground>

      <RectButton onPress={handleNavigateBack} style={styles.okButton}>
        <Text style={styles.okButtonText}>Okay</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;
