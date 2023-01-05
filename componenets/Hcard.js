import React from "react";
import { View, Image } from "react-native";
import { CUarticle, CUtext, CUcontainer, CUdate } from "../screen/style";
import { getImgPath } from "../screen/utility";

function Hcard({ movie }) {
  return (
    <View style={{ flexDirection: "row", marginBottom: 20 }}>
      <Image
        style={{ width: 130, height: 250 }}
        source={{
          uri: getImgPath(movie.poster_path),
        }}
      />
      <CUcontainer style={{ marginLeft: 10 }}>
        <CUtext style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          {movie.title}
        </CUtext>
        <CUdate style={{ color: "white" }}>{movie.release_date}</CUdate>
        <CUarticle style={{ color: "white", fontWeight: "bold" }}>
          {movie.overview.slice(0, 70)}
          {movie.overview.length > 70 && "..."}
        </CUarticle>
      </CUcontainer>
    </View>
  );
}

export default Hcard;
