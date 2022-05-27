import React, { useEffect, useState } from "react";
import styles from "./styles";
import { Text, FlatList ,View} from "react-native";
import { MovieCard } from "../../components/MovieCard";
import { MyActivityIndicator } from "../../components/MyIndecator";
const Home = () => {
  const apiUrl =
    "http://api.themoviedb.org/3/discover/movie?api_key=acea91d2bff1c53e6604e4985b6989e2&page=";
  const [data, setData] = useState([]);
  const [pageNumber, setPageNum] = useState(1);

  useEffect(() => {
    fetch(apiUrl + pageNumber)
      .then((response) => response.json())
      .then((json) => setData(data ? [...data, ...json.results] : json.results))
      .catch((error) => console.error(error));
  }, [pageNumber]);
  let stopFeachMore = true;
  const handelOnEndReached = () => {
    if (!stopFeachMore) {
      setPageNum((prev) => prev + 1);
      stopFeachMore = true;
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movies</Text>
      <FlatList
        data={data}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => MovieCard(item)}
        initialNumToRender={5}
        onEndReached={handelOnEndReached}
        onEndReachedThreshold={0.5}
        onScrollBeginDrag={() => {
          stopFeachMore = false;
        }}
        ListFooterComponent={MyActivityIndicator}
      />
    </View>
  );
};

export default Home;
