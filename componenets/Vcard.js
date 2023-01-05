import React from "react";
import { View, Image } from "react-native";
import { TRcontainer, TRvote, TRtext } from "../screen/style";
import { getImgPath } from "../screen/utility";
function Vcard({ movie }) {
  return (
    <View>
      <Image
        style={{ width: 130, height: 200 }}
        source={{
          uri: getImgPath(movie.poster_path),
        }}
      />
      <TRcontainer>
        <TRvote> {movie.vote_average}</TRvote>
        <TRtext>{movie.title}</TRtext>
      </TRcontainer>
    </View>
  );
}

export default Vcard;
