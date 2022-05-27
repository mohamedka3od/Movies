import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";
import { limitTextLength } from "../../utils";

const MovieCard = (item) => {
    return (
      <View style={styles.result}>
        <Text style={styles.heading} numberOfLines={2}>
          {limitTextLength(50, item.title)}
        </Text>
        <View style={styles.card}>
          <View style={styles.col}>
            <Image
              source={{
                uri: "https://image.tmdb.org/t/p/w500/" + item.poster_path,
              }}
              style={{
                width: "100%",
                height: 180,
              }}
              resizeMode="stretch"
            />
            <Text style={styles.date} numberOfLines={1}>
              {item.release_date}
            </Text>
          </View>
          <Text style={styles.desc}>{limitTextLength(170, item.overview)}</Text>
        </View>
      </View>
    );
  };
  
  export {MovieCard};