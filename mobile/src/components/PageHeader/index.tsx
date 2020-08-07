import { Image, Text, View } from "react-native";
import React, { ReactNode } from "react";

import { BorderlessButton } from "react-native-gesture-handler";
import backIcon from "../../assets/images/icons/back.png";
import logoImg from "../../assets/images/logo.png";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

interface PageHeaderProps {
  title: string;
  headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  children,
  headerRight,
}) => {
  const { navigate } = useNavigation();

  function handlerGoBack() {
    navigate("Landing");
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handlerGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>

        <Image source={logoImg} resizeMode="contain" />
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {headerRight}
      </View>

      {children}
    </View>
  );
};

export default PageHeader;
