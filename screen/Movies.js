import React, { useEffect, useState } from "react";
import { ScrollView, Text, View, Image, ActivityIndicator } from "react-native";

import Swiper from "react-native-swiper";

import Slide from "../componenets/Slide";

function Movies({ navigation: { navigate } }) {
  const [nowPlayings, setnowPlayings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [topRateds, setTopRateds] = useState([]);
  const [upcomings, setUpcomings] = useState([]);
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
      `${BASE_URL}/top_rated?upcoming?api_key=${API_KEY}&language=en-US&page=1`
    ).then((item) => item.json());
    setUpcomings(results);
  };

  // ::위의 3가지 호출 함수가 다 실행되야 html구조를 뿌릴 수 있도록 하는 코드
  const getData = async () => {
    await Promise.all([getNowPlayings(), getTopRated(), getUpcoming()]);
    setIsLoading(false); //loading을 끝낸다.
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <ScrollView>
      <Swiper height="100%" showsPagination={false} loop>
        {/* 이미지 가지고 있는 container역할 박스입니다. */}
        {nowPlayings.map((movie) => {
          return <Slide key={movie.key} movie={movie} />;
        })}
      </Swiper>

      {/* 여기부터 가로 스크롤 들어갑니다. */}
      <View>
        <Text style={{ fontSize: 30, color: "#FFB100", fontWeight: "bold" }}>
          Top Rated Movies
        </Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
        <View style={{ marginRight: 20 }}>
          <Image
            style={{ width: 150, height: 250 }}
            source={{
              uri: "https://i.pinimg.com/564x/0a/41/06/0a410633a9f4c34f138f692723f384e0.jpg",
            }}
          />
          <Text style={{ backgroundColor: "#F0ECCF" }}>스크롤 1</Text>
        </View>
        <View style={{ marginRight: 20 }}>
          <Image
            style={{ width: 150, height: 250 }}
            source={{
              uri: "https://i.pinimg.com/564x/0a/41/06/0a410633a9f4c34f138f692723f384e0.jpg",
            }}
          />
          <Text style={{ backgroundColor: "#F0ECCF" }}>스크롤2</Text>
        </View>
        <View style={{ marginRight: 20 }}>
          <Image
            style={{ width: 150, height: 250 }}
            source={{
              uri: "https://i.pinimg.com/564x/0a/41/06/0a410633a9f4c34f138f692723f384e0.jpg",
            }}
          />
          <Text style={{ backgroundColor: "#F0ECCF" }}>스크롤3</Text>
        </View>
      </ScrollView>
      <View style={{ borderBottom: "white" }}>
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
      <View style={{ flexDirection: "row", marginBottom: 20 }}>
        <Image
          style={{ width: 130, height: 250 }}
          source={{
            uri: "https://cdn.jjalbot.com/2018/12/0LHBm0AFB/zzal.jpg",
          }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            중요한건 꺾이지 않는 마음
          </Text>
          <Text style={{ color: "white" }}>2023-01-03</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginBottom: 20 }}>
        <Image
          style={{ width: 130, height: 250 }}
          source={{
            uri: "https://cdn.jjalbot.com/2018/12/0LHBm0AFB/zzal.jpg",
          }}
        />
        <View style={{ marginLeft: 10, marginBottom: 20 }}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            중요한건 꺾이지 않는 마음
          </Text>
          <Text style={{ color: "white" }}>2023-01-03</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{ width: 130, height: 250 }}
          source={{
            uri: "https://cdn.jjalbot.com/2018/12/0LHBm0AFB/zzal.jpg",
          }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            중요한건 꺾이지 않는 마음
          </Text>
          <Text style={{ color: "white" }}>2023-01-03</Text>
        </View>
      </View>
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
