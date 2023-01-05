import React, { useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  View,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import Swiper from "react-native-swiper";
import Vcard from "../componenets/Vcard";

import Slide from "../componenets/Slide";
import { ListTitle, Loader } from "./style";

import Hcard from "../componenets/Hcard";

function Movies({ navigation: { navigate } }) {
  const [nowPlayings, setnowPlayings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [topRateds, setTopRateds] = useState([]);
  const [upcomings, setUpcomings] = useState([]);
  const [isRefreshing, SetIsRefreshing] = useState(false); //기본값 false
  const BASE_URL = "https://api.themoviedb.org/3/movie";
  const API_KEY = "992e6365d0d873f470336221c75673c6";

  const getNowPlayings = async () => {
    const { results } = await fetch(
      `${BASE_URL}/now_playing?api_key=${API_KEY}&language=en-US&page=1`
    ).then((item) => item.json());
    setnowPlayings(results);
  };

  const getTopRated = async () => {
    const { results } = await fetch(
      `${BASE_URL}/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    ).then((item) => item.json());
    setTopRateds(results);
  };

  const getUpcoming = async () => {
    const { results } = await fetch(
      `${BASE_URL}/upcoming?api_key=${API_KEY}&language=en-US&page=1`
    ).then((item) => item.json());

    setUpcomings(results);
  };

  // ::위의 3가지 호출 함수가 다 실행되야 html구조를 뿌릴 수 있도록 하는 코드
  const getData = async () => {
    ListTitle;
    await Promise.all([getNowPlayings(), getTopRated(), getUpcoming()]);
    console.log("isloading중: ", isLoading);
    setIsLoading(false); //loading을 끝낸다.
  };

  //모든 데이터를 리프레쉬하면 다시 가져옴
  const onRefresh = async () => {
    SetIsRefreshing(true);
    await getData();
    SetIsRefreshing(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return (
      <Loader>
        <ActivityIndicator />
      </Loader>
    );
  }

  // refreshing: 지금 리프레싱중인지 아닌지
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
      }
    >
      <Swiper height="100%" showsPagination={false} loop>
        {/* 이미지 가지고 있는 container역할 박스입니다. */}
        {nowPlayings.map((movie) => {
          return <Slide key={movie.id} movie={movie} />;
        })}
      </Swiper>

      {/* 여기부터 가로 스크롤 들어갑니다. */}
      <View>
        <Text
          style={{
            fontSize: 30,
            color: "#FFB100",
            fontWeight: "bold",
            marginVertical: 10,
          }}
        >
          Top Rated Movie
        </Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={{ paddingHorizontal: 20 }}
      >
        {topRateds.map((movie) => (
          <Vcard key={movie.id} movie={movie}></Vcard>
        ))}
      </ScrollView>
      <View>
        <Text
          style={{
            fontSize: 30,
            color: "#FFB100",
            fontWeight: "bold",
            marginVertical: 20,
          }}
        >
          Upcoming Movies
        </Text>
      </View>

      <ListTitle>
        {upcomings.map((movie) => (
          <Hcard key={movie.id} movie={movie}></Hcard>
        ))}
      </ListTitle>
    </ScrollView>
  );
}

export default Movies;
{
  /* <Text>Movies</Text>
        <TouchableOpacity
          onPress={() => {
            navigate("Stacks", { screen: "one", params: { id: 123 } });
          }}
        >
          <Text>Go To One Screen</Text>
        </TouchableOpacity> */
}
