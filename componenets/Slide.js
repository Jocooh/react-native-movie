import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SwiperChildView } from "../screen/style";
import { StyleSheet } from "react-native";
import { getImgPath } from "../screen/utility";
import {
  BackgroundImg,
  MainText,
  SmallMainImg,
  SecondContainer,
  SubText,
  Description,
  Article,
} from "../screen/style";

function Slide({ movie }) {
  return (
    <SwiperChildView>
      <BackgroundImg
        style={StyleSheet.absoluteFill}
        source={{
          uri: getImgPath(movie.backdrop_path),
        }}
      ></BackgroundImg>

      <LinearGradient
        colors={["transparent", "#333"]}
        style={StyleSheet.absoluteFill}
      />
      <SecondContainer style={StyleSheet.absoluteFill}>
        <SmallMainImg
          source={{
            uri: getImgPath(movie.poster_path),
          }}
        ></SmallMainImg>
        <Description>
          <MainText>{movie.title}</MainText>
          <SubText>{movie.vote_average}</SubText>
          <Article>{movie.overview}</Article>
        </Description>
      </SecondContainer>
    </SwiperChildView>
  );
}

export default Slide;
