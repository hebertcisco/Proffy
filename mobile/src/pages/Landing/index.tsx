import { Image, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import { RectButton } from "react-native-gesture-handler";
import api from "../../services/api";
import giveClassesIcon from "../../assets/images/icons/give-classes.png";
import heartIcon from "../../assets/images/icons/heart.png";
import landingImg from "../../assets/images/landing.png";
import studyIcon from "../../assets/images/icons/study.png";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

function Landing() {
  const { navigate } = useNavigation();

  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get("connections").then((response) => {
      const { total } = response.data;

      setTotalConnections(total);
    });
  }, []);

  function handleNavigationToGiveClassesPage() {
    navigate("GiveClasses");
  }

  function handleNavigationToStudyPages() {
    navigate("Study");
  }

  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />

      <Text style={styles.title}>
        Be welcome, {"\n"}
        <Text style={styles.titleBold}>What do you want to do?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton
          onPress={handleNavigationToStudyPages}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>To study</Text>
        </RectButton>

        <RectButton
          onPress={handleNavigationToGiveClassesPage}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>Give classes</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnection}>
        Total of {totalConnections} connections already made{" "}
        <Image source={heartIcon} />
      </Text>
    </View>
  );
}

export default Landing;
