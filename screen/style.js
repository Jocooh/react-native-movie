import styled from "@emotion/native";
import { SCREEN_HEIGHT } from "./utility";

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

export {
  BackgroundImg,
  SwiperChildView,
  MainText,
  SmallMainImg,
  SecondContainer,
  SubText,
  Description,
  Article,
};
