import { Dimensions } from "react-native";

//스크린의 세로와 가로 길이를 지정 해 줄 수 있다.
export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get("window");

export const getImgPath = (path) => {
  return `https://image.tmdb.org/t/p/w500${path}`;
};
