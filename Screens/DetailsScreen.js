import React, { useEffect } from "react";
import { Button, View, Text, StyleSheet } from "react-native";

const DetailsScreen = ({ navigation, route }) => {
  const movie = route.params.movie;
  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "http://www.omdbapi.com/?apikey=ec1ede79&t=Star+Wars&y=1977"
    );
    xhr.send();

    console.log(xhr.responseText);
  }, []);
};

return <View style={style.mainView}></View>;
