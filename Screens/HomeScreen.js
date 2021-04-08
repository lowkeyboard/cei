import React, { Component } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import {
  Item,
  Icon,
  Input,
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
} from "native-base";
import { FlatList } from "react-native-gesture-handler";

import _ from "lodash";

export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      fullData: [],
      loading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.requestAPIPhotos();
  }

  requestAPIPhotos = () => {
    this.setState({ loading: true });
    const apiURL = "https://jsonplaceholder.typicode.com/photos";
    fetch(apiURL)
      .then((res) => res.json())
      .then((resJson) => {
        this.setState({
          loading: false,
          data: resJson,
          fullData: resJson,
        });
      })
      .catch((error) => {
        this.setState({ error, loading: false });
      });
  };

  renderFooter = () => {
    if (!this.state.loading) return null;
    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE",
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  _renderItem = ({ item, index }) => {
    return (
      <ListItem avatar>
        <Left>
          <Thumbnail source={{ uri: item.thumbnailUrl }} />
        </Left>
        <Body>
          <Text>{item.title}</Text>
        </Body>
      </ListItem>
    );
  };

  handleSearch = (text) => {
    const formattedQuery = text.toLowerCase();
    const data = _.filter(this.state.fullData, (photo) => {
      if (photo.title.includes(formattedQuery)) {
        return true;
      }
      return false;
    });
    this.setState({ data, query: text });
  };

  render() {
    return (
      <Container style={styles.container}>
        <Header searchBar>
          <Item style={styles.searchColor}>
            <Icon name="ios-search" />
            <Input placeholder="Search" onChangeText={this.handleSearch} />
          </Item>
        </Header>
        <List>
          <FlatList
            data={this.state.data}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => index.toString()}
            ListFooterComponent={this.renderFooter}
          />
        </List>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    paddingTop: 30,
    backgroundColor: "#2e428e",
    borderColor: "#2e428e",
  },

  searchColor: {
    backgroundColor: "#FFFFFF",
    borderColor: "#2e428e",
  },
  /*
  HomeScreenStyles: {

  },

  listItem: {},*/
});

//https://wix.github.io/react-native-navigation/docs/functionalComponents/
/*     const apikey = "&apikey=ec1ede79";
    const url = "http://www.omdbapi.com/?s="; 
   */
