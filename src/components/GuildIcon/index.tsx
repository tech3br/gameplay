import React from "react";
import { Image, Text } from "react-native";

import { styles } from "./styles";

export function GuildIcon() {
  const uri =
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Ficons8.com.br%2Ficon%2Fi8BEpwdORP90%2Flogo-discord&psig=AOvVaw17cZ-yEabdrNa3H2_HYBQ4&ust=1625463635201000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCNCD2ofayPECFQAAAAAdAAAAABAJ";
  return <Image source={{ uri }} style={styles.image} resizeMode="cover" />;
}
