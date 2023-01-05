import styled from "@emotion/native";
import { SCREEN_HEIGHT } from "./utility";
import { StyleSheet } from "react-native";
import { WHITE_COLOR } from "../colors";

const BackgroundImg = styled.ImageBackground`
  height: ${SCREEN_HEIGHT / 3 + "px"};
  flex: 1;
  position: relative;
`;

const Description = styled.View`
  position: "absolute";
  left: 50%;
  width: 200px;
  top: 30%;
  height: 100px;
`;

const MainText = styled.Text({
  color: "white",
  fontSize: 15,
  fontWeight: "bold",
});

const SubText = styled.Text({
  color: "white",
});

const Article = styled.Text({
  color: "white",
  fontSize: 12,
});

const SwiperChildView = styled.View`
  height: ${SCREEN_HEIGHT / 3 + "px"};
`;

const SmallMainImg = styled.Image`
  position: absolute;
  width: 130px;
  height: 170px;
  bottom: 0;
`;

const SecondContainer = styled.View`
  flex-direction: row;
`;
//######TR구역

const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TRcontainer = styled.View`
  width: 150px;
  height: 50px;
  background-color: "#F0ECCF";
`;

const TRtext = styled.Text({
  // backgroundColor: "#F0ECCF",
  // // ...StyleSheet.absoulteFill,
  // position: "absolute",
  // width: 150,
  // height: 50,
  color: "white",
});
const TRvote = styled.Text({
  color: "white",
});

const CUcontainer = styled.View`
  width: 240px;
`;
const CUtext = styled.Text({});

const CUarticle = styled.Text({});
const CUdate = styled.Text({});

const ListTitle = styled.View``;

export {
  BackgroundImg,
  SwiperChildView,
  MainText,
  SmallMainImg,
  SecondContainer,
  SubText,
  Description,
  Article,
  TRtext,
  TRvote,
  TRcontainer,
  CUcontainer,
  CUtext,
  CUarticle,
  CUdate,
  ListTitle,
  Loader,
};
